'use client';

import { property } from '@/content/property';
import { trackMapOpen } from '@/lib/analytics';

export default function MapSection() {
  return (
    <section id="mapa" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            Localização <span className="gradient-text">estratégica</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            {property.map.label}
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          {/* Map embed */}
          <div className="relative w-full" style={{ paddingBottom: '45%', minHeight: '300px' }}>
            <iframe
              src={property.map.embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do imóvel — Cascatinha, Juiz de Fora"
              onLoad={() => trackMapOpen()}
            />
          </div>

          {/* Action bar */}
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/50">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-primary">Cascatinha, Juiz de Fora — MG</p>
                <p className="text-sm text-text-light">Região aproximada do imóvel</p>
              </div>
            </div>
            <a
              href={property.map.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              onClick={() => trackMapOpen()}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
