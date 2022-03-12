
import BolaLista from "components/TipoBolas/BolaLista"
import getBolas from "utils/getBolas"



export default function ListadoBolas({ bolasSacadas }) {

    const bolasTablero = getBolas({ min: 1, max: 90 })
    return (
        <div className="m-relleno">

            <div className="m-tablero">
                <div className="m-tablero__title">
                    <h3>Tablero</h3>
                </div>

                <div className="m-tablero__bolas">
                    {bolasTablero.map(bola => {
                        let isActive = bolasSacadas.includes(bola) ? true : false
                        return <BolaLista numero={bola} isActive={isActive} key={Math.random()} />
                    })}
                </div>
            </div>

        </div>
    )
}