let listadeNumerosSorteados = [];
let numerolimite = 10;
let numerosecreto = gerarnumeroaleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2
    });
}

function exibirMensagemInicial(){
    exibirTextonaTela('h1', 'Jogo do numero secreto');
    exibirTextonaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial(); 
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numerosecreto) {
        exibirTextonaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto){
            exibirTextonaTela('p', 'O número secreto é menor');
        } else {
            exibirTextonaTela('p', 'O número secreto é maior');
        }
        tentativas++; 
        limparCampo ();
    }
 }

function gerarnumeroaleatorio() {
   let NumeroEscolhido = parseInt(Math.random() * numerolimite + 1);
   let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numerolimite) {
    listadeNumerosSorteados = []
   };

   if (listadeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarnumeroaleatorio();
   } else {
        listadeNumerosSorteados.push(NumeroEscolhido);
        console.log(listadeNumerosSorteados);
        return  NumeroEscolhido;
    }
   }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numerosecreto = gerarnumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}