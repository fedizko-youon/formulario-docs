import { useState } from "react";
import Form from "../components/Form";
import FinalStep from "../components/FinalStep";

const FormPage = () => {    
    const [isFinalStep, setIsFinalStep] = useState(false);
    const [responses, setResponses] = useState([]);

    if (isFinalStep) {
        return <FinalStep responses={responses} />
    }

    return (
        <main className="main-container">
            <h1 className="text-4xl text-center lg:text-start">Formulário de Documentação ISO</h1>

            <Form setIsFinalStep={setIsFinalStep} responses={responses} setResponses={setResponses} />
        </main>
    );
}

export default FormPage;