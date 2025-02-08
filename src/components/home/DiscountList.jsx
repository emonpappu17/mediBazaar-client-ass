import { useDiscountMedicine, } from "../../services/discountService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DiscountCard from "./DiscountCard";
import SkeletonDiscountCard from "./SkeletonDiscountCard";

const DiscountList = () => {
    const { data: medicines, isLoading, error } = useDiscountMedicine();

    if (error) return <p className="text-center text-red-500">Failed to load medicines</p>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1300px]">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">Discounted Medicines</h2>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
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
        </div>
    );
};

export default DiscountList;





