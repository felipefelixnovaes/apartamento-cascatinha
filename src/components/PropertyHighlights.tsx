'use client';

import { property } from '@/content/property';

const iconMap: Record<string, string> = {
  ruler: '📐',
  bed: '🛏️',
  bath: '🚿',
  car: '🚗',
  sun: '☀️',
  building: '🏢',
  kitchen: '🍳',
};

export default function PropertyHighlights() {
  return (
    <section id="destaques" className="section-padding bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            O que torna esta cobertura <span className="gradient-text">única</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Localizacao estrategica, boa metragem e potencial real de valorizacao
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {property.highlights.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 sm:p-8"
            >
              <div className="text-4xl mb-4">{iconMap[item.icon] || '✦'}</div>
              <h3 className="text-xl font-bold font-display text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical details row */}
        <div className="mt-12 glass-card p-6 sm:p-8">
          <h3 className="text-xl font-bold font-display text-primary mb-6 text-center">
            Ficha Técnica
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {property.details.map((d, i) => (
              <div key={i} className="text-center p-3">
                <p className="text-sm text-text-light mb-1">{d.label}</p>
                <p className="text-lg font-bold text-primary">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
