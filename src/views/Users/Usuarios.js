import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from "../../_store/_actions";

import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import UsuarioForm from './UsuarioForm'
import FotoPerfil from "./FotoPerfil";
import { history } from '../../_helpers';

//import { userService } from "../../_services/user.service";

function UsuarioRow(props) {
  const usuario = props.usuario
  const getBadge = (situacao) => {
    return situacao === true ? 'success' : 'secondary'
  }
  return (
    <tr key={usuario._id.toString()}>

      <td>{usuario.nome}</td>
      <td>{usuario.email}</td>
      <td>{usuario.perfil === "ROLE_ADMIN" ? "Administrador" : "Usuário"}</td>
      <td className="text-center"><Badge color={getBadge(usuario.situacao)}>{(usuario.situacao === true) ? 'Ativo' : 'Inativo'}</Badge></td>
      <td className="text-right">
        <Link to={`/usuarios/cadastrar`}>
          <button className="btn-square btn btn-ghost-primary btn-sm" title="Novo"><i className="fa fa-plus"></i></button>
        </Link>
        <button onClick={() => props.alterarUsuario(usuario, false)} className="btn-square btn btn-ghost-warning btn-sm" title="Alterar dados"><i className="fa fa-pencil"></i></button>
        <button onClick={() => props.alterarUsuario(usuario, false, true)} className="btn-square btn btn-ghost-warning btn-sm" title="Trocar Foto"><i className="fa fa fa-picture-o"></i></button>
        <button onClick={() => props.alterarUsuario(usuario, true)} className="btn-square btn btn-ghost-info btn-sm" title="Alterar Senha"><i className="fa fa-lock"></i></button>
        <button className="btn-square btn btn-ghost-danger btn-sm" title="Remover" usuario={usuario}
          onClick={() => props.removerUsuario(usuario)}
        ><i className="fa fa-minus"></i></button>

      </td>
    </tr>
  )
}



class Usuarios extends Component {
  componentDidMount() {
    this.props.onLoadUsers();
    // console.log(this.props.history.location)

  }

  alterarUsuario = (user, pass, formUpload = false) => {
    if (this.props.users.pass) this.props.onPass()

    if (pass)
      this.props.onPass()
    if (formUpload)
      this.props.onFormUpload()

    if (!this.props.users.userFormShow && !formUpload)
      this.props.onShowForm()


    this.props.onPopularUser(user)

  }

  alterarImagem = (usuario) => {
    this.props.onPopularUser(usuario)

    if (!this.props.users.userFormShow)
      this.props.onShowForm()


    if (this.props.users.produtoShowForm)
      this.props.onShowForm()

  }

  enviarImagem = (values) => {
    if (values) {
      this.props.onImagemUpload(values);
    }

    if (this.props.users.userFormImage)
      this.props.onFormUpload()

    history.push('/usuarios')
  }

  submit = values => {
    if (!this.props.users.userUpdated)
      this.props.onCreateUser(values)
    else
      this.props.onUpdateUser(values)

    if (this.props.users.userFormShow)
      this.props.onShowForm()

    if (this.props.users.pass)
      this.props.onPass()

  }

  removerUsuario = (user) => {
    if (window.confirm(`Deseja remover o usuário '${user.nome}'`)) {
      this.props.onRemoveUser(user)
    }
  }

  render() {

    const { users } = this.props;
    const { userFormShow, pass, userFormImage } = users
    const usuarios = users.items
    console.log(users)
    return (
      <div className="animated fadeIn">
        <Row>
          <FotoPerfil
            show={userFormImage}
            initialValues={users.userUpdated}
            onCancel={this.props.onFormUpload}
            onSubmit={this.enviarImagem}
          />
          <UsuarioForm initialValues={users.userUpdated}
            pass={pass}
            onSubmit={this.submit}
            onCancel={this.props.onShowForm} show={users.userFormShow} xl={3} xs={3} />

          {(!userFormShow && !userFormImage) &&
            <Col xs={12} xl={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> <strong className="card-title">Usuários </strong>

                  {!users.userFormShow ?
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
  const { users, form } = state;

  return {
    users,
    form
  };
}


//05   


const mapDispatchToProps = dispatch => {
  return {
    onLoadUsers: () => dispatch(userActions.getAll()),
    onShowForm: () => dispatch(userActions.showForm()),
    onPass: () => dispatch(userActions.pass()),
    onFormUpload: () => dispatch(userActions.formUpload()),
    onCreateUser: user => dispatch(userActions.userCreate(user)),
    onRemoveUser: user => dispatch(userActions.userRemove(user)),
    onUpdateUser: user => dispatch(userActions.userUpdate(user)),
    onPopularUser: user => dispatch(userActions.userGet(user)),
    onImagemUpload: user => dispatch(userActions.imagemUpload(user))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);