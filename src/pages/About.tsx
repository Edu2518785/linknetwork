import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/About.css";

export default function About() {
  const cards = [
    { title: "🔵 Innovación Avanzada", text: "Desarrollamos soluciones con visión a 10 años, optimizadas con IA y automatización." },
    { title: "🟧 Conectividad Inteligente", text: "Redes rápidas, seguras y escalables para empresas que buscan el futuro hoy." },
    { title: "⚪ Tecnología Limpia", text: "Sistemas eficientes con bajo consumo y máxima estabilidad operativa." },
  ];

  return (
    <div className="about-container">
      <div className="about-hero-glow"></div>

      <ScrollReveal>
        <h1 className="about-title">¿Quiénes Somos?</h1>
      </ScrollReveal>

      <ScrollReveal>
        <p className="about-text">
          En <span className="accent">LinkNetwork</span> transformamos la conectividad en una experiencia futurista. Nuestro enfoque mezcla tecnologías de alto rendimiento con soluciones avanzadas inspiradas en sistemas inteligentes al estilo Stark Industries.
        </p>
      </ScrollReveal>

      <div className="about-cards">
        {cards.map((c, i) => (
          <ScrollReveal key={i} effect="slide">
            <div className="about-card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
