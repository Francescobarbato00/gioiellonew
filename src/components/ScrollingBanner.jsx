// components/ScrollingBanner.jsx
import React from 'react';                     // opzionale in Next.js 13+
import { FaRegSun, FaGift } from 'react-icons/fa';

export default function ScrollingBanner({ items, speed = 30 }) {
  return (
    <div className="scroll-banner">
      <div
        className="scroll-banner__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="scroll-banner__item">
            {item.icon && <span className="item-icon">{item.icon}</span>}
            <span className="item-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
