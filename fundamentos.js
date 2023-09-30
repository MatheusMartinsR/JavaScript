var numero = 20;

console.log(numero + " e sou dev back end")

console.log(typeof numero);

var booleano = true

console.log(typeof booleano)

var meuArray = [1,2,3,4,5]
console.log(meuArray)

var meuNull = null;


var meuUndefined = undefined;
console.log(meuUndefined)

let x = 10;
console.log(x + 100)
const y = 5
console.log(y + 1000)


console.log(x != y)

console.log(10 < 5 && 20 > 5)

console.log(10 < 5 || 20 < 10)

const num = "123"
const numConvertido = Number(num);

console.log(numConvertido)
console.log(typeof numConvertido)

const idade = 14
if(idade < 13){
    console.log("Criança")
}else if(idade <=15){
    console.log('Adolescente')
}else{
    console.log("Adulto")
}


const fruta = "Mamão"

switch(fruta){
    case 'Banana':
        console.log("Banana é a fruta")
        break;
    case "Maça":
        console.log("Maça é a fruta")
        break;
    default:
            console.log("Não existe essa fruta")
}

for(let i = 0; i < 5; i = i++){
    console.log("O valor de i é: " + i)
}








