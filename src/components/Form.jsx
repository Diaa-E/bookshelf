import { useState } from "react";
import "../styles/Form.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function Form({submitHandler})
{
    return (
        <>
            <form action="" className="add-book-form" onSubmit={submitHandler}>
                <FormInput 
                    id="book-title" 
                    required={true}
                    text="Book Title"
                    placeHolder="Harry Potter and the Philosopher's Stone"
                    name="bookTitle"
                />
                <FormInput
                    id="book-author"
                    required={true}
                    text="Author"
                    placeHolder="J. K. Rawling"
                    name="bookAuthor"
                />
                <FormButton className={"form-button green-button"} text="Add Book" type="submit"/>
                <FormButton className={"form-button red-button"} text="Clear Fields"/>
            </form>
        </>
    )
}