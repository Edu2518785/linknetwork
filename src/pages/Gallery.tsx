import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <ScrollReveal>
        <h1 className="gallery-title">Galería Futurista</h1>
      </ScrollReveal>

      <div className="gallery-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <ScrollReveal key={i} effect="fade">
            <div className="gal-item"></div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
