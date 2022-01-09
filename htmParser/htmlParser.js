const ejs = require('ejs');
class htmlParser{
    static async Parse(data){
        try{
            return await ejs.renderFile('./views/relatorio/teste.ejs',data)
        }catch(erro){
            console.log(erro)
            return undefined
        }
        
    }
}

module.exports = htmlParser;