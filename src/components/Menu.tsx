// Menu.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  isMainPage: boolean; // Propriedade para indicar se é a página principal
}

const Menu: React.FC<MenuProps> = ({ isMainPage }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    // Se for a página principal, apenas exibe ou oculta o menu, sem alterar as rotas
    if (isMainPage) {
      setShowMenu(!showMenu);
    }
  };

  return (
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
        <li><a href="#contacto" className="spacing">Contato</a></li>
        <li><Link to="/login">Entrar</Link></li>
        <li><a href="#registerform">Registar</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
