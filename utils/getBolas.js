export default function getBolas({ min, max }) {
    const arrayBolas = []
    let minArray = parseInt(min)
    let maxArray = parseInt(max)
    for (let i = minArray; i <= maxArray; i++) {

        arrayBolas.push(i < 10 ? `0${i}` : i)
    }

    return arrayBolas
}