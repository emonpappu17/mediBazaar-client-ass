import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ search, setSearch, roleFilter, setRoleFilter }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search Bar */}
            <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search users..."
                    className="input input-bordered pl-10 w-full"
                />
            </div>

            {/* Role Filter */}
            <select
                className="select select-bordered w-full md:w-1/4"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
            >
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Seller">Seller</option>
                <option value="User">User</option>
            </select>
        </div>
    );
};

SearchFilter.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    roleFilter: PropTypes.string.isRequired,
    setRoleFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
