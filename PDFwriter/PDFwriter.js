const pdf = require('html-pdf')
const ejs = require('ejs');

class PDFwriter{
    static writerPDF(filename,html){
        pdf.create(html,{}).toFile(filename,(err,res)=>{
            if(err){
                console.log("Falha ao gerar o arquivo");
                return undefined;
            }else{
                console.log(res.filename);
            }
        })
        
    }
}

module.exports = PDFwriter;