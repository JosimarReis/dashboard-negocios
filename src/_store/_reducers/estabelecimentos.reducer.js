import { estabelecimentoConstants } from '../_constants';

export function estabelecimentos(state = { estabelecimentoFormShow: false, estabelecimentoFormImage: false }, action) {
  switch (action.type) {

    case estabelecimentoConstants.ESTABELECIMENTO_GETALL:
      return {
        ...state,
        items: action.estabelecimentos
      }
    case estabelecimentoConstants.ESTABELECIMENTO_FORM_SHOW:
      return {
        ...state,
        estabelecimentoFormShow: !state.estabelecimentoFormShow
      }
    case estabelecimentoConstants.ESTABELECIMENTO_FORM_UPLOAD:
      return {
        ...state,
        estabelecimentoFormImage: !state.estabelecimentoFormImage
      }
    case estabelecimentoConstants.ESTABELECIMENTO_GET:
      return {
        ...state,
        estabelecimentoUpdated: action.estabelecimento
      }

    default:
      return state
  }
}