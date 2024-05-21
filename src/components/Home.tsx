import React, { useState } from 'react';
import '../styles.css';

const AboutSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <nav className="top-menu">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu-items ${showMenu ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#tutoriais">Tutoriais</a></li>
          <li><a href="#crieoseu">Crie o seu</a></li>
          <li><a href="#contacto">Contato</a></li>
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
    </div>
  );
}

export default AboutSection;