import TodoNote from './TodoNote';

const VIDEO_ID = 'KvGyzfMKS2g';

/** Short film of Matt's custom Onshape FeatureScript, "helixParting". */
function FeatureScriptVideo({ className = '' }) {
  return (
    <section
      id="featurescript"
      aria-labelledby="featurescript-heading"
      className={className}
    >
      <h2 id="featurescript-heading" className="text-2xl font-semibold">
        Custom Onshape FeatureScript
      </h2>
      <p className="mb-5 lg:max-w-[700px]">
        A short film showing helixParting, a custom FeatureScript for Onshape.
      </p>
      {/* TODO(Matt): one or two sentences on what helixParting does. */}
      <TodoNote>add a sentence or two on what the helixParting FeatureScript does.</TodoNote>
      <div className="mt-4 w-full max-w-3xl overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-900/5">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
          title="helixParting: custom Onshape FeatureScript"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default FeatureScriptVideo;
