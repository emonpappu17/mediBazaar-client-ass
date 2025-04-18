import PropTypes from "prop-types";

const StatCard = ({ title, value, icon, color }) => {
    // console.log(color);


    return (
        <div className={`bg-${color}/10 rounded-lg p-4 border-l-4  border-${color} shadow-sm`}>
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

StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
};

export default StatCard;