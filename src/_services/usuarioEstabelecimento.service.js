import { authHeader } from '../_helpers';
import axios from 'axios'

export const usuarioEstabelecimentoService = {
    getAll,
    usuarioCreate,
    usuarioRemove,
    usuarioUpdate,
    imagemUpload
};

function imagemUpload(id, photo) {

    let formData = new FormData()
    formData.append('photo', photo, photo.name);
    const requestOptions = {

        headers: authHeader(true)
    };
    return axios.post(`/usuariosestabelecimento/upload/${id}`, formData, requestOptions).then(data => {
        return data.data
    })
}

function getAll(estabelecimento) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`/usuariosestabelecimento/all/${estabelecimento}`, requestOptions)
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
    return axios.post('/usuariosestabelecimento', {
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
    return axios.post('/usuariosestabelecimento/alterar', {
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
    return axios.delete(`/usuariosestabelecimento/${id}`, requestOptions).then(data => {
        return data.data
    })
}



