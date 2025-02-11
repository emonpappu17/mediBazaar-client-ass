import PropTypes from "prop-types";
import { TbFidgetSpinner } from "react-icons/tb";

const Button = ({ text = '', onclick, className = '', type = "button", disabled = false, spinner = false, icon: Icon, doubleBtn = false, hoverIcon: HoverIcon }) => {
    return (
        <button
            onClick={onclick}
            disabled={disabled}
            type={type}
            className={`nunito-font text-[16px] font-bold text-white ${doubleBtn ? 'bg-[#35C7DF] hover:bg-[#0D6FEC]' : 'bg-[#0D6FEC] hover:bg-[#35C7DF]'}  transition-all duration-500 cursor-pointer overflow-hidden ${className}`}
        >
            {spinner ? <TbFidgetSpinner className='animate-spin m-auto' />
                : (
                    <>
                        {HoverIcon &&
                            <>
                                <span className="absolute left-1/2 -translate-x-1/2 group-hover:-translate-y-12 -translate-y-1/2 transition-all duration-500 ">
                                    {text}
                                </span>
                                <HoverIcon className="absolute left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 translate-y-10 transition-all duration-500 text-2xl" />
                            </>}
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