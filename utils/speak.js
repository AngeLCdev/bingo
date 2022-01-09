export default function speak({ numero }) {

    if (numero) {

        let numeroSpeak = typeof numero === 'string' ? numero.substring(1, 2) : numero
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(numeroSpeak)

        const voices = synth.getVoices()

        utterThis.voice = voices[0]
        utterThis.pitch = 1
        utterThis.rate = 0.8
        utterThis.volume = 1
        synth.cancel()
        synth.speak(utterThis)
    }

}

