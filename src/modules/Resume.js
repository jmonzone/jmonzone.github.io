import React from "react";
import './Resume.scss';
import TextBlock from "./TextBlock";
// import content from '../content/about.json'

export default function Resume({view}) {

    const onResumeClicked = () => {
        window.open('/assets/resume/resume.pdf');
    }

    return(
        <div className={`resume ${view == 'resume' ? 'active' : 'hidden'} `}>
                <div className="resume-header" onClick={onResumeClicked}>Resume</div>

                <img className="resume-preview" src="/assets/resume/resume.png" onClick={onResumeClicked}/>

        </div>
    )
}