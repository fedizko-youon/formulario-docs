const Select = ({ pergunta, options }) => {
    return (
        <fieldset className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">{pergunta}</h2>
            <select>
                <option value="0" selected disabled>Selecione uma opção</option>
                {options.map((option, i) =>
                    <option key={i + 1} value={i + 1}>{option}</option>
                )}
                <option value={options.length + 1}>Outro</option>
            </select>
        </fieldset>
    );
}

export default Select;