import "../pagescss/Gallery.css";

export default function Gallery() {
  return (
    <div className="page gallery-page">
      <h1>Galería</h1>
      <p>Aquí podrás ver algunos trabajos, proyectos e instalaciones realizadas.</p>

      <div className="gallery-grid">
        <div className="gallery-item">Imagen 1</div>
        <div className="gallery-item">Imagen 2</div>
        <div className="gallery-item">Imagen 3</div>
        <div className="gallery-item">Imagen 4</div>
      </div>
    </div>
  );
}
