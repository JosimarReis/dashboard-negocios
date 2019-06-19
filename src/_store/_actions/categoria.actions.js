import { categoriaConstants } from '../_constants';
import { categoriaService } from '../../_services';
//import { alertActions } from './';
import { history } from '../../_helpers';

export const categoriaActions = {
    getAll,
    showForm,
    categoriaCreate,
    categoriaUpdate,
    categoriaRemove,
    categoriaGet,
    imagemUpload,
    formUpload,
    setFiltros
};

function showForm() {
    return dispatch => {
        dispatch({ type: categoriaConstants.CATEGORIA_FORM_SHOW })
    }
}

function formUpload() {
    return dispatch => {
        dispatch({ type: categoriaConstants.CATEGORIA_FORM_UPLOAD })
    }
}
function categoriaGet(categoria) {
    return dispatch => {
        dispatch({ type: categoriaConstants.CATEGORIA_GET, categoria })
    }
}


function getAll(filtros) {
    if (filtros.situacao === 'todos')
        delete (filtros.situacao)
    if (filtros.grupo === 'todos')
        delete (filtros.grupo)
    filtros.pagina = parseInt(filtros.pagina)
    filtros.limit = parseInt(filtros.limit)

    localStorage.setItem('filtrosCategorias', JSON.stringify(filtros))

    return dispatch => {
        categoriaService.getAll(filtros)
            .then(
                categorias => {
                    dispatch({
                        type: categoriaConstants.CATEGORIA_GETALL,
                        categorias
                    })

                },
                error => console.log(error)
            )
    }
}


function categoriaCreate(categoria) {
    return dispatch => {
        categoriaService.categoriaCreate(categoria)
            .then(
                categoria => {
                    dispatch({
                        type: categoriaConstants.CATEGORIA_CREATE,
                        categoria
                    })
                    history.push('/categorias')
                },
                error => console.log(error)
            )
    }
}

function categoriaUpdate(categoria) {
    return dispatch => {

        categoriaService.categoriaUpdate(categoria)
            .then(
                categoria => {
                    dispatch({
                        type: categoriaConstants.CATEGORIA_UPDATE,
                        categoria
                    })
                    history.push('/categorias')

                },
                error => console.log(error)
            )
    }


}


function categoriaRemove(categoria) {
    return dispatch => {

        categoriaService.categoriaRemove(categoria._id)
            .then(
                success => {
                    dispatch({
                        type: categoriaConstants.CATEGORIA_REMOVE
                    })
                    history.push('/categorias')

                },
                error => console.log(error)
            )

    }
}

function imagemUpload(categoria) {
    return dispatch => {
        categoriaService.imagemUpload(categoria._id, categoria.arquivo)
            .then(
                categoria => {
                    dispatch({
                        type: categoriaConstants.CATEGORIA_FORM_UPLOAD,
                        categoria
                    })

                },
                error => console.log(error)
            )
    }
}
function setFiltros(filtros) {

    if (filtros.situacao === 'todos')
        delete (filtros.situacao)
    filtros.pagina = parseInt(filtros.pagina)
    filtros.limit = parseInt(filtros.limit)

    if (!filtros.grupo || filtros.grupo.filter((item) => item === 'todos').length === 1)
        delete (filtros.grupo)
    else
        filtros.grupo = filtros.grupo.filter((item) => (item !== 'todos'))


    return dispatch => {
        localStorage.setItem('filtrosCategorias', JSON.stringify(filtros))
        dispatch({ type: categoriaConstants.CATEGORIA_FILTROS, filtros })

        dispatch({ type: categoriaConstants.PRODUTO_LOADING })
        categoriaService.getCategorias(filtros)
            .then(
                categorias => {
                    dispatch({ type: categoriaConstants.PRODUTO_LOADING })

                    dispatch({
                        type: categoriaConstants.PRODUTO_GETALL_SUCCESS,
                        categorias
                    })

                },
                error => console.log(error)
            )
    }

}
