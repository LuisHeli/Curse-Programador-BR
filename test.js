var nota1 = parseInt(prompt("qual foi sua nota 1"))
var nota2 = parseInt(prompt("qual foi sua nota 2"))

var media = (nota1 + nota2)/2
var conceito = ""
if(media >= 8) {
    console.log("passou com media " + media)
     conceito = "otimo";
}
    else if(media >=6){ 
        console.log("passou, ficou com media " + media)
    conceito = "bom";
}
else if(media >= 4){
    console.log("nao passou, ficou com media " + media)
    conceito = "ruim";
}
else {
    console.log("nao passou, ficou com media " + media)
    conceito = "muito ruim";
}
console.log(conceito)


switch(conceito) {
    case "otimo":
        console.log("parabens")
        break;
    case "bom":
        console.log("bao")
        break;
    case "ruim":
        console.log("mal nota")
        break;
    case "muito ruim":
        console.log("muito mal nota")
        break;
    default:
        console.log("Ocorreu algum erro")
        break;
}

/*OBS: tem q ter o resto antes*/
