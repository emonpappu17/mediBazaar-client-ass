import React from 'react';
import { FaFilter, FaSearch, FaSortAmountDown } from 'react-icons/fa';

const SearchFilterSort = ({setSearch,setCategory,setSortBy}) => {
    return (
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
    );
};

export default SearchFilterSort;