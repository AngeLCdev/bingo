

function Input({ value, label, onChange, type, ...inputProps }) {
    return (
        <>
            <div className="floating-label">
                <input className="floating-input" type={type || 'text'} placeholder=" " {...inputProps} defaultValue={value && value} onChange={onChange} />
                <label className="label">{label}</label>
            </div>
        </>
    )
}

export default Input
