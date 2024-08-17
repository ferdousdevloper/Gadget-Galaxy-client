import { Outlet } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Componants/Footer";



const Root = () => {
    return (
        <div className="bg-gradient-to-b  from-indigo-400 to-fuchsia-900">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;