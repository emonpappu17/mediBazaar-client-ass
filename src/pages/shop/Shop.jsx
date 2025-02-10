import { FaFilter, FaList, FaSearch, FaSortAmountDown, FaThLarge, FaTimes } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useMedicines } from '../../services/medicineService';
import { useState } from 'react';
import MedicineCard from '../../components/shop/MedicineCard';
import LayoutToggle from '../../components/common/LayoutToggle';


const Shop = () => {
    const [layout, setLayout] = useState("grid"); // Toggle between 'grid' & 'list'
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const { data, isLoading, error } = useMedicines();
    if (isLoading) return <p className="text-center text-lg">Loading shopping...</p>;

    if (error) return <p className="text-center text-red-500">Failed to load shopping</p>;

    return (
        <div className="container mx-auto px-4 py-12 max-w-[1300px]">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white nunito-font">
                Shop Medicines
            </h2>

            {/* Search, Filter & Sort UI */}
            <div className="flex flex-wrap justify-between mb-6 gap-4 bg-base-100 p-4 rounded-lg shadow-lg">
                {/* Search Bar */}
                <div className="relative w-full md:w-1/3">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search for medicine..."
                        className="input input-bordered pl-10 w-full"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Category Filter */}
                <div className="relative w-full md:w-1/4">
                    <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                        className="select select-bordered pl-10 w-full"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Capsule">Capsule</option>
                        <option value="Syrup">Syrup</option>
                        <option value="Injection">Injection</option>
                    </select>
                </div>

                {/* Sort Options */}
                <div className="relative w-full md:w-1/4">
                    <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                        className="select select-bordered pl-10 w-full"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Layout Switcher */}
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setLayout("grid")}
                    className={`btn btn-sm mr-2 ${layout === "grid" ? "btn-primary" : "btn-outline"}`}
                >
                    <FaThLarge className="text-lg" /> Grid
                </button>
                <button
                    onClick={() => setLayout("list")}
                    className={`btn btn-sm ${layout === "list" ? "btn-primary" : "btn-outline"}`}
                >
                    <FaList className="text-lg" /> List
                </button>
            </div>

            {/* Product Listing */}
            <div
                className={
                    layout === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        : "space-y-6"
                }
            >
                {data?.map((medicine, index) => (
                    <motion.div
                        key={index}
                        className={`bg-base-100 p-4 rounded-lg shadow-lg transition duration-300 overflow-hidden ${layout === "list" ? "flex items-center gap-4" : ""
                            }`}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={medicine.image}
                            alt={medicine.name}
                            className={
                                layout === "grid"
                                    ? "w-full h-40 object-cover rounded-lg"
                                    : "w-32 h-32 object-cover rounded-lg"
                            }
                        />
                        <div className={layout === "list" ? "flex-1" : "text-center mt-2"}>
                            <h3 className="text-lg font-semibold">{medicine.name}</h3>
                            <p className="text-gray-600">{medicine.category}</p>
                            <p className="text-primary font-bold mt-1">${medicine.price.toFixed(2)}</p>
                            <div className="flex gap-2 mt-3">
                                <button className="btn btn-primary flex-1">Add to Cart</button>
                                <button className="btn btn-outline flex-1">View Details</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination UI */}
            <div className="flex justify-center mt-8">
                <button className="btn btn-outline mx-2">« Prev</button>
                <button className="btn btn-primary mx-2">1</button>
                <button className="btn btn-outline mx-2">2</button>
                <button className="btn btn-outline mx-2">Next »</button>
            </div>
        </div>



        // <div className="container mx-auto px-4 py-12 max-w-[1300px]">
        //     <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white nunito-font">
        //         Shop Medicines
        //     </h2>

        //     {/* Layout Switcher */}
        //     <div className="flex justify-end mb-6">
        //         <button
        //             onClick={() => setLayout("grid")}
        //             className={`btn btn-sm mr-2 ${layout === "grid" ? "btn-primary" : "btn-outline"}`}
        //         >
        //             <FaThLarge className="text-lg" /> Grid
        //         </button>
        //         <button
        //             onClick={() => setLayout("list")}
        //             className={`btn btn-sm ${layout === "list" ? "btn-primary" : "btn-outline"}`}
        //         >
        //             <FaList className="text-lg" /> List
        //         </button>
        //     </div>

        //     {/* Product Listing */}
        //     <div
        //         className={
        //             layout === "grid"
        //                 ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        //                 : "space-y-6"
        //         }
        //     >
        //         {data?.map((medicine, index) => (
        //             <motion.div
        //                 key={index}
        //                 className={`relative bg-base-100 p-5 rounded-xl shadow-lg transition duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl ${layout === "list" ? "flex items-center gap-4" : ""}`}
        //                 whileHover={{ scale: 1.05 }}
        //             >
        //                 {/* Medicine Image */}
        //                 <div className="relative w-full h-40 flex justify-center items-center overflow-hidden rounded-lg">
        //                     <img
        //                         src={medicine.image}
        //                         alt={medicine.name}
        //                         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        //                     />
        //                     <span className="absolute top-2 left-2 bg-primary text-white px-3 py-1 text-xs font-semibold rounded-full">
        //                         {medicine.category}
        //                     </span>
        //                 </div>

        //                 {/* Medicine Info */}
        //                 <div className={layout === "list" ? "flex-1 ml-4" : "text-center mt-4"}>
        //                     <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{medicine.name}</h3>
        //                     <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{medicine.description.slice(0, 60)}...</p>
        //                     <p className="text-primary font-bold mt-2 text-lg">${medicine.price.toFixed(2)}</p>
        //                     <div className="flex gap-2 mt-4">
        //                         <button className="btn btn-primary flex-1">Add to Cart</button>
        //                         <button className="btn btn-outline flex-1">View Details</button>
        //                     </div>
        //                 </div>
        //             </motion.div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Shop;