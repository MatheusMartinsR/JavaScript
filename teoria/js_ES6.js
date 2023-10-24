const pessoa = {nome: "Joao", idade: 40}

const{nome: nome2, idade: idade2} = pessoa;

console.log(nome2, idade2)

const numeros = [1,2,3,4]

const [primeiro, segundo, terceiro, quarto] = numeros;

console.log(primeiro, segundo, terceiro, quarto);

const soma = (...args) => args.reduce((total, numero) => total + numero,0)

console.log(soma(1,2,3,4,5,6,7))


function ola(nome = "Matheus"){
    console.log(`olá, ${nome}`)
}
ola()
ola("Maria")
