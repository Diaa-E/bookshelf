import { useState } from "react";
import "../styles/Shelf.css"

export default function Shelf({books})
{
    return (
        <div className="shelf">
            {books}
        </div>
    )
}