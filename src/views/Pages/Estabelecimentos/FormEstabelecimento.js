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
import { Field, reduxForm, change } from 'redux-form'
import asyncValidate from "./asyncValidate";
const validate = (values) => {
    const errors = {}
    if (!values.ramo) {
        errors.codbar = 'Obrigatório'
    }

    if (values.dados) {
        let { razaoSocial } = values.dados
        if (!razaoSocial)
            errors.razaoSocial = 'Obrigatório'
    }
    if (!values.telefones) {
        errors.telefones = 'Obrigatório'
    }

    if (values.endereco) {
        const { rua } = values.endereco;
        if (!rua)
            errors.endereco.rua = 'Obrigatório'

    }

    return errors
}

let FormEstabelecimento = props => {
    const { handleSubmit, show, error } = props
    /**
        const geo = () => {
            const location = window.navigator && window.navigator.geolocation
    
            location.getCurrentPosition((position) => {
                props.dispatch(change('formEstabelecimento', 'endereco.geo.latitude', position.coords.latitude))
                props.dispatch(change('formEstabelecimento', 'endereco.geo.longitude', position.coords.longitude))
            })
        }
     */
    return (
        show &&
        <div className="animated fadeIn">
            <form onSubmit={handleSubmit} className="form" >

                <Col xs="12" sm="11" md="9" lg="8" xl="5" >
                    <Card>
                        <CardHeader>
                            <strong> Estabelecimento</strong>
                            <small> | {props.initialValues ? ' alterar' : ' novo'}
                            </small>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="ramo">Ramo de Atividade</Label>
                                        <Field component="select" className="form-control"
                                            name="ramo" >
                                            {props.ramos.map((item, index) => <option value={item._id} key={item._id} >{item.nome}</option>)}

                                        </Field>
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
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="dados.razaoSocial">Razão Social</Label>
                                        <Field type="text" name="dados.razaoSocial" placeholder="Razão Social da empresa"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="dados.fantasia">Fantasia</Label>
                                        <Field type="text" name="dados.fantasia" placeholder="Fantasia da empresa"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="dados.cnpj">CPF ou CNPJ</Label>
                                        <Field type="text" name="dados.cnpj" placeholder="CPF ou CNPJ"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="email">E-mail</Label>
                                        <Field type="text" name="email" placeholder="email@email.com"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="telefones">Telefone</Label>
                                        <Field type="text" name="telefones" placeholder="(00) 0 0000-0000"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="endereco.rua">Logradouro</Label>
                                        <Field type="text" name="endereco.rua" placeholder=""
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="endereco.numero">Número</Label>
                                        <Field type="text" name="endereco.numero" placeholder="Digite o número se tiver"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="endereco.bairro">Bairro</Label>
                                        <Field type="text" name="endereco.bairro" placeholder="Bairro"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="endereco.referencia">Referêcia</Label>
                                        <Field type="text" name="endereco.referencia" placeholder="Quais os pontos de referencia?"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="cidade.cep">CEP</Label>
                                        <Field type="text" name="cidade.cep" placeholder="Digite o CEP"
                                            component="input" className="form-control" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="cidade.estado.sigla">Estado</Label>
                                        <Field type="text" component="input" className="form-control"
                                            name="cidade.estado.sigla" disabled={true} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label htmlFor="cidade.nome">Cidade</Label>
                                        <Field type="text" component="input" className="form-control"
                                            name="cidade.nome" disabled={true} />

                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label htmlFor="endereco.geo.latitude">Latitude</Label>
                                        <Field type="text" name="endereco.geo.latitude" placeholder="Latitude do estabelecimento"
                                            component="input" className="form-control" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>

                                        <Label htmlFor="endereco.geo.longitude">Longitude
                                        <button onClick={() => {
                                                const location = window.navigator && window.navigator.geolocation

                                                location.getCurrentPosition((position) => {
                                                    change('formEstabelecimento', 'endereco.geo.latitude', position.coords.latitude)
                                                    change('formEstabelecimento', 'endereco.geo.longitude', position.coords.longitude)
                                                })
                                            }} className="btn-square btn btn-danger btn-sm"> <i className="fa close"></i> Usar Atual</button>
                                        </Label>
                                        <Field type="text" name="endereco.geo.longitude" placeholder="Longitude do estabelecimento"
                                            component="input" className="form-control" required />
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



export default reduxForm({
    form: 'formEstabelecimento',
    validate,
    asyncBlurFields: 'cidade.cep',
    asyncValidate,
    enableReinitialize: true
})(FormEstabelecimento)