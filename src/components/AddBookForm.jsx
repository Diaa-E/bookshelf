import { useState } from "react";
import "../styles/AddBookForm.css";
import AddBookFormButton from "./AddBookButton";

export default function AddBookForm()
{
    return (
        <>
            <form action="" className="add-book-form">
                <AddBookFormButton className={"add-book-form-button green-button"} text="Add Book" type="submit"/>
                <AddBookFormButton className={"add-book-form-button red-button"} text="Clear"/>
            </form>
        </>
    )
}