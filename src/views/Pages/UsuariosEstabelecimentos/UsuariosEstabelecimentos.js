import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usuarioEstabelecimentoActions } from "../../../_store/_actions";

import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import FormUsuarioEstabelecimento from './FormUsuarioEstabelecimento'
import FotoPerfil from "./FotoPerfil";
import { history } from '../../../_helpers';
import config from "../../../_config/config";
import { SubmissionError } from 'redux-form'

function UsuarioRow(props) {
  const usuario = props.usuario
  const getBadge = (situacao) => {
    return situacao === true ? 'success' : 'secondary'
  }
  return (
    <tr key={usuario._id.toString()}>
      <td className="text-center">
        <div className="avatar">
          <img src={!usuario.foto ? config.usuarioPadrao : config.urlUsuarios + usuario.foto} className="img-avatar" alt={usuario.email} />

        </div>
      </td>
      <td>{usuario.nome}</td>
      <td>{usuario.email}</td>
      <td>{usuario.perfil === "ROLE_ADMIN" ? "Administrador" : "Usuário"}</td>
      <td className="text-center"><Badge color={getBadge(usuario.situacao)}>{(usuario.situacao === true) ? 'Ativo' : 'Inativo'}</Badge></td>
      <td className="text-right">
        <button className="btn-square btn btn-ghost-primary btn-sm" title="Novo"><i className="fa fa-plus"></i></button>
        <button onClick={() => props.alterarUsuario(usuario, false)} className="btn-square btn btn-ghost-warning btn-sm" title="Alterar dados"><i className="fa fa-pencil"></i></button>
        <button onClick={() => props.alterarUsuario(usuario, false, true)} className="btn-square btn btn-ghost-dark btn-sm" title="Trocar Foto"><i className="fa fa fa-picture-o"></i></button>
        <button onClick={() => props.alterarUsuario(usuario, true)} className="btn-square btn btn-ghost-info btn-sm" title="Alterar Senha"><i className="fa fa-lock"></i></button>
        <button className="btn-square btn btn-ghost-danger btn-sm" title="Remover" usuario={usuario}
          onClick={() => props.removerUsuario(usuario)}
        ><i className="fa fa-minus"></i></button>

      </td>
    </tr>
  )
}



class UsuariosEstabelecimentos extends Component {
  componentDidMount() {
    let estabelecimento = this.props.usuarioEstabelecimento.estabelecimento
    if (!estabelecimento) {
      estabelecimento = JSON.parse(localStorage.getItem('estabelecimento'))
      if (estabelecimento)
        this.props.setEstabelecimento(estabelecimento)
      else
        history.push('/estabelecimentos')

    }
    this.props.onLoadUsers(estabelecimento);
    // console.log(this.props.history.location)

  }

  alterarUsuario = (user, pass, formUpload = false) => {
    if (this.usuarioEstabelecimento.pass) this.props.onPass()

    if (pass)
      this.props.onPass()
    if (formUpload)
      this.props.onFormUpload()

    if (!this.usuarioEstabelecimento.userFormShow && !formUpload)
      this.props.onShowForm()


    this.props.onPopularUser(user)

  }

  alterarImagem = (usuario) => {
    this.props.onPopularUser(usuario)

    if (!this.usuarioEstabelecimento.userFormShow)
      this.props.onShowForm()


    if (this.usuarioEstabelecimento.produtoShowForm)
      this.props.onShowForm()

  }

  enviarImagem = (values) => {
    if (values) {
      this.props.onImagemUpload(values);
    }

    if (this.usuarioEstabelecimento.userFormImage)
      this.props.onFormUpload()

    history.push('/usuarios-estabelecimentos')
  }

  submit = values => {
    new SubmissionError({})

    if (!this.usuarioEstabelecimento.userUpdated) {

      if (values.senha !== values.resenha) {
        throw new SubmissionError({ senha: 'Erro ao confirmar as senhas', _error: 'As senhas são diferentes' })
      } else {
        this.props.onCreateUser(values)
      }

    }
    else if (this.usuarioEstabelecimento.pass) {
      if (values.senha !== values.resenha) {
        throw new SubmissionError({ senha: 'Erro ao confirmar as senhas', _error: 'As senhas são diferentes' })
      } else {
        this.props.onUpdateUser(values)
      }
    }
    else {

      this.props.onUpdateUser(values)
    }

    if (this.usuarioEstabelecimento.userFormShow)
      this.props.onShowForm()

    if (this.usuarioEstabelecimento.pass) {
      this.props.onPass()
    }

  }

  novoUsuario = () => {
    if (!this.usuarioEstabelecimento.userFormShow)
      this.props.onShowForm()

    if (!this.usuarioEstabelecimento.pass) {
      this.props.onPass()
    }

  }


  removerUsuario = (user) => {
    if (window.confirm(`Deseja remover o usuário '${user.nome}'`)) {
      this.props.onRemoveUser(user)
    }
  }

  render() {

    const { usuarioEstabelecimento } = this.props;
    const { userFormShow, pass, userFormImage, } = usuarioEstabelecimento
    const usuarios = usuarioEstabelecimento.items
    const { dados } = usuarioEstabelecimento.estabelecimento
    console.log(this.props.usuarioEstabelecimento)

    return (
      <div className="animated fadeIn">
        <FotoPerfil
          show={userFormImage}
          initialValues={usuarioEstabelecimento.userUpdated}
          onCancel={this.props.onFormUpload}
          onSubmit={this.enviarImagem}
        />
        <FormUsuarioEstabelecimento initialValues={usuarioEstabelecimento.userUpdated}
          pass={pass}
          onSubmit={this.submit}
          onCancel={this.props.onShowForm} show={usuarioEstabelecimento.userFormShow} xl={3} xs={3} />
        <Row>

          {(!userFormShow && !userFormImage) &&
            <Col xs={12} xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">
                    Usuários de
                    {dados.razaoSocial}
                  </strong>

                  {!usuarioEstabelecimento.userFormShow ?
                    (
                      <button onClick={() => this.alterarUsuario({})} className="btn-square btn btn-ghost-primary btn-sm"><i className="fa fa-plus"></i> Novo</button>
                    ) :
                    (
                      <button onClick={() => this.props.onShowForm()} className="btn-square btn btn-danger btn-sm"> <i className="fa close"></i> Fechar formuário</button>
                    )}
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th className="text-center"><i className="icon-people"></i></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Situação</th>
                        <th scope="col" className="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>

                      {usuarios &&
                        usuarios.map((usuario, index) =>
                          <UsuarioRow key={index} usuario={usuario}
                            alterarUsuario={this.alterarUsuario}
                            removerUsuario={this.removerUsuario} />
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

//export default Usuarios;

function mapStateToProps(state) {
  const { usuarioEstabelecimento, form } = state;

  return {
    usuarioEstabelecimento,
    form
  };
}


//05   


const mapDispatchToProps = dispatch => {
  return {
    onLoadUsers: () => dispatch(usuarioEstabelecimentoActions.getAll()),
    onShowForm: () => dispatch(usuarioEstabelecimentoActions.showForm()),
    onPass: () => dispatch(usuarioEstabelecimentoActions.pass()),
    onFormUpload: () => dispatch(usuarioEstabelecimentoActions.formUpload()),
    onCreateUser: user => dispatch(usuarioEstabelecimentoActions.userCreate(user)),
    onRemoveUser: user => dispatch(usuarioEstabelecimentoActions.userRemove(user)),
    onUpdateUser: user => dispatch(usuarioEstabelecimentoActions.userUpdate(user)),
    onPopularUser: user => dispatch(usuarioEstabelecimentoActions.userGet(user)),
    onImagemUpload: user => dispatch(usuarioEstabelecimentoActions.imagemUpload(user)),
    setEstabelecimento: estabelecimento => dispatch(usuarioEstabelecimentoActions.setEstabelecimento(estabelecimento))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsuariosEstabelecimentos);