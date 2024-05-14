import React from 'react';

const TutorialSection: React.FC = () => {
  return (
    <section className="tutorial-section bg-light" id="tutorial">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Tutoriais</h2>
          <h3 className="section-subheading text-muted">Veja os tutoriais disponíveis no site!</h3>
        </div>
        <div className="row">
          {/* Conteúdo dos tutoriais */}
        </div>
      </div>
    </section>
  );
}

export default TutorialSection;
