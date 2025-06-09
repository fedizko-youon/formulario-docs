import Form from "../components/Form";

const FormPage = () => {
    const pageOptions = [
        {
            page1: {
                pergunta: "Qual o tipo de documento que estamos tratando?",
                options: [
                    "Opção 1",
                    "Opção 2",
                    "Opção 3"
                ],
                
            }
        }
    ]

    const [{ page1: { options: options1 } }] = pageOptions;

    return (
        <main className="flex-1 flex flex-col gap-4 items-center justify-center bg-gray-200">
            <h1 className="text-4xl">Formulário de Documentação</h1>
            <Form options={options1} />
        </main>
    );
}

export default FormPage;