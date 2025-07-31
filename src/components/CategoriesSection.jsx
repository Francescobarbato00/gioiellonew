// components/CategoriesSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTruck, FaCheckCircle, FaSmile } from "react-icons/fa";

export default function CategoriesSection() {
  const cats = [
    { id: 10, label: "Anelli",     src: "/10.jpg", href: "/categorie/anelli" },
    { id: 11, label: "Collane",    src: "/11.jpg", href: "/categorie/collane" },
    { id: 12, label: "Orecchini",  src: "/12.jpg", href: "/categorie/orecchini" },
    { id: 14, label: "Bracciali",  src: "/14.jpg", href: "/categorie/bracciali" },
  ];

  const features = [
    {
      icon: <FaTruck size={32} />,
      title: "Spedizione Gratuita",
      desc: "Spedizione Veloce e Gratuita da 69€.",
    },
    {
      icon: <FaCheckCircle size={32} />,
      title: "Prodotti Certificati",
      desc: "Tutti i gioielli sono in acciaio inossidabile!",
    },
    {
      icon: <FaSmile size={32} />,
      title: "Soddisfatti o Rimborsati",
      desc: "Se il tuo prodotto dovesse perdere la resistenza alla corrosione, ti rimborseremo.",
    },
  ];

  return (
    <section className="cs-container">
      <motion.div
        className="cs-grid"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {cats.map((c) => (
          <motion.div
            key={c.id}
            className="cs-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={c.href}>
              <div className="cs-img-wrapper">
                <Image src={c.src} alt={c.label} fill className="cs-img" />
                <div className="cs-label">
                  <span>{c.label}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="cs-features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="cs-feature"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="cs-icon">{f.icon}</div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
