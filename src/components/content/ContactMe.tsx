'use client';

import { useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const ContactMe = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(siteConfig.form_id, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="font-bold text-2xl md:text-2xl tracking-tight mb-2 gradient-text text-center lg:text-start"
        id="contactme"
      >
        Contact me
      </h2>
      <div className="section-divider"></div>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <div className="w-full glass-card p-4 sm:p-6">
            <h3 className="font-bold text-base tracking-tight text-slate-700 text-start">
              Email
            </h3>
            <p className="text-base mt-2 text-indigo-600 font-medium">
              {siteConfig.social.email}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4 relative"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-xl p-3 text-base outline-none border-2 text-slate-700 bg-white/70 backdrop-blur-sm border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all ease placeholder:text-slate-400"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-xl p-3 text-base outline-none border-2 text-slate-700 bg-white/70 backdrop-blur-sm border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all ease placeholder:text-slate-400"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-xl p-3 text-base outline-none border-2 text-slate-700 bg-white/70 backdrop-blur-sm border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all ease placeholder:text-slate-400"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full h-32 rounded-xl p-3 text-base outline-none border-2 text-slate-700 bg-white/70 backdrop-blur-sm border-indigo-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all ease placeholder:text-slate-400"
                placeholder="Message"
                id="message"
                name="message"
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-gradient mx-auto text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="font-medium">
                {status === 'loading' ? 'Sending...' : 'Send'}
              </span>

              {status !== 'loading' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="absolute -bottom-14 left-0 w-full text-center">
                <p className="text-emerald-500 font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="absolute -bottom-14 left-0 w-full text-center">
                <p className="text-rose-500 font-medium">Oops! There was a problem sending your message.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
