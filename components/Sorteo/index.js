import { useState, useEffect } from 'react'
import Form from './Form'
import Resultado from './Resultado'


export default function Sorteo() {

    const [indexActual, setIndexActual] = useState(0)
    const [nGanadores, setNGanadores] = useState(1)
    const [ganador, setGanador] = useState('')

    const [numerosSorteo, setNumerosSorteo] = useState([])

    useEffect(() => {
        setGanador(numerosSorteo[indexActual])
    }, [numerosSorteo])


    const onClick = (e) => {
        e.preventDefault()
        const newIndex = indexActual + 1
        if (newIndex <= parseInt(nGanadores) - 1) {

            setIndexActual(newIndex)
            setGanador(numerosSorteo[newIndex])
        } else {
            alert(`Ya han salido todos los ganadores`)
        }

    }


    return (
        <div className="m-partida">
            <Resultado ganador={ganador} />
            <div className="">
                <Form setNumerosSorteo={setNumerosSorteo} setNGanadores={setNGanadores} />
                {numerosSorteo.length > 0 && <div className="m-relleno"><button className='a-btn' onClick={onClick}>Siguiente</button></div>}
            </div>
        </div>
    )
}