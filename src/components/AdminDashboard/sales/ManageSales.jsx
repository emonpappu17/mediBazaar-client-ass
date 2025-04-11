// import { format } from "date-fns";
// import { useAllPayment } from "../../../services/paymentService";
// import { FaCheckCircle, FaClock } from "react-icons/fa";
// import { useRef, useState } from "react";

// import ExportBtns from "./ExportBtns";

// const ManageSales = () => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     console.log(startDate, endDate);

//     //For Excel
//     const tableRef = useRef(null);

//     // API Calls 
//     const { data: payments = [] } = useAllPayment();

//     return (
//         //lg:mx-16
//         <div className="overflow-x-auto drop-shadow-md">
//             <div className="flex flex-wrap items-center gap-4 mb-4">
//                 <div>
//                     <label className="block text-sm font-medium mb-1 text-base-content">Start Date</label>
//                     <input
//                         type="date"
//                         className="border border-base-300 rounded-lg px-3 py-2"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium mb-1 text-base-content">End Date</label>
//                     <input
//                         type="date"
//                         className="border border-base-300 rounded-lg px-3 py-2"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                     />
//                 </div>
//             </div>

//             <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
//                 <thead className="bg-base-200">
//                     <tr className="border-b border-base-300">
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Customer</th>
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Medicines</th>
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Seller</th>
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Date</th>
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Amount</th>
//                         <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Status</th>
//                     </tr>
//                 </thead>
//                 <tbody className="divide-y divide-base-300">
//                     {payments?.map((payment) => (
//                         <tr key={payment._id} className="hover:bg-base-200">
//                             <td className="py-3 px-4">
//                                 {/* <div className="flex flex-col">
//                                     <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
//                                     <span className="text-sm text-base-content/70">{payment.userEmail}</span>
//                                 </div> */}
//                                 <span className="font-medium text-base-content">{payment.userEmail}</span>
//                             </td>
//                             <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">{payment.transactionId}</td>
//                             <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">
//                                 {payment.items.map((medicine, index) => (
//                                     <div key={index} className="text-sm">
//                                         <span className="font-semibold">{medicine.name}</span> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})
//                                     </div>
//                                 ))}
//                             </td>
//                             <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">
//                                 {payment.items.map((medicine, index) => (
//                                     <div key={index} className="text-sm">
//                                         <span className="font-semibold">{medicine.name.length >= 4 ? medicine.name.slice(0, 4) + '...' : medicine.name}</span>
//                                         ({medicine.sellerEmail || 'Random'})
//                                     </div>
//                                 ))}
//                             </td>
//                             <td className="py-3 px-4 text-sm text-base-content/80">
//                                 {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
//                             </td>
//                             <td className="py-3 px-4 font-medium text-base-content">${payment.totalAmount.toFixed(2)}</td>
//                             <td className="py-3 px-4">
//                                 {payment.paymentStatus === 'Pending' ? (
//                                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
//                                         <FaClock className="mr-1 text-amber-500" /> Pending
//                                     </span>
//                                 ) : (
//                                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                                         <FaCheckCircle className="mr-1 text-green-500" /> Paid
//                                     </span>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Export Buttons */}
//             <div className="flex justify-end  py-3 pr-1">
//                 <ExportBtns
//                     tableRef={tableRef.current}
//                     payments={payments} />
//             </div>
//         </div>
//     );
// };

// export default ManageSales;

//==========================================

import { format, subDays } from "date-fns";
import { useState } from "react";
import { useAllPayment } from "../../../services/paymentService";
import { FaCheckCircle, FaClock, FaCalendarAlt } from "react-icons/fa";
import { useRef } from "react";
import ExportBtns from "./ExportBtns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ManageSales = () => {
    const tableRef = useRef(null);


    // Date range state
    const [dateRange, setDateRange] = useState([
        subDays(new Date(), 30), // Default: last 30 days
        new Date()
    ]);
    const [startDate, endDate] = dateRange;
    // console.log(startDate, endDate);

    // API Calls
    const { data: payments = [] } = useAllPayment(startDate, endDate);

    // Filter payments by date range
    // const payments = allPayments.filter(payment => {
    //     const paymentDate = new Date(payment.createdAt);
    //     console.log('paymentDate', paymentDate);

    //     return paymentDate >= startDate && paymentDate <= endDate;
    // });
    console.log('payments', payments);


    return (
        <div className="overflow-x-auto drop-shadow-md lg:mx-16">
            {/* Date Range Filter */}
            <div className="flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            isClearable={true}
                            // inline
                            placeholderText="Select date range"
                            className="input input-bordered input-sm w-48"
                            dateFormat="MMM d, yyyy"
                        />
                        {startDate && endDate && (
                            <button
                                onClick={() => setDateRange([null, null])}
                                className="btn btn-ghost btn-sm text-error"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
                <thead className="bg-base-200">
                    <tr className="border-b border-base-300">
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Customer</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Medicines</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Seller</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Date</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Amount</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-base-300">
                    {payments?.map((payment) => (
                        <tr key={payment._id} className="hover:bg-base-200">
                            <td className="py-3 px-4">
                                <span className="font-medium text-base-content">{payment.userEmail}</span>
                            </td>
                            <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">{payment.transactionId}</td>
                            <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">
                                {payment.items.map((medicine, index) => (
                                    <div key={index} className="text-sm">
                                        <span className="font-semibold">{medicine.name}</span> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})
                                    </div>
                                ))}
                            </td>
                            <td className="py-3 px-4 text-sm text-base-content font-medium font-mono truncate max-w-xs">
                                {payment.items.map((medicine, index) => (
                                    <div key={index} className="text-sm">
                                        <span className="font-semibold">{medicine.name.length >= 4 ? medicine.name.slice(0, 4) + '...' : medicine.name}</span>
                                        ({medicine.sellerEmail || 'Random'})
                                    </div>
                                ))}
                            </td>
                            <td className="py-3 px-4 text-sm text-base-content/80">
                                {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
                            </td>
                            <td className="py-3 px-4 font-medium text-base-content">${payment.totalAmount.toFixed(2)}</td>
                            <td className="py-3 px-4">
                                {payment.paymentStatus === 'Pending' ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                        <FaClock className="mr-1 text-amber-500" /> Pending
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        <FaCheckCircle className="mr-1 text-green-500" /> Paid
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Summary and Export */}
            <div className="flex justify-between items-center mt-4 bg-base-200 p-3 rounded-lg">
                <div className="text-sm text-base-content">
                    Showing <span className="font-semibold">{payments.length}</span> transactions
                    {startDate && endDate && (
                        <span> between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}</span>
                    )}
                </div>
                <div className="flex justify-end py-3 pr-1">
                    <ExportBtns
                        tableRef={tableRef.current}
                        payments={payments}
                        dateRange={dateRange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ManageSales;