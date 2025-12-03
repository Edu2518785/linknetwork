import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Hero.css";

import ban1 from "../../assets/ban1.jpg";
import ban2 from "../../assets/ban2.jpg";
import ban3 from "../../assets/ban3.jpg";

const banners = [ban1, ban2, ban3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">

      {/* NAVBAR */}
      <div className="hero-navbar">
        <div className="logo">LinkNetwork</div>
        <div className="menu">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
      </div>

      {/* BANNER CON CORTES */}
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banners[current]})` }}
      ></div>

      {/* REDES SOCIALES LATERALES */}
      <div className="hero-socials">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      {/* CONTENIDO DEL HERO */}
      <div className="hero-content">
        <h1 className="hero-title">Bienvenido a <span className="accent">LinkNetwork</span></h1>
        <p className="hero-subtitle">Conectividad inteligente, soluciones empresariales y tecnología de punta.</p>
        <div className="hero-buttons">
          <button className="hero-btn">Conócenos</button>
          <button className="hero-btn">Contáctanos</button>
        </div>
      </div>
    </div>
  );
}
