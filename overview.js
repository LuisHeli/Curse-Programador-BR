/* media*/

var alunos = ["pedro", "carlos", "arthur"]
var notaa = [8, 7, 3]
var notab = [9, 6, 4]

function media(n1, n2) {
    var media = (n1+n2)/2
    return media
}

function resultado(media) {
    if(m > 6) {
        return "aprovado"
    }
    else {
        return "desaprovado"
    }
}

for(var index in alunos) {

    var m = media(notaa[index], notab[index]) 

    console.log(alunos[index] + " - " + notaa[index] + " - " + notab[index] + " - " + m + " - " + resultado())
}

console.log("--------")

/*object*/

var aluno = {nome: "pedro", nota: 9}
console.log(aluno.nome) //da pra ser aluno[nome]

//array dentro do object

var aluno = {nome: "pedro", notas: [8, 7]}
console.log(aluno.notas[0])

//adicionar property em um object

aluno.matricula = 4235
console.log(aluno.matricula)

//adicionar property em um object, em forma de var

var outravariavel = "sobrenome"
aluno[outravariavel] = "henrique"
console.log(aluno) //vai estar sobrenome, no meio do object


console.log("------------------")


//outra forma de fazer um object

var aluno2 = new Object

aluno2.nome = "carlos"
aluno2.notas = [8, 7]

console.log(aluno2)



console.log("--------")
//exemplo de metodo no obejct

function calcmedia () {
    return (this.notas[0] + this.notas[1])/2
}

var aluno = {nome: "pedro", notas: [8, 7], 
             media: calcmedia
}

var aluno1 = {nome: "carlos", notas: [9, 8], media: calcmedia}

console.log(aluno.nome + " - " + aluno.notas[0] + " - " + aluno.notas[1] + " - " + aluno.media())
console.log(aluno1.nome + " - " + aluno1.notas[0] + " - " + aluno1.notas[1] + " - " + aluno1.media())