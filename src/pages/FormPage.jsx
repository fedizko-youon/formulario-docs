import Form from "../components/Form";

const FormPage = () => {    
    return (
        <main className="flex-1 flex flex-col gap-4 p-14 items-center justify-center bg-gray-200">
            <h1 className="text-4xl">Formulário de Documentação</h1>

            <Form />
        </main>
    );
}

export default FormPage;