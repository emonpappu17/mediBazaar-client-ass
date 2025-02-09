import { useState } from "react";
import Button from "../common/Button";
import SkeletonCategoryCard from "./SkeletonCategoryCard";
import { useCategories } from "../../services/categoryService";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
    const { data: categories, isLoading, error } = useCategories();
    const [showAll, setShowAll] = useState(false);

    if (error) return <p className="text-center text-red-500">Failed to load categories</p>;

    const visibleCategories = showAll ? categories : categories?.slice(0, 6);

    return (
        <div className="container max-w-[1300px] mx-auto px-4 py-8 ">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => <SkeletonCategoryCard key={index} />) // Show 6 skeletons
                    : visibleCategories.map((category) => <CategoryCard key={category._id} category={category} />)}
            </div>
            {categories?.length > 6 && !isLoading &&
                (
                    <div className="text-center mt-6">
                        <Button onclick={() => setShowAll(!showAll)} text={showAll ? "Show Less" : "Show More"} className="mx-auto md:px-4  px-3 py-2 rounded-3xl"></Button>
                    </div>
                )
            }
            {/* 
            <div className="mt-6">
                <iframe
                    title="Google Map"
                    className="w-full h-72 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537353153165!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b7aaf30d7b4!2sMediBazaar!5e0!3m2!1sen!2sus!4v1632861102995!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div> */}
        </div>
    );
};

export default CategoryList;
