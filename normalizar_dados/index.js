const path = require('path')

const func = require('../normalizar_dados/funcoes')

const caminho = path.join(__dirname, 'legendas')

const simbolos = [
    '.','?','-',',','"','♪','_','<i>','</i>','\r','[',']', '(', ')'
]

func.lerDiretorio(caminho)
    .then(arquivos => func.filtraArquivoPor(arquivos, '.srt'))
    .then(itens => func.lerTodosArquivos(itens))
    .then(func.mesclarConteudo)
    .then(func.separarPorLinhas)
    .then(func.removerLinhasVazias)
    .then(func.removerLinhaParametro('-->'))
    .then(func.removerNumero)
    .then(func.removerSimbolos(simbolos))
    .then(func.mesclarConteudo)
    .then(func.separarPorPalavra)
    .then(func.removerLinhasVazias)
    .then(func.removerNumero)
    .then(func.agruparPalavras)
    .then(func.ordenacaoPorParametro('qtd', 'desc'))
    .then(console.log)