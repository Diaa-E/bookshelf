import { useState } from "react";
import "../styles/FormInput.css";

export default function FormInput({id})
{
    return (
        <>
            <label htmlFor={id}></label>
            <input id={id} type="text" className="add-book-input">

            </input>
        </>
    )
}