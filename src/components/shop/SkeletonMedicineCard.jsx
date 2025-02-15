import PropTypes from 'prop-types';

const SkeletonMedicineCard = ({ layout }) => {

    return (
        <div className={`bg-base-100 p-4 rounded-lg shadow-lg animate-pulse ${layout === "list" ? "flex items-center gap-4" : ""}`}>
            <div className={layout === "grid" ? "w-full h-48 bg-gray-300 rounded-lg" : "md:size-40 size-32 bg-gray-300 rounded-lg"}></div>
            <div className={layout === "list" ? "flex-1 space-y-3" : "text-center mt-2 space-y-3"}>
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto"></div>
                <div className="flex gap-2 mt-3">
                    <div className="h-10 bg-gray-300 rounded w-full"></div>
                    <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
            </div>
        </div>
    );
};

SkeletonMedicineCard.propTypes = {
    layout: PropTypes.oneOf(["grid", "list"]).isRequired,
};

export default SkeletonMedicineCard;
