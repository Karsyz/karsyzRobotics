import Seo from '../Components/Seo';
import CTA from '../Components/CTA';
import { SHOW_TODOS } from '../config/flags';
import { ServiceGrid } from '../Components/Services';
import FixturesTooling from '../Components/FixturesTooling';
import {
  deliverables,
  software,
  clientSeatSoftware,
} from '../Data/services';

function ServicesPage() {
  return (
    <>
      <Seo path="/services" />
      <section className="px-6 pt-10">
        <div className="container mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Services</h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-700">
            Remote CAD and mechanical design for fab shops, machine shops,
            equipment builders and automation integrators. Designs are drawn
            with the build in mind: how the part gets cut, formed, welded,
            fixtured and, where it matters, handled by automation.
          </p>
          <ServiceGrid headingLevel="h2" />
        </div>
      </section>

      <div className="px-6 pt-16">
        <FixturesTooling className="container mx-auto" />
      </div>

      <section aria-labelledby="deliverables-heading" className="px-6 pt-16">
        <div className="container mx-auto">
          <h2 id="deliverables-heading" className="mb-6 text-3xl font-semibold text-gray-900">
            Deliverables
          </h2>
          <dl className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {deliverables.map(({ format, detail }) => (
              <div key={format} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-900/5">
                <dt className="font-mono text-lg font-bold text-indigo-700">{format}</dt>
                <dd className="text-gray-700">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {(software.length > 0 || SHOW_TODOS) && (
        <section aria-labelledby="software-heading" className="px-6 pt-16">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h2
                id="software-heading"
                className="mb-6 text-3xl font-semibold text-gray-900"
              >
                Software
              </h2>
              {software.length > 0 ? (
                <dl className="space-y-3 text-gray-700">
                  <div>
                    <dt className="font-semibold text-gray-900">Main tools</dt>
                    <dd>{software.join(', ')}</dd>
                  </div>
                  {clientSeatSoftware.length > 0 && (
                    <div>
                      <dt className="font-semibold text-gray-900">
                        Can work on your seat of
                      </dt>
                      <dd>{clientSeatSoftware.join(', ')}</dd>
                    </div>
                  )}
                </dl>
              ) : null}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}

export default ServicesPage;
