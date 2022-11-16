function criaraluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
        return (this.nota1 + this.nota2)/2;
        }
    }
}

var turma = [
    criaraluno("pedro", 7, 9),
    criaraluno("carlos", 5, 4),
]

var aluno = turma[0]
var aluno1 = turma[1]

turma.forEach(function(elemento) {
    console.log(aluno)
})