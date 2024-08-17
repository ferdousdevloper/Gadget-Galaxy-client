import { Toaster } from "react-hot-toast";
import ProductList from "../Componants/ProductList";
import Navbar from "../Componants/Navbar";

const Home = () => {
  
  return (
    <div className="bg-gradient-to-b  from-indigo-400 to-fuchsia-900">
      <Toaster/>
      <div className="container mx-auto">
        <div>
        </div>
        <img
          src="https://i.postimg.cc/BvLLX6Z0/banner1.jpg"
          alt=""
          className="my-5 rounded-2xl w-full"
        />
        <div>
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

export default Home;
