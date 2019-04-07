import { authHeader } from '../_helpers';
import axios from 'axios'

export const userService = {
    login,
    logout,
    getAll
};

function login(email, senha) {
    return axios.post('/auth/authenticate',{
        email:email, senha:senha
    })
        .then(data => {
            let user = {...data.data} 

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
        .then(users =>{
            console.log('dados'+ JSON.stringify(users))
            return users
        })
}

