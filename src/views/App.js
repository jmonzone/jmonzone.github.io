import React, { useState } from "react";
import About from "./About";
import Header from "./Header";
import ProjectGallery from "./ProjectGallery";
import Resume from "./Resume";
import SceneManager from "./SceneManager";
import TAGS from '../content/tags.json';

export default function App() {

    const VIEWS = {
        PROJECTS: 'projects',
        ABOUT: 'about',
        RESUME: 'resume'
    }

    const [view, setView] = useState(VIEWS.PROJECTS);
    const [currentTag, setTag] = useState(TAGS.All);
    const [currentProject, setProject] = useState(null);

    const onLinkSelected = link => {
        setView(link);
        setTag(TAGS.All);
        setProject(null);
    }

    const resetView = () => {
        setView(VIEWS.PROJECTS);
        setTag(TAGS.All);
        setProject(null);
    }

    return(
        <div className="app">
            <SceneManager/>
            <Header view={view} onLinkSelected={onLinkSelected} resetView={resetView}/>
            {view === VIEWS.ABOUT && <About/>}
            {view === VIEWS.PROJECTS && <ProjectGallery view={view} currentTag={currentTag} currentProject={currentProject} setTag={setTag} setProject={setProject}/>}
            {view === VIEWS.RESUME && <Resume view={view}/>}
        </div>
    )
}