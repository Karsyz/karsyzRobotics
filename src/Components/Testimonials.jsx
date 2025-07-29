import React, { useState, useEffect } from 'react';
import { classHelper } from '../Pages/Index';


function Testimonials() {
  const testimonials = [
    {
      quote:
        "Wizards really do exist!!! He went above and beyond making resources and notes for me so that I don't create the same error in the future. You didn't try to squeeze extra money out of me and that kind of caliber is super rare these days. Once again, thank you so much for your help! 10/10 I would recommend his services!",
      name: 'T. Salmon',
      title: 'Engineer',
    },
    {
      quote: 'Great service, highly recommended!',
      name: 'Adrian',
      title: 'Project Manager',
    },
    {
      quote:
        'The support I received was fantastic. They took the time to explain everything clearly and resolved my issue quickly.',
      name: 'Alan M.',
      title: 'CAD Tech',
    },
    {
      quote:
        'I was amazed by the dedication and expertise shown throughout the project. They provided detailed updates, answered all my questions patiently, and delivered exceptional results that exceeded my expectations. Truly a pleasure to work with!',
      name: 'Dan S.',
      title: 'CTO',
    },
    {
      quote: 'Quick and reliable help.',
      name: 'Jean C.',
      title: 'Entrepreneur',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to calculate interval based on word count
  const calculateInterval = (quote) => {
    const wordCount = quote.split(/\s+/).length;
    const readingSpeed = 3.33;
    const baseTime = 5000;
    const readingTime = Math.ceil((wordCount / readingSpeed) * 1000);
    return currentIndex === 0 || currentIndex === testimonialsPlus.length - 1
      ? Math.max(baseTime / 2, readingTime / 2)
      : Math.max(baseTime, readingTime);
  };

  // Timer to cycle testimonials
  useEffect(() => {
    const currentTestimonial = testimonialsPlus[currentIndex];
    const intervalTime = calculateInterval(currentTestimonial.quote);
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsPlus.length);
      }, 100);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const testimonialsPlus = [...testimonials, testimonials[0]];
  const currentTestimonial = testimonialsPlus[currentIndex];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center bg-green-700/10 p-8 rounded-md">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          What Our Clients Say
        </h2>

        <div className="overflow-x-hidden">
          <ul
            className={classHelper(
              'flex items-center -translate-x-full',
              currentIndex === 0
                ? 'transition-none'
                : 'transition duration-1000'
            )}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsPlus.map((testie, ind) => {
              return <li className="w-full shrink-0 p-10" key={ind}>{testie.quote}</li>;
            })}
          </ul>
        </div>

        <div className="">
          <p className="text-gray-900 text-xl">
            {currentTestimonial.name}
          </p>

          <p className="text-gray-900 text-xl font-semibold">{currentTestimonial.title}</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
