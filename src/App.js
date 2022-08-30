import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Introduction from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import Skills from './components/Skills';
import ProjectsList from './features/projects/ProjectsList.js'
import { PROJECTS } from './app/shared/PROJECTS'
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsDirectoryPage from './pages/ProjectsDirectoryPage';

function App() {
    return (
        <div className='App'>
            <Header /> 
            <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='contact' element={<ContactPage />} /> */}
            {/* <Introduction />
            <Skills /> */}
            {/* <Route path='projects' element={<ProjectsDirectoryPage />} /> */}
            {/* <Route path='projects' element={<ProjectsList projects={ PROJECTS } /> } /> */}
            <Route
                    path='/:projectId'
                    element={<ProjectDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App; 






