import { useState } from "react";
import "../styles/Book.css";

export default function Book({title, author, style })
{
    return (
        <div style={style} className="book">
            <p>{title} {author} </p>
        </div>
    )
}