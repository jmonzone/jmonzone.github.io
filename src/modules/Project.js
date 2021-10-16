import React from "react";
import projects from '../content/projects.json'
import './Project.scss';

export default function Project({project, onClick, opacity=true, includeLabel=true}) {

    let preview = null;

    const className = `project-preview ${opacity ? 'low-opacity' : ''}`;
    if(projects[project].gif) preview = <img className={className} src={projects[project].gif}/>
    else preview = <div></div>

    const label = includeLabel ? <div className='project-label'>{projects[project].label}</div> : null;


    return(
        <div className="project" onClick={onClick}>
            <div className='project-background'></div>
            {preview}
            {label}
        </div>
    )
}