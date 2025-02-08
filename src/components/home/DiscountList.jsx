
// import { useDiscountMedicine } from "../../services/discountService";
// import DiscountCard from "./DiscountCard";

// const DiscountList = () => {
//     const { data: products, isLoading, error } = useDiscountMedicine();

//     if (isLoading) return <p className="text-center text-lg">Loading Discount...</p>;
//     if (error) return <p className="text-center text-red-500">Failed to load products</p>;

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Discounted Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => <DiscountCard key={product._id} product={product} />)}

//             </div>
//         </div>
//     );
// };

// export default DiscountList;



import { useDiscountMedicine, } from "../../services/discountService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DiscountCard from "./DiscountCard";

const DiscountList = () => {
    const { data: products, isLoading, error } = useDiscountMedicine();
    if (isLoading) return <p className="text-center text-lg">Loading Discount...</p>;
    if (error) return <p className="text-center text-red-500">Failed to load products</p>;
    console.log(products);
    console.log(products);


    return (
        <div className="container mx-auto px-4 py-8 max-w-[1300px]">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content">Discounted Medicines</h2>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    // 1024: { slidesPerView: 4 },
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <DiscountCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiscountList;

