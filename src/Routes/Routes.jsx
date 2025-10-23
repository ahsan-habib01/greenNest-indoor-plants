import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';
import Loading from '../Components/Loading';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/ErrorPage';
import PlantDetails from '../Pages/PlantDetails';
import PrivateRoute from './PrivateRoute';
import About from '../Components/FooterCom/About';
import Contact from '../Components/FooterCom/Contact';
import PrivacyPolicy from '../Components/FooterCom/PrivacyPolicy';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/plants',
        Component: Plants,
      },
      {
        path: '/profile',
        element: <MyProfile></MyProfile>,
      },

      {
        path: '/plant/:id',
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/privacy-policy',
        Component: PrivacyPolicy,
      },
    ],
  },
]);
export default router;
