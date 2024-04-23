import React from 'react';
import './nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2>Nuestra Historia</h2>
      <p>
        La tienda de zapatillas se fundó en el año 2000 con el objetivo de proporcionar a nuestros clientes
        la mejor selección de zapatillas de alta calidad. Desde entonces, nos hemos esforzado por
        ofrecer una experiencia de compra excepcional y un servicio al cliente de primera clase.
      </p>

      <h2>Nuestro Objetivo</h2>
      <p>
        Nuestro objetivo es proporcionar a los entusiastas del calzado una amplia variedad de opciones
        para satisfacer sus necesidades y preferencias individuales. Nos esforzamos por ofrecer las últimas
        tendencias y estilos, así como también marcas reconocidas por su calidad y rendimiento.
      </p>

      <h2>Nuestros Fundadores</h2>
      <div className="fundadores">
        <div className="fundador">
          {/* Imagen del fundador */}
          <img src="https://img.freepik.com/foto-gratis/empresario_1368-8770.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1713225600&semt=ais" alt="Fundador 1" />
          <h3>Jhon White</h3>
          <p>Jhon White, un apasionado del deporte desde joven, siempre soñó con tener su propia tienda de zapatillas. Después de años de amistad con Jack Maddison, decidieron unir fuerzas y convertir su sueño en realidad.</p>
        </div>
        <div className="fundador">
          {/* Imagen del fundador */}
          <img src="https://img.freepik.com/foto-gratis/hombre-negocios-feliz-vestido-traje-gris-que-encuentran-aisladas-pared-blanca_231208-9211.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1712793600&semt=ais" alt="Fundador 2" />
          <h3>Jack Maddison</h3>
          <p>Jack Maddison compartía la misma pasión por las zapatillas que su amigo Jhon. Juntos, formaron un equipo dinámico y decidido a ofrecer a los clientes una experiencia única en la compra de calzado deportivo.</p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
