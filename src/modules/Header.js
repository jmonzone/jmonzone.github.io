import React from "react";
import Contact from "./Contact";
import './Header.scss';
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header({view, setView, setTag, setProject}) {
    return(
        <div className="header">
            <Logo setView={setView} setTag={setTag} setProject={setProject}/>
            <Navigation view={view} setView={setView}/>
            <Contact/>
        </div>
    )
}