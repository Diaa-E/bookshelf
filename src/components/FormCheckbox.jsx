import { useState } from "react";
import "../styles/FormCheckbox.css";

export default function FormCheckbox({id, text="label", required = false, checked, name, changeHandler})
{
    return (
        <>
            <input
                name={name}
                required={required}
                id={id}
                type="checkbox"
                checked={checked}
                onChange={changeHandler}
                className="form-checkbox"
            >
            </input>
            <label className="form-checkbox-label" htmlFor={id}>{text}</label>
        </>
    )
}