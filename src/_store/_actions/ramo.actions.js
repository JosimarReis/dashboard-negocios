import { ramoConstants } from '../_constants';
import { ramoService } from '../../_services';
//import { alertActions } from './';
import { history } from '../../_helpers';

export const ramoActions = {
    getAll,
    showForm,
    ramoCreate,
    ramoUpdate,
    ramoRemove,
    ramoGet,
    imagemUpload,
    formUpload
};

function showForm() {
    return dispatch => {
        dispatch({ type: ramoConstants.RAMO_FORM_SHOW })
    }
}

function formUpload() {
    return dispatch => {
        dispatch({ type: ramoConstants.RAMO_FORM_UPLOAD })
    }
}
function ramoGet(ramo) {
    return dispatch => {
        dispatch({ type: ramoConstants.RAMO_GET, ramo })
    }
}

function getAll(ativos = false) {
    return dispatch => {
        ramoService.getAll(ativos)
            .then(
                ramos => {
                    dispatch({
                        type: ramoConstants.RAMO_GETALL,
                        ramos
                    })

                },
                error => console.log(error)
            )
    }
}


function ramoCreate(ramo) {
    return dispatch => {
        ramoService.ramoCreate(ramo)
            .then(
                ramo => {
                    dispatch({
                        type: ramoConstants.RAMO_CREATE,
                        ramo
                    })
                    history.push('/ramos')
                },
                error => console.log(error)
            )
    }
}

function ramoUpdate(ramo) {
    return dispatch => {

        ramoService.ramoUpdate(ramo)
            .then(
                ramo => {
                    dispatch({
                        type: ramoConstants.RAMO_UPDATE,
                        ramo
                    })
                    history.push('/ramos')

                },
                error => console.log(error)
            )
    }


}


function ramoRemove(ramo) {
    return dispatch => {

        ramoService.ramoRemove(ramo._id)
            .then(
                success => {
                    dispatch({
                        type: ramoConstants.RAMO_REMOVE
                    })
                    history.push('/ramos')

                },
                error => console.log(error)
            )

    }
}

function imagemUpload(ramo) {
    return dispatch => {
        ramoService.imagemUpload(ramo._id, ramo.arquivo)
            .then(
                ramo => {
                    dispatch({
                        type: ramoConstants.RAMO_FORM_UPLOAD,
                        ramo
                    })

                },
                error => console.log(error)
            )
    }
}