const carrinho = [
    {nome:'Caneta', qtda:10, preco:2.80},
    {nome:'Caderno', qtda:2, preco:22.80},
    {nome:'Borracha', qtda:4, preco:12.80},
    {nome:'apontador', qtda:1, preco:4.80}
]

const filtraNome = item => item.nome
const apenasNome = carrinho.map(filtraNome)

const valorTotal = item => item.qtda * item.preco
const valorTotalItens = carrinho.map(valorTotal)

console.log('Nomes: ' + apenasNome)
console.log('ValorTotal: ' + valorTotalItens)

//Criando um map
Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i ++){
        const novoValor = fn(this[i], i, this)
        novoArray.push(novoValor)
    }
    return novoArray
}

const nome = carrinho.meuMap(filtraNome)
console.log('Nomes: ' + nome)