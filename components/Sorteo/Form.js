import Input from 'components/Ui/Form/Input'

import useField from 'hooks/useField'
import shuffle from 'utils/shuffle'

export default function Form({ setNumerosSorteo, setNGanadores }) {
    const minimoField = useField()
    const maximoField = useField()
    const nGanadoresField = useField()

    const onClick = (e) => {
        e.preventDefault()
        setNumerosSorteo(shuffle({ min: minimoField.value, max: maximoField.value }))
        setNGanadores(nGanadoresField.value)
    }
    return (
        <div className='m-relleno'>
            <Input label={`Nº de ganadores`} type={`number`} onChange={nGanadoresField.onChange} />
            <div className="m-form--minmax">

                <Input label={`Mínimo`} type={`number`} onChange={minimoField.onChange} />
                <Input label={`Máximo`} type={`number`} onChange={maximoField.onChange} />
            </div>

            <button className="a-btn" onClick={onClick}>Generar sorteo</button>
        </div>
    )
}