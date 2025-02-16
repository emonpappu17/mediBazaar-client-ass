import { FaFilter, FaList, FaSearch, FaSortAmountDown, FaThLarge, FaTimes } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useMedicines } from '../../services/medicineService';
import { useState } from 'react';
import MedicineCard from '../../components/shop/MedicineCard';
import LayoutToggle from '../../components/common/LayoutToggle';
import SearchFilterSort from '../../components/common/SearchFilterSort';
import Pagination from '../../components/common/Pagination';
import SkeletonMedicineCard from '../../components/shop/SkeletonMedicineCard';


const Shop = () => {
    const [layout, setLayout] = useState("grid"); // Toggle between 'grid' & 'list'
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("")
    const [sortBy, setSortBy] = useState("");
    const [page, setPage] = useState(1);
    // const [selectedMedicine, setSelectedMedicine] = useState(null);

    console.log('from shop page', category, sortBy, search);


    const { data = [], isLoading, error } = useMedicines(page, 6, sortBy, category, search);
    // const { data, isLoading, error } = useMedicines();
    // if (isLoading) return <p className="text-center text-lg">Loading shopping...</p>;
    // if (isLoading) return <p className="text-center text-lg">Loading shopping...</p>;


    // if (error) return <p className="text-center text-red-500">Failed to load shopping</p>;

    return (
        <div className="container mx-auto px-4 py-12 max-w-[1300px] ">
            <h2 className="text-4xl font-bold text-center mb-8 text-base-content  nunito-font">
                Shop Medicines
            </h2>

            {/* Search, Filter & Sort UI */}
            {/* <div className="flex flex-wrap justify-between mb-6 gap-4 bg-base-100 p-4 rounded-lg shadow-lg">
                <div className="relative w-full md:w-1/3">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search for medicine..."
                        className="input input-bordered pl-10 w-full"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

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
            </div> */}
            <SearchFilterSort search={search} setSearch={setSearch} category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} />
            {/* {
                isLoading && <div className='w-full h-full'>
                    < p className="text-center text-lg">Loading shopping...</p>
                </div>
            } */}
            {/* Layout Switcher */}
            {/* <div className="flex justify-end mb-6">
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
            </div> */}
            <LayoutToggle layout={layout} setLayout={setLayout} />

            {/* Product Listing */}
            <div
                className={
                    layout === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6"
                        : "space-y-6"
                }
            >
                {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => <SkeletonMedicineCard key={index} layout={layout}></SkeletonMedicineCard>)
                    : data?.data?.map((medicine, index) => (<MedicineCard key={index} medicine={medicine} layout={layout} ></MedicineCard>))
                }
            </div>

            {/* If no medicines found */}
            {!isLoading && data.data.length === 0 &&
                <div className="text-center text-gray-500 my-32">
                    No match found
                </div>}


            {/* Pagination UI */}
            {/* <div className="flex justify-center mt-8">
                <button className="btn btn-outline mx-2">« Prev</button>
                <button className="btn btn-primary mx-2">1</button>
                <button className="btn btn-outline mx-2">2</button>
                <button className="btn btn-outline mx-2">Next »</button>
            </div> */}
            <Pagination currentPage={page} totalPages={data?.totalPages || 1} onPageChange={setPage}></Pagination>
            {/* If error occur */}
            {error && <p className="text-red-500 text-center mt-4">Failed to load Medicines</p>}
        </div >
    );
};

export default Shop;