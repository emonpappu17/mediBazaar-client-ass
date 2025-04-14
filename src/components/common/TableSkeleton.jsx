
const TableSkeleton = () => {
    return (
        <div className="space-y-4">
            <div className="h-12 bg-base-200 rounded animate-pulse"></div>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-base-200 rounded animate-pulse"></div>
            ))}
        </div>
    );
};

export default TableSkeleton;