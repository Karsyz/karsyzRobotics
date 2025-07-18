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
import FabPackStore from './Pages/FabPackStore';
import ModelStore from './Pages/ModelStore';
import { products } from './Data/products';
import { models } from './Data/models';
import ProductPage from './Pages/ProductPage';
import Thanks from './Pages/Thanks';
import Freebies from './Pages/Freebies';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/whiteboard" element={<Whiteboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/asdf" element={<ProductPage product={products[0]} />} />
      <Route path="/fabpackstore" element={<FabPackStore />} />
      <Route path="/modelstore" element={<ModelStore />} />
      <Route path="/freebies" element={<Freebies />} />

      {/* product pages */}
      {/* {console.log(products.filter(el => el.published))} */}
      {products
        .filter((el) => el.published)
        .map((product, ind) => {
          const slug = product.name.toLowerCase().split(' ').join('-').trim();
          if (!slug) return null; // Skip invalid slugs
          // console.log(slug);
          return (
            <Route
              key={product.id.toString()}
              path={`/fabpackstore/${product.name
                .toLowerCase()
                .split(' ')
                .join('-')}`}
              element={<ProductPage product={product} />}
            />
          );
        })}

      {models
        .filter((el) => el.published)
        .map((model, ind) => {
          const slug = model.name.toLowerCase().split(' ').join('-').trim();
          if (!slug) return null; // Skip invalid slugs
          // console.log(slug);
          return (
            <Route
              key={model.id.toString()}
              path={`/modelstore/${model.name
                .toLowerCase()
                .split(' ')
                .join('-')}`}
              element={<ProductPage product={model} />}
            />
          );
        })}
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
i}
