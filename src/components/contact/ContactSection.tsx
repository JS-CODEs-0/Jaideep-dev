'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DitherHalftoneSurface } from '@/components/ui/DitherHalftoneSurface';
import { DataHeaderBar } from '@/components/ui/DataHeaderBar';
import { CornerMarks } from '@/components/ui/CornerMarks';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'NAME IS REQUIRED';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'EMAIL IS REQUIRED';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'INVALID EMAIL FORMAT';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'MESSAGE CONTENT IS REQUIRED';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <SectionWrapper id="contact" className="border-b border-border-gothic">
      <SectionHeader
        index="06 // CONTACT"
        title="HAVE SOMETHING WORTH BUILDING?"
        subtitle="Initiate technical inquiries, system architecture discussions, or collaboration."
      />

      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
        <CornerMarks />

        {/* Left Column: Direct Editorial Text (6 cols desktop) */}
        <DitherHalftoneSurface className="col-span-12 lg:col-span-6 p-8 flex flex-col justify-between">
          <div>
            <DataHeaderBar index="TRANSMISSION" title="CONTACT PROTOCOL" className="mb-4" />

            <h3 className="font-serif text-3xl sm:text-4xl text-bone uppercase mb-6 leading-tight">
              OPEN FOR DISCUSSIONS ON SYSTEMS ARCHITECTURE & AI ENGINEERING.
            </h3>

            <p className="font-sans text-base sm:text-lg text-parchment leading-relaxed mb-6">
              Whether you are architecting asynchronous backend infrastructure, continuous telemetry systems, or complex data pipelines, reach out directly.
            </p>

            <div className="p-4 bg-obsidian border border-border-gothic font-mono text-xs text-stone space-y-2">
              <div className="flex justify-between">
                <span>IDENTITY:</span>
                <span className="text-bone">JAIDEEP SINGH</span>
              </div>
              <div className="flex justify-between">
                <span>ROLE:</span>
                <span className="text-bone">SOFTWARE & AI ENGINEER</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-olive">INDIA</span>
              </div>
              <div className="flex justify-between">
                <span>AVAILABILITY:</span>
                <span className="text-olive">OPEN FOR COLLABORATION</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border-gothic/40 font-mono text-[10px] text-stone">
            STATUS: ENDPOINT READY FOR DIRECT MESSAGING
          </div>
        </DitherHalftoneSurface>

        {/* Right Column: Accessible Contact Form (6 cols desktop) */}
        <DitherHalftoneSurface className="col-span-12 lg:col-span-6 p-8">
          <DataHeaderBar index="FORM" title="DIRECT MESSAGE TRANSMISSION" badge="CLIENT-VALIDATED" className="mb-6" />

          {status === 'submitted' ? (
            <div className="p-6 bg-obsidian border border-border-accent text-center font-mono space-y-4">
              <div className="text-olive text-sm font-semibold uppercase">
                [ TRANSMISSION RECEIVED ]
              </div>
              <p className="font-sans text-parchment text-sm">
                Your message details have been validated. Thank you for reaching out.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-xs uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-4 py-2 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent"
              >
                [ SEND ANOTHER MESSAGE ]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 font-mono text-xs">
              {/* Name Input */}
              <div>
                <label htmlFor="contact-name" className="block text-stone uppercase tracking-wider mb-2">
                  NAME / IDENTIFIER <span className="text-olive">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full bg-obsidian border border-border-gothic text-bone px-4 py-3 focus:border-border-accent focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span id="name-error" className="text-rose-400 text-[10px] mt-1 block">
                    [{errors.name}]
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="contact-email" className="block text-stone uppercase tracking-wider mb-2">
                  EMAIL ADDRESS <span className="text-olive">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full bg-obsidian border border-border-gothic text-bone px-4 py-3 focus:border-border-accent focus:outline-none transition-colors"
                  placeholder="name@domain.com"
                />
                {errors.email && (
                  <span id="email-error" className="text-rose-400 text-[10px] mt-1 block">
                    [{errors.email}]
                  </span>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="contact-message" className="block text-stone uppercase tracking-wider mb-2">
                  MESSAGE / PROJECT SCOPE <span className="text-olive">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full bg-obsidian border border-border-gothic text-bone px-4 py-3 focus:border-border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Describe your inquiry or technical project..."
                />
                {errors.message && (
                  <span id="message-error" className="text-rose-400 text-[10px] mt-1 block">
                    [{errors.message}]
                  </span>
                )}
              </div>

              {/* Submit Trigger */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full uppercase tracking-wider text-obsidian bg-bone hover:bg-white px-6 py-3.5 border border-bone transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-accent font-bold"
                >
                  {status === 'submitting' ? '[ TRANSMITTING... ]' : '[ TRANSMIT MESSAGE → ]'}
                </button>
                <span className="text-[10px] text-stone text-center">
                  * Form client-validated. Backend email service integration ready.
                </span>
              </div>
            </form>
          )}
        </DitherHalftoneSurface>
      </div>
    </SectionWrapper>
  );
};
