import { useState } from "react";
import "../styles/Book.css";

export default function Book({title, author, style, id, deleteHandler})
{
    return (
        <div style={style} className="book">
            <div className="book-info">
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <p>ID: {id}</p>
            </div>
            <button onClick={() => deleteHandler(id)} className="delete-button">Delete</button>
        </div>
    )
}