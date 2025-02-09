import ArtworkDetails from '@/components/AtrworkDetails';
import Layout from '@/components/Layout';
import Favorites from '@/pages/Favorites';
import Home from '@/pages/Home';
import { ROUTES } from '@/constants/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ARTWORK_DETAILS, element: <ArtworkDetails /> },
  { path: ROUTES.FAVORITES, element: <Favorites /> },
];

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
