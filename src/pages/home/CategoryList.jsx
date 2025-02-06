import { useCategories } from "../../services/categoryService";
import CategoryCard from "./CategoryCard";


const CategoryList = () => {
    const { data: categories, isLoading, error } = useCategories();

    if (isLoading) return <p className="text-center text-lg">Loading categories...</p>;
    if (error) return <p className="text-center text-red-500">Failed to load categories</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category._id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
