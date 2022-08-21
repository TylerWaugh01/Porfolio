import React from 'react';
import './App.css';
import Introduction from './components/Intro';
import Header from './components/Header';
import Skills from './components/Skills';
import ProjectsList from './features/projects/ProjectsList.js'
import { PROJECTS } from './app/shared/PROJECTS'

function App() {
    return (
        <div className='App'>
            <Header /> 
            <Introduction />
            <Skills />
            <ProjectsList projects = { PROJECTS }/>
        </div>
    );
}

export default App; 






