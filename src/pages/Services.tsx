import "../pagescss/Services.css";


export default function Services() {
  return (
    <div className="services-container">
      <h1>Nuestros Servicios</h1>

      <div className="services-grid">
        <div className="service-card">
          <h3>Instalaciones de Redes</h3>
          <p>
            Diseño e implementación de redes estructuradas para empresas y
            negocios.
          </p>
        </div>

        <div className="service-card">
          <h3>Seguridad y Monitoreo</h3>
          <p>
            Cámaras, sensores, servidores y sistemas de vigilancia avanzados.
          </p>
        </div>

        <div className="service-card">
          <h3>Soporte Técnico</h3>
          <p>
            Mantenimiento preventivo y correctivo para equipos y sistemas
            informáticos.
          </p>
        </div>
      </div>
    </div>
  );
}
