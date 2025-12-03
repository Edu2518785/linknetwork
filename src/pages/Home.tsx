import "../pagescss/Home.css";

export default function Home() {
  return (
    <section className="home-hero">

      {/* LUCES FUTURISTAS */}
      <div className="light light1"></div>
      <div className="light light2"></div>
      <div className="light light3"></div>

      <div className="home-content">
        <h1 className="home-title">
          Bienvenido a <span className="accent">LinkNetwork</span>
        </h1>

        <p className="home-subtitle">
          Infraestructura digital avanzada, conectividad inteligente y
          soluciones empresariales de alto rendimiento.
        </p>

        <button className="hero-btn">Conoce nuestros servicios</button>
      </div>
    </section>
  );
}
