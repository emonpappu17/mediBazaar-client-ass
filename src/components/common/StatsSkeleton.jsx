
const StatsSkeleton = ({ count = 4 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 border">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="bg-base-200 rounded-lg p-4 h-[88px] animate-pulse"></div>
            ))}
        </div>
    );
};

export default StatsSkeleton;