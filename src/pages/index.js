// pages/index.js
import ScrollingTextWithSocials from '../components/ScrollingTextWithSocials';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ScrollingBanner from '../components/ScrollingBanner';
import { FaRegSun, FaGift } from 'react-icons/fa';
import ProductShowcase from '@/components/ProductGrid';
import FeaturedSection from '@/components/FeaturedSection';
import VideoBanner from '@/components/VideoBanner';
import CategoriesSection from '@/components/CategoriesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* 1) Barra di testi scorrevoli in cima */}
      <ScrollingTextWithSocials
        items={[
          { icon: null, text: 'Assistenza WhatsApp 7/7' },
          { icon: null, text: 'Spedizioni rapide in 24h' },
          { icon: null, text: 'Collezioni esclusive ogni mese' },
          { icon: null, text: 'Qualità garantita al 100%' },
        ]}
        interval={4000}
      />

      {/* 2) Header fisso subito sotto la barra */}
      <Header />

      {/* 3) Hero a pieno schermo */}
      <Hero />

      {/* 4) Scrolling banner promozionale */}
      <ScrollingBanner
        items={[
          { icon: <FaRegSun />, text: '10% con il codice: SALE10' },
          { icon: <FaGift />,   text: 'Articoli Personalizzati da 10,99' },
          { icon: <FaRegSun />, text: 'Spedizioni rapide in 24h' },
        ]}
        speed={40}
      />

      {/* 5) Contenuto principale */}
      <main className="main-content max-w-screen-xl mx-auto p-4">
         <ProductShowcase  />
      <FeaturedSection />
       <ScrollingBanner
        items={[
          { icon: <FaRegSun />, text: '10% con il codice: SALE10' },
          { icon: <FaGift />,   text: 'Articoli Personalizzati da 10,99' },
          { icon: <FaRegSun />, text: 'Spedizioni rapide in 24h' },
        ]}
        speed={40}
      />
      <ProductShowcase />
      <VideoBanner />
      <CategoriesSection />
      <AboutSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
      </main>
    </>
  );
}
