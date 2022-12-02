var lista = document.getElementById("lista")
var num = parseInt(lista.getAttribute("num"))

var conteudo = ""

for(var i = 0; i < num; i++) {
    conteudo += "<li>" + i + "<li>"
}

lista.innerHTML = conteudo