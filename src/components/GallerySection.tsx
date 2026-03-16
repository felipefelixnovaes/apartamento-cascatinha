'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { property } from '@/content/property';
import { trackCTAClick } from '@/lib/analytics';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allImages = property.gallery;

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(allImages.map(img => img.category).filter(Boolean) as string[]);
    return ['Todos', ...Array.from(cats)];
  }, [allImages]);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'Todos') return allImages;
    return allImages.filter(img => img.category === activeCategory);
  }, [allImages, activeCategory]);

  const openLightbox = (index: number) => {
    trackCTAClick(`gallery_open_${activeCategory}_${index}`);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, prev, next]);

  // Touch swipe for lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            Conheça cada detalhe
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Explore os ambientes desta cobertura exclusiva no Cascatinha
          </p>
        </div>

        {/* Category Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  trackCTAClick(`gallery_filter_${category}`);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-white text-text-light hover:bg-surface-dark border border-surface-dark/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredImages.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              onClick={() => openLightbox(i)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 && activeCategory === 'Todos' ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 && activeCategory === 'Todos' ? '4/3' : '1' }}
              id={`gallery-item-${i}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes={i === 0 && activeCategory === 'Todos' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
                {img.category && activeCategory === 'Todos' && (
                  <p className="text-white/80 text-xs mt-1">{img.category}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const diff = touchStart - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) {
                next();
              } else {
                prev();
              }
            }
            setTouchStart(null);
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[101] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[101] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[101] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Próxima"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Info bar bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm text-center">
              {filteredImages[lightboxIndex].alt}
            </div>
            <div className="text-white/80 text-xs font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
              {lightboxIndex + 1} / {filteredImages.length} {activeCategory !== 'Todos' ? ` em ${activeCategory}` : ''}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
