import { useState } from "react";
import "../styles/Form.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function Form({submitHandler})
{
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");

    function handleTitleChange(e)
    {
        setBookTitle(e.target.value);
    }

    function handleAuthorChange(e)
    {
        setBookAuthor(e.target.value);
    }

    function resetForm()
    {
        setBookAuthor("");
        setBookTitle("");
    }

    return (
        <>
            <form action="" className="add-book-form" onSubmit={(e) => {
                    submitHandler(e, bookTitle, bookAuthor);
                    resetForm();
                }}>
                <FormInput 
                    id="book-title" 
                    required={true}
                    text="Book Title"
                    placeHolder="Harry Potter and the Philosopher's Stone"
                    name="bookTitle"
                    changeHandler={handleTitleChange}
                    value={bookTitle}
                />
                <FormInput
                    id="book-author"
                    required={true}
                    text="Author"
                    placeHolder="J. K. Rawling"
                    name="bookAuthor"
                    changeHandler={handleAuthorChange}
                    value={bookAuthor}
                />
                <FormButton className={"form-button green-button"} text="Add Book" type="submit"/>
                <FormButton clickHandler={resetForm} className={"form-button red-button"} text="Clear Fields"/>
            </form>
        </>
    )
}