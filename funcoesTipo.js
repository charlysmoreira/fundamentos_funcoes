//Function declaration
function somaExemplo1(a,b){
    return a + b;
}
//Function Express
const somaExemplo2 = function(a,b){ //anonima (function(){}) ou nao (function abc(){}), 
    return a + b;                   //é acessada tanto por soma como abc
}
//Arrow Function
const mostraNome = (nome) => console.log("Seu nome é: " + nome);