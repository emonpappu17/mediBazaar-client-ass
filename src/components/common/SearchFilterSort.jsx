import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaFilter, FaSearch, FaSortAmountDown } from 'react-icons/fa';
import { CheckIcon, } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router';
import { useCategories } from '../../services/categoryService';

// const categories = [
//     'All Categories',
//     'Tablet',
//     'Capsule',
//     'Syrup',
//     'Injection',
//     'Drops', 'Inhaler',
//     'Powder',
//     'Ointment',
//     'Other',
// ]

const sortOptions = [
    { value: '', label: 'Sort By' },
    { value: 'priceLow', label: 'Price: Low to High' },
    { value: 'priceHigh', label: 'Price: High to Low' },
];

const SearchFilterSort = ({ setSearch, category, setCategory, sortBy, setSortBy }) => {
    const { pathname } = useLocation();

    //API Call
    const { data } = useCategories();
    // console.log(data);

    const hideCategory = pathname !== '/shop'

    return (
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-6 gap-4 bg-base-100 p-4 rounded-lg drop-shadow-md">
            {/* Search Bar */}
            <div className="relative w-full  ">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search for medicine..."
                    className="input input-bordered pl-10 w-full bg-base-200 rounded border-0  focus:outline-1"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            {/* <div className="w-full md:w-1/4">
                <Combobox value={search} onChange={setSearch}>
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <ComboboxInput
                            type="text"
                            placeholder="Search for medicine..."
                            className={clsx(
                                'input input-bordered pl-10 w-full bg-base-200 rounded border-0 focus:outline-1'
                            )}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </Combobox>
            </div> */}


            {/* Category Filter */}
            {/* <div className="relative w-full md:w-1/4 ">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <select
                    className="select select-bordered pl-10 w-full bg-base-200 rounded border-0  focus:outline-1 "
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" >All Categories</option>
                    <option value="Tablet" className='focus:bg-amber-400'>Tablet</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Injection">Injection</option>
                    <option value="Drops">Drops</option>
                    <option value="Inhaler">Inhaler</option>
                    <option value="Powder">Powder</option>
                    <option value="Ointment">Ointment</option>
                    <option value="Other">Other</option>
                </select>
            </div> */}

            {/* Category Filter */}
            {!hideCategory &&
                <div className=' w-full '>
                    <Listbox value={category} onChange={setCategory}>
                        <ListboxButton
                            className={clsx(
                                'relative block w-full rounded-lg cursor-pointer py-2 pr-8 pl-10 text-left text-sm/6  bg-[#0D6FEC] text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        >
                            <FaFilter
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                                aria-hidden="true"
                            />
                            {category === '' ? 'All Categories' : category}
                            {/* {category} */}
                        </ListboxButton>
                        <ListboxOptions
                            modal={false}
                            anchor="bottom"
                            transition
                            className={clsx(
                                'w-[var(--button-width)] rounded-xl border border-base-300 bg-base-200 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 '
                            )}
                        >
                            {data?.map((category, index) => (
                                <ListboxOption
                                    key={index}
                                    value={category.categoryName}
                                    className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3  data-[focus]:bg-[#0D6FEC] "
                                >
                                    <CheckIcon className="invisible size-4 group-hover:fill-white fill-base-content group-data-[selected]:visible " />
                                    <div className="text-sm/6 text-base-content group-hover:text-white ">{category.categoryName}</div>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                </div>}


            {/* Sort Options */}
            {/* <div className="relative w-full md:w-1/4 ">
                <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <select
                    className="select select-bordered pl-10 w-full bg-base-200 rounded border-0  focus:outline-1"
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                </select>
            </div> */}

            {/* Sort Options */}
            <div className="w-full ">
                <Listbox value={sortBy} onChange={setSortBy}>
                    <ListboxButton
                        className={clsx(
                            'relative block w-full rounded-lg cursor-pointer py-2 pr-8 pl-10 text-left text-sm/6  bg-[#0D6FEC] text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                    >
                        <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                        {sortOptions.find(option => option.value === sortBy)?.label || 'Sort By'}
                    </ListboxButton>
                    <ListboxOptions
                        modal={false}
                        anchor="bottom"
                        transition
                        className={clsx(
                            'w-[var(--button-width)] rounded-xl border border-base-300 bg-base-200 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                        )}
                    >
                        {sortOptions.map((option, index) => (
                            <ListboxOption
                                key={index}
                                value={option.value}
                                className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#0D6FEC]"
                            >
                                <div className="text-sm/6 text-base-content group-hover:text-white">
                                    {option.label}
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </div>
        </div>
    );
};

// Prop Validation
SearchFilterSort.propTypes = {
    setSearch: PropTypes.string.isRequired,
    setCategory: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    setSortBy: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
};

export default SearchFilterSort;





