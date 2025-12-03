import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Services.css";

export default function Services() {
  const services = [
    { title: "🔵 Internet Empresarial", text: "Conexiones dedicadas con latencia ultrabaja para empresas de alto rendimiento." },
    { title: "🟧 Redes Inteligentes", text: "Implementación de redes seguras, monitoreo y automatización con IA." },
    { title: "⚪ Soluciones Cloud", text: "Migración, mantenimiento y optimización de sistemas en la nube." },
    { title: "🔵 Seguridad Digital", text: "Firewalls, antivirus corporativos y protección en tiempo real." },
  ];

  return (
    <div className="services-container">
      <div className="services-bg-glow"></div>

      <ScrollReveal>
        <h1 className="services-title">Nuestros Servicios</h1>
      </ScrollReveal>

      <div className="services-grid">
        {services.map((s, i) => (
          <ScrollReveal key={i} effect="zoom">
            <div className="service-item">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
