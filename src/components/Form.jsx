import { useState } from "react";
import "../styles/Form.css";
import FormButton from "./FormButton";

export default function Form()
{
    return (
        <>
            <form action="" className="add-book-form">
                <FormButton className={"add-book-form-button green-button"} text="Add Book" type="submit"/>
                <FormButton className={"add-book-form-button red-button"} text="Clear"/>
            </form>
        </>
    )
}