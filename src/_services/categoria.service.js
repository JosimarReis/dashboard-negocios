import { authHeader } from '../_helpers';
import axios from 'axios'

export const categoriaService = {
    getAll,
    categoriaCreate,
    categoriaRemove,
    categoriaUpdate,
    imagemUpload
};

function imagemUpload(id, photo) {

    let formData = new FormData()
    formData.append('photo', photo, photo.name);
    const requestOptions = {

        headers: authHeader(true)
    };
    return axios.post(`/categoria/upload/${id}`, formData, requestOptions).then(data => {
        return data.data
    })
}


function getAll(filtros) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    let uri =  `/categoria/all`

    return axios.post(uri, filtros, requestOptions)
        .then(categorias => {
            return categorias.data
        })
}

function categoriaCreate(categoria) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/categoria', {
        categoria
    }, requestOptions).then(data => {
        return data.data
    })
}

function categoriaUpdate(categoria) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/categoria/alterar', {
        categoria: categoria
    }, requestOptions).then(data => {
        return data.data
    })
}
/**
 * 
 * @param {id} id 
 */
function categoriaRemove(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return axios.delete(`/categoria/${id}`, requestOptions).then(data => {
        return data.data
    })
}



