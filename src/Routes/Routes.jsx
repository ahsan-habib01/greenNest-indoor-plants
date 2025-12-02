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
import Contact from '../Pages/Contact';
import PrivacyPolicy from '../Components/FooterCom/PrivacyPolicy';
import AboutUs from './../Pages/AboutUs';
import PlantCareGuide from '../Pages/PlantCareGuide';

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
        path: '/plant-care',
        element: <PlantCareGuide></PlantCareGuide>
      },
      {
        path: '/profile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/plant/:id',
        element: <PlantDetails></PlantDetails>,
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
        path: '/privacy-policy',
        Component: PrivacyPolicy,
      },
    ],
  },
]);
export default router;
