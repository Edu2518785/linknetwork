import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <ScrollReveal>
        <h1 className="gallery-title">Galería Futurista</h1>
      </ScrollReveal>

      <ScrollReveal>
        <div className="gallery-grid">
          <div className="gal-item"></div>
          <div className="gal-item"></div>
          <div className="gal-item"></div>
          <div className="gal-item"></div>
          <div className="gal-item"></div>
          <div className="gal-item"></div>
        </div>
      </ScrollReveal>
    </div>
  );
}
