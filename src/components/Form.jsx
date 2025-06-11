import { useState } from "react";
import { data } from "../data/data.js";
import Button from "./formComponents/Button.jsx";
import Select from "./formComponents/Select.jsx";
import Input from "./formComponents/Input.jsx";
import Textarea from "./formComponents/Textarea.jsx";

const Form = () => {
    const [indexPage, setIndexPage] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("default");
    const [selectedFile, setSelectedFile] = useState(null);
    const [responses, setResponses] = useState([]);

    const currentPageData = data[indexPage];
    const { id, pergunta, options, placeholder, type, inputType } = currentPageData;
    const resposta = {
        id,
        pergunta,
        resposta: inputValue || selectedFile || selectedValue
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleChangeSelected = (e) => {
        setSelectedValue(e.target.value);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleNext = () => { // usar useNavigate quando for a última página
        setIndexPage(indexPage + 1);

        console.log(resposta);
        if (!resposta.resposta || resposta.resposta === "default") {
            console.log("ela não existe")
            setResponses(prevResponses => {
                const filteredResponses = prevResponses.filter(prevResponse => prevResponse.id !== id);
                return [...filteredResponses, resposta];
            });
            console.log("Caso não exista:", responses);
        } else {
            setResponses(prevResponses => [...prevResponses, resposta]);
            console.log("Caso exista:", responses);
        }
        setInputValue(resposta.resposta || "");
        setSelectedFile(resposta.resposta || null);
        setSelectedValue(resposta.resposta || "default");
    }

    const handlePrev = () => {
        setIndexPage(indexPage - 1);

        const prevResponse = responses[indexPage - 1];
        const { resposta } = prevResponse;
        switch (type) {
            case "select":
                setSelectedValue(resposta);
                break;
            case "input" || "textarea":
                if (inputType === "radio") {
                    setSelectedValue(resposta);
                } else if (inputType === "file") {
                    setSelectedFile(resposta);
                } else {
                    setInputValue(resposta);
                }
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(responses);
    }

    const renderCurrentPage = () => {
        switch (type) {
            case "select":
                return <Select pergunta={pergunta} options={options} value={selectedValue} onChange={handleChangeSelected} />

            case "input":
                if (inputType === "radio") {
                    return <Input
                        type={inputType}
                        text={pergunta}
                        id={id}
                        placeholder={placeholder}
                        options={options}
                        value={inputValue}
                        onChange={handleChange}
                    />
                } else if (inputType === "file") {
                    return <Input 
                        type={inputType}
                        text={pergunta}
                        id={id}
                        value={selectedFile}
                        onChange={handleFileChange}
                    />
                } else {
                    return <Input
                        type={inputType}
                        text={pergunta}
                        id={id}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleChange}
                    />
                }
            case "textarea":
                return <Textarea 
                    text={pergunta}
                    id={id}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChange}
                />
        }
    }

    return (
        <form className="shadow-xl bg-white p-4 rounded-lg flex w-1/2 flex-col gap-4">

            {renderCurrentPage()}

            <div className="flex justify-between gap-4">
                {indexPage === (data.length - 1) ?
                    <>
                        <Button text="Voltar" type="button" onClick={handlePrev} />
                        <Button text="Enviar" type="button" onClick={handleSubmit} />
                    </>
                    :
                    <>
                        {indexPage > 0 && <Button text="Voltar" type="button" onClick={handlePrev} />}
                        <Button text="Próximo" type="button" onClick={handleNext} />
                    </>
                }
            </div>
        </form>
    );
}

export default Form;