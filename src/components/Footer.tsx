'use client';

import { property } from '@/content/property';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-3">
              Cobertura Cascatinha
            </h4>
            <p className="text-sm leading-relaxed">
              Imóvel exclusivo no bairro Cascatinha, Juiz de Fora — MG.
              Localizacao estrategica, vista para o verde e bom potencial de valorizacao.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Galeria', href: '#galeria' },
                { label: 'Destaques', href: '#destaques' },
                { label: 'Localização', href: '#proximidades' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-display text-lg mb-3">
              Contato
            </h4>
            <p className="text-sm mb-2">
              {property.contact.companyName}
            </p>
            <p className="text-sm mb-2">
              {property.contact.email}
            </p>
            <a
              href={`https://wa.me/${property.contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-whatsapp hover:text-whatsapp-dark transition-colors"
            >
              WhatsApp: {property.contact.phone.replace('55', '+55 ')}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {currentYear} {property.contact.companyName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
