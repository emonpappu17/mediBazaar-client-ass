import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
    return (

        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <img src={category.categoryImage} alt={category.categoryName
            } className="w-full h-40 object-cover rounded-md" loading="lazy" />
            <h3 className="text-lg font-semibold mt-2">{category.categoryName
            }</h3>
            <p className="text-sm text-gray-500">{category.medicineCount}</p>
        </div>

    );
};

CategoryCard.propTypes = {
    category: PropTypes.shape({
        categoryImage: PropTypes.string.isRequired,
        categoryName: PropTypes.string.isRequired,
        medicineCount: PropTypes.number,
    }).isRequired,
};

export default CategoryCard;