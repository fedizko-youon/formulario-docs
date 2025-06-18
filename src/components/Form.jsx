import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { data } from "../data/data.js";
import Button from "./formComponents/Button.jsx";
import Select from "./formComponents/Select.jsx";
import Input from "./formComponents/Input.jsx";
import Textarea from "./formComponents/Textarea.jsx";

const Form = ({ setIsFinalStep, responses, setResponses }) => {
  const {
    indexPage,
    currentPageData,
    values,
    error,
    handlers,
  } = useMultiStepForm(responses, setResponses, setIsFinalStep);

  const { id, pergunta, options, placeholder, type, inputType } = currentPageData;

  const renderCurrentPage = () => {
    switch (type) {
      case "select":
        return (
          <Select
            pergunta={pergunta}
            options={options}
            value={values.selectedValue}
            onChange={handlers.handleChangeSelected}
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
              value={values.inputValue}
              onChange={handlers.handleChange}
            />
          );
        } else if (inputType === "file") {
          return (
            <Input
              type={inputType}
              text={pergunta}
              id={id}
              onChange={handlers.handleFileChange}
            />
          );
        } else if (inputType === "checkbox") {
          return (
            <Input 
              id={id}
              type={inputType}
              options={options}
              value={values.optionsSelected}
              onChange={handlers.handleCheckboxChange}
              text={pergunta}
            />
          );
        } else {
          return (
            <Input
              type={inputType}
              text={pergunta}
              id={id}
              placeholder={placeholder}
              value={values.inputValue}
              onChange={handlers.handleChange}
            />
          );
        }

      case "textarea":
        return (
          <Textarea
            text={pergunta}
            id={id}
            placeholder={placeholder}
            value={values.inputValue}
            onChange={handlers.handleChange}
          />
        );

      default:
        return null;
    }
  };

  const handleFormSubmit = (event) => event.preventDefault();

  return (
    <form 
      className="content-container w-full lg:w-1/2 min-w-1/3"
      onSubmit={handleFormSubmit}
    >
      {renderCurrentPage()}

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="flex justify-between gap-4 mt-4">
        {indexPage === data.length - 1 ? (
          <>
            <Button text="Voltar" type="button" onClick={handlers.handlePrev} />
            <Button text="Enviar" type="button" onClick={handlers.handleSubmit} />
          </>
        ) : (
          <>
            {indexPage > 0 && <Button text="Voltar" type="button" onClick={handlers.handlePrev} />}
            <Button text="Próximo" type="button" onClick={handlers.handleNext} />
          </>
        )}
      </div>
    </form>
  );
};

export default Form;