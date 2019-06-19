import { usuarioEstabelecimentoConstants } from '../_constants';

export function usuarioEstabelecimento(state = { userFormShow: false, userFormImage: false, pass: false }, action) {
  switch (action.type) {

    case usuarioEstabelecimentoConstants.USUARIO_GETALL:
      return {
        ...state,
        items: action.usuarios
      }
    case usuarioEstabelecimentoConstants.USUARIO_FORM_SHOW:
      return {
        ...state,
        userFormShow: !state.userFormShow
      }
    case usuarioEstabelecimentoConstants.USUARIO_FORM_UPLOAD:
      return {
        ...state,
        userFormImage: !state.userFormImage
      }
    case usuarioEstabelecimentoConstants.USUARIO_PASS:
      return {
        ...state,
        pass: !state.pass
      }
    case usuarioEstabelecimentoConstants.USUARIO_GET:
      return {
        ...state,
        userUpdated: action.user
      }
    case usuarioEstabelecimentoConstants.USUARIO_ESTABELECIMENTO:
      return {
        ...state,
        estabelecimento: action.estabelecimento
      }
    default:
      return state
  }
}