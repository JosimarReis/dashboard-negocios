import { authHeader } from '../_helpers';
import axios from 'axios'

export const estabelecimentoService = {
    getAll,
    estabelecimentoCreate,
    estabelecimentoRemove,
    estabelecimentoUpdate,
    imagemUpload
};

function imagemUpload(id, photo) {

    let formData = new FormData()
    formData.append('photo', photo, photo.name);
    const requestOptions = {

        headers: authHeader(true)
    };
    return axios.post(`/estabelecimentos/upload/${id}`, formData, requestOptions).then(data => {
        return data.data
    })
}


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    let uri =`/estabelecimentos/all`
    return axios.get(uri, requestOptions)
        .then(estabelecimentos => {
            return estabelecimentos.data
        })
}

function estabelecimentoCreate(estabelecimento) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/estabelecimentos', {
        estabelecimento
    }, requestOptions).then(data => {
        return data.data
    })
}

function estabelecimentoUpdate(estabelecimento) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/estabelecimentos/alterar', {
        estabelecimento: estabelecimento
    }, requestOptions).then(data => {
        return data.data
    })
}
/**
 * 
 * @param {id} id 
 */
function estabelecimentoRemove(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return axios.delete(`/estabelecimentos/${id}`, requestOptions).then(data => {
        return data.data
    })
}



