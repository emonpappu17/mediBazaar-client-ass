import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaCalendarAlt, FaCheckCircle, FaClock, FaFilter, FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import ExportBtns from "./ExportBtns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ManageSales = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

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
    const { data: payments = [] } = useAllPayment(startDate, endDate);

    // Calculate stats
    const totalSales = payments.reduce((sum, payment) => sum + payment.totalAmount, 0);
    const paidCount = payments.filter(p => p.paymentStatus === 'Paid').length;
    const pendingCount = payments.filter(p => p.paymentStatus === 'Pending').length;

    return (
        //lg:mx-16
        <div className="drop-shadow-md">
            {/* Date Range Filter */}
            {/* <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 w-50 rounded border-2 border-base-300 outline-base-content focus:outline-1 text-[13px]"
                        />
                    </div>
                </div>
            </div> */}

            {/* gpt */}
            {/* <div className="grid md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg gap-4">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search by email or transaction ID"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input input-bordered input-sm w-64 text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <select
                            className="select select-bordered select-sm text-sm"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="">All Status</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 w-50 rounded border-2 border-base-300 outline-base-content focus:outline-1 text-[13px]"
                        />
                    </div>
                </div>
            </div> */}

            {/* Seek */}
            {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>

                <div className="flex flex-col w-full md:w-auto gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search transactions (email, ID, medicine...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-64 p-2 pl-10 border border-base-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                        />
                        <svg
                            className="absolute left-3 top-2.5 h-5 w-5 text-base-content/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center bg-base-100 px-3 py-1.5 rounded-lg border border-base-300">
                            <FaCalendarAlt className="mr-2 text-base-content/50" />
                            <DatePicker
                                onChange={onChange}
                                startDate={startDate}
                                endDate={endDate}
                                selectsRange
                                isClearable
                                placeholderText="Date Range"
                                className="text-sm bg-transparent outline-none w-40"
                            />
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="bg-base-100 border border-base-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            <option value="all">All Statuses</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                        </select>

                        <select
                            value={amountFilter}
                            onChange={(e) => setAmountFilter(e.target.value)}
                            className="bg-base-100 border border-base-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            <option value="all">Any Amount</option>
                            <option value="0-50">$0 - $50</option>
                            <option value="50-100">$50 - $100</option>
                            <option value="100+">$100+</option>
                        </select>

                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setStartDate(null);
                                setEndDate(null);
                                setStatusFilter("all");
                                setAmountFilter("all");
                            }}
                            className="bg-base-100 border border-base-300 rounded-lg px-3 py-1.5 text-sm hover:bg-base-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div> */}

            {/* grok */}
            {/* <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg ">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 w-50 rounded border-2 border-base-300 outline-base-content focus:outline-1 text-[13px] bg-base-100"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 rounded border-2 border-base-300 outline-base-content focus:outline-1 text-[13px] w-full md:w-auto bg-base-100"
                    />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="p-2 rounded border-2 border-base-300 outline-base-content focus:outline-1 text-[13px] w-full md:w-auto bg-base-100"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                    </select>
                </div>
            </div> */}
            {/* grok 2 */}
            <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    {/* <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 w-50 rounded border-none outline-base-content focus:outline-1 text-[13px] bg-base-100"
                        />
                    </div> */}
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
                    {/* <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="p-2 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full md:w-auto bg-base-100 flex items-center"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                    </select> */}

                    <div className="relative w-full md:w-auto">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="p-2 pl-8 pr-2 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                        </select>
                        <FaFilter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

                    {/* <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 w-50 rounded border-none outline-base-content focus:outline-1 text-[13px] bg-base-100"
                        />
                    </div> */}

                    {/* <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-base-content/70" />
                        <span className="text-sm font-medium text-base-content">Filter by Date:</span>
                    </div> */}
                    <div className="relative w-full md:w-auto">
                        <DatePicker
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable={true}
                            dateFormat="MMM d, yyyy"
                            placeholderText="Select date range"
                            className="p-2 pl-8 pr-2 rounded border-none outline-base-content focus:outline-1 text-[13px] bg-base-100 w-full"
                        />
                        <FaCalendarAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
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
                                    {/* <div className="flex flex-col">
                                    <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
                                    <span className="text-sm text-base-content/70">{payment.userEmail}</span>
                                </div> */}
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
            </div>

            {/* Stat */}
            <div className="grid grid-cols-3 gap-4 my-4">
                <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-base-content/70">Total Sales</h3>
                    <p className="text-xl font-bold">${totalSales.toFixed(2)}</p>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-base-content/70">Paid</h3>
                    <p className="text-xl font-bold text-green-600">{paidCount}</p>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-base-content/70">Pending</h3>
                    <p className="text-xl font-bold text-amber-600">{pendingCount}</p>
                </div>
            </div>

            {/* Summary and Export */}
            <div className="flex justify-between items-center mt-4 bg-base-200 p-2 rounded-lg ">
                <div className="text-sm text-base-content">
                    Showing <span className="font-semibold">{payments.length}</span> transactions
                    {startDate && endDate && (
                        <span> between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}</span>
                    )}
                </div>
                <ExportBtns
                    tableRef={tableRef.current}
                    payments={payments}
                />
            </div>
        </div>
    );
};

export default ManageSales;

//==========================================

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