import PropTypes from "prop-types";
import { NavLink } from "react-router";

const DashboardNav = ({ label, address, icon: Icon }) => {
    return (
        <div>
            <NavLink
                to={address}
                end
                // className="flex items-center gap-2 p-3 hover:bg-primary rounded-md"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0D6FEC] border-b-[#0D6FEC] border-b flex items-center" // Active state
                        : "text-base-content hover:text-[#0D6FEC] border-b-transparent hover:border-b-[#0D6FEC] flex items-center" // Inactive state
                }
            >
                {Icon}{label}
            </NavLink>

            {/* <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0D6FEC] border-b-[#0D6FEC] border-b" // Active state
                        : "text-base-content hover:text-[#0D6FEC] border-b-transparent hover:border-b-[#0D6FEC]" // Inactive state
                }
            >
                Home
            </NavLink> */}
        </div>
    );
};

DashboardNav.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.elementType,
}

export default DashboardNav;