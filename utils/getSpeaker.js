const speaker = (frase) => {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(frase)
    const voices = synth.getVoices()

    utterThis.voice = voices[0]
    utterThis.pitch = 1
    utterThis.rate = 0.8
    utterThis.volume = 1

    synth.speak(utterThis)
}

export default speaker