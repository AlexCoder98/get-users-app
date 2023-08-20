import './Button.css';

interface ButtonProps {
    content: string;
    className?: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, className, onClick }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button;