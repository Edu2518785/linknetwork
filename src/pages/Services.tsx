import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Services.css";

export default function Services() {
  const services = [
    { title: "🔵 Internet Empresarial", text: "Redes dedicadas y de alta velocidad." },
    { title: "🟧 Redes Inteligentes", text: "Automatización y monitoreo con IA." },
    { title: "⚪ Soluciones Cloud", text: "Migración y optimización de sistemas en la nube." },
    { title: "🔵 Seguridad Digital", text: "Protección corporativa en tiempo real." },
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

      <ScrollReveal effect="fade">
        <div className="services-faq">
          <h2>FAQ</h2>
          <p>¿Cómo contratar? - Fácil, contáctanos</p>
          <p>Tiempo de entrega - 24-72 horas según servicio</p>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <button className="hero-btn">Cotiza rápido</button>
      </ScrollReveal>
    </div>
  );
}
