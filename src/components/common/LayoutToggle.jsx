import PropTypes from 'prop-types';
import { FaList, FaThLarge } from 'react-icons/fa';

const LayoutToggle = ({ layout, setLayout }) => {
    return (
        <div className="flex justify-end mb-6">
            <button
                onClick={() => setLayout("grid")}
                className={`btn btn-sm mr-2 ${layout === "grid" ? "btn-primary bg-[#0D6FEC] border-0" : ""}`}
            >
                <FaThLarge className="text-lg" /> Grid
            </button>
            <button
                onClick={() => setLayout("list")}
                className={`btn btn-sm ${layout === "list" ? "btn-primary bg-[#0D6FEC] border-0" : ""}`}
            >
                <FaList className="text-lg" /> List
            </button>
        </div>
    );
};

// Prop Validation
LayoutToggle.propTypes = {
    layout: PropTypes.oneOf(["grid", "list"]).isRequired,
    setLayout: PropTypes.func.isRequired,
};

export default LayoutToggle;