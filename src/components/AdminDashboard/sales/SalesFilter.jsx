import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { FaCalendarAlt, FaFilter, FaSearch } from "react-icons/fa";

const SalesFilter = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, isLoading, onChange, startDate, endDate }) => {
    return (
        <div className="mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Title */}
                <div>
                    <h1 className="text-xl font-bold text-base-content">Manage Sales Report</h1>
                    <p className="text-sm text-base-content/70">
                        Track and manage all sales report
                    </p>
                </div>

                {/* Filters Section */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative flex-1 min-w-[200px]">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 pl-8 rounded border-none w-full bg-base-200 text-sm outline-base-content focus:outline-1"
                        />
                        <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

                    <div className="relative flex-1 min-w-[180px]">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="p-2 pl-8 pr-2 rounded border-none w-full bg-base-200 text-sm outline-base-content focus:outline-1"
                            disabled={isLoading}
                        >
                            <option value="">All Statuses</option>
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                        </select>
                        <FaFilter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

                    <div className="relative w-full [&>.react-datepicker-wrapper]:w-full min-w-[215px]">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Date range"
                            className="p-2 pl-8 w-full rounded border-none outline-base-content focus:outline-1 text-[13px] bg-base-200"
                            disabled={isLoading}
                        />
                        <FaCalendarAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>
                </div>
            </div>
        </div>
    );
};

SalesFilter.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    statusFilter: PropTypes.string.isRequired,
    setStatusFilter: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  };

export default SalesFilter;