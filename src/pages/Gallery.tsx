import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Gallery.css";

export default function Gallery() {
  const images = Array.from({ length: 8 });

  return (
    <div className="gallery-container">
      <ScrollReveal>
        <h1 className="gallery-title">Galería de Proyectos</h1>
      </ScrollReveal>

      <div className="gallery-grid">
        {images.map((_, i) => (
          <ScrollReveal key={i} effect="fade">
            <div className="gal-item"></div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal effect="fade">
        <div className="gallery-categories">
          <p>Categorías: Proyectos recientes | Antes y después | Eventos | Productos</p>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="gallery-behind-scenes">
          <p>Fotos del equipo trabajando y mini historias de casos de éxito.</p>
        </div>
      </ScrollReveal>
    </div>
  );
}
