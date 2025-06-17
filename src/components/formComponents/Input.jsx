import { FaFileImage } from "react-icons/fa";

const Input = ({ text, id, type, value, placeholder, onChange, options }) => {
    if (type === "radio") {
        return (
            <>
                <h2>{text}</h2>
                {options.map((option, i) => (
                    <fieldset className="flex gap-2" key={i}>
                        <input
                            name={id} 
                            id={`${id}-${i}`} 
                            value={option}
                            type={type}
                            className="cursor-pointer"
                            checked={value === option} 
                            onChange={onChange}
                        />
                        <label htmlFor={`${id}-${i}`} className="cursor-pointer">
                            {option}
                        </label>
                    </fieldset>
                ))}
            </>
        );
    } else if (type === "file") { // Tratar tam máximo do arquivo (3mb) e renderização de pdfs
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
    } else if (type === "checkbox") {
        return (
            <>
                <h2>{text}</h2>
                {options.map((option, i) => (
                    <fieldset className="flex gap-2" key={i}>
                        <input
                            id={`${id}-${i}`}
                            type={type}
                            value={option}
                            className="cursor-pointer"
                            checked={Array.isArray(value) && value.includes(option)}
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                let updated;

                                if (isChecked) {
                                    updated = [...(Array.isArray(value) ? value : []), option];
                                } else {
                                    updated = (Array.isArray(value) ? value : []).filter(v => v !== option);
                                }

                                onChange(updated);
                            }}
                        />
                        <label htmlFor={`${id}-${i}`} className="cursor-pointer">
                            {option}
                        </label>
                    </fieldset>
                    ))}
            </>
        );
    } else {
        return (
            <fieldset className="flex flex-col gap-4">
                <p>{text}</p>
                <input
                    className="border p-1"
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
