import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center mt-8 space-x-2 border">
            <button
                className={`btn btn-outline px-4 py-2 flex items-center ${currentPage === 1 ? "btn-disabled" : ""}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaChevronLeft className="mr-1" /> Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={`btn px-4 py-2 ${currentPage === index + 1 ? "btn-primary" : "btn-outline"}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button
                className={`btn btn-outline px-4 py-2 flex items-center ${currentPage === totalPages ? "btn-disabled" : ""}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next <FaChevronRight className="ml-1" />
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;