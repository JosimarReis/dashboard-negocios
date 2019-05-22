import { ramoConstants } from '../_constants';

export function ramos(state = { ramoFormShow: false, ramoFormImage: false }, action) {
  switch (action.type) {

    case ramoConstants.RAMO_GETALL:
      return {
        ...state,
        items: action.ramos
      }
    case ramoConstants.RAMO_FORM_SHOW:
      return {
        ...state,
        ramoFormShow: !state.ramoFormShow
      }
    case ramoConstants.RAMO_FORM_UPLOAD:
      return {
        ...state,
        ramoFormImage: !state.ramoFormImage
      }
    case ramoConstants.RAMO_GET:
      return {
        ...state,
        ramoUpdated: action.ramo
      }

    default:
      return state
  }
}