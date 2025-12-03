import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-bg-glow"></div>

      <ScrollReveal>
        <h1 className="services-title">Nuestros Servicios</h1>
      </ScrollReveal>

      <ScrollReveal>
        <div className="services-grid">

          <div className="service-item">
            <h3>🔵 Internet Empresarial</h3>
            <p>
              Conexiones dedicadas con latencia ultrabaja para empresas de alto
              rendimiento.
            </p>
          </div>

          <div className="service-item">
            <h3>🟧 Redes Inteligentes</h3>
            <p>
              Implementación de redes seguras, monitoreo y automatización con IA.
            </p>
          </div>

          <div className="service-item">
            <h3>⚪ Soluciones Cloud</h3>
            <p>
              Migración, mantenimiento y optimización de sistemas en la nube.
            </p>
          </div>

          <div className="service-item">
            <h3>🔵 Seguridad Digital</h3>
            <p>
              Firewalls, antivirus corporativos y protección en tiempo real.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
}
