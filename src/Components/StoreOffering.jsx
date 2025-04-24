import {
  FaListOl,
  FaCube,
  FaShapes,
  FaTools,
  FaRulerCombined,
  FaClipboardList,
  FaFile
} from 'react-icons/fa';

function StoreOffering({ includedItems, offerName, iconSize, textSize }) {
  return (
    <section className="px-6 pt-16 bg-slate-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {offerName} Include:
        </h2>
        <div className="space-y-8">
          {/* First Row: 4 Icons */}
          <div
            className={`grid grid-cols-1 md:grid-cols-${
              includedItems.length === 1 ? 1 : 2
            } lg:grid-cols-${includedItems.length} gap-8`}
          >
            {includedItems.includes(1) && (
              <div className="flex flex-col items-center justify-center min-h-[16rem] w-full">
                <FaCube className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-green-600" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 max-w-xs">
                  STL/STEP Files for 3D Printing and Customizing
                </h3>
              </div>
            )}

            {includedItems.includes(5) && (
              <div className="flex flex-col items-center justify-center min-h-[16rem] w-full">
                <FaFile className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-green-600" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 max-w-xs">
                  F3D Fusion Files for 3D Printing and Customizing
                </h3>
              </div>
            )}

            {includedItems.includes(2) && (
              <div className="flex flex-col items-center justify-center min-h-[16rem] w-full">
                <FaShapes className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 max-w-xs">
                  DXF Files for flat pattern sheet materials
                </h3>
              </div>
            )}

            {includedItems.includes(3) && (
              <div className="flex flex-col items-center justify-center min-h-[16rem] w-full">
                <FaRulerCombined className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 max-w-xs">
                  Fabrication Drawings
                </h3>
              </div>
            )}

            {includedItems.includes(4) && (
              <div className="flex flex-col items-center justify-center min-h-[16rem] w-full">
                <FaClipboardList className="w-24 h-24 mb-4 bg-transparent drop-shadow-md text-red-500" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 max-w-xs">
                  Material List
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreOffering;
