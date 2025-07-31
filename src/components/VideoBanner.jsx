// components/VideoBanner.jsx
"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function VideoBanner() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
  }, [controls]);

  const videoId = "8PycAc5-Yb0";

  return (
    <section className="vb-container">
      <div className="vb-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
          title="Video Banner"
          frameBorder="0"
          allow="autoplay; loop; muted"
          allowFullScreen
        />
      </div>
      <div className="vb-overlay" />
      <motion.div
        className="vb-content"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h2 className="vb-title">La Nostra Collezione</h2>
        <p className="vb-subtitle">scopri ogni categoria</p>
      </motion.div>
    </section>
  );
}
