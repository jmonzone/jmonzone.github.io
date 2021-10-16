import React from "react";
import projects from '../content/projects.json'
import Project from "./Project";
import ProjectSpotlight from "./ProjectSpotlight";
import './ProjectGallery.scss';
import tags from '../content/tags.json';

export default function ProjectGallery({view, currentTag, currentProject, setTag, setProject}) {

    let projectsToShow = [];

    if (currentTag == tags.All) projectsToShow = Object.keys(projects);
    else {
        Object.keys(projects).forEach(project => {
            if (projects[project].tags.includes(currentTag)) projectsToShow.push(project)
        })
    }

    const onNavigationTagClicked = (tag) => {
        setTag(tag);
        setProject(null);
    }

    const backToGallery = <div className={`projects-navigation-tag`} onClick={() => setProject(null)}>Back To Projects</div>;
    // const navigation = currentProject ?  backToGallery : '';
    const navigation = currentProject ?  backToGallery : Object.keys(tags).map(tag => <div className={`projects-navigation-tag ${tag == currentTag ? 'active' : 'inactive'}`} key={tag} onClick={() => onNavigationTagClicked(tag)}>{tags[tag]}</div>)
   
    return(
        <div className={`projects ${view == 'projects' ? 'active' : 'hidden'}`}>
            <div className="projects-navigation">
                {navigation}
            </div>
            <ProjectSpotlight project={currentProject} view={view}/>
            <div className={`projects-gallery ${currentProject ? 'hidden' : 'active'}`}>
                <div className="projects-gallery-header">{tags[currentTag]} Projects</div>
                <div className="projects-gallery-projects">
                    {projectsToShow.map(project => <Project key={project} project={project} onClick={() => setProject(project)}/>)}
                </div>
            </div>
        </div>
    )
}