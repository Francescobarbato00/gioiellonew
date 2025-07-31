// components/ScrollingTextWithSocials.jsx
import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaShippingFast, FaGift, FaCheckCircle } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScrollingTextWithSocials({
  items = [
    { icon: <FaWhatsapp />, text: 'Assistenza WhatsApp 7/7' },
    { icon: <FaShippingFast />, text: 'Spedizioni rapide in 24h' },
    { icon: <FaGift />, text: 'Collezioni esclusive ogni mese' },
    { icon: <FaCheckCircle />, text: 'Qualità garantita al 100%' },
  ],
  interval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % items.length),
      interval
    );
    return () => resetTimeout();
  }, [current, interval, items.length]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prevSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <button className="arrow prev" onClick={prevSlide} aria-label="Previous">
        <ChevronLeft size={28} />
      </button>

      <div className="carousel-slide">
        <div className="carousel-item">
          <span className="item-icon">{items[current].icon}</span>
          <span className="item-text">{items[current].text}</span>
        </div>
      </div>

      <button className="arrow next" onClick={nextSlide} aria-label="Next">
        <ChevronRight size={28} />
      </button>

      <div className="social-icons">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}