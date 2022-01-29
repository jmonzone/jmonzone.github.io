import React from "react";

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