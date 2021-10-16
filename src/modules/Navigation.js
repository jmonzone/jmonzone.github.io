import React from "react";
import './Navigation.scss';
import links from '../content/links';
import NavigationLink from "./NavigationLink";

export default function Navigation({view, setView}) {

    const onClick = (link) => {
        setView(link);
    }

    return(
        <div className="navigation">
            {Object.keys(links).map(link => <NavigationLink key={link} link={link} active={view == link} onClick={() => onClick(link)}/>)}
        </div>
    )
}