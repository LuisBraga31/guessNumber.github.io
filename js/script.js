const send = document.querySelector('.send');
const reset = document.querySelector('.reset');
const bet = document.querySelector('#bet');

let numberFind = 0;
let tentativas = 1;

function refresh() {
    tentativas = 0;
    numberFind = parseInt(Math.random() * 100);
}

function resetNumber() {
    alert('O jogo foi resetado e um novo número foi gerado!');
    bet.value = '';
    refresh();
}

function verify() {

    let escolha = document.getElementById('bet').value;

    if(escolha > 100 || escolha < 1) {
        alert('Apósta Inválida');
        return;
    }

    if(escolha > numberFind) {
        tentativas++;
        alert('🚨 O número é Menor!!!🚨');
    } 
    else if(escolha < numberFind) {
        tentativas++;
        alert('🚨 O número é Maior!!!🚨');
    } else {
        alert(`✅ Parabéns!!! Você acertou o número em ` + tentativas + ` tentativas! ✅`);
    }



}

send.addEventListener('click', () => verify());
reset.addEventListener('click', () => resetNumber());

refresh();