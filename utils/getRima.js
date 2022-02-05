const getRima = ({ numero }) => {
    const rimas = [
        { num: 1, rima: 'Que no pare ninguno' },
        { num: 2, rima: 'Nos movemos los dos' },
        { num: 3, rima: 'Lo mismo, pero al revés' },
        { num: 4, rima: 'Me voy a la parra un rato' },
        { num: 5, rima: 'Por el culo te la hinco' },
        { num: 6, rima: 'No me veis' },
        { num: 7, rima: 'Que nadie se siente' },
        { num: 8, rima: 'Me voy de bareta' },
        { num: 9, rima: 'Esto se mueve' },
        { num: 13, rima: 'Agárramela que me crece' },
        { num: 15, rima: 'La niña bonita' },
        { num: 22, rima: 'Los dos patitos' },
        /*{ num: 25, rima: 'Por el culo te la hinco' },
        { num: 35, rima: 'Por el culo te la hinco' },
        { num: 45, rima: 'Por el culo te la hinco' },
        { num: 55, rima: 'Doble Por el culo te la hinco' },
        { num: 65, rima: 'Por el culo te la hinco' },
        { num: 75, rima: 'Por el culo te la hinco' },
        { num: 85, rima: 'Por el culo te la hinco' },*/
        //{ num: 69, rima: 'El de abajo ni se mueve' },
    ]

    const rimaNumeroArray = rimas.find(rima => rima.num == parseInt(numero))
    const rimaNumero = rimaNumeroArray ? rimaNumeroArray.rima : ''
    return rimaNumero
}

export default getRima