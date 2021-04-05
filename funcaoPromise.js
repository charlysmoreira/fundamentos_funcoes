//Exemplo de promise
const gerarNumero = (min, max, tempo) => {
    if (min > max) [min, max] = [max, min]
    return new Promise(resolve => {
        setTimeout(function(){
            const numeroGerado = parseInt(Math.random() * max - min) + min
            resolve(numeroGerado)
        }, tempo)
    })
}

const numeroGerados = () => Promise.all([
            gerarNumero(1,30, 1500),
            gerarNumero(1,30, 100),
            gerarNumero(1,30, 500),
            gerarNumero(1,30, 5000)])

console.time('label')
numeroGerados().then(console.log).then(() => console.timeEnd('label'))

//Promise Ler arquivo
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const read = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, {}, function(_, data){
            resolve(data.toString())
        })
    })
}
//read(caminho)
//   .then(valor => valor.split('\n'))
//    .then(conteudo => conteudo.join(','))
//    .then(text => `Ó texto final é: ${text}`)
//    .then(console.log)

//Tratamento de erro em Promise
const gerarErroOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            cons.log()
            if (Math.random() < chanceErro){
                reject('Ocorreu um error')
            }else {
                resolve(valor)
            }
            
        } catch (error) {
            reject('error no catch')
        }
    })
}

gerarErroOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
            v => console.log(v), //caso ocorra um erro nesta chamada do then
            err => console.log(`Error especifico: ${err}`)
        )
    .catch(console.log)