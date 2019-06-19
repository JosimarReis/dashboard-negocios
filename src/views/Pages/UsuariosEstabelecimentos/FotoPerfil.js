import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {
    Col, Row, FormGroup, Label, Button, Card, CardHeader, CardBody, CardFooter
} from 'reactstrap';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    ...props
}) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            accept="*.jpg *.jpeg *.png"
            type="file"
            {...props.input}
            {...props}
        />
    );
};

const FormImage = (props) => {
    const { handleSubmit, show } = props
    
    return (
        show &&
        <div className='buttons fadein'>
            <form onSubmit={handleSubmit} className="form" >
                <Card>
                    <CardHeader>
                        <strong> {props.initialValues.nome}</strong>
                        <small> |
                           Foto de perfil 
                            </small>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="arquivo">Selecione uma imagem</Label>
                                    <Field name="arquivo" component={FileInput} type="file" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>

                    <CardFooter>
                        <Field component={Button} name="submit" type="submit" size="sm"
                            color="primary" >
                            <i className="fa fa-dot-circle-o"></i> Salvar
                            </Field>
                        <button onClick={() => props.onCancel()} className="btn-square btn btn-danger btn-sm"> <i className="fa close"></i> Cancelar</button>

                    </CardFooter>
                </Card>
            </form>

        </div >
    )
}

//, enableReinitialize: true
export default reduxForm({ form: 'formImage', enableReinitialize: true })(FormImage)
