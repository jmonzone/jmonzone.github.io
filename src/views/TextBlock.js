import React from "react";

export default function TextBlock({text}) {
    return(
        <div className="text">
            <div className='text-border slide'></div>
            <p>{text}</p>           
        </div>
    )
}