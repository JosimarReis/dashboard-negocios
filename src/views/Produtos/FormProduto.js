import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {
    Col, Row, FormGroup, Label, Button,
    Card, CardHeader, CardBody, CardFooter
} from 'reactstrap';

const FormProduto = (props) => {
    const { handleSubmit, show } = props

    return (
        show &&
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit} className="form" >
                <Col xs={12} sm={12}>
                    <Card>
                        <CardHeader>
                            <strong> {props.pass ? props.initialValues.nome : 'Produto'}</strong>
                            <small> |
                                {props.initialValues ? ' alterar' : ' novo'}
                            </small>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="nome">Nome</Label>
                                        <Field type="text" name="nome" placeholder="Nome"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Field type="email" name="email" placeholder="email@provedor.com"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label htmlFor="senha">Senha</Label>
                                        <Field type="password" name="senha" placeholder="Digite a senha"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label htmlFor="resenha">Repita a senha</Label>
                                        <Field type="password" name="resenha" placeholder="Repita a senha"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="7">
                                    <FormGroup>
                                        <Label htmlFor="perfil">Perfil</Label>
                                        <Field component="select" className="form-control"
                                            name="perfil">
                                            <option />
                                            <option value="ROLE_USER" >Usuário</option>
                                            <option value="ROLE_ADMIN">Administrador</option>

                                        </Field>
                                    </FormGroup>
                                </Col>
                                <Col xs="5">
                                    <FormGroup>
                                        <Label htmlFor="situacao">Situação</Label>
                                        <Field component="select" className="form-control"
                                            name="situacao" >
                                            <option />
                                            <option value="true" >Ativo</option>
                                            <option value="false">Inativo</option>

                                        </Field>
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="telefone">Telefone</Label>
                                        <Field type="text" name="telefone" placeholder="(00) 00000-0000"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>

                            </Row>

                        </CardBody>
                        <CardFooter>
                            <Field component={Button} name="submit" type="submit" size="sm"
                                color="primary" >
                                <i className="fa fa-dot-circle-o"></i> Salvar
                            </Field>
                            <button onClick={() => props.onCancel()} className="btn-square btn btn-danger btn-sm"> <i className="fa close"></i> Cancelar</button>

                        </CardFooter>
                    </Card>
                </Col>
            </form>

        </div>
    )
}

//, enableReinitialize: true
export default reduxForm({ form: 'formProduto', enableReinitialize: true })(FormProduto)
