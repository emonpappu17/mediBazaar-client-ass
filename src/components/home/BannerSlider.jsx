import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import { useBanners } from "../../services/bannerService";
import Button from "../common/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SkeletonBanner from "./SkeletonBanner";

const BannerSlider = () => {
    const { data: banners, isLoading, error } = useBanners();

    if (isLoading) return <SkeletonBanner></SkeletonBanner>;

    if (error) return <p className="text-center text-red-500">Failed to load banners</p>;

    return (
        <div className="container mx-auto h-[400px] md:h-[500px] overflow-hidden rounded-4xl relative ">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button",
                }}
                className="w-full h-full banner-swiper"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner._id} className="relative">
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center px-15 md:pl-28">
                            <div className="max-w-[400px] space-y-3">
                                <h2 className="text-white text-3xl md:text-5xl font-bold nunito-font">
                                    {banner.name}
                                </h2>
                                <p className="text-white">{banner.description}</p>
                                <Button
                                    text="Button"
                                    className="md:px-4 px-3 py-2 rounded-3xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
                className="prev-button absolute top-1/2 left-[10px] transform -translate-y-1/2 size-12 rounded-full shadow-lg flex items-center justify-center text-white  transition-all duration-300 active:scale-95 z-10  cursor-pointer group"
            >
                <FaArrowLeft className="group-hover:-translate-x-[5px] transition-all duration-300" size={24} />
            </button>
            <button
                className="next-button absolute top-1/2 right-[10px] transform -translate-y-1/2 size-12 rounded-full shadow-lg flex items-center justify-center text-white   transition-all duration-300 active:scale-95 z-10  cursor-pointer group"
            >
                <FaArrowRight className="group-hover:translate-x-[5px] transition-all duration-300" size={24} />
            </button>

            {/* Inline Pagination Styles */}
            <style>{`
    .banner-swiper .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: #ffffff;
      opacity: 0.5;
      border-radius: 50%;
      margin: 0 6px;
      transition: all 0.3s ease;
    }
    .banner-swiper .swiper-pagination-bullet-active {
      width: 16px;
      height: 16px;
      background: #0D6FEC;
      opacity: 1;
    }
    .banner-swiper .swiper-pagination-bullet:hover {
      opacity: 0.8;
      transform: scale(1.2);
    }
    .banner-swiper .swiper-pagination {
      bottom: 20px;
    }
  `}</style>
        </div>
    );
};

export default BannerSlider;










