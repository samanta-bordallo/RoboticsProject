import React, { useState } from 'react';
import './styles.css';
import TutorialsSection from './components/TutorialSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import Home from './components/Home.tsx'

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
  <div>
    <div id="home"> 
    < Home/>
    </div>
    <div id="about"> 
    <AboutSection />
    </div>
    <div id="tutoriais"> 
    <TutorialsSection />
    </div>
  </div>
  );
};

export default App;
