import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ramoActions } from "../../../_store/_actions";

import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import FormRamo from './FormRamo'
import { history } from '../../../_helpers';
function RamoRow(props) {
  const ramo = props.ramo
  const getBadge = (situacao) => {
    return situacao === true ? 'success' : 'secondary'
  }
  return (
    <tr key={ramo._id.toString()}>
      <td>{ramo.nome}</td>
      <td>{ramo.descricao}</td>
      <td className="text-center"><Badge color={getBadge(ramo.situacao)}>{(ramo.situacao === true) ? 'Ativo' : 'Inativo'}</Badge></td>
      <td className="text-right">
        <button onClick={() => props.novoRamo()} className="btn-square btn btn-ghost-primary btn-sm" title="Novo"><i className="fa fa-plus"></i></button>
        <button onClick={() => props.alterarRamo(ramo, false)} className="btn-square btn btn-ghost-warning btn-sm" title="Alterar dados"><i className="fa fa-pencil"></i></button>
        <button className="btn-square btn btn-ghost-danger btn-sm" title="Remover" ramo={ramo}
          onClick={() => props.removerRamo(ramo)}
        ><i className="fa fa-minus"></i></button>

      </td>
    </tr>
  )
}



class Ramos extends Component {
  componentDidMount() {
    this.props.onLoadRamos();

  }

  alterarRamo = (ramo, formUpload = false) => {
    if (formUpload)
      this.props.onFormUpload()

    if (!this.props.ramos.ramoFormShow && !formUpload)
      this.props.onShowForm()


    this.props.onPopularRamo(ramo)

  }

  alterarImagem = (ramo) => {
    this.props.onPopularRamo(ramo)

    if (!this.props.ramos.ramoFormShow)
      this.props.onShowForm()


    if (this.props.ramos.produtoShowForm)
      this.props.onShowForm()

  }

  enviarImagem = (values) => {
    if (values) {
      this.props.onImagemUpload(values);
    }

    if (this.props.ramos.ramoFormImage)
      this.props.onFormUpload()

    history.push('/ramos')
  }

  submit = values => {
    if (this.props.ramos.ramoUpdated)
      this.props.onUpdateRamo(values)
    else
      this.props.onCreateRamo(values)


    if (this.props.ramos.ramoFormShow)
      this.props.onShowForm()

  }

  removerRamo = (ramo) => {
    if (window.confirm(`Deseja remover o ramo de atividade '${ramo.nome}'`)) {
      this.props.onRemoveRamo(ramo)
    }
  }

  render() {

    const { ramos } = this.props;
    const { ramoFormShow, ramoFormImage } = ramos

    return (
      <div className="animated fadeIn">
        <FormRamo initialValues={ramos.ramoUpdated}
          onSubmit={this.submit}
          onCancel={this.props.onShowForm} show={ramos.ramoFormShow} />
        <Row xs="12" sm="12" md="12" lg="12" xl="12" >


          {(!ramoFormShow && !ramoFormImage) &&
            <Col xs={12} xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">Ramos de Atividade </strong>

                  {!ramos.ramoFormShow ?
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
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Situação</th>
                        <th scope="col" className="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>

                      {ramos.items &&
                        ramos.items.map((ramo, index) =>
                          <RamoRow key={index} ramo={ramo}
                            alterarRamo={this.alterarRamo}
                            removerRamo={this.removerRamo}
                            novoRamo={this.props.onShowForm}
                          />
                        )
                      }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          }
        </Row>

      </div >
    )
  }
}

//export default Ramos;

function mapStateToProps(state) {
  const { ramos, form } = state;

  return {
    ramos,
    form
  };
}


//05   


const mapDispatchToProps = dispatch => {
  return {
    onLoadRamos: () => dispatch(ramoActions.getAll()),
    onShowForm: () => dispatch(ramoActions.showForm()),
    onFormUpload: () => dispatch(ramoActions.formUpload()),
    onCreateRamo: ramo => dispatch(ramoActions.ramoCreate(ramo)),
    onRemoveRamo: ramo => dispatch(ramoActions.ramoRemove(ramo)),
    onUpdateRamo: ramo => dispatch(ramoActions.ramoUpdate(ramo)),
    onPopularRamo: ramo => dispatch(ramoActions.ramoGet(ramo)),
    onImagemUpload: ramo => dispatch(ramoActions.imagemUpload(ramo))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ramos);