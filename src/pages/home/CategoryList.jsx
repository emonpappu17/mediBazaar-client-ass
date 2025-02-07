import { useState } from "react";
import Button from "../../components/common/Button";
import SkeletonCategoryCard from "../../components/home/SkeletonCategoryCard";
import { useCategories } from "../../services/categoryService";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
    const { data: categories, isLoading, error } = useCategories();
    const [showAll, setShowAll] = useState(false);


    // if (isLoading) return <p className="text-center text-lg">Loading categories...</p>;

    if (error) return <p className="text-center text-red-500">Failed to load categories</p>;
    console.log(categories);

    const visibleCategories = showAll ? categories : categories?.slice(0, 6);

    return (
        <div className="container max-w-[1300px] mx-auto px-4 py-8 ">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                {/* {categories.map((category) => (
                    <CategoryCard key={category._id} category={category} />
                ))} */}

                {/* {Array.from({ length: 8 }).map((_, index) => <SkeletonCategoryCard key={index} />)} */}
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
        </div>
    );
};

export default CategoryList;
