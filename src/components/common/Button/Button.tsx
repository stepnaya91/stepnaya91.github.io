import React from "react"

interface ButtonProps{
    label:string,
    className?:string,
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({label, ...props}:ButtonProps) => {
    return (
        <button type="button" {...props}>{label}</button>
    )
}