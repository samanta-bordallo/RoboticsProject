import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import TutorialsSection from './components/TutorialSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import Home from './components/Home.tsx';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

const MainPage: React.FC = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="tutoriais">
        <TutorialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
