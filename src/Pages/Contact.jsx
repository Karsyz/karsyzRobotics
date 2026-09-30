import Seo from '../Components/Seo';
import ContactForm from '../Components/Contact';
import { SITE } from '../config/site';
import { useModal } from '../Context/ModalContext';
import { about } from '../Data/siteCopy';

function ContactPage() {
  const { openModal } = useModal();
  return (
    <>
      <Seo path="/contact" />
      <section className="px-6 pb-10 pt-10">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact</h1>
          <p className="mb-6 text-lg text-gray-700">
            Send drawings, sketches, photos or a description of the part or
            project and I&apos;ll get back to you.
          </p>
          <address className="not-italic">
            <dl className="space-y-2 text-lg">
              <div>
                <dt className="inline font-semibold">Email: </dt>
                <dd className="inline">
                  <a href={`mailto:${SITE.email}`} className="text-indigo-700 underline">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">Location: </dt>
                {/* Approved copy: last paragraph of the About section. */}
                <dd className="inline">{about.paragraphs[3]}</dd>
              </div>
            </dl>
          </address>
          <button
            type="button"
            onClick={openModal}
            className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Book a call
          </button>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default ContactPage;
