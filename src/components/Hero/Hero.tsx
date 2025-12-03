import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Internet Empresarial de Alta Velocidad</h1>
        <p className="hero-text">
          Conectividad segura, estable y diseñada para el crecimiento de tu empresa.
        </p>

        <button className="hero-btn">Contáctanos</button>
      </div>

      <div className="hero-overlay" />
    </section>
  );
}
