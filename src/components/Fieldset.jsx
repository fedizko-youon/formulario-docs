const Fieldset = ({ text, id, type, value, placeholder, onChange }) => {
    return (
        <fieldset className={`flex gap-2 ${type === "radio" ? "" : "flex-col"}`}>
            {type === "radio" ? 
                <p>{text}</p>
            :
                <label htmlFor={id}>{text}</label>
            }
            <input 
                type={type} 
                value={value} 
                placeholder={placeholder}
                onChange={onChange} 
            />
        </fieldset>
    );
}

export default Fieldset;