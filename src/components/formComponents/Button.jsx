const Button = ({ text, type, onClick }) => 
    <button
        className="bg-blue-500 w-full text-secondary font-bold hover:bg-blue-400 duration-200"
        type={type} 
        onClick={onClick}
    >
        {text}
    </button>;

export default Button;