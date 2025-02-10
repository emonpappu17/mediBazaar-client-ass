import React from 'react';
import { FaTh, FaList } from 'react-icons/fa';

const LayoutToggle = ({ layout, setLayout }) => {
    return (
        // <div className="flex justify-end mb-4">
        //     <button
        //         onClick={() => setLayout('grid')}
        //         className={`btn btn-ghost ${layout === 'grid' ? 'btn-active' : ''}`}
        //     >
        //         <FaTh />
        //     </button>
        //     <button
        //         onClick={() => setLayout('list')}
        //         className={`btn btn-ghost ${layout === 'list' ? 'btn-active' : ''}`}
        //     >
        //         <FaList />
        //     </button>
        // </div>


        <div className="flex justify-center mb-6">
            <div className="btn-group">
                <button
                    onClick={() => setLayout('grid')}
                    className={`btn btn-outline ${layout === 'grid' ? 'btn-active' : ''}`}
                >
                    <FaTh className="mr-2" /> Grid
                </button>
                <button
                    onClick={() => setLayout('list')}
                    className={`btn btn-outline ${layout === 'list' ? 'btn-active' : ''}`}
                >
                    <FaList className="mr-2" /> List
                </button>
            </div>
        </div>
    );
};

export default LayoutToggle;