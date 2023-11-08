import { useState } from "react";
import "../styles/Form.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function Form()
{
    return (
        <>
            <form action="" className="add-book-form">
                <FormInput 
                    id="book-title" 
                    required={true}
                    text="Book Title"
                    placeHolder="Harry Potter and the Philosopher's Stone"
                />
                <FormInput
                    id="book-author"
                    required={true}
                    text="Author"
                    placeHolder="J. K. Rawling"
                />
                <FormButton className={"form-button green-button"} text="Add Book" type="submit"/>
                <FormButton className={"form-button red-button"} text="Clear Fields"/>
            </form>
        </>
    )
}