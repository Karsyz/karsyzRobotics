function ValueProposition() {
  return (
    <section className="flex flex-col items-center w-full py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        What To Expect on the Call
      </h2>
      <p className="text-gray-600 mb-4 font-semibold text-lg text-justify sm:text-center">
        In just 10-15 minutes, we'll walk through your project together and
        share
        <span className="text-blue-600"> actionable insights</span> to bring
        your designs to life.
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
          <p>A deep dive into your project needs and goals</p>
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
            How my CAD/3D modeling expertise can solve your specific needs
            (e.g., precision designs, faster prototyping, 2D drawings)
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
          <p>Next steps to get your project moving if we're a good fit</p>
        </li>
      </ul>
    </section>
  );
}

export default ValueProposition;
