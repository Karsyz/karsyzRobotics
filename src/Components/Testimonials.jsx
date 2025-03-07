import React, { useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Wizards really do exist!!! He went above and beyond making resources and notes for me so that I don't create the same error in the future. You didn't try to squeeze extra money out of me and that kind of caliber is super rare these days. Once again, thank you so much for your help! 10/10 I would recommend his services!",
      name: "T. Salmon",
      title: "Engineer",
    },
    {
      quote: "Great service, highly recommended!",
      name: "Adrian",
      title: "Project Manager",
    },
    {
      quote:
        "The support I received was fantastic. They took the time to explain everything clearly and resolved my issue quickly.",
      name: "Alan M.",
      title: "CAD Tech",
    },
    {
      quote:
        "I was amazed by the dedication and expertise shown throughout the project. They provided detailed updates, answered all my questions patiently, and delivered exceptional results that exceeded my expectations. Truly a pleasure to work with!",
      name: "Dan S.",
      title: "CTO",
    },
    {
      quote: "Quick and reliable help.",
      name: "Jean C.",
      title: "Entrepreneur",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Function to calculate interval based on word count
  const calculateInterval = (quote) => {
    const wordCount = quote.split(/\s+/).length; // Split by whitespace and count words
    const readingSpeed = 3.33; // Average words per second (200 wpm)
    const baseTime = 5000; // Minimum 5 seconds base time
    const readingTime = (wordCount / readingSpeed) * 1000; // Convert to milliseconds
    return Math.max(baseTime, readingTime); // Ensure minimum of 2 seconds
  };

  // Timer to cycle testimonials
  useEffect(() => {
    const currentTestimonial = testimonials[currentIndex];
    const intervalTime = calculateInterval(currentTestimonial.quote);

    const interval = setInterval(() => {
      setAnimate(false); // Reset animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setAnimate(true); // Trigger animation
      }, 100); // Small delay before sliding in
    }, intervalTime); // Dynamic interval based on quote length

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, testimonials.length]); // Add currentIndex as dependency

  // Get current testimonial
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-6 bg-sky-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <div className="min-h-[400px] flex flex-col justify-center">
          <div className="flex flex-row justify-center w-full">
            <div
              className={`flex flex-col justify-between items-center w-full h-full max-w-2xl transition-transform duration-300 ease-in-out ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="h-full flex flex-col justify-center">
                <blockquote className="text-gray-600 italic my-6 text-3xl text-justify sm:text-center">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              <div className="">
                <p className="text-gray-800 font-semibold text-xl">
                  {currentTestimonial.name}
                </p>

                <p className="text-gray-500 text-xl">
                  {currentTestimonial.title}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
