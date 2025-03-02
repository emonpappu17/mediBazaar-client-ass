const SkeletonDiscountCard = () => {
    return (
        <div className="rounded-xl overflow-hidden drop-shadow-md bg-gray-200 animate-pulse m-3">
            <div className="relative">
                {/* Skeleton Image */}
                <div className="w-full h-48 bg-gray-300"></div>

                {/* Skeleton Discount Badge */}
                <div className="absolute top-3 right-3 w-16 h-6 bg-gray-400 rounded"></div>
            </div>

            <div className="p-5">
                {/* Skeleton Medicine Name */}
                <div className="h-6 w-3/4 bg-gray-400 rounded"></div>

                {/* Skeleton Price */}
                <div className="flex items-center gap-3 mt-3">
                    <div className="h-6 w-16 bg-gray-400 rounded"></div>
                    <div className="h-5 w-12 bg-gray-300 rounded"></div>
                </div>

                {/* Skeleton Savings */}
                <div className="h-4 w-1/2 bg-gray-300 mt-2 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonDiscountCard;
