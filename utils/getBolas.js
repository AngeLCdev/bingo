export default function getBolas() {
    const arrayBolas = []
    const bolaMax = 90

    for (let i = 1; i <= bolaMax; i++) {

        arrayBolas.push(i < 10 ? `0${i}` : i)
    }

    return arrayBolas
}