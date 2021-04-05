//Exemplo de composicao de funcao 
function composicao(...funcs){
    return function(valor){
        return funcs.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc){
                return fn(await acc)
            } else{
                return fn(acc)
            }
        }, valor)
    }
}

const motrarTexto = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(console.log('Teste'))
            }, 3000)
        } catch (error) {
            reject(`Error : ${error}`)
        }
    })
}
composicao(
    motrarTexto
)(console.log)