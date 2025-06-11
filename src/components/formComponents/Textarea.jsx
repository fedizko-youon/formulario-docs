const Textarea = ({ text, id, placeholder, value, onChange }) => {
    return (
        <fieldset className="flex flex-col w-full">
            <label htmlFor={id}>{text}</label>
            <textarea className="w-full p-2" rows="3" value={value} onChange={onChange} id={id} placeholder={placeholder}></textarea>
        </fieldset>
    );
}

export default Textarea;