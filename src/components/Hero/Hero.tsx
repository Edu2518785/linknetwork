import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1 className="hero-title">
          Conectividad del Futuro con <span>LinkNetwork</span>
        </h1>

        <p className="hero-subtitle">
          Internet dedicado, infraestructura moderna y soluciones inteligentes para tu empresa.
        </p>

        <button className="hero-btn">Contáctanos</button>

      </div>

      <div className="hero-bg-lights"></div>
      <div className="hero-grid"></div>
    </section>
  );
}
