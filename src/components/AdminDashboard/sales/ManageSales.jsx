import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaCalendarAlt, FaCheckCircle, FaClock, FaFilter, FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ExportBtns from "./ExportBtns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ManageSales = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [tableEl, setTableEl] = useState(null);

    //For Excel
    const tableRef = useRef(null);

    // Date range state
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // API Calls 
    const { data: payments = [], isLoading } = useAllPayment(startDate, endDate, searchTerm, statusFilter);

    useEffect(() => {
        if (tableRef.current) {
            setTableEl(tableRef.current)
        }
    }, [payments]);

    return (
        //lg:mx-16
        <div className="drop-shadow-md">
            {/* Date Range Filter */}
            <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    {/* Search */}
                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 pl-8 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100"
                        />
                        <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

                    {/* Filter status */}
                    <div className="relative w-full md:w-auto">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="p-2 pl-8 pr-2 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100 "
                        >
                            <option value="">All Statuses</option>
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                        </select>
                        <FaFilter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

                    {/* Date range */}
                    <div className="relative">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 pl-8 w-[215px] rounded border-none outline-base-content focus:outline-1 text-[13px] bg-base-100"
                        />
                        <FaCalendarAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>
                </div>
            </div>

            {/* Table */}
            {isLoading ?
                // Loader
                <div className=" flex justify-center items-center  h-screen">
                    <div>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-2 text-base-content">Loading payments...</p>
                    </div>
                </div>
                :
                // If payments found
                payments.length === 0 ?
                    <div className="p-6 text-center">
                        <p className="text-base-content">No payment records found.</p>
                    </div>
                    :
                    <div className="overflow-x-auto">
                        <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
                            <thead className="bg-base-200">
                                <tr className="border-b border-base-300">
                                    {/* Consistent header styling */}
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Customer</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Medicines</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Seller</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Date</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Amount</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-base-300">
                                {payments?.map((payment) => (
                                    <tr key={payment._id} className="hover:bg-base-200">
                                        {/* Customer Email */}
                                        <td className="py-3 px-4 text-sm font-medium text-base-content">
                                            {payment.userEmail}
                                        </td>

                                        {/* Transaction ID  */}
                                        <td className="py-3 px-4 text-sm font-mono font-medium text-base-content truncate max-w-xs">
                                            {payment.transactionId}
                                        </td>

                                        {/* Medicines  */}
                                        <td className="py-3 px-4 text-sm text-base-content truncate">
                                            {payment.items.map((medicine, index) => (
                                                <div key={index}>
                                                    <span className="font-semibold">{medicine.name}</span>
                                                    <span className="text-base-content/80"> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})</span>
                                                </div>
                                            ))}
                                        </td>

                                        {/* Seller*/}
                                        <td className="py-3 px-4 text-sm text-base-content truncate">
                                            {payment.items.map((medicine, index) => (
                                                <div key={index}>
                                                    <span className="font-semibold">
                                                        {medicine.name.length >= 4 ? `${medicine.name.slice(0, 4)}...` : medicine.name}
                                                    </span>
                                                    <span className="text-base-content/80"> ({medicine.sellerEmail || 'Random'})</span>
                                                </div>
                                            ))}
                                        </td>

                                        {/* Date  */}
                                        <td className="py-3 px-4 text-sm text-base-content/80 truncate">
                                            {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
                                        </td>

                                        {/* Amount  */}
                                        <td className="py-3 px-4 text-sm font-medium text-base-content">
                                            ${payment.totalAmount.toFixed(2)}
                                        </td>

                                        {/* Status badges */}
                                        <td className="py-3 px-4">
                                            {payment.paymentStatus === 'Pending' ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                                                    <FaClock className="mr-1 text-amber-500" /> Pending
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                    <FaCheckCircle className="mr-1 text-green-500" /> Paid
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }


            {/* Summary and Export */}
            <div className="flex justify-between items-center mt-4 bg-base-200 p-2 rounded-lg ">
                <div className="text-sm text-base-content">
                    Showing <span className="font-semibold">{payments.length}</span> transactions
                    {startDate && endDate && (
                        <span> between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}</span>
                    )}
                </div>
                <ExportBtns
                    isLoading={isLoading}
                    tableRef={tableEl}
                    payments={payments}
                />
            </div>
        </div>
    );
};

export default ManageSales;



// import { format } from "date-fns";
// import { useState } from "react";
// import { useAllPayment } from "../../../services/paymentService";
// import { FaCheckCircle, FaClock, FaCalendarAlt } from "react-icons/fa";
// import { useRef } from "react";
// import ExportBtns from "./ExportBtns";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const ManageSales = () => {
//     const tableRef = useRef(null);

//     // Date range state
//     const [dateRange, setDateRange] = useState([
//         // subDays(new Date(), 30), // Default: last 30 days
//         // new Date()
//     ]);
//     const [startDate, endDate] = dateRange;

//     // API Calls
//     const { data: payments = [] } = useAllPayment(startDate, endDate);

//     return (
//         // overflow-x-auto
//         <div className=" drop-shadow-md lg:mx-16">
//             {/* Date Range Filter */}
//             <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
//                 <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
//                 <div className="flex items-center space-x-4">
//                     <div className="flex items-center space-x-2">
//                         <FaCalendarAlt className="text-base-content/70" />
//                         <span className="text-sm font-medium text-base-content">Filter by Date:</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <DatePicker
//                             selectsRange={true}
//                             startDate={startDate}
//                             endDate={endDate}
//                             onChange={(update) => {
//                                 setDateRange(update);
//                             }}
//                             isClearable={true}
//                             // inline
//                             placeholderText="Select date range"
//                             className="p-2 w-50 rounded border-2 border-base-300 outline-base-content focus:outline-1 text-[13px]"
//                             // className="input input-bordered input-sm w-48"
//                             dateFormat="MMM d, yyyy"
//                         />
//                         {startDate && endDate && (
//                             <button
//                                 onClick={() => setDateRange([null, null])}
//                                 className="btn btn-ghost btn-sm text-error"
//                             >
//                                 Clear
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div className="overflow-x-auto">
//                 <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
//                     <thead className="bg-base-200">
//                         <tr className="border-b border-base-300">
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Customer</th>
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Medicines</th>
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Seller</th>
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Date</th>
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Amount</th>
//                             <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-base-300">
//                         {payments?.map((payment) => (
//                             <tr key={payment._id} className="hover:bg-base-200">
//                                 <td className="py-3 px-4">
//                                     <span className="font-medium text-base-content">{payment.userEmail}</span>
//                                 </td>
//                                 <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">{payment.transactionId}</td>
//                                 <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">
//                                     {payment.items.map((medicine, index) => (
//                                         <div key={index} className="text-sm">
//                                             <span className="font-semibold">{medicine.name}</span> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})
//                                         </div>
//                                     ))}
//                                 </td>
//                                 <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">
//                                     {payment.items.map((medicine, index) => (
//                                         <div key={index} className="text-sm">
//                                             <span className="font-semibold">{medicine.name.length >= 4 ? medicine.name.slice(0, 4) + '...' : medicine.name}</span>
//                                             ({medicine.sellerEmail || 'Random'})
//                                         </div>
//                                     ))}
//                                 </td>
//                                 <td className="py-3 px-4 text-sm text-base-content/80">
//                                     {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
//                                 </td>
//                                 <td className="py-3 px-4 font-medium text-base-content">${payment.totalAmount.toFixed(2)}</td>
//                                 <td className="py-3 px-4">
//                                     {payment.paymentStatus === 'Pending' ? (
//                                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
//                                             <FaClock className="mr-1 text-amber-500" /> Pending
//                                         </span>
//                                     ) : (
//                                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                                             <FaCheckCircle className="mr-1 text-green-500" /> Paid
//                                         </span>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Summary and Export */}
//             <div className="flex justify-between items-center mt-4 bg-base-200 p-2 rounded-lg ">
//                 <div className="text-sm text-base-content">
//                     Showing <span className="font-semibold">{payments.length}</span> transactions
//                     {startDate && endDate && (
//                         <span> between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}</span>
//                     )}
//                 </div>
//                 <div className="flex justify-end ">
//                     <ExportBtns
//                         tableRef={tableRef.current}
//                         payments={payments}
//                         dateRange={dateRange}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageSales;