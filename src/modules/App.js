import React, { useState } from "react";
import About from "./About";
import Header from "./Header";
import ProjectGallery from "./ProjectGallery";
import Resume from "./Resume";
import SceneManager from "./SceneManager";
import tags from '../content/tags.json';

export default function App() {

    const [view, setView] = useState('projects');
    const [currentTag, setTag] = useState(tags.All);
    const [currentProject, setProject] = useState(null);

    return(
        <div className="app">
            <SceneManager/>
            <Header view={view} setView={setView} setTag={setTag} setProject={setProject}/>
            <About view={view}/>
            <ProjectGallery view={view} currentTag={currentTag} currentProject={currentProject} setTag={setTag} setProject={setProject}/>
            <Resume view={view}/>
        </div>
    )
}