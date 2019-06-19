import React from 'react'
import { Field, reduxForm } from 'redux-form'
import listas from '../../_config/listas'

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
                            <Label htmlFor="grupos">Grupos</Label>
                            <Field component="select" className="form-control" name="grupos" multiple={true}>
                                <option value="todos">Todos</option>
                                <option value="">Sem grupos</option>
                                            {listas.grupos.map((item, index) =>
                                                <option value={item.nome} key={index}>{item.nome}</option>
                                            )}
                             
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col xs="3">
                        <FormGroup>
                            <Label htmlFor="marcas">Marcas</Label>
                            <Field component="select" className="form-control"
                             name="marcas" multiple={true}>
                                <option value="todos">Todos</option>
                                <option value="">Sem marcas</option>
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col xs="2">
                        <FormGroup>
                            <Label htmlFor="limit">Ítens por página</Label>
                            <Field component="select" className="form-control" name="limit">
                                {[15,30,45,60,90,150,200,300,500,1000]
                                    .map((item,index) => <option value={item} key={index}>{item}</option>)}
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
