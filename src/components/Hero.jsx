// components/Hero.jsx
"use client";
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
        <iframe
          src="https://www.youtube.com/embed/hLxNs2CTDZ0?autoplay=1&mute=1&loop=1&playlist=hLxNs2CTDZ0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="Video Hero"
          frameBorder="0"
          allow="autoplay; loop; muted"
          allowFullScreen
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">Collezione Estiva</h1>
        <p className="hero-subtitle">I nostri gioielli preferiti per la stagione</p>
        <div className="hero-buttons">
          <a href="/nuovi-arrivi" className="btn btn-outline">Nuovi Arrivi</a>
          <a href="/best-seller" className="btn btn-solid">I Più Venduti</a>
        </div>
      </div>

      <div className="hero-socials">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com"    target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://wa.me/…"          target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </section>
  );
}
