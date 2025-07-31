// components/Header.jsx
import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="site-header">
      {/* 1) Logo centrato */}
      <div className="logo-container">
        <Link href="/">
          <img src="/logo.png" alt="Rainbow Gioielli" />
        </Link>
      </div>

      {/* 2) Navigazione + azioni allineate */}
      <div className="nav-actions">
        <nav className="main-nav">
          {[
            ['Home', '/'],
            ['Categorie', '/categorie'],
            ['Componi la tua collana', '/componi-collana'],
            ['Fuori tutto', '/saldi'],
            ['Nuovi arrivi', '/nuovi-arrivi'],
            ['Articoli personalizzati', '/personalizzati'],
            ['Best seller', '/best-seller'],
            ['Profumo', '/profumo'],
            ['Chi siamo', '/chi-siamo'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button aria-label="Search"><Search size={20} /></button>
          <button aria-label="Account"><User size={20} /></button>
          <button aria-label="Cart"><ShoppingBag size={20} /></button>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
        </div>
      </div>
    </header>
  );
}
