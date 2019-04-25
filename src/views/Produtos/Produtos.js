import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from "../../_store/_actions";

import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import UsuarioForm from './UsuarioForm'


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
        <Link to={`/usuarios/alterar`} onClick={(usuario) => props.getUsuario(usuario._id)}>
          <button className="btn-square btn btn-ghost-warning btn-sm" title="Alterar dados"><i className="fa fa-pencil"></i></button>
        </Link>
        <Link to={`/usuarios/alterar-senha`}>
          <button className="btn-square btn btn-ghost-info btn-sm" title="Alterar Senha"><i className="fa fa-lock"></i></button>
        </Link>
        <Link to={`/usuarios/remover`}>
          <button className="btn-square btn btn-ghost-danger btn-sm" title="Remover"><i className="fa fa-minus"></i></button>
        </Link>
      </td>
    </tr>
  )
}



class Produtos extends Component {
  componentDidMount() {
    this.props.onLoadUsers();
    this.showForm()
  }

  showForm = () => {
    this.props.onShowForm()
  }
  getUsuario = (id) => {
    let u = this.props.users.items.filter((usuario) => usuario._id === id)
    return u
  }

  render() {

    const { users, userFormShow } = this.props;
    const usuarios = users.items
    console.log('show form '+userFormShow)
    let usuarioNOme = '';


    return (
      <div className="animated fadeIn">
        <Row>
          <UsuarioForm show={true} />
          <Col xl={10}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> <strong className="card-title">Usuários</strong> |
                 <button onClick={() => this.showForm()} className="btn-square btn btn-ghost-primary btn-sm"><i className="fa fa-plus"></i> novo</button>
                {usuarioNOme}
              </CardHeader>
              <CardBody>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
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
                        <UsuarioRow key={index} usuario={usuario} getUsuario={() => this.getUsuario} />
                      )
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div >
    )
  }
}

//export default Usuarios;

function mapStateToProps(state) {
  const { users, userFormShow } = state;

  return {
    users,
    userFormShow
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadUsers: () => dispatch(userActions.getAll()),
    onShowForm: () => dispatch(userActions.showForm())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);