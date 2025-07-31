// components/Footer.jsx
"use client";

import Link from "next/link";
import {
  FaQuestionCircle,
  FaRegCommentDots,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="ft-container">
      <div className="ft-grid">
        {/* Colonna 1 — Brand */}
        <div className="ft-col">
          <h4 className="ft-heading">Gioielli</h4>
          <p>
            <strong>Gioielli</strong> è il brand di gioielli in acciaio e Argento
            925, nato nel 2020. Uniamo design contemporaneo, cura dei dettagli e
            qualità garantita per esaltare ogni stile.
          </p>
        </div>

        {/* Colonna 2 — Assistenza */}
        <div className="ft-col">
          <h4 className="ft-heading">Assistenza Clienti</h4>
          <div className="ft-contact">
            <FaQuestionCircle className="ft-icon" />
            <a
              href="https://wa.me/393533187510"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-link"
            >
              WhatsApp: +39 353 318 7510
            </a>
          </div>
          <div className="ft-contact">
            <FaRegCommentDots className="ft-icon" />
            <a href="mailto:info@gioielli.com" className="ft-link">
              Email: info@gioielli.com
            </a>
          </div>
        </div>

        {/* Colonna 3 — Informazioni */}
        <div className="ft-col">
          <h4 className="ft-heading">Informazioni</h4>
          <ul className="ft-list">
            <li>
              <Link href="/chi-siamo" className="ft-link">
                Chi siamo
              </Link>
            </li>
            <li>
              <Link href="/resi-cambi" className="ft-link">
                Resi e Cambi
              </Link>
            </li>
            <li>
              <Link href="/termini" className="ft-link">
                Termini di Vendita
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="ft-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie" className="ft-link">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/contatti" className="ft-link">
                Contattaci
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonna 4 — Menu */}
        <div className="ft-col">
          <h4 className="ft-heading">Menu</h4>
          <ul className="ft-list">
            <li>
              <Link href="/" className="ft-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categorie" className="ft-link">
                Categorie
              </Link>
            </li>
            <li>
              <Link href="/personalizza" className="ft-link">
                Personalizza
              </Link>
            </li>
            <li>
              <Link href="/saldi" className="ft-link">
                Saldi
              </Link>
            </li>
            <li>
              <Link href="/nuovi-arrivi" className="ft-link">
                Nuovi Arrivi
              </Link>
            </li>
            <li>
              <Link href="/best-seller" className="ft-link">
                Best Seller
              </Link>
            </li>
            <li>
              <Link href="/profumo" className="ft-link">
                Profumo
              </Link>
            </li>
            <li>
              <Link href="/faq" className="ft-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonna 5 — Newsletter & Social */}
        <div className="ft-col">
          <h4 className="ft-heading">Iscriviti alla newsletter</h4>
          <form
            className="ft-newsletter"
            onSubmit={(e) => {
              e.preventDefault();
              // logica iscrizione
            }}
          >
            <input
              type="email"
              placeholder="La tua email"
              required
              className="ft-input"
            />
            <button type="submit" aria-label="Iscriviti" className="ft-btn">
              →
            </button>
          </form>
          <p className="ft-note">
            Ricevi in anteprima offerte e nuovi arrivi.
          </p>
          <div className="ft-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="ft-bottom">
        © 2025 Gioielli. Powered by Shopify
      </div>
    </footer>
);
}
