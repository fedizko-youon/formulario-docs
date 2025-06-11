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

    const saveResponse = () => {
        const value =
            inputType === "file"
                ? selectedFile
                : inputType === "radio"
                ? inputValue
                : inputValue || (selectedValue !== "default" && selectedValue);

        if (!value) return;

        const newResponse = {
            id,
            pergunta,
            resposta: value,
        };

        setResponses(prev => {
            const filtered = prev.filter(resp => resp.id !== id);
            return [...filtered, newResponse];
        });
    };

    const loadPreviousResponse = (index) => {
        const previous = data[index];
        const savedResponse = responses.find(r => r.id === previous.id);
        if (!savedResponse) return;

        const value = savedResponse.resposta;

        if (previous.type === "select") {
            setSelectedValue(value);
        } else if (previous.type === "input") {
            if (previous.inputType === "radio") {
                setInputValue(value);
            } else if (previous.inputType === "file") {
                setSelectedFile(value);
            } else {
                setInputValue(value);
            }
        } else if (previous.type === "textarea") {
            setInputValue(value);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleChangeSelected = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleNext = () => {
        saveResponse();
        const nextIndex = indexPage + 1;
        setIndexPage(nextIndex);
        setInputValue("");
        setSelectedFile(null);
        setSelectedValue("default");
        setTimeout(() => loadPreviousResponse(nextIndex), 0);
    };

    const handlePrev = () => {
        saveResponse();
        const prevIndex = indexPage - 1;
        setIndexPage(prevIndex);
        setTimeout(() => loadPreviousResponse(prevIndex), 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveResponse();
        console.log(responses); // enviar para backend aqui, se necessário
    };

    const renderCurrentPage = () => {
        switch (type) {
            case "select":
                return (
                    <Select
                        pergunta={pergunta}
                        options={options}
                        value={selectedValue}
                        onChange={handleChangeSelected}
                    />
                );

            case "input":
                if (inputType === "radio") {
                    return (
                        <Input
                            type="radio"
                            text={pergunta}
                            id={id}
                            options={options}
                            value={inputValue}
                            onChange={handleChange}
                        />
                    );
                } else if (inputType === "file") {
                    return (
                        <Input
                            type="file"
                            text={pergunta}
                            id={id}
                            value={selectedFile}
                            onChange={handleFileChange}
                        />
                    );
                } else {
                    return (
                        <Input
                            type={inputType}
                            text={pergunta}
                            id={id}
                            placeholder={placeholder}
                            value={inputValue}
                            onChange={handleChange}
                        />
                    );
                }

            case "textarea":
                return (
                    <Textarea
                        text={pergunta}
                        id={id}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleChange}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <form className="shadow-xl bg-white p-4 rounded-lg flex w-1/2 flex-col gap-4">
            {renderCurrentPage()}

            <div className="flex justify-between gap-4">
                {indexPage === data.length - 1 ? (
                    <>
                        <Button text="Voltar" type="button" onClick={handlePrev} />
                        <Button text="Enviar" type="button" onClick={handleSubmit} />
                    </>
                ) : (
                    <>
                        {indexPage > 0 && (
                            <Button text="Voltar" type="button" onClick={handlePrev} />
                        )}
                        <Button text="Próximo" type="button" onClick={handleNext} />
                    </>
                )}
            </div>
        </form>
    );
};

export default Form;
