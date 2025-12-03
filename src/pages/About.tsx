import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero-glow"></div>

      <ScrollReveal>
        <h1 className="about-title">¿Quiénes Somos?</h1>
      </ScrollReveal>

      <ScrollReveal>
        <p className="about-text">
          En <span className="accent">LinkNetwork</span> transformamos la
          conectividad en una experiencia futurista. Nuestro enfoque mezcla
          tecnologías de alto rendimiento con soluciones avanzadas inspiradas en
          sistemas inteligentes al estilo Stark Industries.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="about-cards">
          <div className="about-card">
            <h3>🔵 Innovación Avanzada</h3>
            <p>
              Desarrollamos soluciones con visión a 10 años, optimizadas con IA
              y automatización.
            </p>
          </div>

          <div className="about-card">
            <h3>🟧 Conectividad Inteligente</h3>
            <p>
              Redes rápidas, seguras y escalables para empresas que buscan el
              futuro hoy.
            </p>
          </div>

          <div className="about-card">
            <h3>⚪ Tecnología Limpia</h3>
            <p>
              Sistemas eficientes con bajo consumo y máxima estabilidad
              operativa.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
