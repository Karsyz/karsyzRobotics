// Only testimonials Matt can verify word for word. Add new ones here as they come in.
const testimonials = [
  {
    quote:
      "Wizards really do exist!!! He went above and beyond making resources and notes for me so that I don't create the same error in the future. You didn't try to squeeze extra money out of me and that kind of caliber is super rare these days. Once again, thank you so much for your help! 10/10 I would recommend his services!",
    name: 'T. Salmon',
    title: 'Engineer',
  },
];

function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="bg-white px-6 py-16">
      <div className="container mx-auto rounded-md bg-green-700/10 p-8 text-center">
        <h2
          id="testimonials-heading"
          className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Client feedback
        </h2>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-8">
          {testimonials.map(({ quote, name, title }) => (
            <li key={name}>
              <figure>
                <blockquote className="text-lg text-gray-800">
                  <p>&ldquo;{quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-4">
                  <span className="block text-xl text-gray-900">{name}</span>
                  <span className="block text-xl font-semibold text-gray-900">{title}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
