import { FaFileImage } from "react-icons/fa";

const Input = ({ text, id, type, value, placeholder, onChange, options }) => {
    if (type === "radio") {
        return (
            <>
                <h2>{text}</h2>
                {options.map((option, i) => (
                    <fieldset className="flex gap-2" key={i + 1}>
                        <input
                            name={id} // <- importante para agrupar
                            id={`${id}-${i}`} // id único
                            value={option}
                            type="radio"
                            className="cursor-pointer"
                            checked={value === option} // <- mantém marcado
                            onChange={onChange} // <- captura a resposta
                        />
                        <label htmlFor={`${id}-${i}`} className="cursor-pointer">
                            {option}
                        </label>
                    </fieldset>
                ))}
            </>
        );
    } else if (type === "file") {
        return (
            <>
                <h2>{text}</h2>
                <fieldset className="flex flex-col gap-2">
                    <label
                        htmlFor={id}
                        className="flex justify-center border py-8 px-26 cursor-pointer w-full"
                    >
                        <FaFileImage size={40} />
                    </label>
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="hidden"
                        accept="image/*,.pdf"
                    />
                    {value && (
                        <>
                            <img
                                className="max-w-full max-h-1/2 p-8"
                                src={URL.createObjectURL(value)}
                                alt="Imagem do fluxograma"
                            />
                            <p>{value.name}</p>
                        </>
                    )}
                </fieldset>
            </>
        );
    } else {
        return (
            <fieldset className="flex flex-col gap-2">
                <label htmlFor={id}>{text}</label>
                <input
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </fieldset>
        );
    }
};

export default Input;
