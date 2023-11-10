import { useState } from "react";
import "../styles/Book.css";

export default function Book({title, author, style, id, deleteHandler, pages, isRead, clickHandler = () => {}})
{
    pages === "" || +pages === 0? pages = "N/A" : pages;

    return (
        <div onClick={(e) => clickHandler(e, id)} style={style} className="book">
            <div className="book-info">
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <p>Number of pages: {pages}</p>
                <p>Read: {isRead ? "Yes" : "Not yet"}</p>
                <p>ID: {id}</p>
            </div>
            <button onClick={(e) => deleteHandler(e, id)} className="delete-button"></button>
        </div>
    )
}