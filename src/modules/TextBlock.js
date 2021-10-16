import React from "react";
import './TextBlock.scss';

export default function TextBlock({text, show}) {
    return(
        <div className="text">
            <div className={`text-border ${show? 'slide' : 'hidden'}`}></div>
            <p>{text}</p>           
        </div>
    )
}