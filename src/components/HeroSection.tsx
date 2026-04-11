'use client';

import { property } from '@/content/property';
import { trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import Image from 'next/image';

const iconMap: Record<string, string> = {
  ruler: '📐',
  layout: '🏠',
  bed: '🛏️',
  bath: '🚿',
  car: '🚗',
  sun: '☀️',
};

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${property.contact.phone}?text=${encodeURIComponent(
    property.contact.whatsappMessage
  )}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg-v2.png"
        alt="Cobertura no Cascatinha com vista para o verde"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
          <span className="text-sm font-medium text-white/90 font-display">
            {property.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display"
          style={{ animation: 'fade-up 0.7s ease-out 0.2s forwards', opacity: 0 }}
        >
          {property.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto mb-10 font-light"
          style={{ animation: 'fade-up 0.7s ease-out 0.4s forwards', opacity: 0 }}
        >
          {property.subheadline}
        </p>

        {/* Quick highlights */}
        <div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
          style={{ animation: 'fade-up 0.7s ease-out 0.6s forwards', opacity: 0 }}
        >
          {property.quickHighlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
            >
              <span className="text-xl">{iconMap[h.icon] || '✦'}</span>
              <span className="text-white font-semibold text-sm sm:text-base">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'fade-up 0.7s ease-out 0.8s forwards', opacity: 0 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg"
            id="cta-whatsapp-hero"
            onClick={() => {
              trackWhatsAppClick('top');
              trackCTAClick('hero_whatsapp');
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {property.cta.primary}
          </a>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-light tracking-widest uppercase">Role para ver mais</span>
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white/60"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
