import { useState, useEffect } from "react";
import { data } from "../data/data.js";

export const useMultiStepForm = (initialResponses, setResponses, setIsFinalStep) => {
  const [indexPage, setIndexPage] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("default");
  const [selectedFile, setSelectedFile] = useState(null);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [error, setError] = useState("");

  const currentPageData = data[indexPage];
  const { id, required } = currentPageData;

  const shouldSkipQuestion = (idToCheck) => {
    const resp5 = initialResponses.find(r => r.id === 5)?.resposta || selectedValue;
    const idsParaPular = [2, 3, 4, 6, 8];

    if (resp5 === "Descontinuação") {
      const idsParaPularDescontinuacao = [1, 2, 3, 4, 8];
      return idsParaPularDescontinuacao.includes(idToCheck);
    }
    if (resp5 === "Criação") {
      return idToCheck === 6;
    }
    return idsParaPular.includes(idToCheck) && idToCheck !== 6;
  };

  const saveResponse = () => {
    if (shouldSkipQuestion(id)) return;
    const { type, inputType, pergunta } = currentPageData;
    let value;

    if (inputType === "file") { value = selectedFile; } 
    else if (inputType === "radio") { value = inputValue; } 
    else if (inputType === "checkbox") { value = optionsSelected; } 
    else if (type === "select") { value = selectedValue !== "default" ? selectedValue : ""; } 
    else { value = inputValue; }
    
    if (!value || (Array.isArray(value) && value.length === 0)) return;
    
    const newResponse = { id, pergunta, resposta: value };

    setResponses((prev) => {
      let updated = [...prev.filter((r) => r.id !== id), newResponse];
      
      const resp3 = updated.find((r) => r.id === 3)?.resposta;
      const resp4 = updated.find((r) => r.id === 4)?.resposta;

      if (resp3 && resp4 && resp3 === resp4) {
        updated = updated.filter((r) => r.id !== 4);
      }

      return updated;
    });
  };

  const loadPreviousResponse = (index) => {
    const page = data[index];
    const savedResponse = initialResponses.find((r) => r.id === page.id);
    if (!savedResponse) {
      resetFields();
      return;
    }
    const { resposta } = savedResponse;
    if (page.type === "select") { setSelectedValue(resposta); }
    else if (page.inputType === "file") { setSelectedFile(resposta); }
    else if (page.inputType === "checkbox") { setOptionsSelected(Array.isArray(resposta) ? resposta : []); }
    else { setInputValue(resposta || ""); }
  };

  const resetFields = () => {
    setInputValue("");
    setSelectedValue("default");
    setSelectedFile(null);
    setOptionsSelected([]);
  };

  const validateStep = () => {
    if (!required || shouldSkipQuestion(id)) {
      return true;
    }
    const { type, inputType } = currentPageData;
    if (type === "select") return selectedValue !== "default" && selectedValue !== "";
    if (inputType === "checkbox") return optionsSelected.length > 0;
    if (inputType === "file") return selectedFile !== null;
    return inputValue.trim() !== "";
  };

  const handleNext = () => {
    if (!validateStep()) { setError("Este campo é obrigatório."); return; }
    saveResponse();
    let nextIndex = indexPage + 1;
    while (nextIndex < data.length && shouldSkipQuestion(data[nextIndex].id)) {
      nextIndex++;
    }
    if (nextIndex >= data.length) {
      handleSubmit(new Event('submit'));
      return;
    }
    setIndexPage(nextIndex);
  };

  const handlePrev = () => {
    saveResponse();
    let prevIndex = indexPage - 1;
    while (prevIndex >= 0 && shouldSkipQuestion(data[prevIndex].id)) {
      prevIndex--;
    }
    if (prevIndex < 0) return;
    setIndexPage(prevIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) { setError("Este campo é obrigatório."); return; }
    saveResponse();
    setIsFinalStep(true);
  };
  
  const createChangeHandler = (setter) => (e) => {
    if (error) setError("");
    setter(e.target.value);
  };

  const handleFileChange = (e) => {
    if (error) setError("");
    setOptionsSelected(e.target.files[0]);
  };
  
  const handleCheckboxChange = (novoArray) => {
    if (error) setError("");
    setOptionsSelected(novoArray);
  };

  useEffect(() => {
    setError("");
    resetFields();
    setTimeout(() => loadPreviousResponse(indexPage), 0);
  }, [indexPage]);

  return {
    indexPage,
    currentPageData,
    values: { inputValue, selectedValue, selectedFile, optionsSelected },
    error,
    handlers: {
      handleNext,
      handlePrev,
      handleSubmit,
      handleChange: createChangeHandler(setInputValue),
      handleChangeSelected: createChangeHandler(setSelectedValue),
      handleFileChange,
      handleCheckboxChange,
    },
  };
};