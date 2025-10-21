import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
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
        element: <MyProfile></MyProfile>
      },
    ]
  }
]);
export default router;
