const getEasterEgg = ({ numero }) => {
    const rimas = [
        { num: 1, frase: 'Eeempieza la partida con eel númeroo' },
        { num: 12, frase: 'Voy a parar un momento, que me voy a poner un cavita' },
        { num: 24, frase: 'Perdonadme chicos y chicas, pero me voy a tener que ir a una reunión, vienen a recogerme en coche, os dejo con mi compañera. Una pregunta Mayte, ¿por que puerta me subo?' },
        { num: 34, frase: 'Esperad, que me voy a echar otro cavita. Que rica ma estao. Continuemos' },
        { num: 50, frase: 'Un descansito chicos, voy a picar algo que me ha entrado un poco de hambre. ¿Estela, te ha estao bueno el quesete que ha traído hoy Angelito?' },
    ]

    const rimaNumeroArray = rimas.find(rima => rima.num == parseInt(numero))
    const rimaNumero = rimaNumeroArray ? rimaNumeroArray.frase : ''
    return rimaNumero
}

export default getEasterEgg