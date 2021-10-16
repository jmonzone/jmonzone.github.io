import React from "react";
import './Logo.scss';
import tags from '../content/tags.json';

export default function Logo({setView, setTag, setProject}) {

    const onLogoClicked = () => {
        setView('projects')
        setTag(tags.All)
        setProject(null)
    }

    return(
        <div className="logo" onClick={onLogoClicked}>
            <div className="logo-name">JOHNNAN MONZON</div>
            <div className="logo-title">Digital Designer and Developer</div>
        </div>
    )
}