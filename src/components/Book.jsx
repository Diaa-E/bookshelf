import { useState } from "react";
import "../styles/Book.css";

export default function Book({title, author, style })
{
    return (
        <div style={style} className="book">
            <div className="book-info">
                <p>Title: {title}</p>
                <p>Author: {author}</p>
            </div>
        </div>
    )
}