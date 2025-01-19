import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import NotFound from "../components/error/NotFound";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";




export const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element:  <Contact />,
      },
    ],
  },
]);