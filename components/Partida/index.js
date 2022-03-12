import { useState, useEffect } from 'react'

import Bolas from "components/Bolas"
import ListadoBolas from "components/ListadoBolas"
import speak from 'utils/speak'


export default function Partida({ bolasJugando }) {


    const [mensaje, setMensaje] = useState(null)
    const [bolaActual, setBolaActual] = useState(null)
    const [bolasSacadas, setBolasSacadas] = useState([])
    const [ultimasBolas, setUltimasBolas] = useState([])
    const [indexActual, setIndexActual] = useState(0)

    const handleNewBola = (e) => {
        e.preventDefault()
        const newBola = bolasJugando[indexActual]
        const newIndex = indexActual + 1
        setBolaActual(newBola)
        setIndexActual(newIndex)
        setBolasSacadas([...bolasSacadas, newBola])
        setUltimasBolas([newBola, ...ultimasBolas])

        if (indexActual > 89) {
            setMensaje('¡Se acabó la partida!')
        }
    }

    useEffect(() => {
        speak({ numero: bolasSacadas.length, tieneRima: false })
        speak({ numero: bolaActual, tieneRima: true })

    }, [bolaActual])

    return (
        <div className="m-partida">

            <Bolas handleNewBola={handleNewBola} bolaActual={bolaActual} bolasJugando={bolasJugando} ultimasBolas={ultimasBolas} mensaje={mensaje} />
            <ListadoBolas bolasSacadas={bolasSacadas} />
        </div>
    )
}