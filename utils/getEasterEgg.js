const getEasterEgg = ({ numero }) => {
    const rimas = [
        { num: 1, frase: 'Eeempieza la partida con eel númeroo' },
        { num: 12, frase: 'Voy a parar un momento, que me voy a poner un cavita' },

        { num: 34, frase: 'Esperad, que me voy a echar otro cavita. Que rico ma estao. Continuemos' },
    ]

    const rimaNumeroArray = rimas.find(rima => rima.num == parseInt(numero))
    const rimaNumero = rimaNumeroArray ? rimaNumeroArray.frase : ''
    return rimaNumero
}

export default getEasterEgg