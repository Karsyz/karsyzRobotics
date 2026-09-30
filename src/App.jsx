import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Index from './Pages/Index';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import NotFound from './Pages/NotFound';
import { ModalProvider } from './Context/ModalContext';

// Keep these paths in sync with ROUTES in src/config/site.js
// (used for build-time HTML, _redirects and sitemap.xml).
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />} errorElement={<Index error />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
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
