import { produtosConstants } from '../_constants';
import { produtoService } from '../../_services';
//import { history } from '../../_helpers';

export const produtosActions = {
    getProdutos,
    setFiltros,
    produtoUpdate,
    showForm,
    popularForm,
    showFormImage,
    imagemUpload,
    produtoCodBar,
    produtoCreate
}
function produtoCodBar(codBar) {
    return dispatch => {
        produtoService.produtoCodBar(codBar)
            .then(
                produto => {
                    dispatch({
                        type: produtosConstants.PRODUTO_CODBAR,
                        codbar: (produto.codbar === this.codbar) ? true : false
                    })

                },
                error => console.log(error)
            )
    }
}
function getProdutos(filtros) {
    return dispatch => {
        dispatch({ type: produtosConstants.PRODUTO_GETALL_REQUEST })
        produtoService.getProdutos(filtros)
            .then(
                produtos => {
                    dispatch({
                        type: produtosConstants.PRODUTO_GETALL_SUCCESS,
                        produtos
                    })

                },
                error => console.log(error)
            )
    }
}

function produtoUpdate(produto) {
    return dispatch => {

        produtoService.produtoUpdate(produto)
            .then(
                produto => {
                    dispatch({
                        type: produtosConstants.PRODUTO_UPDATE,
                        produto
                    })


                },
                error => console.log(error)
            )
    }
}
function produtoCreate(produto) {
    return dispatch => {

        produtoService.produtoCreate(produto)
            .then(
                produto => {
                    dispatch({
                        type: produtosConstants.PRODUTO_CREATE,
                        produto
                    })


                },
                error => console.log(error)
            )
    }
}
function imagemUpload(produto) {
    return dispatch => {
        produtoService.imagemUpload(produto._id, produto.arquivo)
            .then(
                produto => {
                    dispatch({
                        type: produtosConstants.PRODUTO_UPLOAD,
                        produto
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

    if (!filtros.grupos || filtros.grupos.filter((item) => item === 'todos').length === 1)
        delete (filtros.grupos)
    else
        filtros.grupos = filtros.grupos.filter((item) => (item !== 'todos'))
    
    if (!filtros.categorias || filtros.categorias.filter((item) => item === 'todos').length === 1)
        delete (filtros.categorias)
    else
        filtros.categorias = filtros.categorias.filter((item) => (item !== 'todos'))

    if (!filtros.marcas || filtros.marcas.filter((item) => item === 'todos').length === 1)
        delete (filtros.marcas)
    else
        filtros.marcas = filtros.marcas.filter((item) => (item !== 'todos'))

    return dispatch => {
        localStorage.setItem('filtros', JSON.stringify(filtros))
        dispatch({ type: produtosConstants.PRODUTO_FILTROS, filtros })

        dispatch({ type: produtosConstants.PRODUTO_GETALL_REQUEST })
        produtoService.getProdutos(filtros)
            .then(
                produtos => {
                    dispatch({
                        type: produtosConstants.PRODUTO_GETALL_SUCCESS,
                        produtos
                    })

                },
                error => console.log(error)
            )
    }

}


function showForm() {
    return dispatch => {
        dispatch({ type: produtosConstants.PRODUTO_FORM_SHOW })
    }
}

function showFormImage() {
    return dispatch => {
        dispatch({ type: produtosConstants.PRODUTO_IMAGE_FORM_SHOW })
    }
}
function popularForm(produto) {
    //tags de array para string no formado "tag1, tag2, tag3"
    if(produto.tags !== []){
        produto.tags = produto.tags.reduce((item, next)=> item!==''?`${item}, ${next}`:next,'')
      }
    return dispatch => {
        dispatch({ type: produtosConstants.PRODUTO_POPULAR_FORM, produto })
    }
}