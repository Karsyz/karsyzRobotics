import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Form (Left) */}
        <div className="lg:w-1/2 py-16 px-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <form
            action="https://formsubmit.co/54f12137427d71214693554d8bca0d0a" // Replace with your FormSubmit email
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
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
            {/* Hidden field for FormSubmit redirect */}
            {/* <input type="hidden" name="_next" value="https://karsyzrobotics.com" /> */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image (Right) - Hidden on Mobile */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="/images/contact.jpg" // Replace with your full-bleed image
            alt="Contact Us - Karsyz Robotics"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;