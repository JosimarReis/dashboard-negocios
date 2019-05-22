
const dominio = (uri) => {
    let ENV = 'dev'


    let local = 'http://localhost:3000'
    let producao = 'http://142.93.114.208:3000'
    //let homologacao = 'http://142.93.114.208:3000'

    return ENV === 'dev' ? local + uri : producao + uri
}


export default {
    apiUrl: dominio("/api"),
    urlImagens: dominio("/uploads/"),
    urlUsuarios: dominio("/uploads/usuarios/"),
    urlRamos: dominio("/uploads/ramoAtividade/"),
    imagemPadrao: dominio('/uploads/nao_encontrada.jpg'),
    usuarioPadrao: dominio("/uploads/usuarios/padrao.png")

}