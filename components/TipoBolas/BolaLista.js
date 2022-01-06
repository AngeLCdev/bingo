export default function BolaLista({ numero, isActive }) {
    const claseActiva = isActive ? 'm-bola--active' : ''
    return <div className="m-bola__wrap">
        <span className={`m-bola m-bola--lista ${claseActiva}`}>{numero}</span>
    </div>
}