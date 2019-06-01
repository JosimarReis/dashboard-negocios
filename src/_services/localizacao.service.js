import { authHeader } from '../_helpers';
import axios from 'axios'

export const localizacaoService = {
    cidadePorCep,
    cidadePorUf,
    cidadePorId
};

function cidadePorCep(cep) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    return axios.post(`/cidades/cep`, { cep }, requestOptions)
        .then(cidade => {
            return cidade.data
        })
}

function cidadePorUf(uf) {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`/cidades/uf/${uf}`, requestOptions)
        .then(cidades => {
            return cidades.data
        })
}
function cidadePorId(id) {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(`/cidades/${id}`, requestOptions)
        .then(cidade => {
            return cidade.data
        })
}
