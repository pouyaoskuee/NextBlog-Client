
const btnType = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    danger: 'btn--danger',
    outline: 'btn--outline',
}

function Button({onClick, children , variant , ...rest}) {
    return (
        <button
            onClick={onClick}
            className={`btn ${btnType[variant]}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;