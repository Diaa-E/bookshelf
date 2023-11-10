import { useState } from "react";
import "../styles/FormCheckbox.css";

export default function FormCheckbox({id, text="label", required = false, checked, name, changeHandler})
{
    return (
        <>
            <label className="form-label" htmlFor={id}>{text}</label>
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
        </>
    )
}