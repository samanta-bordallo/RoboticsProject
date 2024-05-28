import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Robotics Project 2024</span>
          </div>
          <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#" className="social-icon email"><i className="bi bi-envelope"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-icon whatsapp"><i className="bi bi-whatsapp"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/samanta-bordallo-86805a117/" className="social-icon linkedin"><i className="bi bi-linkedin"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-icon github"><i className="bi bi-github"></i></a>
            </li>
          </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
