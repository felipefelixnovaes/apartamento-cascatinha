'use client';

import { useState } from 'react';
import { property } from '@/content/property';
import { trackFAQOpen } from '@/lib/analytics';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
      trackFAQOpen(property.faq[i].question);
    }
  };

  return (
    <section id="faq" className="section-padding bg-surface-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-text-light text-lg">
            Tire suas dúvidas antes de entrar em contato
          </p>
        </div>

        <div className="space-y-4">
          {property.faq.map((item, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden"
              style={{ transform: 'none' }} // disable hover lift on FAQ
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                aria-expanded={openIndex === i}
                id={`faq-${i}`}
              >
                <span className="font-semibold text-primary text-base sm:text-lg pr-4 font-display">
                  {item.question}
                </span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-secondary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="h-px bg-surface-dark mb-4" />
                  <p className="text-text-light leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
