import { FaCube, FaGlobe, FaRocket, FaMoneyBill } from 'react-icons/fa';

function Services() {
  return (
    <section className="pb-24 px-6 bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-24">
          Our 3D Modeling Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Precision 3D Modeling */}
          <div className="flex flex-col items-center group hover:-translate-y-2 transition-all duration-100 px-4 py-6 rounded-md hover:shadow-md">
            <FaCube className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-slate-800 group-hover:text-blue-600 duration-200" />

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Flawless 3D Models
            </h3>
            <p className="text-gray-600">
              Get high-precision designs crafted to your exact specifications.
            </p>
          </div>

          {/* Service 2: Remote CAD Solutions */}
          <div className="flex flex-col items-center group hover:-translate-y-2 transition-all duration-100 px-4 py-6 rounded-md hover:shadow-md">
            <FaGlobe className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-slate-800 group-hover:text-green-600 duration-200" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Seamless Remote CAD
            </h3>
            <p className="text-gray-600">
              Collaborate from anywhere with our expert remote solutions.
            </p>
          </div>

          {/* Service 3: Fast Turnaround Times */}
          <div className="flex flex-col items-center group hover:-translate-y-2 transition-all duration-100 px-4 py-6 rounded-md hover:shadow-md">
            <FaRocket className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-slate-800 group-hover:text-orange-500 duration-200" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Rapid Delivery
            </h3>
            <p className="text-gray-600">
              Receive your models quickly without compromising quality.
            </p>
          </div>

          {/* Service 4: Competitive Pricing */}
          <div className="flex flex-col items-center group hover:-translate-y-2 transition-all duration-100 px-4 py-6 rounded-md hover:shadow-md">
            <FaMoneyBill className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-slate-800 group-hover:text-yellow-400/80 duration-200" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Affordable Excellence
            </h3>
            <p className="text-gray-600">
              Top-tier services at prices that fit your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
