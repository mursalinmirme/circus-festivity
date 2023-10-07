import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './mainlayout/MainLayout'
import Home from './pages/Home'
import NotFoundPage from './notfoundpage/NotFoundPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ServiceDetails from './pages/ServiceDetails'
const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('/courses.json'),
          element: <Home></Home>,
        },
        {
          path: '/signin',
          element: <Signin></Signin>,
        },
        {
          path: '/signup',
          element: <Signup></Signup>,
        },
        {
          path: '/service-details/:id',
          loader: () => fetch('/courses.json'),
          element: <ServiceDetails></ServiceDetails>,
        },
      ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
