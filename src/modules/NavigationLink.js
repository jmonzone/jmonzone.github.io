import React from "react";
import links from '../content/links';
import './NavigationLink.scss';

export default function NavigationLink({link, active, onClick}) {

    // const onClick = () => {
    //     window.open(links[link].url);
    // }
    
    return(
        <div className="link" onClick={onClick}>
            <div className={`link-overlay ${active ? ' active' : ''}`}></div>
            <div className="link-label" onClick={onClick}>{links[link].label}</div>
        </div>
    )
}