import React from "react";
import TextBlock from "./TextBlock";

export default function About() {

    const intro = "Hi everyone, I am a software developer based in New York City. I enjoy building interactive games, dynamic web-based applications, and immersive AR/VR experiences. My skillset includes using tools such as Three.js, React, Unity, and various networking frameworks."

    const background = "I graduated with a B.S. Degree in Computer Science and Mathematics from Macaulay Honors College in New York City. My background includes taking on a fellowship with an AR/VR research facility and working for a virtual reality startup focused on forensics and law enforcement. Currently, I am working full time for a media production agency in healthcare, leading development on various mixed reality experiences."
    return(
        <div className={`about`}>
            <img className="about-headshot" src="/assets/images/headshot.png"/>
            <div className="about-text">
                <div className="about-header">About Johnnan</div>
                <TextBlock text={intro}/>
                <TextBlock text={background}/>
            </div>
        </div>
    )
}