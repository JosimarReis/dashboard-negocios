import React from 'react';
import {
    Alert,
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Label,
    Row,
    CardFooter,
    Button
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form'

let UsuarioForm = props => {
    const { handleSubmit, show, error } = props

    return (
        show &&
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit} className="form" >
                <Col xs="12" sm="11" md="9" lg="8" xl="5" >

                    <Card>
                        <CardHeader>
                            <strong> {props.pass ? props.initialValues.nome : 'Usuário'}</strong>
                            <small> |
                            {props.pass ? ' alterando senha' :
                                    props.initialValues ? ' alterar' : ' novo'}

                            </small>
                        </CardHeader>
                        <CardBody>
                            {!props.pass &&
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="nome">Nome</Label>
                                            <Field type="text" name="nome" placeholder="Nome"
                                                component="input" className="form-control" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            }
                            {!props.pass &&
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="email">Email</Label>
                                            <Field type="email" name="email" placeholder="email@provedor.com"
                                                component="input" className="form-control" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            }
                            {(!props.initialValues || props.pass) &&
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
                            }
                            {!props.pass &&
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
                            }
                            {!props.pass &&
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="telefone">Telefone</Label>
                                            <Field type="text" name="telefone" placeholder="(00) 00000-0000"
                                                component="input" className="form-control" />
                                        </FormGroup>
                                    </Col>

                                </Row>
                            }
                            {error && <Row>
                                <Col xs="12">
                                    <Alert color="danger">{error}</Alert>
                                </Col>
                            </Row>}
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



export default reduxForm({ form: 'usuario', enableReinitialize: true })(UsuarioForm)