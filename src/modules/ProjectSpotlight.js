import React from "react";
import projects from '../content/projects.json';
import TextBlock from "./TextBlock";
import Project from "./Project";
import './ProjectSpotlight.scss';

export default function ProjectSpotlight({project, view}) {

    const header = project ? projects[project].label : '';
    const description = project ? projects[project].description : [];
    const spotlight = project ? <Project project={project} opacity={false} includeLabel={false}/> : '';


    return(
        <div className={`projects-spotlight ${project ? 'active' : 'hidden'}`}>
                <div className="projects-spotlight-text">
                    <div className="projects-spotlight-header">{header}</div>
                    {description.map((description, index) => <TextBlock key={index} text={description} show={view == 'projects'}/>)}
                </div>
                <div className="projects-spotlight-project">
                    {spotlight}
                </div>
        </div>
    )
}