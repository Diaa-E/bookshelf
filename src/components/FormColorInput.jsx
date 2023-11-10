import { useState } from "react";
import "../styles/FormColorInput.css";

export default function FormColorInput({id, name, changeHandler, disabled = false, value})
{
    //The following code is stolen from stack overflow, it calculates the current color's brightness
    const fontColor = value.substring(1);
    const rgb = parseInt(fontColor, 16); 
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    //theft ends here

    const labelStyle = {
        backgroundColor: value,
        color: luma > 100 ? "black" : "white",
    }
    
    return (
        <>
            <label style={labelStyle} htmlFor={id} className="color-input-label">
                Pick Color...
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
            </label>
        </>
    )
}