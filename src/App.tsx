import React from 'react';
import './styles.css';
import TutorialsSection from "./components/TutorialSection.tsx";
import AboutSection from "./components/AboutSection.tsx";


const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="top-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#tutoriais">Tutoriais</a></li>
          <li><a href="#crieoseu">Crie o seu</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="center-content">
          <h4>Desvende o mundo da robótica conosco!</h4>
          <h2>Bem-vindo ao futuro:</h2>
          <h2>aprendendo robótica</h2>
          <button className="create-tutorial-btn">Crie o seu próprio tutorial</button>
        </div>
      </div>
      <AboutSection />
      <TutorialsSection />
    </div>
  );
}

export default App;
