import React from 'react';
import './Footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <ul>
            <li>Dirección: Calle Falsa 123</li>
            <li>Teléfono: +123 456 789</li>
            <li>Email: info@tutienda.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
          <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank"><WhatsAppIcon /></a>
          <a href="https://www.facebook.com/" target="_blank"><FacebookIcon /></a>
          <a href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tu Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

