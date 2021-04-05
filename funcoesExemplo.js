//Exemplos de funcao chamando outra funcao.
//somar(3)(4)(5)
const soma = function(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(soma(3)(4)(5))

//Exemplos passando funcao com parametro.
//calcula(3)(7)(fn)
const calcular = function(a){
    return function(b){
        return function(fn){
            return fn(a,b);
        }
    }
}
const fnSoma = function(a,b){
    return a + b
}
const fnMult = function(a,b){
    return a * b
}
console.log(calcular(3)(7)(fnSoma));
console.log(calcular(3)(7)(fnMult));

//Exemplos funcao arrow function dentro da outra
const potencia = base => exp => Math.pow(base,exp)
console.log(potencia(2)(4))

//Exemplos funcao callback
const somar = (a, b) => console.log(a + b);
const subrair = (a, b) => console.log(a - b);

const exec = (fn, a, b) => fn(a,b);

exec(somar, 2, 8);
exec(subrair, 8, 2);