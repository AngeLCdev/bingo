

export default function BolasAnteriores({ ultimasBolas }) {

    return (
        <div>
            <h3 className="m-partida--title">Últimas 5 bolas:</h3>
            {
                ultimasBolas && <>
                    <section className="m-partida__beforeBola">
                        {ultimasBolas.map((bola, index) => {
                            if (index > 0 && index <= 5) {
                                return <span className="m-bola m-bola--secondary">{bola}</span>
                            }

                        })}

                    </section>
                </>
            }

        </div>
    )
}