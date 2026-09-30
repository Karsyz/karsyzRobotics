import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SITE } from '../config/site';

// Netlify Forms: this form's name and field names must match the hidden static
// form in index.html, which is what Netlify's build-time form detection reads.
const FORM_NAME = 'contact';

// Real on-site photos from Matt's robotics commissioning work. Shown as a
// full-bleed grid; object-cover crops to fit without distorting.
// `position` keeps the subject in frame where the tall cells crop a
// landscape photo.
const onsitePhotos = [
  { src: '/images/onsite/robotCell.jpg', position: '45% 50%' },
  { src: '/images/onsite/weldGun.jpg' },
  { src: '/images/onsite/dispenseUnit.jpg' },
  { src: '/images/onsite/smcGauge.jpg', position: '62% 50%' },
  { src: '/images/onsite/pendant.jpg', position: '55% 50%' },
  { src: '/images/onsite/compressedAir.jpg' },
];

function Contact() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'error'

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    const body = new URLSearchParams(new FormData(event.currentTarget)).toString();
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`Form submit failed: HTTP ${res.status}`);
      navigate('/thanks');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-white  md:pl-10">
      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        {/* Form (Left) */}
        <div className="lg:w-1/2 pb-16 px-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-left mb-4">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-700">
            Use the form below or email{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-indigo-700 underline">
              {SITE.email}
            </a>
            .
          </p>
          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            // Netlify-specific attribute, not a DOM property.
            // eslint-disable-next-line react/no-unknown-property
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            {/* Honeypot: hidden from people; bots that fill it are dropped by Netlify. */}
            <p className="hidden" aria-hidden="true">
              <label>
                Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {status === 'error' && (
              <p role="alert" className="rounded-lg border border-red-300 bg-red-50 p-3 text-red-800">
                Sorry, your message couldn&apos;t be sent. Please try again, or email{' '}
                <a href={`mailto:${SITE.email}`} className="font-semibold underline">
                  {SITE.email}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Decorative image (right) - hidden on mobile */}
        <ul aria-hidden="true" className="hidden lg:grid w-full lg:w-1/2 grid-cols-3 grid-rows-2 gap-1 bg-gray-900">
          {onsitePhotos.map(({ src, position }) => (
            <li key={src} className="relative min-h-0 overflow-hidden">
              <img
                src={src}
                alt=""
                loading="lazy"
                style={position ? { objectPosition: position } : undefined}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
