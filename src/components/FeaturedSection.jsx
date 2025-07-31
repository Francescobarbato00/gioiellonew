// components/FeaturedSection.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedSection() {
  const rightImages = [
    { src: "/6.jpg", alt: "Bracciale Chiodo Pavé Rigido", href: "/products/bracelet" },
    { src: "/7.jpg",    alt: "Anelli Words",              href: "/products/rings"   },
    { src: "/8.jpg", alt: "Orecchini Little Ocean",    href: "/products/earrings" },
    { src: "/9.jpg", alt: "Collana Maxi Charms",        href: "/products/necklace" },
  ];

  return (
    <section className="fs-container">
      {/* Left large image */}
      <motion.div
        className="fs-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="fs-left-image">
          <Image src="/5.jpg" alt="I più venduti" fill className="fs-img" />
        </div>
        <div className="fs-left-content">
          <h2>I più venduti</h2>
          <p>top 4 per l’estate</p>
          <Link href="/collections/bestsellers" className="fs-button">
            Scopri tutta la linea
          </Link>
        </div>
      </motion.div>

      {/* Right grid of 4 */}
      <div className="fs-right">
        {rightImages.map((item, idx) => (
          <motion.div
            key={idx}
            className="fs-thumb"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={item.href}>
              <div className="fs-thumb-image">
                <Image src={item.src} alt={item.alt} fill className="fs-img" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
