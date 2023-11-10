import { useState } from "react";
import "../styles/FormColorInput.css";

export default function FormColorInput({id, name, changeHandler, disabled = false, value})
{
    return (
        <>
            <input
                name={name}
                id={id}
                type="color"
                onChange={changeHandler}
                className="form-color-input"
                disabled={disabled}
                value={value}
            >

            </input>
        </>
    )
}