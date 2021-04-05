const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function mostrarConteudo(error, conteudo){
    console.log(conteudo.toString())
} 

fs.readFile(caminho, {}, mostrarConteudo)

const conteudo2 = (_, data) => console.log(data.toString());
fs.readFile(caminho, {}, conteudo2)