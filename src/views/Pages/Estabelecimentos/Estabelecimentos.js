import React, { Component } from 'react';
import { connect } from 'react-redux';
import { estabelecimentoActions, ramoActions } from "../../../_store/_actions";

import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import FormEstabelecimento from './FormEstabelecimento'
import { history } from '../../../_helpers';
function EstabelecimentoRow(props) {
  const estabelecimento = props.estabelecimento
  const getBadge = (situacao) => {
    return situacao === true ? 'success' : 'secondary'
  }
  return (
    <tr key={estabelecimento._id.toString()}>
      <td className="text-truncate">
        {estabelecimento.dados.razaoSocial}
      </td>
      <td>
        {estabelecimento.email}
      </td>
      <td>

        <small>{estabelecimento.telefones}</small>
      </td>
      <td className="text-center"><Badge color={getBadge(estabelecimento.situacao)}>{(estabelecimento.situacao === true) ? 'Ativo' : 'Inativo'}</Badge></td>
      <td className="text-right">
        <button onClick={() => props.novoEstabelecimento()} className="btn-square btn btn-ghost-primary btn-sm" title="Novo"><i className="fa fa-plus"></i></button>
        <button onClick={() => props.alterarEstabelecimento(estabelecimento, false)} className="btn-square btn btn-ghost-warning btn-sm" title="Alterar dados"><i className="fa fa-pencil"></i></button>
        <button className="btn-square btn btn-ghost-danger btn-sm" title="Remover" estabelecimento={estabelecimento}
          onClick={() => props.removerEstabelecimento(estabelecimento)}
        ><i className="fa fa-minus"></i></button>

      </td>
    </tr>
  )
}



class Estabelecimentos extends Component {
  componentDidMount() {
    this.props.onLoadEstabelecimentos();
    this.props.onGetRamos();

  }

  alterarEstabelecimento = (estabelecimento, formUpload = false) => {
    if (formUpload)
      this.props.onFormUpload()

    if (!this.props.estabelecimentos.estabelecimentoFormShow && !formUpload)
      this.props.onShowForm()


    this.props.onPopularEstabelecimento(estabelecimento)

  }

  alterarImagem = (estabelecimento) => {
    this.props.onPopularEstabelecimento(estabelecimento)

    if (!this.props.estabelecimentos.estabelecimentoFormShow)
      this.props.onShowForm()


    if (this.props.estabelecimentos.produtoShowForm)
      this.props.onShowForm()

  }

  enviarImagem = (values) => {
    if (values) {
      this.props.onImagemUpload(values);
    }

    if (this.props.estabelecimentos.estabelecimentoFormImage)
      this.props.onFormUpload()

    history.push('/estabelecimentos')
  }

  submit = values => {
    console.log(values)
    /**
    if (this.props.estabelecimentos.estabelecimentoUpdated)
      this.props.onUpdateEstabelecimento(values)
    else
      this.props.onCreateEstabelecimento(values)


    if (this.props.estabelecimentos.estabelecimentoFormShow)
      this.props.onShowForm()
 */
  }

  removerEstabelecimento = (estabelecimento) => {
    if (window.confirm(`Deseja remover o estabelecimento '${estabelecimento.dados.razaoSocial}'`)) {
      this.props.onRemoveEstabelecimento(estabelecimento)
    }
  }

  render() {

    const { estabelecimentos } = this.props;
    const { estabelecimentoFormShow, estabelecimentoFormImage } = estabelecimentos
    console.log(this.props.ramos)
    return (
      <div className="animated fadeIn">
        <FormEstabelecimento initialValues={estabelecimentos.estabelecimentoUpdated}
          ramos={this.props.ramos.items}
          onSubmit={this.submit}
          onCancel={this.props.onShowForm}
          show={estabelecimentos.estabelecimentoFormShow} />
        <Row xs="12" sm="12" md="12" lg="12" xl="12" >


          {(!estabelecimentoFormShow && !estabelecimentoFormImage) &&
            <Col xs={12} xl={12}>
              <Card >
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">Estabelecimentos de Atividade </strong>

                  {!estabelecimentos.estabelecimentoFormShow ?
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
                        <th scope="col">Empresa</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Situação</th>
                        <th scope="col" className="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>

                      {estabelecimentos.items &&
                        estabelecimentos.items.map((estabelecimento, index) =>
                          <EstabelecimentoRow key={index} estabelecimento={estabelecimento}
                            alterarEstabelecimento={this.alterarEstabelecimento}
                            removerEstabelecimento={this.removerEstabelecimento} />
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

//export default Estabelecimentos;

function mapStateToProps(state) {
  const { estabelecimentos, ramos, form } = state;

  return {
    estabelecimentos,
    ramos,
    form
  };
}


//05   


const mapDispatchToProps = dispatch => {
  return {
    onLoadEstabelecimentos: () => dispatch(estabelecimentoActions.getAll()),
    onShowForm: () => dispatch(estabelecimentoActions.showForm()),
    onFormUpload: () => dispatch(estabelecimentoActions.formUpload()),
    onCreateEstabelecimento: estabelecimento => dispatch(estabelecimentoActions.estabelecimentoCreate(estabelecimento)),
    onRemoveEstabelecimento: estabelecimento => dispatch(estabelecimentoActions.estabelecimentoRemove(estabelecimento)),
    onUpdateEstabelecimento: estabelecimento => dispatch(estabelecimentoActions.estabelecimentoUpdate(estabelecimento)),
    onPopularEstabelecimento: estabelecimento => dispatch(estabelecimentoActions.estabelecimentoGet(estabelecimento)),
    onImagemUpload: estabelecimento => dispatch(estabelecimentoActions.imagemUpload(estabelecimento)),
    onGetRamos: () => dispatch(ramoActions.getAll(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Estabelecimentos);