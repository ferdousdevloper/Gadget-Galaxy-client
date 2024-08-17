import { useEffect, useState } from 'react';
import './styles.css'; // Import your custom CSS file

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ brand: '', category: '', priceRange: '' });
    const [sort, setSort] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [page, searchQuery, filters, sort]);

    const fetchProducts = async () => {
        try {
            let query = `?page=${page}&limit=9${searchQuery ? `&search=${searchQuery}` : ''}`;

            if (filters.brand) query += `&brand=${filters.brand}`;
            if (filters.category) query += `&category=${filters.category}`;
            if (filters.priceRange) query += `&priceRange=${filters.priceRange}`;
            if (sort) query += `&sort=${sort}`;

            const response = await fetch(`http://localhost:5000/products${query}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        setPage(1);
        fetchProducts();
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
        setPage(1);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto p-6 ">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">Gadget Galaxy Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 my-10">
                <div className="md:col-span-3 flex space-x-4">
                    <input 
                        type="text" 
                        placeholder="Search by product model..." 
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r  from-indigo-800 to-fuchsia-500 text-white"
                    />
                    <button 
                        onClick={handleSearchClick}
                        className="px-4 py-2 bg-gradient-to-r  from-indigo-800 to-fuchsia-500 rounded-lg"
                    >
                        Search
                    </button>
                </div>

                <select 
                    name="brand" 
                    onChange={handleFilterChange} 
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
                >
                    <option value="">All Brands</option>
                    <option value="Apple">Apple</option>
                    <option value="Corsair">Corsair</option>
                    <option value="Havit">Havit</option>
                    <option value="Logitech">Logitech</option>
                    <option value="Marvo">Marvo</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Razer">Razer</option>
                    <option value="Sony">Sony</option>
                </select>

                <select 
                    name="category" 
                    onChange={handleFilterChange} 
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
                >
                    <option value="">All Categories</option>
                    <option value="Headphone">Headphone</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Mouse">Mouse</option>
                </select>

                <select 
                    name="priceRange" 
                    onChange={handleFilterChange} 
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
                >
                    <option value="">All Prices</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-60">$51 - $60</option>
                    <option value="61-70">$61 - $70</option>
                    <option value="71-100">$71 - $100</option>
                    <option value="101-1000">$101 - $1000</option>
                </select>

                <select 
                    onChange={handleSortChange} 
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
                >
                    <option value="">Sort by</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="newest">Date Added: Newest First</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <div 
                        key={product._id} 
                        className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b  from-white "
                    >
                        <img src={product.image} alt={product.model} className="w-full max-h-80 mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-gray-800">{product.model}</h3>
                        <p className="text-gray-700">{product.category} by {product.brand}</p>
                        <p className="text-gray-800 font-bold">${product.price}</p>
                        <p className="text-sm text-gray-700">{new Date(product.date).toLocaleDateString()}</p>
                        <button 
                            onClick={() => handleProductClick(product)} 
                            className="mt-4 px-4 py-2 bg-gradient-to-r  from-indigo-800 to-fuchsia-500 rounded-lg"
                        >
                            Details
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10 flex-wrap gap-2">
                <button 
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1}
                    className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-indigo-800 disabled:bg-gray-700"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => setPage(index + 1)}
                        className={`px-4 py-2 rounded-lg ${page === index + 1 ? 'bg-fuchsia-500 text-white' : 'bg-indigo-800'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button 
                    onClick={() => setPage(page + 1)} 
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-indigo-800 disabled:bg-gray-700"
                >
                    Next
                </button>
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="p-6 rounded-lg max-w-lg w-full bg-gradient-to-bl  from-indigo-500 to-fuchsia-200">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedProduct.model}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.model} className="w-full max-h-80 mb-4 rounded-lg" />
                        <p className="text-gray-800 mb-2">Brand: {selectedProduct.brand}</p>
                        <p className="text-gray-800 mb-2">Category: {selectedProduct.category}</p>
                        <p className="text-gray-800 font-bold mb-2">Price: ${selectedProduct.price}</p>
                        <p className="text-sm text-gray-800 mb-4">Added on: {new Date(selectedProduct.date).toLocaleDateString()}</p>
                        <p className="text-gray-900">{selectedProduct.description}</p>
                        <button 
                            onClick={handleCloseModal} 
                            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
