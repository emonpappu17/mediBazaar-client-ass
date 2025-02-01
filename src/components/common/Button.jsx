import PropTypes from "prop-types";
const Button = ({ text = 'button', className = '', type = "button", disabled = false }) => {
    return (
        <button disabled={disabled} type={type} className={` nunito-font text-[16px] font-bold text-white bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer ${className}`}>
            {text}
        </button>
    );
};

// Define PropTypes for type safety
Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,

};

export default Button;