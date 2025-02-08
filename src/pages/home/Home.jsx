import BannerSlider from "./BannerSlider";
import CategoryList from "../../components/home/CategoryList";
import DiscountList from "../../components/home/DiscountList";
import FeaturedBrands from "../../components/home/FeaturedBrands";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import ParallaxSection from "../../components/home/ParallaxSection";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <CategoryList></CategoryList>
            <DiscountList></DiscountList>
            {/* <FeaturedBrands></FeaturedBrands>
            <WhyChooseUs></WhyChooseUs> */}
            <ParallaxSection></ParallaxSection>
        </div>
    );
};

export default Home;