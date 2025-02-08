const SkeletonDiscountCard = () => {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-200 animate-pulse p-4">
            {/* Skeleton Image */}
            <div className="w-full h-[375px] bg-gray-300 rounded-lg"></div>

            {/* Skeleton Discount Badge */}
            <div className="absolute top-3 left-3 w-12 h-6 bg-gray-400 rounded"></div>

            {/* Skeleton Text */}
            <div className="my-4 text-center">
                <div className="w-32 h-6 bg-gray-400 mx-auto rounded"></div>
                <div className="w-24 h-4 bg-gray-300 mx-auto mt-2 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonDiscountCard;
