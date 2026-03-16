'use client';

import { useState, FormEvent } from 'react';
import { property } from '@/content/property';
import { trackFormSubmit, trackLeadGenerated } from '@/lib/analytics';
import { getUTMs, getDeviceType } from '@/lib/utm';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  lgpdConsent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
  lgpdConsent?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

function validatePhone(phone: string): boolean {
  // Brazilian phone: (XX) XXXXX-XXXX or similar patterns
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 11;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    lgpdConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Nome é obrigatório';
    if (!form.phone.trim()) errs.phone = 'Telefone é obrigatório';
    else if (!validatePhone(form.phone)) errs.phone = 'Telefone inválido';
    if (!form.message.trim()) errs.message = 'Mensagem é obrigatória';
    if (!form.lgpdConsent) errs.lgpdConsent = 'É necessário concordar com o tratamento de dados';
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');
    trackFormSubmit();

    try {
      const utmData = getUTMs();
      const deviceType = getDeviceType();

      const leadData = {
        name: sanitize(form.name),
        phone: sanitize(form.phone),
        email: form.email ? sanitize(form.email) : null,
        message: sanitize(form.message),
        lgpdConsent: true,
        source: 'form' as const,
        utm: {
          source: utmData.source,
          medium: utmData.medium,
          campaign: utmData.campaign,
          content: utmData.content,
          term: utmData.term,
        },
        referrer: utmData.referrer,
        landingPage: utmData.landingPage || window.location.href,
        deviceType,
        createdAt: new Date().toISOString(),
        status: 'new' as const,
      };

      // For MVP: save to localStorage as backup and simulate API call
      // Replace with actual Firebase Function call when configured
      const existingLeads = JSON.parse(localStorage.getItem('cascatinha_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('cascatinha_leads', JSON.stringify(existingLeads));

      // TODO: Replace with Firebase Function call:
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(leadData),
      // });

      trackLeadGenerated('form');
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '', lgpdConsent: false });
    } catch {
      setStatus('error');
    }
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <section id="contato" className="section-padding bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card p-10 sm:p-14 bg-white/95">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-primary mb-4">
              Mensagem enviada!
            </h3>
            <p className="text-text-light mb-6">
              Recebemos seu contato e retornaremos em breve. Enquanto isso, que tal
              falar diretamente no WhatsApp?
            </p>
            <a
              href={`https://wa.me/${property.contact.phone}?text=${encodeURIComponent(property.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Entre em contato
          </h2>
          <p className="text-white/70 text-lg">
            Preencha o formulário e retornaremos em instantes
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card p-6 sm:p-10 bg-white/95"
          noValidate
        >
          {/* Nome */}
          <div className="mb-5">
            <label htmlFor="form-name" className="block text-sm font-semibold text-primary mb-2">
              Nome *
            </label>
            <input
              id="form-name"
              type="text"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none font-body ${
                errors.name ? 'border-error' : 'border-surface-dark focus:border-secondary'
              }`}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="mb-5">
            <label htmlFor="form-phone" className="block text-sm font-semibold text-primary mb-2">
              Telefone / WhatsApp *
            </label>
            <input
              id="form-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none font-body ${
                errors.phone ? 'border-error' : 'border-surface-dark focus:border-secondary'
              }`}
              placeholder="(32) 99999-9999"
            />
            {errors.phone && (
              <p className="text-error text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* E-mail */}
          <div className="mb-5">
            <label htmlFor="form-email" className="block text-sm font-semibold text-primary mb-2">
              E-mail <span className="text-text-light font-normal">(opcional)</span>
            </label>
            <input
              id="form-email"
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-surface-dark focus:border-secondary transition-colors outline-none font-body"
              placeholder="seu@email.com"
            />
          </div>

          {/* Mensagem */}
          <div className="mb-5">
            <label htmlFor="form-message" className="block text-sm font-semibold text-primary mb-2">
              Mensagem *
            </label>
            <textarea
              id="form-message"
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none resize-y font-body ${
                errors.message ? 'border-error' : 'border-surface-dark focus:border-secondary'
              }`}
              placeholder="Gostaria de agendar uma visita..."
            />
            {errors.message && (
              <p className="text-error text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* LGPD */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.lgpdConsent}
                onChange={(e) => updateField('lgpdConsent', e.target.checked)}
                className="w-5 h-5 rounded border-2 border-surface-dark mt-0.5 accent-secondary"
              />
              <span className="text-sm text-text-light leading-relaxed">
                Concordo com o tratamento dos meus dados pessoais para fins de contato
                comercial, conforme a Lei Geral de Proteção de Dados (LGPD). *
              </span>
            </label>
            {errors.lgpdConsent && (
              <p className="text-error text-sm mt-1">{errors.lgpdConsent}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full btn-primary justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando...
              </>
            ) : (
              'Enviar mensagem'
            )}
          </button>

          {status === 'error' && (
            <p className="text-error text-sm mt-4 text-center">
              Houve um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
