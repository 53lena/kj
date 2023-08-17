import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import UsersPage from '../pages/Users';
import LoginPage from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/users',
        element: <UsersPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <div>register</div>,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
