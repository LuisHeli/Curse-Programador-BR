var calcmedia = function() {
    return (this.nota1 + this.nota2)/2
}

function criaraluno(nome1, n1, n2) {
   
    return {
        nome: nome1, 
        nota1: n1,
        nota2: n2,
        media: function(){
        return (this.nota1 + this.nota2)/2
        }
    }

}

var turma = [
    criaraluno("pedro", 9, 8),
    criaraluno("carlos", 5, 4),
    criaraluno("joao", 8, 7)
]

var aluno = turma[0]

for(var aluno of turma) {
    console.log(aluno.nome + " - " + aluno.nota1 + " - " + aluno.nota2 + " - " + aluno.media())
}