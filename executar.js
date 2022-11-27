var calcmedia = function() {
    return (this.nota1 + this.nota2)/2
}

var turma = [
    {
        nome: "Pedro", nota1: 9, nota2: 8, media:calcmedia
    }
]

console.log(turma[0])
console.log(turma[0].media())