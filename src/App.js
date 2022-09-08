import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

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






