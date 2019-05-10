import { authHeader } from '../_helpers';
import axios from 'axios'

export const produtoService = {
    getProdutos,
    getCategorias,
    getMarcas,
    produtoUpdate
};


function produtoUpdate(produto) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    return axios.post('/produtos/alterar', {
        produto: produto
    }, requestOptions).then(data => {
        return data.data
    })
}
function getProdutos(filtros) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    return axios.post(`/produtos/all`, { filtros }, requestOptions)
        .then(produtos => {
            return produtos.data
        })
}

function getCategorias() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`/produtos/categorias`, requestOptions)
        .then(produtos => {
            return produtos.data
        })
}

function getMarcas() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`/produtos/marcas`, requestOptions)
        .then(produtos => {
            return produtos.data
        })
}