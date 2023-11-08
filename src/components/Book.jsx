import { useState } from "react";

export default function Book({title, author, color })
{
    return (
        <div className="book">
            <p>{title}</p>
            <p>{author}</p>
        </div>
    )
}