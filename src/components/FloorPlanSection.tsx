'use client';

import { useState } from 'react';
import { property } from '@/content/property';

export default function FloorPlanSection() {
  const [activeFloor, setActiveFloor] = useState(0);
  const floor = property.floorPlan.floors[activeFloor];

  return (
    <section id="planta" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-xl">📐</span>
            <span className="text-sm font-semibold text-primary font-display uppercase tracking-wide">
              Planta do imóvel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            {property.floorPlan.title}
          </h2>
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            {property.floorPlan.subtitle}
          </p>
        </div>

        {/* Floor tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface rounded-xl p-1.5 gap-1">
            {property.floorPlan.floors.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFloor(i)}
                className={`px-5 sm:px-8 py-3 rounded-lg font-display font-bold text-sm sm:text-base transition-all duration-300 ${
                  activeFloor === i
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-text-light hover:text-primary hover:bg-white/80'
                }`}
              >
                <span className="block">{f.name}</span>
                <span className={`text-xs font-body font-normal ${
                  activeFloor === i ? 'text-white/70' : 'text-text-light/60'
                }`}>
                  {f.rooms.length} ambientes
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Floor label */}
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-secondary-dark bg-secondary/10 px-4 py-1.5 rounded-full">
            {floor.label}
          </span>
        </div>

        {/* Room cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {floor.rooms.map((room, i) => (
            <div
              key={`${activeFloor}-${i}`}
              className="group glass-card p-5 hover:border-secondary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <span className="text-2xl">{room.icon}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold font-display text-primary text-sm sm:text-base mb-1 truncate">
                    {room.name}
                  </h4>
                  <p className="text-text-light text-xs sm:text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nature view & highlights */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-primary text-center mb-10">
            Diferenciais <span className="gradient-text">exclusivos</span> deste imóvel
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {property.floorPlan.highlights.map((h, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  i === 0
                    ? 'md:col-span-2 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50'
                    : 'bg-surface border border-surface-dark/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    i === 0 ? 'bg-emerald-100' : 'bg-white'
                  }`}>
                    <span className="text-3xl">{h.icon}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold font-display text-lg mb-2 ${
                      i === 0 ? 'text-emerald-900' : 'text-primary'
                    }`}>
                      {h.title}
                    </h4>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      i === 0 ? 'text-emerald-700' : 'text-text-light'
                    }`}>
                      {h.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
