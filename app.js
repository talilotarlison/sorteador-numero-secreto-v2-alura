var numerosSorteados = new Set();

var numeroTentativas = 3;

let numeroSorte = Math.floor(Math.random() * 10 + 1);


function chutarNumero() {
    // pegar valor do input do usuario
    var valorChuteUser = document.getElementById("valor_chute").value;
    var mostrarTelaResultado = document.querySelector('.texto__paragrafo');

    numerosSorteados.add(numeroSorte);

    if (valorChuteUser == '') {
        mostrarTelaResultado.innerText = "Digite algum numero para sorteio!";
    } else {
        if (numeroTentativas <= 1) {
            estadosBotoes(true, 'disabled');
            setTimeout(() => {
                mostrarTelaResultado.innerText = `Esgotou suas tentativas! O numero da sorte era ${numeroSorte}!`;
            }, 1000);
            verificarNumeroSoterado(valorChuteUser, numeroSorte);
        } else {
            numeroTentativas--;
            verificarNumeroSoterado(valorChuteUser, numeroSorte);
            console.log(numerosSorteados);
        }
    }
}

function mostrarTelaResultadoTela(resultado, numeroSorte) {
    // mostra na tela resultado do chute
    var mostrarTelaResultado = document.querySelector('.texto__paragrafo');
    if (resultado) {
        mostrarTelaResultado.innerText = `Você acertou!! o numero da sorte é ${numeroSorte}!`;
    } else {
        mostrarTelaResultado.innerText = "Você erro o numero!";
        limparCampoInput();
    }

}

function verificarNumeroSoterado(valorChuteUser, numeroSorte) {
    if (parseInt(valorChuteUser) == numeroSorte) {
        mostrarTelaResultadoTela(true, numeroSorte);
        estadosBotoes(true, 'disabled');
    } else {
        mostrarTelaResultadoTela(false);
        // numeroTentativas--;
    }

}

function limparCampoInput() {
    document.getElementById("valor_chute").value = ' ';
}


function estadosBotoes(estadoBtnChutar, EstadoBtnnovoJogo) {
    var destivarBtn = document.querySelector('.btnChutar');
    var btnNovoJogo = document.querySelector('.btnNovoJogo');
    destivarBtn.setAttribute("disabled", estadoBtnChutar);
    btnNovoJogo.removeAttribute(EstadoBtnnovoJogo);
}

function novoJogo() {
    var mostrarTelaResultado = document.querySelector('.texto__paragrafo');

    if (numerosSorteados.has(SorteiaNovoNumero())) {
        SorteiaNovoNumero();
        novoJogo()
        console.log(numerosSorteados);
    } else {
        console.log(numerosSorteados);
        numeroTentativas = 3;
        var destivarBtn = document.querySelector('.btnChutar');
        var btnNovoJogo = document.querySelector('.btnNovoJogo');
        destivarBtn.removeAttribute("disabled");
        btnNovoJogo.setAttribute("disabled", true);
        chutarNumero();
        mostrarTelaResultado.innerText = "Escolha um numero entre 0 a 10!";
    }
}


var SorteiaNovoNumero = ()=>{
    var novoNumeroSorte = Math.floor(Math.random() * 10 + 1);

   numeroSorte = novoNumeroSorte;
   return numeroSorte;
}

