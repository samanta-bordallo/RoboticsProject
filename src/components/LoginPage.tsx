// LoginPage.tsx

import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import LoginForm from './LoginForm';
import '../styles.css';

const LoginPage: React.FC = () => {
  return (
    <div>
      <Menu isMainPage={false} /> {/* Menu na página de login */}
      <div className="login-page">
        <h2>Entrar</h2>
        <LoginForm /> {/* Formulário de login */}
      </div>
      <Footer /> {/* Rodapé */}
    </div>
  );
};

export default LoginPage;
