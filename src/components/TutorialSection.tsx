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
          {/* Exemplo de contêiner de tutorial */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="tutorial-item">
              <a className="tutorial-link" data-bs-toggle="modal" href="#tutorialModal1">
                <div className="tutorial-hover">
                  <div className="tutorial-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/kit-rob-seguidor-de-linha-d2-1-p-montagem.jpg" alt="..." />
              </a>
              <div className="tutorial-caption">
                <div className="tutorial-caption-heading">Seguidor de linha</div>
                <div className="tutorial-caption-subheading text-muted">Por Samanta Bordallo</div>
              </div>
            </div>
          </div>
          {/* Adicione mais contêineres conforme necessário */}
        </div>
      </div>
    </section>
  );
}

export default TutorialSection;
