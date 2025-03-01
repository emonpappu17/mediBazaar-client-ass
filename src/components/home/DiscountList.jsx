// import { useDiscountMedicine, } from "../../services/discountService";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import DiscountCard from "./DiscountCard";
// import SkeletonDiscountCard from "./SkeletonDiscountCard";

// const DiscountList = () => {
//     const { data: medicines, isLoading, error } = useDiscountMedicine();

//     if (error) return <p className="text-center text-red-500">Failed to load medicines</p>;

//     return (
//         <div className="container mx-auto px-4 py-8 max-w-[1300px]">
//             <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">Discounted Medicines</h2>
//             {/* <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 breakpoints={{
//                     640: { slidesPerView: 2 },
//                     768: { slidesPerView: 3 },
//                 }}
//                 loop={true}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 // pagination={{ clickable: true }}
//                 navigation
//                 className=""

//             >
//                 {isLoading
//                     ? Array.from({ length: 6 }).map((_, index) => (
//                         <SwiperSlide key={index}>
//                             <SkeletonDiscountCard />
//                         </SwiperSlide>
//                     ))
//                     : medicines.map((medicine, index) => (
//                         <SwiperSlide key={index}>
//                             <DiscountCard medicine={medicine} />
//                         </SwiperSlide>
//                     ))}
//             </Swiper> */}

//             <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 breakpoints={{
//                     640: { slidesPerView: 2 },
//                     768: { slidesPerView: 3 },
//                 }}
//                 loop={true}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 navigation={{
//                     nextEl: ".custom-next",
//                     prevEl: ".custom-prev",
//                 }}
//                 className="relative"
//             >
//                 {isLoading
//                     ? Array.from({ length: 6 }).map((_, index) => (
//                         <SwiperSlide key={index}>
//                             <SkeletonDiscountCard />
//                         </SwiperSlide>
//                     ))
//                     : medicines.map((medicine, index) => (
//                         <SwiperSlide key={index}>
//                             <DiscountCard medicine={medicine} />
//                         </SwiperSlide>
//                     ))}

//                 {/* Custom Navigation Buttons */}
//                 <button className="custom-prev absolute left-[-0px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">
//                     ⬅
//                 </button>
//                 <button className="custom-next absolute right-[-0px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">
//                     ➡
//                 </button>
//             </Swiper>

//         </div>
//     );
// };

// export default DiscountList;




import { useDiscountMedicine } from "../../services/discountService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DiscountCard from "./DiscountCard";
import SkeletonDiscountCard from "./SkeletonDiscountCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons from react-icons

const DiscountList = () => {
    const { data: medicines, isLoading, error } = useDiscountMedicine();

    if (error) return <p className="text-center text-red-500">Failed to load medicines</p>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1300px]">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">
                Discounted Medicines
            </h2>

            {/* Swiper with Custom Navigation */}
            <div className="relative border">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: ".custom-next-button",
                        prevEl: ".custom-prev-button",
                    }}
                    className="discount-swiper"
                >
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <SkeletonDiscountCard />
                            </SwiperSlide>
                        ))
                        : medicines.map((medicine, index) => (
                            <SwiperSlide key={index}>
                                <DiscountCard medicine={medicine} />
                            </SwiperSlide>
                        ))}
                </Swiper>

                {/* Custom Navigation Buttons with Tailwind and React Icons */}
                <button
                    className="custom-prev-button absolute top-1/2 left-[-60px] transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-gray-600 to-blue-500 rounded-full shadow-lg flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-700 hover:scale-110 transition-all duration-300 active:scale-95 z-10"
                >
                    <FaArrowLeft size={24} />
                </button>
                <button
                    className="custom-next-button absolute top-1/2 right-[-60px] transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-gray-600 to-blue-500 rounded-full shadow-lg flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-700 hover:scale-110 transition-all duration-300 active:scale-95 z-10"
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default DiscountList;




