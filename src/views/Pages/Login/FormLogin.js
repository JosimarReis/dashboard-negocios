import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
    Alert, Col, Row, Button, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';


const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Informe seu email..'
    }
    if (!values.senha) {
        errors.senha = 'Digite sua senha.'
    }
    return errors
}

const FormLogin = (props) => {
    const { handleSubmit, error, submitting } = props
    ///console.log(props)
    return (
        <form onSubmit={handleSubmit} className="form" >
            {error && <Row>
                <Col xs="12">
                    <Alert color="danger">{error}</Alert>
                </Col>
            </Row>}
            <h1>Login</h1>
            <p className="text-muted">Entre com seus dados de acesso</p>
            <InputGroup className={'mb-3 form-group' + (error ? ' has-error' : '')}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="icon-user"></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Field type="email" component="input" placeholder="E-mail" name="email"
                />

            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="icon-lock"></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Field component="input" type="password" placeholder="Senha" name="senha"
                />

            </InputGroup>
            <Row>
                <Col xs="6">
                    <Button color="primary" className="px-4">Entrar</Button>
                    {submitting &&
                        'carregando'
                    }
                </Col>
                <Col xs="6" className="text-right">
                    <Button color="link" className="px-0">Esqueceu a senha?</Button>
                </Col>
            </Row>
        </form>
    )

}

export default reduxForm({
    form: 'formLogin',
    validate
})(FormLogin)

