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
import MagicCardsDetails from './components/MagicCardsDetails'
import PurcheseTicket from './pages/PurcheseTicket'
import AuthProvider from './authProvider/AuthProvider'
import PrivateRoutes from './privateRoutes.jsx/PrivateRoutes'
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
          element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
        },
        {
          path: '/magic-card-details/:cardId',
          loader: () => fetch('/magics.json'),
          element: <PrivateRoutes><MagicCardsDetails></MagicCardsDetails></PrivateRoutes>,
        },
        {
          path: '/purchase-tickets/:ticketId',
          loader: () => fetch('/tickets.json'),
          element: <PrivateRoutes><PurcheseTicket></PurcheseTicket></PrivateRoutes>,
        },
      ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
