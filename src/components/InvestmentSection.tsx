'use client';

import { property } from '@/content/property';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function InvestmentSection() {
  const whatsappUrl = `https://wa.me/${property.contact.phone}?text=${encodeURIComponent(
    'Olá! Tenho interesse no potencial de investimento da cobertura no Cascatinha. Gostaria de mais informações.'
  )}`;

  return (
    <section id="investimento" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-xl">📈</span>
            <span className="text-sm font-semibold text-secondary-dark font-display uppercase tracking-wide">
              Oportunidade de investimento
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            {property.investment.title}
          </h2>
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            {property.investment.subtitle}
          </p>
        </div>

        {/* Appraisal badge */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="glass-card p-6 sm:p-8 text-center bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <p className="text-sm text-text-light mb-2 uppercase tracking-wider font-medium">
              {property.investment.appraisalSource}
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold font-display gradient-text mb-3">
              {property.investment.appraisalValue}
            </p>
            <p className="text-text-light text-sm">
              Valor de avaliação oficial do imóvel
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-14">
          {property.investment.description.split('\n\n').map((p, i) => (
            <p key={i} className="text-text-light text-base sm:text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        {/* Before/After sliders */}
        {property.investment.projects && property.investment.projects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display text-primary mb-2">
                Arraste para ver a <span className="gradient-text">transformação</span>
              </h3>
              <p className="text-text-light text-sm">
                Mova o controle deslizante para comparar o antes e depois dos projetos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {property.investment.projects.map((project, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  {/* Before/After slider */}
                  <BeforeAfterSlider
                    beforeSrc={project.beforeSrc}
                    afterSrc={project.afterSrc}
                    beforeAlt={`Antes: ${project.alt}`}
                    afterAlt={`Depois: ${project.alt}`}
                  />
                  {/* Project info */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold font-display text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Advantages grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold font-display text-primary text-center mb-8">
            Por que este imóvel é um <span className="gradient-text">ótimo investimento</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.investment.advantages.map((adv, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-surface-dark/50 hover:border-secondary/30 hover:bg-white/80 transition-all"
              >
                <span className="text-2xl shrink-0">{adv.icon}</span>
                <span className="text-sm font-medium text-primary">{adv.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-light mb-6 text-lg">
            Quer saber mais sobre o potencial de investimento deste imóvel?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg"
            onClick={() => {
              trackWhatsAppClick('top');
              trackCTAClick('investment_whatsapp');
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero investir neste imóvel
          </a>
        </div>
      </div>
    </section>
  );
}
