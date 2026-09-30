import TodoNote from './TodoNote';
import ImageTile from './ImageTile';
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
              // self-start: tiles keep their 4:3 ratio instead of stretching
              // to the height of the text column.
              <ul className="grid grid-cols-2 gap-4 self-start">
                {images.map(({ src, alt, fit, position }) => (
                  <li key={src} className="overflow-hidden rounded-lg ring-1 ring-gray-900/5">
                    <ImageTile src={src} alt={alt} fit={fit} position={position} />
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
