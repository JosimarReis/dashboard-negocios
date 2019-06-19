import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from "../../../_store/_actions";
//import { history } from '../../../_helpers';

import {
  Button, Card, CardBody, CardGroup, Col, Container, Row
} from 'reactstrap';
import FormLogin from './FormLogin';


class Login extends Component {
  constructor(props) {
    super(props)
    //reset status login
    this.props.onLogout()

  }

  onSubmit = values => {
    const { email, senha } = values;
    this.props.onLogin(email, senha)

    this.props.history.push("/");


  }


  render() {
    
        return (
      <div className="app flex-row align-items-center">

        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <FormLogin onSubmit={this.onSubmit} />
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Não tem acesso?</h2>
                      <p>Caso não tenha acesso, entre em contato com os administradores do seu estabelecimento. Caso seja um novo estabelecimento, clique no botão abaixo.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Sou um novo estabelecimento!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, user, submitted } = state.authentication;
  return {
    loggingIn,
    user,
    submitted
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, senha) => dispatch(userActions.login(email, senha)),
    onLogout: () => dispatch(userActions.logout())
  }
}
//const connectedLoginPage = connect(mapStateToProps)(Login);
//export { connectedLoginPage as Login }; 
export default connect(mapStateToProps, mapDispatchToProps)(Login);