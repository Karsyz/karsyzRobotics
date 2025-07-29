import CTA from "./CTA";

function ValueProposition() {
  return (
    <section className="flex flex-col items-center w-full py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        What To Expect on the Call
      </h2>
      <p className="text-gray-600 mb-4 font-semibold text-lg text-justify sm:text-center">
        In just 10-15 minutes, we'll chat about your project and I'll offer
        <span className="text-blue-600"> practical insights</span> to help bring your designs to life.
      </p>
      <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
        <li className="flex flex-row gap-2">
          <div className="w-5">
            <svg
              className="w-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2l6 8-6 8-1.5-1.5L13 10 8.5 3.5 10 2z" />
            </svg>
          </div>
          <p>A focused discussion about your project goals and needs</p>
        </li>

        <li className="flex flex-row gap-2">
          <div className="w-5">
            <svg
              className="text-blue-500 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2l6 8-6 8-1.5-1.5L13 10 8.5 3.5 10 2z" />
            </svg>
          </div>
          <p>
            How my CAD and 3D modeling skills can support your project, whether it's precision design, faster prototyping, or detailed 2D drawings
          </p>
        </li>

        <li className="flex flex-row gap-2">
          <svg
            className="w-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2l6 8-6 8-1.5-1.5L13 10 8.5 3.5 10 2z" />
          </svg>
          <p>Clear next steps to keep your project moving forward</p>
        </li>
      </ul>
      <CTA showHeading={false} />
    </section>
  ); 
}

export default ValueProposition;
