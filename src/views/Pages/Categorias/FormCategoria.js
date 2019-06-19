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

let FormCategoria = props => {
    const { handleSubmit, show, error } = props

    return (
        show &&
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit} className="form" >
                <Col xs="12" sm="11" md="9" lg="8" xl="5" >
                    <Card>
                        <CardHeader>
                            <strong> {props.pass ? props.initialValues.nome : 'Categoria'}</strong>
                            <small> | {props.initialValues ? ' alterar' : ' novo'}
                            </small>
                        </CardHeader>
                        <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="grupo">Grupo</Label>
                                            <Field component="select" className="form-control" name="grupo" required>
                                                <option value="">Selecione um grupo</option>
                                                <option value="AÇOUGUE">AÇOUGUE</option>
                                                <option value="BAZAR">BAZAR</option>
                                                <option value="BEBÊ">BEBÊ</option>
                                                <option value="BEBIDAS">BEBIDAS</option>
                                                <option value="CONGELADO">CONGELADO</option>
                                                <option value="CONGELADOS">CONGELADOS</option>
                                                <option value="ELETRO">ELETRO</option>
                                                <option value="FRIOS E LATICÍNIOS">FRIOS E LATICÍNIOS</option>
                                                <option value="HIGIENE E BELEZA">HIGIENE E BELEZA</option>
                                                <option value="HORTIFRUTI">HORTIFRUTI</option>
                                                <option value="INFANTIL">INFANTIL</option>
                                                <option value="LIMPEZA">LIMPEZA</option>
                                                <option value="MERCEARIA">MERCEARIA</option>
                                                <option value="PADARIA">PADARIA</option>
                                                <option value="PETSHOP">PETSHOP</option>
                                            </Field>
                                        </FormGroup>
                                    </Col>
                                </Row>
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
                                                <option value="true" >Ativo</option>
                                                <option value="false">Inativo</option>

                                            </Field>
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



export default reduxForm({ form: 'categoria', enableReinitialize: true })(FormCategoria)