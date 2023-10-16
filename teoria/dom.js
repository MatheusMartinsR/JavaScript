//const link = document.querySelector("a");
//console.log(link)
//link.setAttribute("href", "https://youtube.com")
//console.log(link.getAttribute("href"));


//const elemento = document.querySelector("#meuId");

//elemento.classList.add("novaClasse")

//const elemento1 = document.querySelector("#meuId");

//elemento1.style.color = "blue";
//elemento1.style.backgroundColor = "red";


//const element4 = document.querySelector("#meuInput");

//const pai = element4.parentNode;
//console.log(pai)


//const primeiroFilho = pai.firstChild;
//console.log(primeiroFilho)


const novoElemento = document.createElement("div")
console.log(novoElemento)

novoElemento.textContent = "Minha div de JS"
console.log(novoElemento)

document.body.appendChild(novoElemento)


const botao = document.querySelector("button");
botao.addEventListener("click", function(){
    console.log("O botão foi clicado")
});


const elemento5 = document.querySelector("#meuFormulario")
elemento5.addEventListener("mouseover", function(){
    console.log("O mouse passou por aqui");
});

const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", function(){
    console.log("Tecla pressionada");
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log("O formulário foi enviado!")
})


