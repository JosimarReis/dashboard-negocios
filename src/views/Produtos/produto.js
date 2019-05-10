import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

const Produtos = (props) =>
    <Col xs="4" sm="4" md="4" className="animated fadeIn">
        <Card>
            <CardHeader className="text-truncate">{props.produto.produto}
                <div className="card-header-actions">
                    <AppSwitch className={'float-right mx-1'} color={'success'} outline label dataOn={'\u2713'} dataOff={'\u2715'}
                        checked={props.produto.situacao}
                        onClick={() => props.alterarProduto(props.produto, !props.produto.situacao)}
                        size={'sm'} />
                </div>
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
            <CardFooter>Card footer</CardFooter>
        </Card>
    </Col>


export default Produtos;
