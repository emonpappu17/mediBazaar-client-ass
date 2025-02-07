import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import 'swiper/css/bundle';
import { useBanners } from "../../services/bannerService";
import Button from "../../components/common/Button";

const BannerSlider = () => {
    const { data: banners, isLoading, error } = useBanners();

    if (isLoading) return <p className="text-center text-lg">Loading banners...</p>;
    // console.log(banners);

    if (error) return <p className="text-center text-red-500">Failed to load banners</p>;

    return (
        <div className=' container mx-auto  h-[400px] md:h-[500px] overflow-hidden rounded-4xl'>
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                effect={'fade'}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                className="w-full h-full "
            >
                {banners.map(banner => (
                    <SwiperSlide key={banner._id} className='relative'>
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className='w-full h-full object-cover rounded-lg '
                        // loading='lazy'
                        />
                        <div className="absolute  inset-0 flex items-center pl-15 md:pl-28 ">
                            <div className="max-w-[400px] space-y-3  ">
                                <h2 className="text-white text-3xl md:text-5xl font-bold nunito-font">{banner.name}</h2>
                                <p className="text-white ">{banner.description}</p>
                                <Button text="Button" className="md:px-4  px-3 py-2 rounded-3xl"></Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;