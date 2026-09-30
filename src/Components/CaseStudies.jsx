import TodoNote from './TodoNote';
import { caseStudies } from '../Data/siteCopy';

/** Case studies from the approved site copy. */
function CaseStudies({ headingLevel = 'h2', className = '' }) {
  const Heading = headingLevel;
  const ItemHeading = headingLevel === 'h2' ? 'h3' : 'h4';
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className={className}
    >
      <Heading
        id="case-studies-heading"
        className="mb-8 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
      >
        {caseStudies.heading}
      </Heading>
      <div className="space-y-10">
        {caseStudies.items.map(({ id, title, body, images, imageTodo }) => (
          <article
            key={id}
            id={id}
            className="grid grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 lg:grid-cols-2 lg:gap-10"
          >
            <div>
              <ItemHeading className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                {title}
              </ItemHeading>
              <p className="text-gray-700">{body}</p>
            </div>
            {images.length > 0 ? (
              <ul className="grid grid-cols-2 gap-4">
                {images.map(({ src, alt }) => (
                  <li key={src} className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-900/5">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="aspect-square w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              imageTodo && (
                <div className="self-center">
                  <TodoNote>{imageTodo}</TodoNote>
                </div>
              )
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
