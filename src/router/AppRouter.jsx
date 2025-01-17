import NotFound from "../components/error/NotFound";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
            <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            </>
        }>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contacts" element={<Contact/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
