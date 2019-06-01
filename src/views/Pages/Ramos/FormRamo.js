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

let RamoForm = props => {
    const { handleSubmit, show, error } = props

    return (
        show &&
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit} className="form" >
                <Col xs="12" sm="11" md="9" lg="8" xl="5" >
                    <Card>
                        <CardHeader>
                            <strong> {props.pass ? props.initialValues.nome : 'Ramo'}</strong>
                            <small> | {props.initialValues ? ' alterar' : ' novo'}
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
                                            <Label htmlFor="descricao">Descrição</Label>
                                            <Field type="text" name="descricao" placeholder="Diga mais sobre este ramo de tividade"
                                                component="textarea" className="form-control" />
                                        </FormGroup>
                                    </Col>

                                </Row>
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



export default reduxForm({ form: 'usuario', enableReinitialize: true })(RamoForm)