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
    </div>
  );
}
