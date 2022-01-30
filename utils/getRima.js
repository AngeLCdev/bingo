const getRima = ({ numero }) => {
    const rimas = [
        { num: 1, rima: 'Con mi pene te vacuno' },
        { num: 3, rima: 'Te la meto del revés' },
        { num: 4, rima: 'Por tu culo mi aparato' },
        { num: 5, rima: 'Por el culo te la hinco' },
        { num: 6, rima: 'Si os agacháis, me la veis' },
        { num: 8, rima: 'Por el culo te la entocho' },
        { num: 9, rima: 'En tu culo se me mueve' },
        { num: 13, rima: 'Agárramela que me crece' },
        { num: 15, rima: 'La niña bonita' },
        { num: 22, rima: 'Los dos patitos' },
        { num: 25, rima: 'Por el culo te la hinco' },
        { num: 35, rima: 'Por el culo te la hinco' },
        { num: 45, rima: 'Por el culo te la hinco' },
        { num: 55, rima: 'Doble Por el culo te la hinco' },
        { num: 65, rima: 'Por el culo te la hinco' },
        { num: 75, rima: 'Por el culo te la hinco' },
        { num: 85, rima: 'Por el culo te la hinco' },
        { num: 69, rima: 'El de abajo ni se mueve' },
    ]

    const rimaNumeroArray = rimas.find(rima => rima.num == parseInt(numero))
    const rimaNumero = rimaNumeroArray ? rimaNumeroArray.rima : ''
    return rimaNumero
}

export default getRima