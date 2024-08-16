import ProductList from "../Componants/ProductList";
import useAuth from "../Hook/useAuth";

const Home = () => {
  const { logout } = useAuth();
  return (
    <div className="bg-gradient-to-b  from-indigo-400 to-fuchsia-900">
      <div className="container mx-auto">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-black text-gray-800">GADGET GALAXY</h1>
            <button onClick={logout} className="btn btn-error text-white my-4">
              Logout
            </button>
          </div>
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
