import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Introduction from './components/Intro';
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './components/Skills';
import ProjectsList from './features/projects/ProjectsList.js'
import { PROJECTS } from './app/shared/PROJECTS'

function App() {
    return (
        <div className='App'>
            <Header /> 
            <Routes>
            <Route path='/' element={<Home />} />
            {/* <Introduction />
            <Skills /> */}
            <Route path='projects' element={<ProjectsList projects={ PROJECTS } /> } />
            </Routes>
        </div>
    );
}

export default App; 






