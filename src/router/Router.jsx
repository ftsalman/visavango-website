import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../layouts/Layout";
import { ContactPage } from "../pages/ContactPage";
import { AboutPage } from "../pages/AboutPage";
import { VisaServicePage } from "../pages/VisaServicePage";
import { BlogPage } from "../pages/BlogPage";
import { CountriesPage } from "../pages/CountriesPage";
import { CountryDetailsPage } from "../pages/CountryDetailsPage";
import { VisaDetailsPage } from "../pages/VisaDetailsPage";
import { ImmigrationDetailsPage, } from "../pages/ImmigrationDetailsPage";
import { ImmigrationsPage } from "../pages/ImmigrationsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
       index:true,
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/visa-services",
        element: <VisaServicePage />,
      },
      {
        path:"/visadetails/:id",
        element:<VisaDetailsPage/>

      },
      {
        path: "/countries",
        element: <CountriesPage />,
      },
      {
        path: "/countries/:id", 
        element: <CountryDetailsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/immigrations",
        element: <ImmigrationsPage/>,
      },

      {
        path:"/immigration-details/:id",
        element:<ImmigrationDetailsPage/>

      },
    ],
  },
]);
