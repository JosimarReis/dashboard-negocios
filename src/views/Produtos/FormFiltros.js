import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {
    Col, Row, FormGroup, Label, Button,
    Pagination, PaginationItem
} from 'reactstrap';

const FormFiltros = (props) => {
    const { handleSubmit } = props

    return (
        <div>
            <form onSubmit={handleSubmit} className="form" >
                <Row>
                    <Col xs="2">
                        <FormGroup>
                            <Label htmlFor="situacao">Quais listar?</Label>
                            <Field component="select" className="form-control" name="situacao">
                                <option value="todos">Todos</option>
                                <option value={true}>Disponíveis</option>
                                <option value={false}>Ocultos</option>
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col xs="3">
                        <FormGroup>
                            <Label htmlFor="categorias">Categorias</Label>
                            <Field component="select" className="form-control" name="categorias" multiple={true}>
                                <option value="todos">Todos</option>
                                <option value="">Sem categorias</option>
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
                    <Col xs="3">
                        <FormGroup>
                            <Label htmlFor="marcas">Marcas</Label>
                            <Field component="select" className="form-control" name="marcas" multiple={true}>
                                <option value="todos">Todos</option>
                                <option value="">Sem marcas</option>
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
                            <Pagination>

                                <PaginationItem>
                                    <Button disabled={props.page === 1} onClick={() => props.prevPage()}>{'<'}</Button>
                                </PaginationItem>
                                <PaginationItem>
                                    <Button >
                                        {props.page}/{props.pages}
                                    </Button>
                                </PaginationItem>
                                <PaginationItem>
                                    <Button disabled={props.page === props.pages} onClick={() => props.nextPage()}>{'>'}</Button>
                                </PaginationItem>

                            </Pagination>
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
