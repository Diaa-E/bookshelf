import { useState } from "react";
import "../styles/AddBookInput.css";

export default function AddBookInput({id})
{
    return (
        <>
            <label htmlFor={id}></label>
            <input id={id} type="text" className="add-book-input">

            </input>
        </>
    )
}