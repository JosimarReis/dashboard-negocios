import { produtoService } from "../../_services/produto.service";
//import { produtosActions } from "../../_store/_actions";

const asyncValidate = async (values/*, dispatch*/) => {
    await produtoService.produtoCodBar(values.codbar)
        .then(produto => {
            if (produto.codbar === values.codbar && !values._id)
                // eslint-disable-next-line no-throw-literal
                throw {
                    codbar: 'Codigo de barras já utilizado',
                    _error: 'Codigo de barras já utilizado'
                }
           
        })
    
}

export default asyncValidate