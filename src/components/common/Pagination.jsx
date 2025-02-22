import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        // <div className="flex items-center justify-center mt-8 space-x-2 ">
        //     <button
        //         className={`btn btn-outline px-4 py-2 flex items-center ${currentPage === 1 ? "btn-disabled" : ""}`}
        //         onClick={() => onPageChange(currentPage - 1)}
        //         disabled={currentPage === 1}
        //     >
        //         <FaChevronLeft className="mr-1" /> Prev
        //     </button>

        //     {[...Array(totalPages)].map((_, index) => (
        //         <button
        //             key={index}
        //             className={`btn px-4 py-2 ${currentPage === index + 1 ? "btn-primary" : "btn-outline"}`}
        //             onClick={() => onPageChange(index + 1)}
        //         >
        //             {index + 1}
        //         </button>
        //     ))}

        //     <button
        //         className={`btn btn-outline px-4 py-2 flex items-center ${currentPage === totalPages ? "btn-disabled" : ""}`}
        //         onClick={() => onPageChange(currentPage + 1)}

        //         // disabled={currentPage === totalPages}
        //         disabled={currentPage >= totalPages} // Prevent going beyond total pages
        //     >
        //         Next <FaChevronRight className="ml-1" />
        //     </button>
        // </div>
        <div className='flex justify-center items-center mt-8 space-x-2' >
            <button className='btn ' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <FaChevronLeft></FaChevronLeft> Prev
            </button>
            {
                [...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`btn ${currentPage === index + 1 ? 'btn-primary bg-[#0D6FEC] border-0' : ''}`}
                        onClick={() => onPageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))
            }
            <button className='btn ' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next<FaChevronRight></FaChevronRight>
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