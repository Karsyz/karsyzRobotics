import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import CTAModal from '../Components/CTAModal';

export function classHelper() {
  return [...arguments].join(' ');
}

function Index() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Navbar />
      <div className="pt-16">
        <CTAModal />
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
