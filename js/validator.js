

function verificaNomeVazio() {
    var input = document.getElementById("inputName");
    var nome = input.value.trim();

    if (nome.length > 0 && nome.length < 10) {
        console.log("Nomeeeee: " + nome);
        console.log(nome.length);
        alert("Nome deve ter no mínimo 10 caracteres");
    }

    if (nome == "" || nome == null || nome.length < 1) {
        alert("Nome não pode estar vazio");
    }


}

function verificaEmail() {
    var input = document.getElementById("inputEmail");
    var email = input.value.trim();
    var re = /\S+@\S+\.\S+/;
    var response = re.test(email);
    if(response==false){
        alert("Email inválido, insira um email valido.");
    }
    console.log(response);
}

function verificaTeclaTab(event, boolean) {
    if (event.keyCode === 9) {
        if (boolean == "true") {
            verificaEmail();
        } else {
            verificaNumeroVazio();
        }
    }
}

function verificaNumeroVazio() {

    var inputNumber = document.getElementById("inputNumero");
    var fone = inputNumber.value.trim();

    if (fone.length > 0 && fone.length < 10) {
        console.log("Foneeeee: " + fone);
        console.log(fone.length);
        alert("Fone deve ter 10 números");
        return false;
    }

    if (fone == "" || fone == null || fone.length < 1) {
        alert("Fone não pode estar vazio");
        console.log("Foneeeee: " + fone);
        return false;

    }

}

function exibirAviso() {
    var aviso = document.createElement("div");
    alert("A opinião deve conter de 10 a 50 caracteres.");
  }

  function validaOpiniao() {
    var opiniao = document.getElementById("opiniao").value;

    if (opiniao.trim() === "" || opiniao.length < 10 || opiniao.length > 50) {
      exibirAviso();
      return false;
    }

    return true;
  }

  