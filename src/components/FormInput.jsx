import { useState } from "react";
import "../styles/FormInput.css";

export default function FormInput({id, text="label", placeHolder="Write text here", required = false, name, value, changeHandler})
{
    return (
        <>
            <label className="form-label" htmlFor={id}>{text}</label>
            <input
                name={name}
                required={required}
                placeholder={placeHolder}
                id={id}
                type="text"
                className="form-input"
                value={value}
                onChange={changeHandler}
            >

            </input>
        </>
    )
}