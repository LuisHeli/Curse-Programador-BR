var alunos = ["pedro", "carlos", "antonio"]
var notasa = [8, 5, 7]
var notasb = [9, 3, 4]

function media(n1, n2) {
    var media = (n1+n2)/2
    return media
}

function resultado(media) {
    if(media > 6) {
        return "aprovado"
    }
    else {
        return "reprovado"
    }
}

for (var index in alunos) {

    var n1 = notasa[index]
    var n2 = notasb[index]
    var m = media(n1, n2)
    
    console.log(alunos[index] + " - " + notasa[index] + " - " + notasb[index] + " - " + media(notasa[index], notasb[index]) + " - " + 
    resultado(m))
}