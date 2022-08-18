import React from 'react';
import './App.css';
import Introduction from './components/Intro';
import Header from './components/Header';
import Skills from './components/Skills';


function App() {
    return (
        <div className='App'>
            <Header /> 
            <Introduction />
            <Skills />
        </div>
    );
}

export default App; 