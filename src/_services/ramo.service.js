import { authHeader } from '../_helpers';
import axios from 'axios'

export const ramoService = {
    getAll,
    ramoCreate,
    ramoRemove,
    ramoUpdate,
    imagemUpload
};

function imagemUpload(id, photo) {

    let formData = new FormData()
    formData.append('photo', photo, photo.name);
    const requestOptions = {

        headers: authHeader(true)
    };
    return axios.post(`/ramo-atividade/upload/${id}`, formData, requestOptions).then(data => {
        return data.data
    })
}


function getAll(ativos = false) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    let uri = ativos ? `/ramo-atividade/ativos` : `/ramo-atividade/all`
    return axios.get(uri, requestOptions)
        .then(ramos => {
            return ramos.data
        })
}

function ramoCreate(ramo) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/ramo-atividade', {
        ramo
    }, requestOptions).then(data => {
        return data.data
    })
}

function ramoUpdate(ramo) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/ramo-atividade/alterar', {
        ramo: ramo
    }, requestOptions).then(data => {
        return data.data
    })
}
/**
 * 
 * @param {id} id 
 */
function ramoRemove(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return axios.delete(`/ramo-atividade/${id}`, requestOptions).then(data => {
        return data.data
    })
}



