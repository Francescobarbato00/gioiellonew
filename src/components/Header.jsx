// components/Header.jsx
import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <header className="site-header">
        {/* 1) Logo centrato */}
        <div className="logo-container">
          <Link href="/">
            <img src="/logo.png" alt="Rainbow Gioielli" />
          </Link>
        </div>

        {/* 2) INPUT TOGGLE (nascondilo con CSS) */}
        <input type="checkbox" id="menu-toggle" />

        {/* 3) LABEL = ICONA HAMBURGER */}
        <label htmlFor="menu-toggle" className="hamburger">
          <span />
          <span />
          <span />
        </label>

        {/* 4) NAV-ACTIONS è l’overlay che contiene nav e bottoni */}
        <div className="nav-actions">
          {/* 4a) MAIN NAV = le VOCI del menu */}
          <nav className="main-nav">
            {[
              ['Home', '/'],
              ['Categorie', '/categorie'],
              ['Shop', '/shop'],
              ['Fuori tutto', '/saldi'],
              ['Nuovi arrivi', '/nuovi-arrivi'],
              ['Chi siamo', '/chi-siamo'],
            ].map(([label, href], i) => (
              <Link key={href} href={href} className="nav-link">
                {label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* 4b) HEADER ACTIONS = bottoni di ricerca, account, carrello, social */}
          <div className="header-actions">
            <button aria-label="Search"><Search size={20} /></button>
            <button aria-label="Account"><User size={20} /></button>
            <button aria-label="Cart"><ShoppingBag size={20} /></button>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
          </div>
        </div>
      </header>

      {/* ==== STILI MOBILE HAMBURGER ==== */}
      <style jsx global>{`
        /* Stili per desktop (fuori da media query per evitare conflitti) */
        .site-header {
          position: fixed;
          top: var(--carousel-height, 2.5rem);
          left: 0;
          width: 100%;
          background: #fdf7f2;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          z-index: 150;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          padding: 1.5rem 1rem 0.5rem;
        }
        .logo-container img {
          height: 70px;
          width: auto;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .logo-container img:hover {
          transform: translateY(-5px) scale(1.05);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }

        .nav-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          padding: 0.5rem 1rem 1rem;
        }

        .main-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 500;
          position: relative;
          padding-bottom: 0.2rem;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #a67c52;
        }
        .nav-link:hover::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #a67c52;
          transition: width 0.3s ease;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .header-actions button,
        .header-actions a {
          background: none;
          border: none;
          color: #1a1a1a;
          cursor: pointer;
          transition: transform 0.2s, color 0.2s;
          font-size: 1.25rem;
        }
        .header-actions button:hover,
        .header-actions a:hover {
          color: #a67c52;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          /* 1) Nasconde il toggle checkbox reale */
          #menu-toggle {
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            pointer-events: none;
          }

          /* 2) Hamburger icon in alto a destra */
          .hamburger {
            position: absolute;
            top: 1rem;
            right: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1.75rem;
            height: 1.5rem;
            cursor: pointer;
            z-index: 300;
          }
          .hamburger span {
            display: block;
            height: 0.2rem;
            background: #1a1a1a;
            border-radius: 4px;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          /* 3) Overlay dietro il menu */
          .nav-actions {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,0.4);
            backdrop-filter: blur(4px);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
            z-index: 250;
          }

          /* 4) Panel del menu */
          .main-nav {
            position: absolute;
            top: 0;
            right: 0;
            width: 75%;
            max-width: 300px;
            height: 100%;
            background: #fdf7f2;
            padding: 4rem 1.5rem;
            transform: translateX(100%);
            transition: transform 0.4s ease;
            box-shadow: -2px 0 8px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 1.5rem;
          }

          /* 5) Stili per i link del menu */
          .main-nav .nav-link {
            display: block;
            width: 100%;
            padding: 0.5rem 0;
            font-size: 1.25rem;
            color: #1a1a1a;
            text-decoration: none;
            opacity: 0;
            transform: translateX(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          /* 6) Stili per header-actions nel menu mobile */
          .header-actions {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;
            opacity: 0;
            transform: translateX(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
          }
          .header-actions button,
          .header-actions a {
            color: #1a1a1a;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.25rem;
          }

          /* 7) Trasforma hamburger in “X” */
          #menu-toggle:checked + .hamburger span:nth-child(1) {
            transform: rotate(45deg) translate(4px, 4px);
          }
          #menu-toggle:checked + .hamburger span:nth-child(2) {
            opacity: 0;
          }
          #menu-toggle:checked + .hamburger span:nth-child(3) {
            transform: rotate(-45deg) translate(4px, -4px);
          }

          /* 8) Mostra overlay */
          #menu-toggle:checked ~ .nav-actions {
            opacity: 1;
            visibility: visible;
          }

          /* 9) Slide-in del pannello */
          #menu-toggle:checked ~ .nav-actions .main-nav {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }

          /* 10) Mostra link e bottoni con animazione a cascata */
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link,
          #menu-toggle:checked ~ .nav-actions .header-actions {
            opacity: 1;
            transform: translateX(0);
          }
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link:nth-child(1) {
            transition-delay: 0.1s;
          }
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link:nth-child(2) {
            transition-delay: 0.2s;
          }
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link:nth-child(3) {
            transition-delay: 0.3s;
          }
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link:nth-child(4) {
            transition-delay: 0.4s;
          }
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link:nth-child(5) {
            transition-delay: 0.5s;
          }
          #menu-toggle:checked ~ .nav-actions .main-nav .nav-link:nth-child(6) {
            transition-delay: 0.6s;
          }
          #menu-toggle:checked ~ .nav-actions .header-actions {
            transition-delay: 0.7s;
          }
        }

        /* Keyframe slide-in */
        @keyframes menuIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}