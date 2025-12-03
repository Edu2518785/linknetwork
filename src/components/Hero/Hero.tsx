import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "../../pagescss/Hero.css";
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
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${banners[current]})` }}
      ></div>

      <div className="light light1"></div>
      <div className="light light2"></div>
      <div className="light light3"></div>

      <div className="hero-socials">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenido a <span className="accent">LinkNetwork</span>
        </h1>
        <p className="hero-subtitle">
          Conectividad inteligente, soluciones empresariales y tecnología de punta.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn">Conócenos</button>
          <button className="hero-btn">Contáctanos</button>
        </div>
      </div>
    </div>
  );
}
