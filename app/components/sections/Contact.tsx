'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const MAX_MESSAGE_LENGTH = 1000;

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : undefined;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : undefined;
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : undefined;
      case 'message':
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > MAX_MESSAGE_LENGTH) return `Message must not exceed ${MAX_MESSAGE_LENGTH} characters`;
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-resize textarea
    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-surface-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact <span className="text-[#D56649]">Us</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary/90 dark:text-gray-300 max-w-2xl mx-auto">
            For inquiries, support, or feedback, kindly reach out to us. We&apos;re available through the following channels.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D56649]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D56649]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Address</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  50 Adeba road,<br />
                  Ibeju-Lekki,<br />
                  Lagos State
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D56649]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D56649]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Phone Number</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  +234 (0)703 668 5502
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D56649]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D56649]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  info@nottechltd.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
                    ${errors.name 
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                      : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
                    ${errors.email 
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                      : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
                    ${errors.subject 
                      ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                      : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-surface-muted dark:bg-gray-800 border transition-colors duration-200
                      ${errors.message 
                        ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                        : 'border-gray-200 dark:border-gray-700 focus:ring-[#D56649]'
                      } focus:outline-none focus:ring-2 focus:border-transparent min-h-[150px]`}
                  />
                  <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </div>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#D56649] text-white text-sm sm:text-base font-semibold shadow-lg 
                  ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#D56649]/90'} 
                  transition-all duration-200`}
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
              >
                <span className="flex items-center justify-center">
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-center"
                >
                  Your message has been sent. Thank you!
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-center"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
