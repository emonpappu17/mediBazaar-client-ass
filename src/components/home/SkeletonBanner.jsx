const SkeletonBanner = () => {
    return (
        <div className="container mx-auto h-[400px] md:h-[500px]  relative  w-full  overflow-hidden rounded-4xl bg-gray-300 animate-pulse">
            {/* Skeleton Content */}
            <div className="absolute inset-0 flex items-center px-15 md:pl-28">
                <div className="max-w-[400px] space-y-3">
                    <div className="h-8 md:h-12 w-3/4 bg-gray-400 rounded"></div>
                    <div className="h-4 w-full bg-gray-400 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-400 rounded"></div>
                    <div className="h-10 w-32 bg-gray-400 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonBanner;
