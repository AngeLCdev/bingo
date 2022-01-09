export default function BolaSiguiente({ handleNewBola, bolaActual, mensaje }) {

    return (
        <>
            <div className="m-partida__afterBola">
                {bolaActual && <span className="m-bola m-bola--primary">{bolaActual}</span>}
                {mensaje && <span className="a-msg">{mensaje}</span>}
                <button className="a-btn" onClick={handleNewBola}>{bolaActual ? 'Sacar bola' : 'Empezar Bingo'}</button>
            </div>

        </>
    )
}