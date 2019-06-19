import { localizacaoService } from "../../../_services/localizacao.service";
import { estabelecimentoActions } from "../../../_store/_actions";

const asyncBuscaCep = async (values, dispatch) => {

   if (!values.cidade.cep)
      // eslint-disable-next-line no-throw-literal
      throw {
         _error: 'Digite o CEP'
      }

   await localizacaoService.cidadePorCep(values.cidade.cep)
      .then((cidade) => {
         const estabelecimento = { ...values, cidade }
         dispatch(estabelecimentoActions.estabelecimentoGet(estabelecimento))
      })

}

export default asyncBuscaCep