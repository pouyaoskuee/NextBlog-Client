import React from 'react';


const btnType = {
    primary:
        "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
    secondary:
        "bg-secondary-200  text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
    outline:
        "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
    red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
    danger: "border border-red-100 text-red-500",
};

function ButtonIcon({children , variant ,onClick , className, ...rest}) {
    return (
        <button
            className={`flex items-center justify-center rounded-md [&>svg]:size-5 [&>svg]:text-inherit  ${className} ${btnType[variant]}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}

export default ButtonIcon;