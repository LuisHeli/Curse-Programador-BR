var lista = document.getElementById("lista")
lista.dataset.num = "5"
var num = parseInt(lista.dataset.num)

var conteudo = ""

for(var i = 0; i < num; i++) {
    conteudo += "<li>" + i + "<li>"
}

lista.innerHTML = conteudo
console.log(conteudo)

var id = parseInt(lista.dataset.id)
console.log(id)