import React from 'react';

function CTA({ openModal }) {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
      <p className="text-gray-600 mb-8">Limited slots available this week—book your quick call now!</p>
      <button
        onClick={openModal}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Book Your Call Now
      </button>
    </section>
  );
}

export default CTA;