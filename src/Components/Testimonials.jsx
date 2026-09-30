// Verbatim Fiverr reviews (fiverr.com/karsy0000001, recovered from Wayback Machine
// snapshots and approved by Matt).
// Only add testimonials Matt can verify. Never edit a quote except to trim with an ellipsis.
const testimonials = [
  {"quote": "Karsy is a pro who is happy to keep going until the job is done right! Excellent work, brings real-world welding and fabrication experience to his layout and 3-d models. I bring all my projects to him!", "name": "metzmark via Fiverr", "title": "United States", "date": "2021-04-16"},
  {"quote": "Karsy delivered way above what I expected. Very thorough and clever modifications to the design that will make assembly much easier and a better product all round for the end user. Will use again for my next project.", "name": "martinclay1964 via Fiverr", "title": "United States", "date": "2020-12-01"},
  {"quote": "This man is amazing. 2 dxfs created for me in less than 12 hours. One was extremely detailed it would’ve taken me a few days to nail.", "name": "mikemarine33 via Fiverr", "title": "United States", "date": "2020-02-06"},
  {"quote": "karsy0000001 does amazing work. This is my fifth project with him and I will continue to use him in the future. Highly recommend.", "name": "matthewdepippo via Fiverr", "title": "United States", "date": "2020-12-16"},
  {"quote": "karsy0000001 took the time to get me exactly what I needed, kept me in the loop the entire time. Some of the intricate areas of what I needed, he took the time to really understand what was needed so the final result was way better than expected. I'll definitely work with him again!", "name": "greeson1166 via Fiverr", "title": "United States", "date": "2021-05-14"},
  {"quote": "Very informational! Karsy is a great teacher who is full of helpful tips and tricks that will really help speed up my production. What I really like as an added bonus is his background in manufacturing. I will be sure to schedule another session with this industry pro!", "name": "tiniestsalmon via Fiverr", "title": "United States", "date": "2020-12-16"},
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
        <ul className="mx-auto mt-8 grid max-w-6xl gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, name, title, date }) => (
            <li key={`${name}-${date ?? ''}`} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <figure>
                <blockquote className="text-gray-800">
                  <p>&ldquo;{quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-4">
                  <span className="block font-semibold text-gray-900">{name}</span>
                  <span className="block text-sm text-gray-600">
                    {title}
                    {date ? ` · ${date.slice(0, 4)}` : ''}
                  </span>
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
