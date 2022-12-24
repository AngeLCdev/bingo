import getEasterEgg from "./getEasterEgg"
import getRima from "./getRima"
import speaker from "./getSpeaker"

export default function speak({ numero, tieneRima }) {

    if (numero) {

        let numeroSpeak = typeof numero === 'string' ? numero.substring(1, 2) : numero

        const rima = tieneRima ? getRima({ numero: numeroSpeak }) : getEasterEgg({ numero: numeroSpeak })
        const digitos = numeroSpeak.toString().split('')
        tieneRima && speaker(numeroSpeak)
        speaker(rima)
        if (tieneRima && digitos.length == 2) {
            //digitos.forEach(num => speaker(num))
        }


    }

}

