import { SITE } from '../config/site';

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
            action="https://formsubmit.co/54f12137427d71214693554d8bca0d0a"
            method="POST"
            className="space-y-6"
          >
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
            
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
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
