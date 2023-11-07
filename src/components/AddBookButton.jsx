import { useState } from "react";
import "../styles/AddBookButton.css";

export default function AddBookFormButton({text="click here", className, clickHandler = () => {}, type="button"})
{
    return (
        <>
            <button onClick={clickHandler} className={className} type={type}>
                {text}
            </button>
        </>
    )
}