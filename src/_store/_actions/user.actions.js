import { userConstants } from '../_constants';
import { userService } from '../../_services';
//import { alertActions } from './';
import { history } from '../../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    showForm,
    userCreate,
    userUpdate,
    userRemove,
    userGet,
    pass,
    imagemUpload,
    formUpload,
    submitted
};

function login(email, senha) {
    return dispatch => {

        userService.login(email, senha)
            .then(
                user => {
                    dispatch({
                        type: userConstants.USER_LOGIN,
                        user
                    })

                },
                error => console.log(error)
            )
    }
}

function showForm() {
    return dispatch => {
        dispatch({ type: userConstants.USER_FORM_SHOW })
    }
}
function submitted() {
    return dispatch => {
        dispatch({ type: userConstants.USER_SUBMIT })
    }
}
function pass() {
    return dispatch => {
        dispatch({ type: userConstants.USER_PASS })
    }
}
function formUpload() {
    return dispatch => {
        dispatch({ type: userConstants.USER_FORM_UPLOAD })
    }
}
function userGet(user) {
    return dispatch => {
        dispatch({ type: userConstants.USER_GET, user })
    }
}
function logout() {
    return dispatch => {

        userService.logout();
        dispatch({ type: userConstants.USER_LOGOUT })
    }
}

function getAll() {
    return dispatch => {
        userService.getAll()
            .then(
                users => {
                    dispatch({
                        type: userConstants.USER_GETALL,
                        users
                    })

                },
                error => console.log(error)
            )
    }
}


function userCreate(user) {
    return dispatch => {
        dispatch({ type: userConstants.USER_FORM_SHOW })
        userService.usuarioCreate(user)
            .then(
                user => {
                    dispatch({
                        type: userConstants.USER_CREATE,
                        user
                    })
                    history.push('/usuarios')
                },
                error => console.log(error)
            )
    }
}

function userUpdate(user) {
    return dispatch => {

        userService.usuarioUpdate(user)
            .then(
                user => {
                    dispatch({
                        type: userConstants.USER_UPDATE,
                        user
                    })
                    history.push('/usuarios')

                },
                error => console.log(error)
            )
    }


}


function userRemove(user) {
    return dispatch => {

        userService.usuarioRemove(user._id)
            .then(
                success => {
                    dispatch({
                        type: userConstants.USER_REMOVE
                    })
                    history.push('/usuarios')

                },
                error => console.log(error)
            )

    }
}

function imagemUpload(usuario) {
    return dispatch => {
        userService.imagemUpload(usuario._id, usuario.arquivo)
            .then(
                usuario => {
                    dispatch({
                        type: userConstants.USER_FORM_UPLOAD,
                        usuario
                    })

                },
                error => console.log(error)
            )
    }
}