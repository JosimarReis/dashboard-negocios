import { usuarioEstabelecimentoConstants } from '../_constants';
import { usuarioEstabelecimentoService } from '../../_services';
//import { alertActions } from './';
import { history } from '../../_helpers';

export const usuarioEstabelecimentoActions = {
    getAll,
    showForm,
    usuarioCreate,
    usuarioUpdate,
    usuarioRemove,
    usuarioGet,
    pass,
    imagemUpload,
    formUpload,
    setEstabelecimento
};


function showForm() {
    return dispatch => {
        dispatch({ type: usuarioEstabelecimentoConstants.USUARIO_FORM_SHOW })
    }
}
function pass() {
    return dispatch => {
        dispatch({ type: usuarioEstabelecimentoConstants.USUARIO_PASS })
    }
}
function formUpload() {
    return dispatch => {
        dispatch({ type: usuarioEstabelecimentoConstants.USUARIO_FORM_UPLOAD })
    }
}
function usuarioGet(usuario) {
    return dispatch => {
        dispatch({ type: usuarioEstabelecimentoConstants.USUARIO_GET, usuario })
    }
}
function setEstabelecimento(estabelecimento) {
    return dispatch => {
        dispatch({ type: usuarioEstabelecimentoConstants.USUARIO_ESTABELECIMENTO, estabelecimento })
        localStorage.setItem('estabelecimento', JSON.stringify(estabelecimento))
    }
}
function getAll(estabelecimento) {
    return dispatch => {
        usuarioEstabelecimentoService.getAll(estabelecimento)
            .then(
                usuarios => {
                    dispatch({
                        type: usuarioEstabelecimentoConstants.USUARIO_GETALL,
                        usuarios
                    })

                },
                error => console.log(error)
            )
    }
}


function usuarioCreate(usuario) {
    return dispatch => {
        dispatch({ type: usuarioEstabelecimentoConstants.USUARIO_FORM_SHOW })
        usuarioEstabelecimentoService.usuarioCreate(usuario)
            .then(
                usuario => {
                    dispatch({
                        type: usuarioEstabelecimentoConstants.USUARIO_CREATE,
                        usuario
                    })
                    history.push('/usuarios-estabelecimentos')
                },
                error => console.log(error)
            )
    }
}

function usuarioUpdate(usuario) {
    return dispatch => {

        usuarioEstabelecimentoService.usuarioUpdate(usuario)
            .then(
                usuario => {
                    dispatch({
                        type: usuarioEstabelecimentoConstants.USUARIO_UPDATE,
                        usuario
                    })
                    history.push('/usuarios-estabelecimentos')

                },
                error => console.log(error)
            )
    }


}


function usuarioRemove(usuario) {
    return dispatch => {

        usuarioEstabelecimentoService.usuarioRemove(usuario._id)
            .then(
                success => {
                    dispatch({
                        type: usuarioEstabelecimentoConstants.USUARIO_REMOVE
                    })
                    history.push('/usuarios-estabelecimentos')

                },
                error => console.log(error)
            )

    }
}

function imagemUpload(usuario) {
    return dispatch => {
        usuarioEstabelecimentoService.imagemUpload(usuario._id, usuario.arquivo)
            .then(
                usuario => {
                    dispatch({
                        type: usuarioEstabelecimentoConstants.USUARIO_FORM_UPLOAD,
                        usuario
                    })

                },
                error => console.log(error)
            )
    }
}