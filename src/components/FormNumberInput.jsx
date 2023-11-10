import { useState } from "react";
import "../styles/FormInput.css";

export default function FormNumberInput({id, text="label", placeHolder="0", required = false, name, value, changeHandler, max, min})
{
    return (
        <>
            <label className="form-label" htmlFor={id}>{text}</label>
            <input
                name={name}
                required={required}
                placeholder={placeHolder}
                id={id}
                type="number"
                className="form-input"
                value={value}
                onChange={changeHandler}
                max={max}
                min={min}
            >
            </input>
        </>
    )
}