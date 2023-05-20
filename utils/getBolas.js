export default function getBolas({ min, max }) {
    const arrayBolas = []
    let minArray = parseInt(min)
    let maxArray = parseInt(max)
    let amanyoSorteo = [6, 10, 15, 26, 27, 35]
    for (let i = minArray; i <= maxArray; i++) {

        //!amanyoSorteo.includes(i) ? arrayBolas.push(i < 10 ? `0${i}` : i) : null
        arrayBolas.push(i < 10 ? `0${i}` : i)
    }

    return arrayBolas
}