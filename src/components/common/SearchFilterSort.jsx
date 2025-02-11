// import PropTypes from 'prop-types';
// import { FaFilter, FaSearch, FaSortAmountDown } from 'react-icons/fa';

// const SearchFilterSort = ({ setSearch, setCategory, setSortBy }) => {
//     return (
//         <div className="flex flex-wrap justify-between mb-6 gap-4 bg-base-100 p-4 rounded-lg drop-shadow-md">
//             {/* Search Bar */}
//             <div className="relative w-full md:w-1/4 ">
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                     type="text"
//                     placeholder="Search for medicine..."
//                     // className="mt-3 h-full w-full p-3 bg-base-200 rounded  outline-primary focus:outline-1 border-red-600 border"
//                     className="input input-bordered pl-10 w-full bg-base-200 rounded border-0  focus:outline-1"
//                     // className="input input-bordered pl-10 w-full "
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>

//             {/* Category Filter */}
//             <div className="relative w-full md:w-1/4 ">
//                 <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <select
//                     className="select select-bordered pl-10 w-full bg-base-200 rounded border-0  focus:outline-1"
//                     onChange={(e) => setCategory(e.target.value)}
//                 >
//                     <option value="" >All Categories</option>
//                     <option value="Tablet" >Tablet</option>
//                     <option value="Capsule">Capsule</option>
//                     <option value="Syrup">Syrup</option>
//                     <option value="Injection">Injection</option>
//                     <option value="Drops">Drops</option>
//                     <option value="Inhaler">Inhaler</option>
//                     <option value="Powder">Powder</option>
//                     <option value="Ointment">Ointment</option>
//                     <option value="Other">Other</option>
//                 </select>
//             </div>

//             {/* Sort Options */}
//             <div className="relative w-full md:w-1/4 ">
//                 <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <select
//                     className="select select-bordered pl-10 w-full bg-base-200 rounded border-0  focus:outline-1"
//                     onChange={(e) => setSortBy(e.target.value)}
//                 >
//                     <option value="">Sort By</option>
//                     <option value="priceLow">Price: Low to High</option>
//                     <option value="priceHigh">Price: High to Low</option>
//                 </select>
//             </div>
//         </div>
//     );
// };

// // Prop Validation
// SearchFilterSort.propTypes = {
//     setSearch: PropTypes.string.isRequired,
//     setCategory: PropTypes.string.isRequired,
//     setSortBy: PropTypes.string.isRequired,
// };

// export default SearchFilterSort;





// import PropTypes from "prop-types";
// import { FaFilter, FaSearch, FaSortAmountDown } from "react-icons/fa";
// import { motion } from "framer-motion";

// const SearchFilterSort = ({ setSearch, setCategory, setSortBy }) => {
//     return (
//         <motion.div
//             className="flex flex-wrap justify-between gap-4 p-4 rounded-xl shadow-lg bg-white/70 backdrop-blur-lg border border-gray-200"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//         >
//             {/* Search Bar */}
//             <div className="relative w-full md:w-1/3">
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                     type="text"
//                     placeholder="Search for medicine..."
//                     className="input input-bordered pl-10 w-full bg-base-200 rounded-lg focus:outline-none transition duration-200 focus:ring-2 focus:ring-blue-400"
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>

//             {/* Category Filter */}
//             <div className="relative w-full md:w-1/4">
//                 <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <select
//                     className="select select-bordered pl-10 w-full bg-base-200 rounded-lg focus:outline-none transition duration-200 focus:ring-2 focus:ring-blue-400"
//                     onChange={(e) => setCategory(e.target.value)}
//                 >
//                     <option value="">All Categories</option>
//                     <option value="Tablet">Tablet</option>
//                     <option value="Capsule">Capsule</option>
//                     <option value="Syrup">Syrup</option>
//                     <option value="Injection">Injection</option>
//                     <option value="Drops">Drops</option>
//                     <option value="Inhaler">Inhaler</option>
//                     <option value="Powder">Powder</option>
//                     <option value="Ointment">Ointment</option>
//                     <option value="Other">Other</option>
//                 </select>
//             </div>

//             {/* Sort Options */}
//             <div className="relative w-full md:w-1/4">
//                 <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <select
//                     className="select select-bordered pl-10 w-full bg-base-200 rounded-lg focus:outline-none transition duration-200 focus:ring-2 focus:ring-blue-400"
//                     onChange={(e) => setSortBy(e.target.value)}
//                 >
//                     <option value="">Sort By</option>
//                     <option value="priceLow">Price: Low to High</option>
//                     <option value="priceHigh">Price: High to Low</option>
//                 </select>
//             </div>
//         </motion.div>
//     );
// };

// // ✅ Corrected Prop Validation
// SearchFilterSort.propTypes = {
//     setSearch: PropTypes.func.isRequired,
//     setCategory: PropTypes.func.isRequired,
//     setSortBy: PropTypes.func.isRequired,
// };

// export default SearchFilterSort;




import PropTypes from 'prop-types';
import { FaFilter, FaSearch, FaSortAmountDown } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react'; // Headless UI for dropdowns
import { Fragment } from 'react';

const SearchFilterSort = ({ setSearch, setCategory, setSortBy }) => {
    return (
        <div className="flex flex-wrap justify-between mb-6 gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for medicine..."
                    className="input input-bordered pl-10 w-full bg-gray-50 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Category Filter */}
            <div className="relative w-full md:w-1/3">
                <Menu as="div" className="relative">
                    <Menu.Button className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200">
                        <div className="flex items-center">
                            <FaFilter className="text-gray-400 mr-2" />
                            <span className="text-gray-700">Category</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1">
                                {[
                                    'All Categories',
                                    'Tablet',
                                    'Capsule',
                                    'Syrup',
                                    'Injection',
                                    'Drops',
                                    'Inhaler',
                                    'Powder',
                                    'Ointment',
                                    'Other',
                                ].map((category) => (
                                    <Menu.Item key={category}>
                                        {({ active }) => (
                                            <button
                                                onClick={() => setCategory(category === 'All Categories' ? '' : category)}
                                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                    } block w-full px-4 py-2 text-sm text-left`}
                                            >
                                                {category}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            {/* Sort Options */}
            <div className="relative w-full md:w-1/3">
                <Menu as="div" className="relative">
                    <Menu.Button className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200">
                        <div className="flex items-center">
                            <FaSortAmountDown className="text-gray-400 mr-2" />
                            <span className="text-gray-700">Sort By</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1">
                                {[
                                    { label: 'Price: Low to High', value: 'priceLow' },
                                    { label: 'Price: High to Low', value: 'priceHigh' },
                                ].map((sortOption) => (
                                    <Menu.Item key={sortOption.value}>
                                        {({ active }) => (
                                            <button
                                                onClick={() => setSortBy(sortOption.value)}
                                                className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                    } block w-full px-4 py-2 text-sm text-left`}
                                            >
                                                {sortOption.label}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};

// Prop Validation
SearchFilterSort.propTypes = {
    setSearch: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
};

export default SearchFilterSort;
