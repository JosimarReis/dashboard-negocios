import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produtosActions } from "../../_store/_actions";
import { history } from '../../_helpers';

import Produto from './produto'
import {
  Alert, Card, CardBody, CardHeader, Col, Row
} from 'reactstrap';
import FormFiltros from './FormFiltros';
import FormProduto from './FormProduto'

class Produtos extends Component {
  componentDidMount() {
    this.props.onLoadProdutos({ pagina: 1, limit: 30 })
  }
  submit = values => {
    this.props.onSetFiltros(values)
    //    this.props.onLoadProdutos(this.props.produto.filtros)

  }

  mudarPagina = (pagina) => {
    this.props.onLoadProdutos({ pagina })
    //this.props.onSetFiltros({pagina})
  }

  alterarSituacaoProduto = (produto, situacao) => {
    produto.situacao = situacao
    this.props.onAlterarProduto(produto);
  }
  formProduto = (produto) => {
    this.props.onPopularForm(produto)
    if (!this.props.produtos.produtoShowForm)
      this.props.onShowForm()
  }
  alterarProduto = (values) => {
    if (this.props.produtos.produto)
      this.props.onAlterarProduto(values);

    if (this.props.produtos.produtoShowForm)
      this.props.onShowForm()

      history.push('/produtos')
  }

  render() {
    const { produtos } = this.props
    const { loading, produtoShowForm } = produtos

    const initialForm = {
      listar: 'todos',
      categorias: ['todos'],
      marcas: ['todos'],
      limit: 30,
      order: 'asc',
      pagina: 1
    }
    //    this.props.onSetFiltros(initialForm)
    console.log(produtos)
    return (

      < div className="animated fadeIn" >
        <FormProduto
          show={produtoShowForm}
          initialValues={produtos.produto}
          onCancel={this.props.onShowForm}
          onSubmit={this.alterarProduto}
        />
        {!produtoShowForm &&
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">Produtos</strong>

                </CardHeader>
                <CardBody>
                  <FormFiltros onSubmit={this.submit} initialValues={initialForm}
                    page={produtos.page}
                    pages={produtos.pages}
                    mudarPagina={this.mudarPagina}

                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        }
        {!produtoShowForm &&

          <Row>
            {loading ? 'carregando...' : ''}

            {produtos.docs &&
              produtos.docs.map((produto, index) => <Produto produto={produto}
                alterarProduto={this.alterarSituacaoProduto}
                formProduto={this.formProduto}
                key={produto._id} />)
            }
            {produtos.docs && <Alert color="info" xs="12">
              Nenhum produto foi encontrado. Tente outro filtro!</Alert>
            }
          </Row>
        }

      </div >
    )
  }
}

//export default Usuarios;

function mapStateToProps(state) {
  const { produtos } = state;
  return {
    produtos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadProdutos: (filtros) => dispatch(produtosActions.getProdutos(filtros)),
    onSetFiltros: (filtros) => dispatch(produtosActions.setFiltros(filtros)),
    onAlterarProduto: (produto) => dispatch(produtosActions.produtoUpdate(produto)),
    onShowForm: () => dispatch(produtosActions.showForm()),
    onPopularForm: (produto) => dispatch(produtosActions.popularForm(produto))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Produtos);