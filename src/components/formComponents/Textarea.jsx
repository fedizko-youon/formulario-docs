const Textarea = ({ text, id, placeholder, value, onChange }) => {
    return (
        <fieldset className="flex flex-col w-full gap-4">
            <p>{text}</p>
            <textarea className="w-full p-2 border" rows="3" value={value} onChange={onChange} id={id} placeholder={placeholder}></textarea>
        </fieldset>
    );
}

export default Textarea;