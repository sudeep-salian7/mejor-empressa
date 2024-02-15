import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import Company from "./pages/Company";
import TermsCondition from "./components/others/TermsCondition";
import PrivacyPolicy from "./components/others/PrivacyPolicy";
import AboutUs from "./components/others/About us/AboutUs";
import PrivacyPolicyForm from "./components/others/PrivacyPolicyForm";
import { HeaderContextProvider } from "./context/HeaderContext";
import NewRanking from "./pages/NewRanking";
import NewCategory from "./pages/NewCategory";

const Layout = () => {
  return (
    <HeaderContextProvider>
      <div className="font-body">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </HeaderContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:service",
        element: <NewRanking />,
      },
      {
        path: "/articulos/:category/:blog",
        element: <Blog />,
      },
      {
        path: "/:service/:company",
        element: <Company />,
      },
      {
        path: "/terminos-de-uso",
        element: <TermsCondition />,
      },
      {
        path: "/politica-de-privacidad",
        element: <PrivacyPolicy />,
      },
      {
        path: "/acerca-de-nosotros",
        element: <AboutUs />,
      },
      {
        path: "/formulario-de-politica-de-privacidad",
        element: <PrivacyPolicyForm />,
      },
      {
        path: "/categorias",
        element: <NewCategory />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
