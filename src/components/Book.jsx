import { useState } from "react";
import "../styles/Book.css";

export default function Book({title, author, style, id, deleteHandler, pages})
{
    pages === "" || +pages === 0? pages = "N/A" : pages;

    return (
        <div style={style} className="book">
            <div className="book-info">
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <p>Number of pages: {pages}</p>
                <p>ID: {id}</p>
            </div>
            <button onClick={() => deleteHandler(id)} className="delete-button"></button>
        </div>
    )
}