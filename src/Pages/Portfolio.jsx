import { useState } from 'react';
import Seo from '../Components/Seo';
import CaseStudies from '../Components/CaseStudies';
import FeatureScriptVideo from '../Components/FeatureScriptVideo';
import EnlargeableTile from '../Components/EnlargeableTile';
import Lightbox from '../Components/Lightbox';
import PortfolioCTA from '../Components/PortfolioCTA';
import { v4 as uuidv4 } from 'uuid';

// Images: every tile is 4:3 and fills its grid cell (see ImageTile).
// `fit: 'contain'` marks CAD renders and drawings on a white background: they
// are shown whole on a white tile so no part or dimension is cut off. The rest
// (renders with a full-frame background) use the default cover fit.
//
// Order (approved 2026-09-30): fixtures and case studies first, then weldments,
// sheet metal, structural and misc steel, flat patterns; the FeatureScript video
// near the bottom and the Misc row (incl. the former 3D Printed row and the
// hobby-type pieces) last.
const portfolioSections = [
  {
    id: uuidv4().slice(0, 8),
    heading: 'Jigs, Fixtures, Molds, Tools',
    description: 'Fixture, jig and mold designs for production parts.',
    images: [
      {
        imgSrc: '/images/portfolio/2.webp',
        imgAlt: 'Mold cavity with flow channels, 3D model',
      },
      {
        imgSrc: '/images/portfolio/image-4.webp',
        imgAlt: 'Deburring fixture 3D model',
        position: '40% 50%',
      },
    ],
  },
  { id: 'case-studies', component: 'caseStudies' },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Weldments and Frames',
    description: 'Welded frames for trailers, tables and an ice fishing hut, with fabrication drawings.',
    images: [
      {
        imgSrc: '/images/portfolio/trailerFrame.webp',
        imgAlt: 'Welded steel trailer frame 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/drainTableAssy.webp',
        imgAlt: 'Fabrication drawing of a drain table assembly',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/fishingHut1.webp',
        imgAlt: 'Fabrication drawing of an ice fishing hut frame',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/fishingHut2.webp',
        imgAlt: 'Ice fishing hut frame 3D model',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Sheet Metal Parts',
    description: 'Brackets, shrouds, trays, stands and other formed sheet metal parts.',
    images: [
      {
        imgSrc: '/images/portfolio/sample.webp',
        imgAlt: 'Sheet metal shelf bracket with lightening holes',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/mowerDeck.webp',
        imgAlt: 'Sheet metal mower deck 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/5.webp',
        imgAlt: 'Sheet metal base for an electric car charger',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/breakerActuator2.webp',
        imgAlt: 'Circuit breaker actuator mechanism',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/offsetBracket.webp',
        imgAlt: 'Offset sheet metal bracket',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/fanShroud.webp',
        imgAlt: 'Sheet metal dual fan shroud',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/sheetMetalTrays.webp',
        imgAlt: 'Set of four nesting formed sheet metal trays',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/sheetMetalHangingRack.webp',
        imgAlt: 'Laser-cut and formed sheet metal hanging rack',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/perforatedSheetMetalStand.webp',
        imgAlt: 'Formed sheet metal stand with hex-perforated top',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Structural Steel',
    description: 'Fabrication drawings, beam details and a material list for a steel pergola with rolled beams.',
    images: [
      {
        imgSrc: '/images/portfolio/progress1.webp',
        imgAlt: 'Steel pergola frame 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/rolledBeamDetails.webp',
        imgAlt: 'Fabrication drawing of a rolled (curved) steel beam for a pergola',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/bigBeamDrawing.webp',
        imgAlt: 'Fabrication drawing of a steel pergola beam',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/materialList.webp',
        imgAlt: 'Material list for a steel pergola',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Misc. Steel: Stairs, Handrails, Gates, Fences, etc.',
    description: 'Stairs, guardrails and handrails, from concept render to fabrication drawing.',
    images: [
      {
        imgSrc: '/images/portfolio/boatRailConcept.webp',
        imgAlt: 'Concept render of a tubular boat guardrail',
      },
      {
        imgSrc: '/images/portfolio/centerStringerStair.webp',
        imgAlt: 'Steel center stringer stair 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/singleStringerStairDrawing.webp',
        imgAlt: 'Fabrication drawing of the steel center stringer stair',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/guardRail.webp',
        imgAlt: 'Steel guardrail 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/steelStairAndWallRail.webp',
        imgAlt: 'Steel stair with wall-mounted handrail 3D model',
        fit: 'contain',
      },
    ],
  },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Flat Designs',
    description: 'Flat patterns for laser and waterjet cutting: a fuse strip, a sign bracket and a flat-pack fire pit.',
    images: [
      {
        imgSrc: '/images/portfolio/3.webp',
        imgAlt: 'Battery fuse strip flat pattern with dimensions',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/devilTailSign.webp',
        imgAlt: 'Wall-mounted sign bracket with devil-tail scroll',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/firePitVerify1.webp',
        imgAlt: 'Flat-pack fire pit 3D model',
        fit: 'contain',
      },
    ],
  },
  { id: 'featurescript', component: 'featureScript' },
  {
    id: uuidv4().slice(0, 8),
    heading: 'Misc Parts and Assemblies',
    description: 'Other mechanical parts and assemblies, including 3D printed parts.',
    images: [
      {
        imgSrc: '/images/portfolio/10.webp',
        imgAlt: 'Cutaway of a small shipping container fitted out for battery energy storage',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/roboBroom3.webp',
        imgAlt: 'Mechanical linkage assembly on aluminum extrusion',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/foldingStandAssembly.webp',
        imgAlt: 'Folding sheet metal stand assembly with cam-lever clamps and rubber pads',
      },
      {
        imgSrc: '/images/portfolio/7.webp',
        imgAlt: 'Electric car charging cable support clamp',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/frontFrame.webp',
        imgAlt: 'Tubular bicycle frame 3D model',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/111.webp',
        imgAlt: '3D printed replacement headband part for Shure headphones',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/KurigTrayallYouNeedIsCoffee.webp',
        imgAlt: 'Custom tray for a Keurig coffee machine with raised lettering',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/exhaustTip.webp',
        imgAlt: 'Large custom exhaust tip with a diamond-pattern cutout sleeve',
      },
      {
        imgSrc: '/images/portfolio/3DVerify.webp',
        imgAlt: 'Laser-cut medal hanger with runner silhouettes',
        fit: 'contain',
      },
    ],
  },
];

// Trimmed from the Misc row (2026-09-30) to keep it to the strongest pieces.
// Not rendered; the image files stay in public/images/portfolio. Move an entry
// back into the Misc row above to show it again.
// eslint-disable-next-line no-unused-vars
const trimmedMiscImages = [
      {
        imgSrc: '/images/portfolio/1box.webp',
        imgAlt: 'Billet humidor with a scroll-pattern lid',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/noTipBevelVerify1.webp',
        imgAlt: 'Broadhead arrow tip with a threaded shank',
        fit: 'contain',
      },
      {
        imgSrc: '/images/portfolio/printedHandle.webp',
        imgAlt: '3D printed handle with arched grip',
      },
];

function Portfolio() {
  // Lightbox state: the image list of the row that was clicked ({ src, alt })
  // and the open index (null = closed).
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Seo path="/portfolio" />
      <div className=" pb-16">
        <section className="pt-10 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
                Portfolio
              </h1>
              <p className="text-base text-gray-700 text-left mb-2">
                22 years in the shop: fixture design and some CNC programming at
                a gauge and fixture shop, structural steel detailing, then
                commissioning robotic weld cells for Ford, Tesla, Magna and
                others. Since 2020 I&apos;ve done remote CAD for fab shops,
                machine shops and automation builders.
              </p>
              <p className="text-base text-gray-700 text-left mb-2">
                Fabrication drawings, sheet metal, weldments, fixtures, DXF/STEP
                files, and material and cut lists, drawn by someone who has seen
                what happens on the floor when a part is hard to build.
              </p>
              <p className="text-base text-gray-700 text-left mb-2">
                Here&apos;s some of that work.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 w-full">
          <div className="container mx-auto w-full">
            {portfolioSections.map(({ id, component, heading, description, images }) => {
              if (component === 'caseStudies') {
                return (
                  <CaseStudies
                    key={id}
                    className="mt-16 w-full"
                    onImageClick={(imgs, ind) =>
                      openLightbox(imgs.map(({ src, alt }) => ({ src, alt })), ind)
                    }
                  />
                );
              }
              if (component === 'featureScript') {
                return <FeatureScriptVideo key={id} className="mt-16 w-full" />;
              }
              const lightboxList = images.map(({ imgSrc, imgAlt }) => ({ src: imgSrc, alt: imgAlt }));
              return (
                <div key={id} id={id} className="mt-10 w-full">
                  <h2 className="text-2xl font-semibold">{heading}</h2>
                  {description ? (
                    <p className="mb-5 lg:max-w-[700px]">{description}</p>
                  ) : (
                    <div className="mb-5" />
                  )}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map(({ imgSrc, imgAlt, fit, position }, ind) => (
                      <EnlargeableTile
                        key={imgSrc}
                        src={imgSrc}
                        alt={imgAlt}
                        fit={fit}
                        position={position}
                        onClick={() => openLightbox(lightboxList, ind)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
      <PortfolioCTA />
    </div>
  );
}

export default Portfolio;
