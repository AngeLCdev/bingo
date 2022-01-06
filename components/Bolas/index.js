

import BolaSiguiente from "./BolaSiguiente"
import BolasAnteriores from "./BolasAnteriores"



export default function Bolas({ bolasJugando, handleNewBola, bolaActual, ultimasBolas, mensaje }) {


    return (
        <div className="m-relleno">
            <BolaSiguiente bolasJugando={bolasJugando} handleNewBola={handleNewBola} bolaActual={bolaActual} mensaje={mensaje} />
            <BolasAnteriores ultimasBolas={ultimasBolas} />
        </div>
    )
}