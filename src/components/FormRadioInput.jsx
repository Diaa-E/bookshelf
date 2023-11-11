import { useState } from "react";
import "../styles/FormRadioInput.css";

export default function FormRadioInput({id, text="label", checked, name, changeHandler, useLabel = true})
{
    const label = useLabel? <label htmlFor={id} className="form-radio-label">{text}</label> : null;
    return (
        <>
            <input
                name={name}
                id={id}
                type="radio"
                checked={checked}
                onChange={changeHandler}
                className="form-radio-input"
            >
            </input>
            {label}
        </>
    )
}