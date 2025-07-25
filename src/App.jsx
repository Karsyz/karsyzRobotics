import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Index from './Pages/Index';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import { ModalProvider } from './Context/ModalContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route index element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Route>
  )
);

export default function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ModalProvider>
  );
}
