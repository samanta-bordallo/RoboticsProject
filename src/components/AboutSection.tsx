import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className = "text-center">Sobre</h2>
          <h3 className="section-subheading text-muted">Um pouco sobre o Projeto Robótica</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4 className="my-3">O site</h4>
            <p className="text-muted">O site está a ser criado para servir como avaliação final do curso TETP Sistemas de Informação que a desenvolvedora está a fazer no IEFP.</p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">O robô</h4>
            <p className="text-muted">A ideia de criar um robô ficou em segundo plano, mas não deixou de existir! Logo ele estará a ser construído.</p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">A desenvolvedora</h4>
            <p className="text-muted">A desenvolvedora chama-se Samanta Bordallo, tem 27 anos, é bióloga e perita criminal, mas resolver entrar na área da programação em 2022 e hoje ela está a finalizar o curso TETP Sistemas de Informação de nível 5.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
