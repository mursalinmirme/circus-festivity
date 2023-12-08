import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./authProvider/AuthProvider";
import MagicCardsDetails from "./components/MagicCardsDetails";
import "./index.css";
import MainLayout from "./mainlayout/MainLayout";
import NotFoundPage from "./notfoundpage/NotFoundPage";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Home from "./pages/Home";
import PurcheseTicket from "./pages/PurcheseTicket";
import ServiceDetails from "./pages/ServiceDetails";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import VipMembership from "./pages/VipMembership";
import PrivateRoutes from "./privateRoutes.jsx/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/vip-membership",
        element: (
          <PrivateRoutes>
            <VipMembership></VipMembership>
          </PrivateRoutes>
        ),
      },
      {
        path: "/events",
        element: (
          <PrivateRoutes>
            <Events></Events>
          </PrivateRoutes>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/service-details/:id",
        loader: ({params}) => fetch(`${import.meta.env.VITE_running_server}/service-details/${params.id}`),
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/magic-card-details/:cardId",
        loader: () => fetch(`${import.meta.env.VITE_running_server}/magics`),
        element: (
          <PrivateRoutes>
            <MagicCardsDetails></MagicCardsDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/purchase-tickets/:ticketId",
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_running_server}/${params.ticketId}`
          ),
        element: (
          <PrivateRoutes>
            <PurcheseTicket></PurcheseTicket>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
