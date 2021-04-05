const fs = require('fs')
const path = require('path')

//Ler diretorio
function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho)
            const arquivosCompletos = arquivos.map(item => path.join(caminho, item))
            resolve(arquivosCompletos)
        } catch (error) {
            reject(error)
        }
    })
}

//Aplicar filtro na extensao dos arquivos
const filtraArquivoPor = (array, extensao) => {
    if (Array.isArray(array)){
        return array.filter(item => item.endsWith(extensao))
    }
}

//Ler conteudo do arquivo
const lerArquivo = (caminho) => {
    return new Promise((resolve, reject) => {
        try{
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo)
        }catch(e){
            reject(e)
        }
    })
}
const lerTodosArquivos = (caminhos) => {
    return Promise.all(caminhos.map(item => lerArquivo(item)))
}

//Remover linhas vazias
const removerLinhasVazias = (conteudo) => {
    if(Array.isArray(conteudo)){
        return conteudo.filter((item) => item.trim())
    }
}

//Remover se tiver um padrao textual informado
const removerLinhaParametro = (padraoTexto) => {
    return function(array){
        return array.filter(item => !item.includes(padraoTexto))
    }
}

//Remover se tiver apenas numero
const removerNumero = (array) => {
    if(Array.isArray(array)){
        return array.filter(item => isNaN(item))
    }
}

//Remover simbolos do texto
const removerSimbolos = (simbolos) => {
    return function(array){
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)
        })
    }
}

const mesclarConteudo = conteudo => conteudo.join(' ')
const separarPorLinhas = texto => texto.split('\n')
const separarPorPalavra = texto => texto.split(' ')

//Resposavel por agrupar
const agruparPalavras = (palavras) => {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtd = acc[el] ? acc[el].qtd + 1 : 1
        acc[el] = {item: el, qtd}
        return acc
    }, {}))
}

//Resposansel pela ordenacao
const ordenacaoPorParametro = (attr, ordem = 'asc') => {
    return function(array){
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

module.exports = {
    lerDiretorio,
    filtraArquivoPor,
    lerTodosArquivos,
    removerLinhasVazias,
    removerLinhaParametro,
    removerNumero,
    removerSimbolos,
    mesclarConteudo,
    separarPorLinhas,
    separarPorPalavra,
    agruparPalavras,
    ordenacaoPorParametro
}