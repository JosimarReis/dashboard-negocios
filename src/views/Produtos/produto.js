import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

const Produtos = (props) =>
    <Col xs="4" sm="4" md="4" className="animated fadeIn">
        <Card>
            <CardHeader>
                <Row>
                    <Col xs="10" sm="10" md="10" className="text-truncate">
                        {props.produto.produto}
                    </Col>

                    <Col xs="2" sm="2" md="2">
                        <div className="card-header-actions" title="Visibilidade do produto">
                            <AppSwitch className={'float-right mx-1'} color={'success'} outline label dataOn={'\u2713'} dataOff={'\u2715'}
                                checked={props.produto.situacao}
                                onClick={() => props.alterarProduto(props.produto, !props.produto.situacao)}
                                size={'sm'} />
                        </div>
                    </Col>

                </Row>
            </CardHeader>
            <CardBody>
                <img src={
                    props.produto.foto_jpg ?
                        `http://localhost:3000/uploads/${props.produto.foto_jpg}`
                        :
                        `http://localhost:3000/uploads/nao_encontrada.jpg`
                } style={{ width: '100%', height: 'auto' }} />
                <p>{props.produto.situacao}
                    Codigo de barras: {props.produto.codbar}
                    <br />Categoria: {props.produto.categoria}
                    <br />Marca: {props.produto.marca ? props.produto.marca : '--'}
                    <br />Embalagem: {props.produto.embalagem}
                </p>
            </CardBody>
            <CardFooter >
                <Row>
                    <Col xs="4" sm="4" md="4">
                        <Button color="ghost-dark" size="sm" onClick={() => props.formProduto({})}>
                            <i className="fa fa-pencil-square-o"></i>&nbsp;Novo
                </Button>
                    </Col>
                    <Col xs="4" sm="4" md="4">
                        <Button color="ghost-dark" size="sm" onClick={() => props.formProduto(props.produto)}>
                            <i className="fa fa-pencil-square-o"></i>&nbsp;alterar
                </Button>
                    </Col>
                    <Col xs="4" sm="4" md="4">
                        <Button color="ghost-dark" size="sm" onClick={() => props.formProduto(props.produto)}>
                            <i className="fa fa-picture-o"></i>&nbsp;Foto
                </Button>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    </Col>


export default Produtos;
