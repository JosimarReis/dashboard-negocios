import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default (props) => {

    return (
        <Modal isOpen={props.isOpen} 
            className={'modal-warning ' + props.className}>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalBody>
                {props.message}
            </ModalBody>
            <ModalFooter>
                <Button color="warning" onClick={props.onConfirm}>{props.messageConfirm}</Button>{' '}
                <Button color="secondary" onClick={props.onCancel}>{props.messageCancel}</Button>
            </ModalFooter>
        </Modal>
    )
}