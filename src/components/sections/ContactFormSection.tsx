'use client';

import { sendOrder } from '@/api/api';
import axios from 'axios';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    telegram: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form data:', formData);
      const res = await sendOrder(formData);
      console.log(res);

      if (!res || !res.success) {
        setSubmitStatus('error');
        throw new Error('Failed to send order');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        telegram: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Оставить заявку
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Расскажите нам о вашем проекте, и мы свяжемся с вами в ближайшее время.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Название компании"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>

              {/* Telegram */}
              <div>
                <label htmlFor="telegram" className="block text-sm font-medium mb-2">
                  Телеграм
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="@your_username"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Сообщение *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Расскажите о вашем проекте..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Отправляется...' : 'Отправить заявку'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
