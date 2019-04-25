import { authHeader } from '../_helpers';
import axios from 'axios'

export const userService = {
    login,
    logout,
    getAll,
    usuarioCreate,
    usuarioRemove,
    usuarioUpdate
};

function login(email, senha) {
    return axios.post('/auth/authenticate', {
        email: email, senha: senha
    })
        .then(data => {
            let user = { ...data.data }

            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`/usuarios/all`, requestOptions)
        .then(users => {
            return users.data
        })
}
/**
 * 
 * @param {User} user 
 */
function usuarioCreate(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return axios.post('/usuarios', {
        usuario: user
    }, requestOptions).then(data => {
        return data.data
    })
}
/**
 * 
 * @param {User} user 
 */
function usuarioUpdate(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return axios.post('/usuarios/alterar', {
        usuario: user
    }, requestOptions).then(data => {
        return data.data
    })
}
/**
 * 
 * @param {id} id 
 */
function usuarioRemove(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return axios.delete(`/usuarios/${id}`, requestOptions).then(data => {
        return data.data
    })
}



