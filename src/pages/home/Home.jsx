import BannerSlider from "./BannerSlider";
import CategoryList from "../../components/home/CategoryList";
import DiscountList from "../../components/home/DiscountList";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <CategoryList></CategoryList>
            <DiscountList></DiscountList>
        </div>
    );
};

export default Home;