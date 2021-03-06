import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import config from '../../_config/config'
const Produtos = (props) => {
    const imagem = !props.produto.foto_jpg ? config.imagemPadrao :
     config.urlImagens + props.produto.foto_jpg
    let styleImage = { width: '100%', height: 'auto' };

    return (
        <Col xs="6" sm="6" md="4" lg="4" xl="4" className="animated fadeIn">
            <Card>
                <CardHeader>
                    <Row>
                        <Col xs="10" sm="10" md="10" lg="10" xl="10" className="text-truncate">
                            {props.produto.produto}
                        </Col>

                        <Col xs="2" sm="2" md="2" lg="2" xl="2">
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

                    <img src={imagem} style={styleImage} alt={props.produto.produto} />
                    <p>{props.produto.situacao}
                        Codigo de barras: {props.produto.codbar}
                        <br />{props.produto.grupo} {props.produto.categoria&& `| ${props.produto.categoria}`}
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
                            <Button color="ghost-dark" size="sm" onClick={() => props.alterarImagem(props.produto)}>
                                <i className="fa fa-picture-o"></i>&nbsp;Foto
                </Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Col>
    )
}
export default Produtos;
