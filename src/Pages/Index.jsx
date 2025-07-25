import Modal from 'react-modal';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import CTAModal from '../Components/CTAModal';

Modal.setAppElement('#root');

function Index() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <CTAModal />
    </div>
  );
}

export default Index;
