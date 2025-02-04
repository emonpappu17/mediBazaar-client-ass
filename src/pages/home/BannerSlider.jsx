// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';
import { useBanners } from "../../services/bannerService";

const BannerSlider = () => {
    const { data: banners, isLoading, error } = useBanners();

    if (isLoading) return <p className="text-center text-lg">Loading banners...</p>;
    console.log(banners);

    if (error) return <p className="text-center text-red-500">Failed to load banners</p>;

    return (
        // <div className='w-full h-[400px] md:h-[500px] '>
        //     <Swiper

        //         modules={[Autoplay, Pagination, Navigation]}
        //         spaceBetween={50}
        //         slidesPerView={1}
        //         loop={true}
        //         autoplay={{ delay: 4000, disableOnInteraction: false }}
        //         pagination={{ clickable: true }}
        //         navigation
        //         className="w-full h-full"
        //     >
        //         {banners.map(banner => (
        //             <SwiperSlide key={banner._id} className='relative'>
        //                 <img
        //                     src={banner.image}
        //                     alt={banner.title}
        //                     className='w-full h-full object-cover rounded-lg border'
        //                 // loading='lazy'
        //                 />
        //                 <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-40">
        //                     <h2 className="text-white text-3xl md:text-5xl font-bold">{banner.name}</h2>
        //                 </div>
        //             </SwiperSlide>
        //         ))}

        //     </Swiper>
        // </div>
        <div className="container mx-auto my-6">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {banners.map((slide) => (
                    <SwiperSlide key={slide._id} className="p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={slide.image} alt={slide.name} className="w-full h-52 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{slide.name}</h2>
                                <p className="text-gray-500">{slide.description}</p>
                                <p className="text-primary font-bold">${slide.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;