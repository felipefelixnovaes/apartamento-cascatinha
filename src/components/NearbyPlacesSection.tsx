'use client';

import { property } from '@/content/property';

const categoryIcons: Record<string, string> = {
  school: '🏫',
  graduation: '🎓',
  shopping: '🛍️',
  cart: '🛒',
  pharmacy: '💊',
  restaurant: '🍽️',
  hospital: '🏥',
  sports: '⚽',
};

export default function NearbyPlacesSection() {
  return (
    <section id="proximidades" className="section-padding bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            Tudo <span className="gradient-text">perto</span> de você
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Rua Francisco Vaz de Magalhães, 560 — localização estratégica no Cascatinha
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {property.nearbyCategories.map((cat, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{categoryIcons[cat.icon] || '📍'}</span>
                <h3 className="text-xl font-bold font-display text-primary">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">{item.name}</p>
                      <p className="text-sm text-text-light">
                        {item.distance} · {item.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
