const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibiChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibiChuteNaTela() {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>    
    `
}

recognition.addEventListener('end', () => recognition.start())