import React from "react";
import './About.scss';
import TextBlock from "./TextBlock";
import content from '../content/about.json'

export default function About({view}) {
    return(
        <div className={`about ${view == 'about' ? 'active' : 'hidden'} `}>
            <img className="about-headshot" src="/assets/images/headshot.png"/>
            <div className="about-text">
                <div className="about-header">About Johnnan</div>
                {content.map((text, index) => <TextBlock key={index} text={text} show={view == 'about'}/>)}
            </div>
        </div>
    )
}