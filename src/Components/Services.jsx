import { FaCube, FaGlobe, FaRocket, FaMoneyBill } from "react-icons/fa";

function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our 3D Modeling Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Precision 3D Modeling */}
          <div className="flex flex-col items-center">
            <FaCube className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-blue-600" />

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Flawless 3D Models
            </h3>
            <p className="text-gray-600">
              Get high-precision designs crafted to your exact specifications.
            </p>
          </div>

          {/* Service 2: Remote CAD Solutions */}
          <div className="flex flex-col items-center">
            <FaGlobe className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-green-600" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Seamless Remote CAD
            </h3>
            <p className="text-gray-600">
              Collaborate from anywhere with our expert remote solutions.
            </p>
          </div>

          {/* Service 3: Fast Turnaround Times */}
          <div className="flex flex-col items-center">
            <FaRocket className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-orange-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Rapid Delivery
            </h3>
            <p className="text-gray-600">
              Receive your models quickly without compromising quality.
            </p>
          </div>

          {/* Service 4: Competitive Pricing */}
          <div className="flex flex-col items-center">
            <FaMoneyBill className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-yellow-500" />
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
