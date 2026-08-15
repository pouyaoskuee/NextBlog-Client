
const btnType = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    danger: 'btn--danger',
    outline: 'btn--outline',
}

function Button({onClick, children , variant , type='submit' , className , ...rest}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${btnType[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;