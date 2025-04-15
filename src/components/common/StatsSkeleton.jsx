
const StatsSkeleton = ({ count = 4 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-6 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="bg-base-200 rounded-lg p-4 h-[88px] animate-pulse"></div>
            ))}
        </div>
    );
};

export default StatsSkeleton;