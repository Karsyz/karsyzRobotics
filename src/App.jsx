import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Index from './Pages/Index';
import Whiteboard from './Pages/Whiteboard';
import Portfolio from './Pages/Portfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/whiteboard" element={<Whiteboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
