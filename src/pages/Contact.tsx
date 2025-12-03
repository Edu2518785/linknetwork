import ScrollReveal from "../components/Effects/ScrollReveal";
import "../pagescss/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <ScrollReveal>
        <h1 className="contact-title">Contáctanos</h1>
      </ScrollReveal>

      <ScrollReveal>
        <form className="contact-form">
          <input type="text" placeholder="Nombre completo" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="text" placeholder="Asunto" />
          <textarea placeholder="Mensaje"></textarea>
          <button>Enviar Mensaje</button>
        </form>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="contact-info">
          <p>📞 Teléfono: +51 938 000 000</p>
          <p>✉️ Email: contacto@linknetwork.com</p>
          <p>🌍 Ubicación: Lima, Perú</p>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="contact-hours">
          <p>Horario: Lunes a Viernes 9:00-18:00</p>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <div className="contact-links">
          <p>Redes: Facebook | Twitter | Instagram</p>
          <p>Enlaces útiles: FAQ, Blog, Servicios</p>
        </div>
      </ScrollReveal>

      <ScrollReveal effect="fade">
        <button className="hero-btn">Agendar cita</button>
      </ScrollReveal>
    </div>
  );
}
