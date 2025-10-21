import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';
import Loading from '../Components/Loading';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <Loading></Loading>,
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
        Component: MyProfile
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ]
  }
]);
export default router;
