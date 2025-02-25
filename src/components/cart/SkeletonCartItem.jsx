
const SkeletonCartItem = () => {
    return (
        <div className="flex items-center gap-4 p-4 border-b border-base-300 animate-pulse">
            {/* Image Placeholder */}
            <div className="size-24 bg-gray-300 rounded"></div>

            {/* Text Content Placeholder */}
            <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
                <div className="h-3 bg-gray-300 w-1/2 rounded"></div>
                <div className="h-4 bg-gray-300 w-1/3 rounded"></div>

                {/* Quantity Placeholder */}
                <div className="flex gap-2 mt-2">
                    <div className="h-8 w-8 bg-gray-300 rounded"></div>
                    <div className="h-8 w-8 bg-gray-300 rounded"></div>
                    <div className="h-8 w-8 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Delete Button Placeholder */}
            <div className="size-10 bg-gray-300 rounded-full"></div>
        </div>
    );
};

export default SkeletonCartItem;
