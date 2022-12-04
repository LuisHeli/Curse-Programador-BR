var tela = document.getElementById("tela")
var ctx = tela.getContext("2d")

ctx.moveTo(0,0)
ctx.lineTo(100,100)
ctx.lineWidth = 2
ctx.strokeStyle="red"
ctx.stroke()