const Select = ({ pergunta, options, value, onChange }) => {
    return (
        <>
            <h2 className="text-2xl">{pergunta}</h2>
            <fieldset className="flex flex-col items-start gap-4">
                <select value={value} onChange={onChange} className="w-full">
                    <option value="default" disabled>Selecione uma opção</option>
                    {options.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                    })}
                </select>
            </fieldset>
        </>
    );
}

export default Select;