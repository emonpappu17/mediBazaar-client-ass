import BannerSlider from "./BannerSlider";
import CategoryList from "../../components/home/CategoryList";
import DiscountList from "../../components/home/DiscountList";
import FeaturedBrands from "../../components/home/FeaturedBrands";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import ParallaxSection from "../../components/home/ParallaxSection";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <CategoryList></CategoryList>
            <DiscountList></DiscountList>
            {/* <FeaturedBrands></FeaturedBrands>
            <WhyChooseUs></WhyChooseUs> */}
            <ParallaxSection></ParallaxSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;