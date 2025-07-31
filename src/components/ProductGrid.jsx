// components/ProductShowcase.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      img: "/1.jpg",
      title: "Set Orecchini Little Ocean SS25",
      oldPrice: 24.0,
      price: 18.95,
    },
    {
      id: 2,
      img: "/2.jpg",
      title: "Collana Archeos SS25",
      oldPrice: 27.0,
      price: 21.95,
    },
    {
      id: 3,
      img: "/3.jpg",
      title: "Orecchini Zante SS25",
      oldPrice: 24.0,
      price: 18.95,
    },
    {
      id: 4,
      img: "/4.jpg",
      title: "Collana Maxi Charms Summer SS25",
      oldPrice: 27.0,
      price: 21.95,
    },
  ];

  return (
    <section className="ps-container">
      <div className="ps-header">
        <p>Stagione Estiva</p>
        <h2>Nuovi Arrivi</h2>
      </div>

      <motion.div
        className="ps-grid"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {products.map((prod) => (
          <motion.div
            key={prod.id}
            className="ps-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="ps-image">
              <Image
                src={prod.img}
                alt={prod.title}
                fill
                className="ps-img"
              />
            </div>
            <div className="ps-info">
              <h3>{prod.title}</h3>
              <div className="ps-price">
                <span className="old">€{prod.oldPrice.toFixed(2)}</span>
                <span className="new">€{prod.price.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="ps-footer">
        <a href="/products" className="ps-button">
          Guarda tutti i prodotti
        </a>
      </div>
    </section>
  );
}
