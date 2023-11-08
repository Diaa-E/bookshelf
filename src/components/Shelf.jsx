import { useState } from "react";

export default function Shelf({books})
{
    return (
        <div className="shelf">
            {books}
        </div>
    )
}