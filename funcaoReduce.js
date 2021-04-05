const carrinho = [
    {nome:'Caneta', qtda:10, preco:2.80},
    {nome:'Caderno', qtda:0, preco:22.80},
    {nome:'Borracha', qtda:4, preco:12.80},
    {nome:'apontador', qtda:0, preco:4.80}
]

const getTotalItem = item => item.qtda * item.preco

const total = (ac, el) => ac + el //acumulador e elemento

const valorTotal = carrinho
            .map(getTotalItem)
            .reduce(total)

//console.log(valorTotal)

//Novo exemplo
const carrinhoFragil = [
    {fragil: true, nome:'Caneta', qtda:10, preco:2.80},
    {fragil: false, nome:'Caderno', qtda:1, preco:22.80},
    {fragil: true, nome:'Borracha', qtda:4, preco:12.80},
    {fragil: false, nome:'apontador', qtda:1, preco:4.80}
]
//1 Fragil true
//2 Total item
//3 Media

const isFragil = item => item.fragil
const frageis = carrinhoFragil.filter(isFragil)
console.log(frageis)

const totalItem = item => item.qtda * item.preco
const totaisFageis = frageis.map(totalItem)
console.log(totaisFageis)

//solucao1 media
const mediaFrageis = (acc, el, index, array) => {
    if (index + 1 === array.length){
        return (acc + el)/array.length
    }
    return acc + el
}
//solucao2 media
const mediaFragil2 = (acc, el) => {
    const novaQtda = acc.qtda + 1
    const novoTotal = acc.total + el
    return {
        qtda : novaQtda,
        total: novoTotal,
        media: novoTotal / novaQtda
    }
}
const mediaInicio = {
        qtda : 0,
        total: 0,
        media: 0
}
const mediaGeral = carrinhoFragil
                .filter(isFragil)
                .map(totalItem)
                .reduce(mediaFragil2, mediaInicio)
                .media
console.log(mediaGeral)

//Meu reduce
Array.prototype.MeuReduce = function(fn, inicial){
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}
const mediaGeralMeuReduce = carrinhoFragil
                .filter(isFragil)
                .map(totalItem)
                .MeuReduce(mediaFragil2, mediaInicio)
console.log(mediaGeralMeuReduce)