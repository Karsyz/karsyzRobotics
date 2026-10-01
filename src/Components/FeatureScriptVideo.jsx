
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
        helixParting, a custom Onshape FeatureScript I wrote: it builds a helix
        or ellipse around any 3D curve, then a cutting plane along it.
      </p>
      {/* Padding-top 56.25% keeps a native 16:9 box at every width, so the embed never collapses. */}
      <div
        className="relative mt-4 w-full max-w-3xl overflow-hidden rounded-lg bg-black shadow-sm ring-1 ring-gray-900/5"
        style={{ paddingTop: '56.25%', minHeight: '180px' }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
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
