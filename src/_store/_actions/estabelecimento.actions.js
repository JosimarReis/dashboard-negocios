import { estabelecimentoConstants } from '../_constants';
import { estabelecimentoService } from '../../_services';
//import { alertActions } from './';
import { history } from '../../_helpers';

export const estabelecimentoActions = {
    getAll,
    showForm,
    estabelecimentoCreate,
    estabelecimentoUpdate,
    estabelecimentoRemove,
    estabelecimentoGet,
    imagemUpload,
    formUpload
};

function showForm() {
    return dispatch => {
        dispatch({ type: estabelecimentoConstants.ESTABELECIMENTO_FORM_SHOW })
    }
}

function formUpload() {
    return dispatch => {
        dispatch({ type: estabelecimentoConstants.ESTABELECIMENTO_FORM_UPLOAD })
    }
}
function estabelecimentoGet(estabelecimento) {
    return dispatch => {
        dispatch({ type: estabelecimentoConstants.ESTABELECIMENTO_GET, estabelecimento })
    }
}

function getAll(ativos = false) {
    return dispatch => {
        estabelecimentoService.getAll(ativos)
            .then(
                estabelecimentos => {
                    dispatch({
                        type: estabelecimentoConstants.ESTABELECIMENTO_GETALL,
                        estabelecimentos
                    })

                },
                error => console.log(error)
            )
    }
}


function estabelecimentoCreate(estabelecimento) {
    return dispatch => {
        estabelecimentoService.estabelecimentoCreate(estabelecimento)
            .then(
                estabelecimento => {
                    dispatch({
                        type: estabelecimentoConstants.ESTABELECIMENTO_CREATE,
                        estabelecimento
                    })
                    history.push('/estabelecimentos')
                },
                error => console.log(error)
            )
    }
}

function estabelecimentoUpdate(estabelecimento) {
    return dispatch => {

        estabelecimentoService.estabelecimentoUpdate(estabelecimento)
            .then(
                estabelecimento => {
                    dispatch({
                        type: estabelecimentoConstants.ESTABELECIMENTO_UPDATE,
                        estabelecimento
                    })
                    history.push('/estabelecimentos')

                },
                error => console.log(error)
            )
    }


}


function estabelecimentoRemove(estabelecimento) {
    return dispatch => {

        estabelecimentoService.estabelecimentoRemove(estabelecimento._id)
            .then(
                success => {
                    dispatch({
                        type: estabelecimentoConstants.ESTABELECIMENTO_REMOVE
                    })
                    history.push('/estabelecimentos')

                },
                error => console.log(error)
            )

    }
}

function imagemUpload(estabelecimento) {
    return dispatch => {
        estabelecimentoService.imagemUpload(estabelecimento._id, estabelecimento.arquivo)
            .then(
                estabelecimento => {
                    dispatch({
                        type: estabelecimentoConstants.ESTABELECIMENTO_FORM_UPLOAD,
                        estabelecimento
                    })

                },
                error => console.log(error)
            )
    }
}