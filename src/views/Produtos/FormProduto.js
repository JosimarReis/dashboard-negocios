import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
    Alert, Col, Row, FormGroup, Label, Button,
    Card, CardHeader, CardBody, CardFooter
} from 'reactstrap';
import asyncValidate from "./asyncValidate";


const validate = values => {
    const errors = {}
    if (!values.codbar) {
        errors.codbar = 'Obrigatório'
    }
    if (!values.produto) {
        errors.produto = 'Obrigatório'
    }
    if (!values.categoria) {
        errors.categoria = 'Obrigatório'
    }
    return errors
}
const renderField = ({
    input,
    label,
    type,
    classN,

    meta: { asyncValidating, touched, error, }
}) => {

    return (
        <div >
            <input {...input} type={type} placeholder={label}
                className={classN + (asyncValidating ? 'async-validating' : '')} />
            {touched && error && <Alert color="danger">{error}</Alert>}
        </div>
    )
}
/**
 * 
 * @param {                                    <FormGroup className={asyncValidating ? 'async-validating' : ''}>
                                      <Label htmlFor="codbar">Código de Barras</Label>
                                      <Field type="text" name="codbar"
                                          placeholder="Código de Barras"
                                          component="input" className="form-control" required />
                                      {touched && error && <span>{error}</span>}
} props 
 */
const FormProduto = (props) => {
    const { handleSubmit, show, error, pristine, submitting, existe } = props
    ///console.log(props)
    return (
        show &&
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit} className="form" >
                <Col xs="12" sm="11" md="9" lg="8" xl="5" >
                    <Card>
                        <CardHeader>
                            <strong>Produto</strong>
                            <small> |
                                {props.initialValues._id ? ' alterar' : ' novo'}
                            </small>
                        </CardHeader>
                        <CardBody>
                            {error && <Row>
                                <Col xs="12">
                                    <Alert color="danger">{error}</Alert>
                                </Col>
                            </Row>}
                            <Row>
                                <Col xs="8">

                                    <FormGroup>
                                        <Label htmlFor="codbar">Código de Barras</Label>
                                        <Field type="text" name="codbar" label="Código de Barras" existe={existe}
                                            component={renderField} classN="form-control" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="4">
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
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="produto">Nome do Produto</Label>
                                        <Field type="text" name="produto" placeholder="Nome do produto"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="marca">Marca do produto</Label>
                                        <Field type="text" name="marca" placeholder="Marca do produto"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="categoria">Categoria</Label>
                                        <Field component="select" className="form-control" name="categoria" required>
                                            <option value="">Selecione uma categoria</option>
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
                                        <Label htmlFor="embalagem">Embalagem</Label>
                                        <Field type="text" name="embalagem" placeholder="Embalagem do produto: unidade, pacote, caixa"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="quantidade_embalagem">Quantidade em cada embalagem</Label>
                                        <Field type="text" name="quantidade_embalagem" placeholder="Quantidade em cada embalagem"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="peso">Peso do Produto</Label>
                                        <Field type="text" name="peso" placeholder="peso do produto"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="ncm">NCM</Label>
                                        <Field type="text" name="ncm" placeholder="NCM do produto"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="cest_codigo">Código CEST</Label>
                                        <Field type="text" name="cest_codigo" placeholder="Código CEST do produto"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="cest_descricao">Descrição CEST</Label>
                                        <Field type="text" name="cest_descricao" placeholder="Descrição CEST do produto"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>

                        </CardBody>
                        <CardFooter>
                            <Field component={Button} name="submit" type="submit" size="sm"
                                disabled={submitting || pristine}
                                color="primary" >
                                <i className="fa fa-dot-circle-o"></i> Salvar
                            </Field>
                            <button onClick={() => props.onCancel()}
                                className="btn-square btn btn-danger btn-sm"> <i className="fa close"></i> Cancelar</button>

                        </CardFooter>
                    </Card>
                </Col>
            </form>

        </div>
    )
}

//, enableReinitialize: true
export default reduxForm({
    form: 'formProduto',
    validate,
    asyncValidate,
    asyncBlurFields: 'codbar',
    enableReinitialize: true
})(FormProduto)
