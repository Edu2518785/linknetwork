import "../pagescss/Home.css";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-content">
        <h1 className="home-title">
          Conectividad <span className="accent">LinkNetwork</span>
        </h1>

        <p className="home-subtitle">
          Internet dedicado, soluciones empresariales y tecnología con un
          estilo futurista inspirado en interfaces avanzadas.
        </p>

        <button className="hero-btn">Más Información</button>
      </div>

      <div className="home-lights" />
    </div>
  );
}
