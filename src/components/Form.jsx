import Fieldset from "./Fieldset";
import Select from "./Select";

const Form = ({ options }) => {
    return <form className="shadow-xl bg-white p-4 rounded-lg flex flex-col gap-4">
        <Select pergunta="Formato select" options={options} />
    </form>;
}

export default Form;