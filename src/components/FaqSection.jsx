// components/FaqSection.jsx
"use client";
import { useState } from "react";
import {
  FaRegCommentDots,
  FaTruck,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqs = [
  {
    icon: <FaRegCommentDots />,
    question: "Come posso mettermi in contatto con l’assistenza?",
    answer:
      "Puoi contattarci via WhatsApp al +39 353 318 7510 oppure scriverci all’email rainbowgioielli@gmail.com. Siamo attivi 7 giorni su 7!",
  },
  {
    icon: <FaTruck />,
    question: "In quanto tempo avviene la spedizione?",
    answer:
      "Le spedizioni vengono evase in 24h lavorative e consegnate in 2–4 giorni lavorativi in Italia. Spedizione gratuita sopra i 69€.",
  },
  {
    icon: <FaQuestionCircle />,
    question: "Come effettuo il pagamento?",
    answer:
      "Accettiamo tutte le principali carte di credito, PayPal e Apple/Google Pay. Il pagamento è sicuro e criptato.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <a href="/faq" className="faq-link">
        Visualizza tutte le domande frequenti &raquo;
      </a>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span className="faq-icon">{f.icon}</span>
              <span className="faq-text">{f.question}</span>
              <span className="faq-toggle">
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === i && (
              <div className="faq-answer">
                <p>{f.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
