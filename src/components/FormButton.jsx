import { useState } from "react";
import "../styles/FormButton.css";

export default function FormButton({text="click here", className, clickHandler = () => {}, type="button"})
{
    return (
        <>
            <button onClick={clickHandler} className={className} type={type}>
                {text}
            </button>
        </>
    )
}