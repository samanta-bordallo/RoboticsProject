import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Sobre</h2>
          <h3 className="section-subheading text-muted">Saiba mais sobre o projeto e o desenvolvedor</h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Conteúdo sobre o projeto e o desenvolvedor */}
            <p>Descrição sobre o projeto e o desenvolvedor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
