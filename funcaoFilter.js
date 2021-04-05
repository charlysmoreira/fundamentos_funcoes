const carrinho = [
    {nome:'Caneta', qtda:10, preco:2.80},
    {nome:'Caderno', qtda:0, preco:22.80},
    {nome:'Borracha', qtda:4, preco:12.80},
    {nome:'apontador', qtda:0, preco:4.80}
]

const getNome = item => item.nome
const qtdMaiorZero = item => item.qtda > 0

const results = carrinho
                .filter(qtdMaiorZero)
                .map(getNome)

console.log(results)

//Meu filter
Array.prototype.meuFilter = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        const resultado = fn(this[i], i, this)
        if (resultado) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}
const results2 = carrinho
                .meuFilter(qtdMaiorZero)
                .map(getNome)

console.log(results2)