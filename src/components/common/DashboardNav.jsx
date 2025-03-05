import PropTypes from "prop-types";
import { NavLink } from "react-router";

const DashboardNav = ({ label, address, icon: Icon }) => {
    return (
        <div>
            <NavLink
                to={address}
                end
                className={({ isActive }) =>
                    isActive
                        ? "text-white p-2 rounded-[10px] bg-[#0D6FEC] flex items-center gap-2 " // Active 
                        : "text-base-content hover:text-white p-2 rounded-[10px] hover:bg-[#0D6FEC]  flex items-center gap-2 transition-all duration-300" // Inactive 
                }
            >
                {Icon}{label}
            </NavLink>
        </div>
    );
};

DashboardNav.propTypes = {
    label: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.elementType,
}

export default DashboardNav;