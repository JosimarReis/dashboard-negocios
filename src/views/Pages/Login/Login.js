import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from "../../../_store/_actions";

import {
  Button, Card, CardBody, CardGroup, Col, Container, Form, Input,
  InputGroup, InputGroupAddon, InputGroupText, Row
} from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props)
    //reset status login
    this.props.dispatch(userActions.logout())

    this.state = {
      email: '',
      senha: '',
      submitted: false
    }


    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);


  }



  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, senha } = this.state;
    const { dispatch } = this.props;
    if (email && senha) {
      dispatch(userActions.login(email, senha));
      this.props.history.push("/");
    }

  }


  render() {
    const { loggingIn } = this.props;
    const { email, senha, submitted } = this.state;


    return (
      <div className="app flex-row align-items-center">

        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form name="form" onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Entre com seus dados de acesso</p>
                      <InputGroup className={'mb-3 form-group' + (submitted && !email ? ' has-error' : '')}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="E-mail" name="email"
                          value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                          <div className="help-block">Digite seu e-mail</div>
                        }
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Senha" name="senha"
                          value={senha} onChange={this.handleChange} />
                        {submitted && !senha &&
                          <div className="help-block">Digite sua senha</div>
                        }
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Entrar</Button>
                          {loggingIn &&
                            'carregando'
                          }
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Esqueceu a senha?</Button>
                        </Col>
                      </Row>
                    </Form>
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
  const { loggingIn, user } = state.authentication;
  return {
    loggingIn,
    user
  };
}

//const connectedLoginPage = connect(mapStateToProps)(Login);
//export { connectedLoginPage as Login }; 
export default connect(mapStateToProps)(Login);
