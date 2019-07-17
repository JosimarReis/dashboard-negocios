import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produtosActions } from "../../_store/_actions";

import Produto from './produto'
import {
  Alert, Card, CardBody, CardHeader, Col, Row
} from 'reactstrap';
import FormFiltros from './FormFiltros';
import FormProduto from './FormProduto'
import FormImage from './FormImage';

class Produtos extends Component {
  componentDidMount() {
    let filtroInicial = {
      listar: 'todos',
      situacao: 'todos',
      grupos: ['todos'],
      marcas: ['todos'],
      limit: 30,
      order: 'asc',
      pagina: 1
    }
    let filtros = JSON.parse(localStorage.getItem('filtros'));

    filtroInicial = filtros ? filtros : filtroInicial
    this.props.onSetFiltros(filtroInicial)
  }
  submit = values => {
    this.props.onSetFiltros(values)
  }

  mudarPagina = (pagina) => {
    this.props.onLoadProdutos({ pagina })
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

  alterarImagem = (produto) => {
    this.props.onPopularForm(produto)

    if (!this.props.produtos.showFormImage)
      this.props.onShowFormImage()


    if (this.props.produtos.produtoShowForm)
      this.props.onShowForm()

  }
  enviarImagem = (values) => {
    if (values) {
      this.props.onUploadImage(values);

      if (this.props.produtos.showFormImage)
        this.props.onShowFormImage()

      if (this.props.produtos.produtoShowForm)
        this.props.onShowForm()

      this.props.onSetFiltros(this.props.produtos.filtros)
    }


  }

  salvarProduto = (values) => {

    values.tags = values.tags.split(',') // transforma as tags em array

    this.produtoCodBar(values.codbar)

    if (this.props.produtos.produto) {
      if (this.props.produtos.produto._id) {
        this.props.onAlterarProduto(values);

        if (this.props.produtos.produtoShowForm)
          this.props.onShowForm()

        this.props.onSetFiltros(this.props.produtos.filtros)


      } else {
        this.props.onCadastrarProduto(values)

        if (this.props.produtos.produtoShowForm)
          this.props.onShowForm()

        this.props.onSetFiltros(this.props.produtos.filtros)
      }
    }



  }
  produtoCodBar = (codBar) => {
    this.props.onGetCodBar(codBar)
  }

  prevPage = () => {
    const { page, filtros } = this.props.produtos
    if (page === 1) return

    let pagina = page - 1
    const f = { ...filtros, pagina }
    this.props.onSetFiltros(f)

  }

  nextPage = () => {
    const { page, pages, filtros } = this.props.produtos
    if (page === pages) return

    let pagina = page + 1
    const f = { ...filtros, pagina }
    this.props.onSetFiltros(f)

  }

  render() {
    const { produtos } = this.props
    const { loading, produtoShowForm, showFormImage } = produtos

    return (

      <div className="animated fadeIn" >
        {(produtos.produto && showFormImage) &&
          <FormImage
            initialValues={produtos.produto}
            show={showFormImage}
            onCancel={this.props.onShowFormImage}
            onSubmit={this.enviarImagem}
          />
        }
        {(produtos.produto && produtoShowForm) &&

          <FormProduto
            show={produtoShowForm}
            initialValues={produtos.produto}
            onCancel={this.props.onShowForm}
            onSubmit={this.salvarProduto}
            onGetCodBar={this.produtoCodBar}

          />
        }
        {(!produtoShowForm && !showFormImage) &&
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">Produtos</strong>

                </CardHeader>
                <CardBody>
                  <FormFiltros onSubmit={this.submit} initialValues={produtos.filtros}
                    page={produtos.page}
                    pages={produtos.pages}
                    prevPage={this.prevPage}
                    nextPage={this.nextPage}

                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        }
        {(!produtoShowForm && !showFormImage) &&
          <Row>

            {loading &&
              <Alert color="success" xs="12" sm="12" md="12" lg="12" xl="12" >carregando...</Alert>}

            {(produtos.docs && !loading) &&
              produtos.docs.map((produto, index) => <Produto produto={produto}
                alterarProduto={this.alterarSituacaoProduto}
                alterarImagem={this.alterarImagem}
                formProduto={this.formProduto}
                key={produto._id} />)
            }
            {(produtos.total === 0) && <Alert color="info" xs="12">
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
    onCadastrarProduto: (produto) => dispatch(produtosActions.produtoCreate(produto)),
    onShowForm: () => dispatch(produtosActions.showForm()),
    onShowFormImage: () => dispatch(produtosActions.showFormImage()),
    onPopularForm: (produto) => dispatch(produtosActions.popularForm(produto)),
    onUploadImage: (produto) => dispatch(produtosActions.imagemUpload(produto)),
    onGetCodBar: (codBar) => dispatch(produtosActions.produtoCodBar(codBar))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Produtos);