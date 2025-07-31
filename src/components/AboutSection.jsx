// components/AboutSection.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="about-container">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/13.jpg"
          alt="Chi siamo"
          fill
          className="about-img"
        />
      </motion.div>

      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="about-pre">chi siamo?</p>
        <h2 className="about-title">Gioielli</h2>
        <p className="about-body">
          Gioielli è nato nel 2020 con l’obiettivo di proporre gioielli
          in acciaio inossidabile e Argento 925. Garantiamo qualità e
          accessibilità, per offrire a tutti la possibilità di brillare ogni
          giorno con un gioiello speciale.
        </p>
      </motion.div>
    </section>
  );
}
