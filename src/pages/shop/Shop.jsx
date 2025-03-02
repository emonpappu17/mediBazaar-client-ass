import { useMedicines } from '../../services/medicineService';
import { useEffect, useState } from 'react';
import MedicineCard from '../../components/shop/MedicineCard';
import LayoutToggle from '../../components/common/LayoutToggle';
import SearchFilterSort from '../../components/common/SearchFilterSort';
import Pagination from '../../components/common/Pagination';
import SkeletonMedicineCard from '../../components/shop/SkeletonMedicineCard';
import Lottie from 'lottie-react';
import emptyAnimation from '../../assets/empty.json'
import BackToTop from '../../components/common/BackToTop';

const Shop = () => {
    const [layout, setLayout] = useState("grid");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("")
    const [sortBy, setSortBy] = useState("");
    const [page, setPage] = useState(1);

    const { data = [], isLoading, error } = useMedicines(page, 6, sortBy, category, search);

    //  FIX: Reset `page` to 1 when category, search, or sort changes

    useEffect(() => {
        setPage(1);
    }, [category, search, sortBy])

    {/* If error occur */ }
    { error && <p className="text-red-500 text-center mt-4">Failed to load Medicines</p> }

    return (
        <div className="container mx-auto px-4 py-12 max-w-[1300px] ">
            <h2 className="text-4xl font-bold text-center mb-8 text-base-content  nunito-font">
                Shop Medicines
            </h2>

            {/* Search, Filter & Sort UI */}
            <SearchFilterSort
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Layout Switcher */}
            <LayoutToggle
                layout={layout}
                setLayout={setLayout}
            />

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
            {!isLoading && data?.data?.length === 0 &&
                <div className="w-90 mx-auto">
                    {/* No match found */}
                    <Lottie animationData={emptyAnimation} loop={false}></Lottie>
                    <h1 className="text-center text-2xl">No match found</h1>
                </div>}

            {/* Pagination UI */}
            <Pagination currentPage={page} totalPages={data?.totalPages || 1} onPageChange={setPage}></Pagination>
            <BackToTop></BackToTop>
        </div >
    );
};

export default Shop;