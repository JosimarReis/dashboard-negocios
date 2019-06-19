import { categoriaConstants } from '../_constants';

let filtros = JSON.parse(localStorage.getItem('filtrosCategoria'));
const filtrosInitial = filtros ? filtros : {}
export function categorias(state = { categoriaFormShow: false, categoriaFormImage: false,loading:false, filtros: filtrosInitial }, action) {
  switch (action.type) {

    case categoriaConstants.CATEGORIA_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
      case categoriaConstants.CATEGORIA_GETALL:
        return {
          ...state,
          items: action.categorias
        }
    case categoriaConstants.CATEGORIA_FORM_SHOW:
      return {
        ...state,
        categoriaFormShow: !state.categoriaFormShow
      }
    case categoriaConstants.CATEGORIA_FORM_UPLOAD:
      return {
        ...state,
        categoriaFormImage: !state.categoriaFormImage
      }
    case categoriaConstants.CATEGORIA_GET:
      return {
        ...state,
        categoriaUpdated: action.categoria
      }
      case categoriaConstants.CATEGORIA_FILTROS:
        return {
          ...state,
          filtros: action.filtros,
        }
    default:
      return state
  }
}