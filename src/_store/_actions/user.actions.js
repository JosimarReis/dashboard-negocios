import { userConstants } from '../_constants';
import { userService } from '../../_services';
import { alertActions } from './';
import { history } from '../../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    showForm,
    userCreate,
    userUpdate,
    userRemove
};

function login(email, senha) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, senha)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function showForm() {
    return { type: userConstants.USER_FORM_SHOW };
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}



function userCreate(user) {
    return dispatch => {
        dispatch(request(user))

        userService.usuarioCreate(user)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error))
            )
    }
    function request(user) { return { type: userConstants.USER_CREATE } }
    function success(user) { return { type: userConstants.USERCREATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USERCREATE_FAILURE, error } }

}

function userUpdate(user) {
    return dispatch => {
        dispatch(request(user))

        userService.usuarioUpdate(user)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error))
            )


    }
    function request(user) { return { type: userConstants.USER_UPDATE } }
    function success(user) { return { type: userConstants.USERUPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USERUPDATE_FAILURE, error } }

}

function userRemove(user) {
    return dispatch => {
        dispatch(request(user))

        userService.usuarioRemove(user._id)
            .then(
                success => dispatch(() => { return { type: userConstants.USERREMOVE_SUCCESS } }),
                error => dispatch(failure(error))
            )


    }
    function request(user) { return { type: userConstants.USER_REMOVE } }
   // function success() { return { type: userConstants.USERREMOVE_SUCCESS } }
    function failure(error) { return { type: userConstants.USERREMOVE_FAILURE, error } }

}