import { useCategories } from "../../services/categoryService";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
    const { data: categories, isLoading, error } = useCategories();
    if (isLoading) return <p className="text-center text-lg">Loading categories...</p>;
    console.log(categories);

    if (error) return <p className="text-center text-red-500">Failed to load categories</p>;
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <CategoryCard key={category._id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;