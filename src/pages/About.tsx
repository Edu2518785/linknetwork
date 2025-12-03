import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero-glow"></div>

      <ScrollReveal>
        <h1 className="about-title">Quiénes Somos</h1>
      </ScrollReveal>

      <ScrollReveal>
        <p className="about-text">
          En <span className="accent">LinkNetwork</span> llevamos la conectividad al siguiente nivel desde 2015, combinando innovación y profesionalismo.
        </p>
      </ScrollReveal>

      <ScrollReveal effect="slide">
        <div className="about-timeline">
          <h2>Línea del tiempo</h2>
          <ul>
            <li>2015: Fundación</li>
            <li>2018: Primeros clientes corporativos</li>
            <li>2022: Expansión a Latinoamérica</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="about-mission-values">
          <h2>Misión, Visión y Valores</h2>
          <div>Misión: Brindar conectividad confiable y avanzada.</div>
          <div>Visión: Ser líderes en innovación tecnológica.</div>
          <div>Valores: Innovación, Transparencia, Compromiso.</div>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="about-team">
          <h2>Equipo</h2>
          <div className="team-members">
            <div className="member-card">
              <p>👨‍💻 Diego Huayra</p>
              <p>CEO</p>
            </div>
            <div className="member-card">
              <p>👩‍💼 Ana López</p>
              <p>CTO</p>
            </div>
            <div className="member-card">
              <p>👨‍🔧 Carlos Pérez</p>
              <p>COO</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="about-awards">
          <h2>Reconocimientos</h2>
          <p>Premio a la mejor empresa de conectividad 2022</p>
          <p>Certificación ISO 27001</p>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="about-impact">
          <h2>Nuestro impacto</h2>
          <p>+500 clientes atendidos en 10 ciudades</p>
        </div>
      </ScrollReveal>
    </div>
  );
}
