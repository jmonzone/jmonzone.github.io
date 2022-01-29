import React, { useState } from "react";
import Contact from "./Contact";

import tags from '../content/tags.json';

const LINKS = {
    ABOUT : 'about',
    PROJECTS : 'projects',
    RESUME: 'resume'
}

function Logo({resetView}) {

    return(
        <div className="logo" onClick={resetView}>
            <div className="logo-name">JOHNNAN MONZON</div>
            <div className="logo-title">Experiential Developer - XR/Web/Games</div>
        </div>
    )
}

function Navigation({view, onLinkSelected}) {
    return(
        <div className="navigation">
            {Object.keys(LINKS).map(link => <NavigationLink key={link} link={LINKS[link]} active={view == LINKS[link]} onLinkSelected={onLinkSelected}/>)}
        </div>
    )
}

function NavigationLink({link, active, onLinkSelected}) {
    return(
        <div className="link" onClick={() => onLinkSelected(link)}>
            <div className={`link-overlay${active ? ' active' : ''}`}></div>
            <div className="link-label">{link}</div>
        </div>
    )
}


function MobileNavigation({onLinkSelected}) {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    }

    const onClick = link => {
        onLinkSelected(link);
        toggleNavigation();
    }

    return(
        <div className="mobile-navigation">
            <img className="mobile-navigation-menu" src={`assets/links/${isOpen ? 'close' : 'menu'}.png`} onClick={toggleNavigation}></img>
            <div className="mobile-navigation-links">
                {isOpen && Object.keys(LINKS).map(link => <div key={link} className="mobile-navigation-link" onClick={() => onClick(LINKS[link])}>{LINKS[link]}</div>)}
            </div>
        </div>
    )
}

export default function Header({view, onLinkSelected, resetView}) {

    const isMobile = window.innerWidth <= 500;

    return(
        <div className="header">
            <Logo resetView={resetView}/>
            {isMobile && <MobileNavigation onLinkSelected={onLinkSelected}/>}
            {!isMobile && <Navigation view={view} onLinkSelected={onLinkSelected}/>}
            {/* <Contact/> */}
        </div>
    )
}