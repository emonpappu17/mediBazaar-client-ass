import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

const Button = ({ text = '', onclick, className = '', type = "button", disabled = false, spinner = false, icon: Icon, doubleBtn = false, hoverIcon: HoverIcon }) => {
    return (
        <button
            onClick={onclick}
            disabled={disabled}
            type={type}
            className={` nunito-font text-[16px] font-bold text-white ${doubleBtn ? 'bg-[#35C7DF] hover:bg-[#0D6FEC]' : 'bg-[#0D6FEC] hover:bg-[#35C7DF]'}  transition-all duration-500 cursor-pointer ${className}`}
        >
            {spinner ? <TbFidgetSpinner className='animate-spin m-auto' />
                : (
                    <>
                        {HoverIcon && <FaSearch className="border "></FaSearch>}
                        {Icon && <Icon className={`${text && 'mr-2'}`} />}
                        {!HoverIcon && text}
                    </>
                )}
        </button>
    );
};

// Define PropTypes for type safety
Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    spinner: PropTypes.bool,
    onclick: PropTypes.func,
    doubleBtn: PropTypes.bool,
    icon: PropTypes.elementType,
    hoverIcon: PropTypes.elementType,

};

export default Button;