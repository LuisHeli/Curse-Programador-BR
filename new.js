var usuarios = ["Pedro", "Carlos", "Joao"];

function inserirUsuario(nome) {

    var promise = new Promise(function(resolve, reject) {
       setTimeout(() => {
        usuarios.push(nome);

        var error = false;

        if(!error) {
            resolve();
        }
        else{
            reject("ERROR")
        }
        }, 1000)
    })
    return promise
}


function listarUsuarios() {
    console.log(usuarios)
}

async function executar() {
    await inserirUsuario("Leo")
    listarUsuarios()
}
executar();