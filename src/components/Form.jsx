import { useState } from "react";
import "../styles/Form.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormNumberInput from "./FormNumberInput";

export default function Form({submitHandler})
{
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [pages, setPages] = useState("");

    function handleTitleChange(e)
    {
        setBookTitle(e.target.value);
    }

    function handleAuthorChange(e)
    {
        setBookAuthor(e.target.value);
    }

    function handlePagesChange(e)
    {
        setPages(e.target.value);
    }

    function resetForm()
    {
        setBookAuthor("");
        setBookTitle("");
        setPages("");
    }

    return (
        <>
            <form action="" onSubmit={(e) => {
                    submitHandler(e, bookTitle, bookAuthor, pages);
                    resetForm();
                }}>
                <fieldset  className="add-book-form">
                    <legend>Add a new book</legend>
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
                    <FormNumberInput
                        id="pages"
                        required={false}
                        text="Number of Pages"
                        placeHolder="500"
                        name="pages"
                        changeHandler={handlePagesChange}
                        value={pages}
                        type="number"
                        min={0}
                        max={9999}
                    />
                    <FormButton className={"form-button green-button"} text="Add Book" type="submit"/>
                    <FormButton clickHandler={resetForm} className={"form-button red-button"} text="Clear Fields"/>
                </fieldset>
            </form>
        </>
    )
}