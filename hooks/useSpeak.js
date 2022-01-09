export default function useSpeak({ speak }) {
    const utterThis = new SpeechSynthesisUtterance(speak)

    const voices = synth.getVoices()

    utterThis.voice = voices[0]
    utterThis.pitch = 1
    utterThis.rate = 0.8
    utterThis.volume = 1
    synth.cancel()
    synth.speak(utterThis)

}