import { useState } from "react";
import "../styles/Form.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormNumberInput from "./FormNumberInput";
import FormCheckbox from "./FormCheckbox";
import FormColorInput from "./FormColorInput";
import FormRadioInput from "./FormRadioInput";

export default function Form({submitHandler})
{
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [isRead, setIsRead] = useState(false);
    const [colorMode, setColorMode] = useState(0);
    const [color, setColor] = useState("#ff0000");

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

    function handleReadChange(e)
    {
        setIsRead(e.target.checked)
    }

    function handleColorChange(e)
    {
        setColor(e.target.value);
    }

    function resetForm()
    {
        setBookAuthor("");
        setBookTitle("");
        setPages("");
        setIsRead(false);
    }

    return (
        <>
            <form action="" onSubmit={(e) => {
                    submitHandler(e, bookTitle, bookAuthor, pages, isRead, colorMode, color);
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
                        min={0}
                        max={9999}
                    />
                    <FormCheckbox
                        id="isRead"
                        required={false}
                        text="Mark book as read"
                        name="isRead"
                        checked={isRead}
                        changeHandler={handleReadChange}
                    />
                    <FormRadioInput
                        useLabel={false}
                        id="enableColorInput"
                        name="enableColorInput"
                        checked = {colorMode === 0? true : false}
                        changeHandler={(e) => setColorMode(e.target.checked ? 0 : 1)}
                    />
                    <FormColorInput
                        id="bookColor"
                        name="bookColor"
                        disabled={colorMode === 1? true : false}
                        changeHandler={handleColorChange}
                        value={colorMode === 0 ? color : "grey"}
                        text="Pick a book color..."
                    />
                    <FormRadioInput
                        useLabel={true}
                        text="Generate a random color"
                        id="disableColorInput"
                        name="disableColorInput"
                        checked = {colorMode === 1? true : false}
                        changeHandler={(e) => setColorMode(e.target.checked ? 1 : 0)}
                    />
                    <FormButton className={"form-button green-button"} text="Add Book" type="submit"/>
                    <FormButton clickHandler={resetForm} className={"form-button red-button"} text="Clear Fields"/>
                </fieldset>
            </form>
        </>
    )
}