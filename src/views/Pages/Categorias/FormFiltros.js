import React from 'react'
import { Field, reduxForm } from 'redux-form'
import listas from "../../../_config/listas";
import {
    Col, Row, FormGroup, Label, Button,
   
} from 'reactstrap';

const FormFiltros = (props) => {
    const { handleSubmit } = props

    return (
        <div>
            <form onSubmit={handleSubmit} className="form" >
                <Row>
                    <Col xs="2">
                        <FormGroup>
                            <Label htmlFor="situacao">Situação</Label>
                            <Field component="select" className="form-control" name="situacao">
                                <option value="todos">Todos</option>
                                <option value={true}>Disponíveis</option>
                                <option value={false}>Ocultos</option>
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col xs="3">
                        <FormGroup>
                            <Label htmlFor="grupo">Grupo</Label>
                            <Field component="select" className="form-control" name="grupo" multiple={true}>
                            <option value="todos">Todos</option>
                                
                                {listas.grupos.map((item, index )=> <option value={item.nome}>{item.nome}</option>)}
                            </Field>
                        </FormGroup>
                    </Col>
                    
                    <Col xs="2">
                        <FormGroup>
                            <Label htmlFor="limit">Ítens por página</Label>
                            <Field component="select" className="form-control" name="limit">
                                <option value={15}>15</option>
                                <option value={30}>30</option>
                                <option value={45}>45</option>
                                <option value={60}>60</option>
                                <option value={90}>90</option>
                                <option value={150}>150</option>
                                <option value={200}>200</option>
                                <option value={300}>300</option>
                                <option value={500}>500</option>
                                <option value={1000}>1000</option>
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col xs="2">
                        <FormGroup>
                            <Label htmlFor="order">Ordernar</Label>
                            <Field component="select" className="form-control" name="order" value="asc">
                                <option value="asc">A - Z</option>
                                <option value="desc">Z - A</option>
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="7">
                        <FormGroup>
                            <Label htmlFor="pesquisar">Pesquisar</Label>
                            <Field component="input" className="form-control" name="pesquisar" />
                        </FormGroup>
                    </Col>
                    <Col xs="3">
                        <FormGroup>

                            <Label>&nbsp;</Label>
                            
                        </FormGroup>

                    </Col>

                    <Col xs="2">
                        <FormGroup>
                            <Label>&nbsp;</Label>
                            <Field component={Button} name="submit" type="submit" color="success" block>
                                Aplicar filtros <i className="fa fa-check"></i>
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
            </form>

        </div >)
}

//, enableReinitialize: true
export default reduxForm({ form: 'formFiltros', enableReinitialize: true })(FormFiltros)
