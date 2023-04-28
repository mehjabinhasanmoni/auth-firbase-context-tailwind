import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './Component/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './Component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
