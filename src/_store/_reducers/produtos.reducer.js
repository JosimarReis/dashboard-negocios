import { produtosConstants } from '../_constants';

export function produtos(state = { produtoShowForm: false, showFormImage: false }, action) {
  switch (action.type) {

    case produtosConstants.PRODUTO_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case produtosConstants.PRODUTO_FORM_SHOW:
      return {
        ...state,
        produtoShowForm: !state.produtoShowForm
      }
    case produtosConstants.PRODUTO_IMAGE_FORM_SHOW:
      return {
        ...state,
        showFormImage: !state.showFormImage
      }
    case produtosConstants.PRODUTO_UPLOAD:
      return {
       ...state,
       produto: action.produto
      }
    case produtosConstants.PRODUTO_POPULAR_FORM:
      return {
        ...state,
        produto: action.produto
      }
    case produtosConstants.PRODUTO_UPDATE:
      return {
        ...state,
        produto: action.produto
      }
    case produtosConstants.PRODUTO_CREATE:
      return {
        ...state,
        produto: action.produto
      }
    case produtosConstants.PRODUTO_REMOVE:
      return {
        ...state,
      }
    case produtosConstants.PRODUTO_GETALL_SUCCESS:
      return {
        ...state,
        ...action.produtos,
        loading: false
      }
    case produtosConstants.PRODUTO_FILTROS:
      return {
        ...state,
        filtros: action.filtros,
      }
    case produtosConstants.PRODUTO_GET_MARCAS:
      return {
        ...state,
        marcas: action.marcas,
      }
    case produtosConstants.PRODUTO_GET_CATEGORIAS:
      return {
        ...state,
        categorias: action.categorias,
      }
    default:
      return state
  }
}