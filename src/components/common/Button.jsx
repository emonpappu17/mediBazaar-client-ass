import PropTypes from "prop-types";
const Button = ({ text = 'button' }) => {
    return (
        // <button className="p-4  rounded-3xl bg-[#0D6FEC] hover:bg-[#35C7DF]">
        //     {text}
        // </button>

        <button className="md:px-4 text-white px-3 py-2 nunito-font text-[16px] font-bold rounded-3xl bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">
            {text}
        </button>
    );
};

// Define PropTypes for type safety
Button.propTypes = {
    text: PropTypes.string.isRequired,

};

export default Button;