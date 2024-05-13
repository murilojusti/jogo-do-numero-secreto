let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector("input").value
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Você acertou!");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if (numeroSecreto > chute){
            exibirTextoNaTela("p", "O número secreto é maior que o chute");
        }
        else{
            exibirTextoNaTela("p", "O número secreto é menor que o chute");
        }
        tentativas++;
        limparCampo();
    }   
};

//Funções

function gerarNumeroAleatorio(){
    return parseInt(Math.random() *10 + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}