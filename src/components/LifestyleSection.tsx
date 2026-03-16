'use client';

import { property } from '@/content/property';
import Image from 'next/image';

export default function LifestyleSection() {
  return (
    <section id="estilo-de-vida" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/lifestyle.jpg"
        alt="Bairro Cascatinha"
        fill
        className="object-cover"
        loading="lazy"
        quality={80}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-8">
          {property.lifestyle.title}
        </h2>

        {property.lifestyle.text.split('\n\n').map((p, i) => (
          <p
            key={i}
            className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto"
          >
            {p}
          </p>
        ))}

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {['Tranquilidade', 'Conveniência', 'Segurança', 'Qualidade de vida'].map(
            (tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
