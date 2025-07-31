// components/TestimonialSection.jsx
"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="ts-container">
      {/* Title */}
      <motion.h2
        className="ts-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        DICONO DI NOI
      </motion.h2>

      {/* Text part */}
      <motion.div
        className="ts-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ts-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <blockquote>
          “Sono arrivati, sono proprio come me li aspettavo e la scatola profuma
          tantissimo. Vi sceglierei altre mille volte, per la cura e la bellezza
          dei vostri gioielli 🤍”
        </blockquote>
        <cite>- Camilla G.</cite>
      </motion.div>

      {/* Image part */}
      <motion.div
        className="ts-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/testimonial.jpg"
          alt="Testimonial Gioielli"
          fill
          className="ts-img"
        />
      </motion.div>
    </section>
  );
}
