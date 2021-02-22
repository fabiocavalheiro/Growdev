var nome = "Fabio Cavalheiro Vieira"
var cargo = "Aluno Growdev"


var nomehtml = document.getElementById("nome-no-html")
var cargoHtml = document.getElementById("cargo-no-html")
var texto1 = document.getElementById("texto-1")
var texto2 = document.getElementById("texto-2")

function colocarNomeNoHtml(nome){
    nomehtml.innerHTML = nome
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo
}

function cliqueNoProjetos(){
    console.log("Clicou no botão projetos")
    texto2.style.display = "block"
    texto1.style.display = "none"
}

function clicNoSobre(){
    console.log("Clicou no botão sobre")
    texto1.style.display = "block"
    texto2.style.display = "none"
}


colocarNomeNoHtml(nome)
colocarCargoNoHtml(cargo)