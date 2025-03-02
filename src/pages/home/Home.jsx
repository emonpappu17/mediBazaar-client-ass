import BannerSlider from "../../components/home/BannerSlider";
import CategoryList from "../../components/home/CategoryList";
import DiscountList from "../../components/home/DiscountList";
import ParallaxSection from "../../components/home/ParallaxSection";
import Testimonials from "../../components/home/Testimonials";
import BackToTop from "../../components/common/BackToTop";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <CategoryList></CategoryList>
            <DiscountList></DiscountList>
            <ParallaxSection></ParallaxSection>
            <Testimonials></Testimonials>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Home;