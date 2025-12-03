import ScrollReveal from "../components/Effects/ScrollReveal";
import Hero from "../components/Hero/Hero";
import "../pagescss/Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO ANIMADO CON BANNER Y REDES */}
      <Hero />

      {/* MINI PRESENTACIÓN */}
      <ScrollReveal>
        <div className="presentation-section">
          <p>
            Transformamos la conectividad en experiencias únicas. Innovación, seguridad y velocidad para tu empresa.
          </p>
        </div>
      </ScrollReveal>

      {/* VIDEO INTRO */}
      <ScrollReveal>
        <div className="video-section">
          <video src="/assets/video-intro.mp4" autoPlay muted loop />
        </div>
      </ScrollReveal>

      {/* SERVICIOS DESTACADOS */}
      <ScrollReveal>
        <div className="services-preview-section">
          <div className="service-preview">Internet Empresarial</div>
          <div className="service-preview">Redes Inteligentes</div>
          <div className="service-preview">Soluciones Cloud</div>
          <div className="service-preview">Seguridad Digital</div>
        </div>
      </ScrollReveal>

      {/* ESTADÍSTICAS */}
      <ScrollReveal>
        <div className="stats-section">
          <div className="stat">+500 Clientes satisfechos</div>
          <div className="stat">10 Años de experiencia</div>
          <div className="stat">24/7 Soporte</div>
        </div>
      </ScrollReveal>

      {/* TESTIMONIOS */}
      <ScrollReveal>
        <div className="testimonials-section">
          <div className="testimonial-card">
            <img src="/assets/client1.jpg" alt="Cliente 1" />
            <p>"Excelente servicio, siempre confiable y rápido"</p>
          </div>
          <div className="testimonial-card">
            <img src="/assets/client2.jpg" alt="Cliente 2" />
            <p>"Nuestro sistema nunca fue tan estable y seguro"</p>
          </div>
        </div>
      </ScrollReveal>

      {/* LOGOS DE ALIADOS */}
      <ScrollReveal>
        <div className="logos-section">
          <img src="/assets/logo1.png" alt="Logo 1" />
          <img src="/assets/logo2.png" alt="Logo 2" />
          <img src="/assets/logo3.png" alt="Logo 3" />
        </div>
      </ScrollReveal>

      {/* NOTICIAS */}
      <ScrollReveal>
        <div className="news-section">
          <h3>Últimas noticias</h3>
          <p>Nuestro nuevo centro de datos está operativo desde este mes.</p>
        </div>
      </ScrollReveal>

      {/* FUNDADOR */}
      <ScrollReveal>
        <div className="founder-section">
          <img src="/assets/founder.jpg" alt="Fundador" />
          <p>"Nuestra misión es conectar el mundo con tecnología de punta"</p>
        </div>
      </ScrollReveal>

      {/* BOTÓN COTIZA */}
      <ScrollReveal>
        <div className="cotiza-section">
          <button className="hero-btn">Cotiza ahora</button>
        </div>
      </ScrollReveal>

    </div>
  );
}
