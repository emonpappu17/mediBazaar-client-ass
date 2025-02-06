

const SkeletonCategoryCard = () => {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-200 animate-pulse">
            {/* Skeleton Image */}
            <div className="w-full h-56 bg-gray-300"></div>

            {/* Skeleton Content */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                {/* Skeleton Icon */}
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>

                {/* Skeleton Text */}
                <div>
                    <div className="w-24 h-6 bg-gray-400 rounded"></div>
                    <div className="w-32 h-4 bg-gray-300 mt-2 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCategoryCard;

