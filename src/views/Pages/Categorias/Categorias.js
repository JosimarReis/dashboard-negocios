import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoriaActions } from "../../../_store/_actions";

import { Badge, Card, CardBody, CardHeader, CardFooter, Col, Row, Table, Pagination, PaginationItem, Button, } from 'reactstrap';
import FormCategoria from './FormCategoria'
import { history } from '../../../_helpers';
function CategoriaRow(props) {
  const categoria = props.categoria
  const getBadge = (situacao) => {
    return situacao === true ? 'success' : 'secondary'
  }
  return (
    <tr key={categoria._id.toString()}>
      <td>{categoria.grupo}</td>
      <td>{categoria.nome}</td>
      <td className="text-center"><Badge color={getBadge(categoria.situacao)}>{(categoria.situacao === true) ? 'Ativo' : 'Inativo'}</Badge></td>
      <td className="text-right">
        <button onClick={() => props.novoCategoria()} className="btn-square btn btn-ghost-primary btn-sm" title="Novo"><i className="fa fa-plus"></i></button>
        <button onClick={() => props.alterarCategoria(categoria, false)} className="btn-square btn btn-ghost-warning btn-sm" title="Alterar dados"><i className="fa fa-pencil"></i></button>
        <button className="btn-square btn btn-ghost-danger btn-sm" title="Remover" categoria={categoria}
          onClick={() => props.removerCategoria(categoria)}
        ><i className="fa fa-minus"></i></button>

      </td>
    </tr>
  )
}



class Categorias extends Component {
  componentDidMount() {
    let filtroInicial = {
      situacao: 'todos',
      grupo: 'todos',
      limit: 30,
      order: 'asc',
      pagina: 1
    }
    let filtros = JSON.parse(localStorage.getItem('filtrosCategorias'));

    filtroInicial = filtros ? filtros : filtroInicial

    this.props.onLoadCategorias(filtroInicial);

  }

  alterarCategoria = (categoria, formUpload = false) => {
    if (formUpload)
      this.props.onFormUpload()

    if (!this.props.categorias.categoriaFormShow && !formUpload)
      this.props.onShowForm()


    this.props.onPopularCategoria(categoria)

  }

  alterarImagem = (categoria) => {
    this.props.onPopularCategoria(categoria)

    if (!this.props.categorias.categoriaFormShow)
      this.props.onShowForm()


    if (this.props.categorias.produtoShowForm)
      this.props.onShowForm()

  }

  enviarImagem = (values) => {
    if (values) {
      this.props.onImagemUpload(values);
    }

    if (this.props.categorias.categoriaFormImage)
      this.props.onFormUpload()

    history.push('/categorias')
  }

  submit = values => {
    if (this.props.categorias.categoriaUpdated)
      this.props.onUpdateCategoria(values)
    else
      this.props.onCreateCategoria(values)


    if (this.props.categorias.categoriaFormShow)
      this.props.onShowForm()

  }

  removerCategoria = (categoria) => {
    if (window.confirm(`Deseja remover o categoria de atividade '${categoria.nome}'`)) {
      this.props.onRemoveCategoria(categoria)
    }
  }

  prevPage = () => {


  }

  nextPage = () => {


  }

  render() {

    const { categorias } = this.props;
    const { categoriaFormShow, categoriaFormImage } = categorias
    if (categorias.items) {
      page = categorias.items.page
      pages = categorias.items.pages
    }

    return (
      <div className="animated fadeIn">
        <FormCategoria initialValues={categorias.categoriaUpdated}
          onSubmit={this.submit}
          onCancel={this.props.onShowForm} show={categorias.categoriaFormShow} />
        <Row xs="12" sm="12" md="12" lg="12" xl="12" >


          {(!categoriaFormShow && !categoriaFormImage) &&
            <Col xs={12} xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">Categorias</strong>

                  {!categorias.categoriaFormShow ?
                    (
                      <button onClick={() => this.props.onShowForm()} className="btn-square btn btn-ghost-primary btn-sm"><i className="fa fa-plus"></i> Novo</button>
                    ) :
                    (
                      <button onClick={() => this.props.onShowForm()} className="btn-square btn btn-danger btn-sm"> <i className="fa close"></i> Fechar formuário</button>
                    )}
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">Grupo</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Situação</th>
                        <th scope="col" className="text-center">

                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      {categorias.items &&
                        categorias.items.docs.map((categoria, index) =>
                          <CategoriaRow key={index} categoria={categoria}
                            alterarCategoria={this.alterarCategoria}
                            removerCategoria={this.removerCategoria}
                            novoCategoria={this.props.onShowForm}
                          />
                        )
                      }
                    </tbody>
                  </Table>
                  <CardFooter>
                    <Pagination size="sm">

                      <PaginationItem>
                        <Button disabled={this.page === 1} onClick={() => this.prevPage()}>{'<'}</Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button >
                          {this.page}/{this.pages}
                        </Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button disabled={this.page === this.pages} onClick={() => this.nextPage()}>{'>'}</Button>
                      </PaginationItem>

                    </Pagination>

                  </CardFooter>
                </CardBody>


              </Card>
            </Col>
          }
        </Row>

      </div >
    )
  }
}

//export default Categorias;

function mapStateToProps(state) {
  const { categorias, form } = state;

  return {
    categorias,
    form
  };
}


//05   


const mapDispatchToProps = dispatch => {
  return {
    onLoadCategorias: filtros => dispatch(categoriaActions.getAll(filtros)),
    onShowForm: () => dispatch(categoriaActions.showForm()),
    onFormUpload: () => dispatch(categoriaActions.formUpload()),
    onCreateCategoria: categoria => dispatch(categoriaActions.categoriaCreate(categoria)),
    onRemoveCategoria: categoria => dispatch(categoriaActions.categoriaRemove(categoria)),
    onUpdateCategoria: categoria => dispatch(categoriaActions.categoriaUpdate(categoria)),
    onPopularCategoria: categoria => dispatch(categoriaActions.categoriaGet(categoria)),
    onImagemUpload: categoria => dispatch(categoriaActions.imagemUpload(categoria))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorias);