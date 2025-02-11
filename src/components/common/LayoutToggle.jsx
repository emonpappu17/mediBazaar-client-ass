import React from 'react';
import { FaTh, FaList, FaThLarge } from 'react-icons/fa';

const LayoutToggle = ({ layout, setLayout }) => {
    return (
        <div className="flex justify-end mb-6">
            <button
                onClick={() => setLayout("grid")}
                className={`btn btn-sm mr-2 ${layout === "grid" ? "btn-primary" : "btn-outline"}`}
            >
                <FaThLarge className="text-lg" /> Grid
            </button>
            <button
                onClick={() => setLayout("list")}
                className={`btn btn-sm ${layout === "list" ? "btn-primary" : "btn-outline"}`}
            >
                <FaList className="text-lg" /> List
            </button>
        </div>
    );
};

export default LayoutToggle;