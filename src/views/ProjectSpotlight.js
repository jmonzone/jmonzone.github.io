import React from "react";
import projects from '../content/projects.json';
import TextBlock from "./TextBlock";
import Project from "./Project";

export default function ProjectSpotlight({project}) {

    const header = project ? projects[project].label : '';
    const description = project ? projects[project].description : [];
    const spotlight = project ? <Project project={project} opacity={false} includeLabel={false}/> : '';

    const url = project && projects[project].url ? <div className="last">Try it out <a href={projects[project].url}>here</a></div> : null;

    return(
        <div className={`projects-spotlight ${project ? 'active' : 'hidden'}`}>
                <div className="projects-spotlight-project">{spotlight}</div>
                <div className="projects-spotlight-text">
                    <div className="projects-spotlight-header">{header}</div>
                    {description.map((description, index) => <TextBlock key={index} text={description} url={index === 1 ? url : null}/>)}
                </div>
        </div>
    )
}