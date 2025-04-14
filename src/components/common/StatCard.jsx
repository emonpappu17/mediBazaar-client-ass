
const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className={`bg-${color}/10 rounded-lg p-4 border-l-4 border-${color} shadow-sm`}>
            <div className="flex justify-between items-center">
                <div>
                    <p className={`text-xs font-medium text-${color} uppercase tracking-wider mb-1`}>
                        {title}
                    </p>
                    <p className="text-2xl font-bold text-base-content">
                        {value}
                    </p>
                </div>
                <div className={`bg-${color}/20 p-2 rounded-full`}>
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatCard;