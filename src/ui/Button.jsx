"use client"
import {SpinnerMini} from "@/ui/Spinner";
import {useFormStatus} from "react-dom";

const btnType = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    danger: 'btn--danger',
    outline: 'btn--outline',
}

function Button({onClick, children , variant , type='submit' , className , isLoading=false , ...rest}) {
    const {pending} = useFormStatus()

    isLoading = pending || isLoading

    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn flex justify-center  ${btnType[variant]} ${className} `}
            {...rest}
        >
            {isLoading? <SpinnerMini/> : children}
        </button>
    );
}

export default Button;