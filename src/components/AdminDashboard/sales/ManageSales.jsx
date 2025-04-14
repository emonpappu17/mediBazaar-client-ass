// import { format } from "date-fns";
// import { useAllPayment } from "../../../services/paymentService";
// import { FaCalendarAlt, FaChartLine, FaCheckCircle, FaClock, FaFilter, FaMoneyBillWave, FaSearch } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";
// import ExportBtns from "./ExportBtns";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// const ManageSales = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [statusFilter, setStatusFilter] = useState("");
//     const [tableEl, setTableEl] = useState(null);

//     //For Excel
//     const tableRef = useRef(null);

//     // Date range state
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
//     const onChange = (dates) => {
//         const [start, end] = dates;
//         setStartDate(start);
//         setEndDate(end);
//     };

//     // API Calls 
//     const { data: payments = [], isLoading } = useAllPayment(startDate, endDate, searchTerm, statusFilter);

//     useEffect(() => {
//         if (tableRef.current) {
//             setTableEl(tableRef.current)
//         }
//     }, [payments]);

//     return (
//         <div className="drop-shadow-md">
//             {/* Date Range Filter */}
//             <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
//                 <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
//                 <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
//                     {/* Search */}
//                     <div className="relative w-full md:w-auto">
//                         <input
//                             type="text"
//                             placeholder="Search transactions..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="p-2 pl-8 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100"
//                         />
//                         <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
//                     </div>

//                     {/* Filter status */}
//                     <div className="relative w-full md:w-auto">
//                         <select
//                             value={statusFilter}
//                             onChange={(e) => setStatusFilter(e.target.value)}
//                             className="p-2 pl-8 pr-2 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100 "
//                         >
//                             <option value="">All Statuses</option>
//                             <option value="Pending">Pending</option>
//                             <option value="Paid">Paid</option>
//                         </select>
//                         <FaFilter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
//                     </div>

//                     {/* Date range */}
//                     <div className="relative">
//                         <DatePicker
//                             onChange={onChange}
//                             startDate={startDate}
//                             endDate={endDate}
//                             selectsRange
//                             isClearable={true}
//                             dateFormat="MMM d, yyyy"
//                             placeholderText="Select date range"
//                             className="p-2 pl-8 w-[215px] rounded border-none outline-base-content focus:outline-1 text-[13px] bg-base-100"
//                         />
//                         <FaCalendarAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
//                     </div>
//                 </div>
//             </div>

//             {/* Summary and Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 {/* Total Revenue */}
//                 <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
//                     <div className="flex justify-between items-center">
//                         <div>
//                             <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
//                                 Total Revenue
//                             </p>
//                             <p className="text-2xl font-bold text-base-content">
//                                 ${payments.reduce((sum, p) => sum + (p.paymentStatus === 'Paid' ? p.totalAmount : 0), 0).toFixed(2)}
//                             </p>
//                         </div>
//                         <div className="bg-primary/20 p-2 rounded-full">
//                             <FaMoneyBillWave className="text-primary" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Average Order Value */}
//                 <div className="bg-info/10 rounded-lg p-4 border-l-4 border-info">
//                     <div className="flex justify-between items-center">
//                         <div>
//                             <p className="text-xs font-medium text-info uppercase tracking-wider mb-1">
//                                 Avg. Order Value
//                             </p>
//                             <p className="text-2xl font-bold text-base-content">
//                                 {payments.length > 0
//                                     ? `$${(payments.reduce((sum, p) => sum + p.totalAmount, 0) / payments.length).toFixed(2)}`
//                                     : '$0.00'}
//                             </p>
//                         </div>
//                         <div className="bg-info/20 p-2 rounded-full">
//                             <FaChartLine className="text-info" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Transaction Status */}
//                 <div className="bg-warning/10 rounded-lg p-4 border-l-4 border-warning">
//                     <div className="flex justify-between items-center">
//                         <div>
//                             <p className="text-xs font-medium text-warning uppercase tracking-wider mb-1">
//                                 Pending Payments
//                             </p>
//                             <p className="text-2xl font-bold text-base-content">
//                                 {payments.filter(p => p.paymentStatus === 'Pending').length}
//                             </p>
//                         </div>
//                         <div className="bg-warning/20 p-2 rounded-full">
//                             <FaClock className="text-warning" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Successful Transactions */}
//                 <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success">
//                     <div className="flex justify-between items-center">
//                         <div>
//                             <p className="text-xs font-medium text-success uppercase tracking-wider mb-1">
//                                 Completed Payments
//                             </p>
//                             <p className="text-2xl font-bold text-base-content">
//                                 {payments.filter(p => p.paymentStatus === 'Paid').length}
//                             </p>
//                         </div>
//                         <div className="bg-success/20 p-2 rounded-full">
//                             <FaCheckCircle className="text-success" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Table */}
//             {isLoading ?
//                 // Loader
//                 <div className=" flex justify-center items-center  h-screen">
//                     <div>
//                         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//                         <p className="mt-2 text-base-content">Loading payments...</p>
//                     </div>
//                 </div>
//                 :
//                 // If payments found
//                 payments.length === 0 ?
//                     <div className="p-6 text-center">
//                         <p className="text-base-content">No payment records found.</p>
//                     </div>
//                     :
//                     <div className="overflow-x-auto">
//                         <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
//                             <thead className="bg-base-200">
//                                 <tr className="border-b border-base-300">
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Customer</th>
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Medicines</th>
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Seller</th>
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Date</th>
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Amount</th>
//                                     <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-base-300">
//                                 {payments?.map((payment) => (
//                                     <tr key={payment._id} className="hover:bg-base-200">
//                                         {/* Customer Email */}
//                                         <td className="py-3 px-4 text-sm font-medium text-base-content">
//                                             {payment.userEmail}
//                                         </td>

//                                         {/* Transaction ID  */}
//                                         <td className="py-3 px-4 text-sm font-mono font-medium text-base-content truncate max-w-xs">
//                                             {payment.transactionId}
//                                         </td>

//                                         {/* Medicines  */}
//                                         <td className="py-3 px-4 text-sm text-base-content truncate">
//                                             {payment.items.map((medicine, index) => (
//                                                 <div key={index}>
//                                                     <span className="font-semibold">{medicine.name}</span>
//                                                     <span className="text-base-content/80"> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})</span>
//                                                 </div>
//                                             ))}
//                                         </td>

//                                         {/* Seller*/}
//                                         <td className="py-3 px-4 text-sm text-base-content truncate">
//                                             {payment.items.map((medicine, index) => (
//                                                 <div key={index}>
//                                                     <span className="font-semibold">
//                                                         {medicine.name.length >= 4 ? `${medicine.name.slice(0, 4)}...` : medicine.name}
//                                                     </span>
//                                                     <span className="text-base-content/80"> ({medicine.sellerEmail || 'Random'})</span>
//                                                 </div>
//                                             ))}
//                                         </td>

//                                         {/* Date  */}
//                                         <td className="py-3 px-4 text-sm text-base-content/80 truncate">
//                                             {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
//                                         </td>

//                                         {/* Amount  */}
//                                         <td className="py-3 px-4 text-sm font-medium text-base-content">
//                                             ${payment.totalAmount.toFixed(2)}
//                                         </td>

//                                         {/* Status badges */}
//                                         <td className="py-3 px-4">
//                                             {payment.paymentStatus === 'Pending' ? (
//                                                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
//                                                     <FaClock className="mr-1 text-amber-500" /> Pending
//                                                 </span>
//                                             ) : (
//                                                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                                                     <FaCheckCircle className="mr-1 text-green-500" /> Paid
//                                                 </span>
//                                             )}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//             }

//             {/* Export */}
//             <div className="flex justify-between items-center mt-4 bg-base-200 p-2 rounded-lg ">
//                 <div className="text-sm text-base-content">
//                     Showing <span className="font-semibold">{payments.length}</span> transactions
//                     {startDate && endDate && (
//                         <span> between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}</span>
//                     )}
//                 </div>
//                 <ExportBtns
//                     isLoading={isLoading}
//                     tableRef={tableEl}
//                     payments={payments}
//                 />
//             </div>
//         </div>
//     );
// };

// export default ManageSales;

// ================================


import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaCalendarAlt, FaChartLine, FaCheckCircle, FaClock, FaFilter, FaMoneyBillWave, FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ExportBtns from "./ExportBtns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableSkeleton from "../../common/TableSkeleton";

const ManageSales = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [tableEl, setTableEl] = useState(null);
    const tableRef = useRef(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const { data: payments = [], isError } = useAllPayment(
        startDate,
        endDate,
        searchTerm,
        statusFilter
    );
    //testing
    const isLoading = true
    // const isError = true

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    useEffect(() => {
        if (tableRef.current) {
            setTableEl(tableRef.current);
        }
    }, [payments]);

    // Calculate stats for the summary cards
    const totalRevenue = payments.reduce((sum, p) => sum + (p.paymentStatus === 'Paid' ? p.totalAmount : 0), 0);
    const avgOrderValue = payments.length > 0 ? totalRevenue / payments.length : 0;
    const pendingCount = payments.filter(p => p.paymentStatus === 'Pending').length;
    const paidCount = payments.filter(p => p.paymentStatus === 'Paid').length;

    // Loading skeleton for stats cards
    const renderLoadingStats = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-base-200 rounded-lg p-4 h-[88px] animate-pulse"></div>
            ))}
        </div>
    );

    // Loading skeleton for table rows
    // const renderLoadingTable = () => (
    //     <div className="space-y-4">
    //         <div className="h-12 bg-base-200 rounded animate-pulse"></div>
    //         {[...Array(5)].map((_, i) => (
    //             <div key={i} className="h-16 bg-base-200 rounded animate-pulse"></div>
    //         ))}
    //     </div>
    // );

    return (
        <div className="drop-shadow-md">
            {/* Header and Filters */}
            <div className="md:flex justify-between items-center mb-6 bg-base-200 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-base-content">Sales Management</h2>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 pl-8 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100"
                            disabled={isLoading}
                        />
                        <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

                    <div className="relative w-full md:w-auto">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="p-2 pl-8 pr-2 rounded border-none outline-base-content focus:outline-1 text-[13px] w-full bg-base-100"
                            disabled={isLoading}
                        >
                            <option value="">All Statuses</option>
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                        </select>
                        <FaFilter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>

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
                            disabled={isLoading}
                        />
                        <FaCalendarAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-base-content/70" />
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            {isLoading ? (
                renderLoadingStats()
            ) : isError ? (
                <div className="bg-error/10 text-error p-4 rounded-lg mb-6">
                    Failed to load statistics
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard
                        title="Total Revenue"
                        value={`$${totalRevenue.toFixed(2)}`}
                        icon={<FaMoneyBillWave className="text-primary" />}
                        color="primary"
                    />
                    <StatCard
                        title="Avg. Order Value"
                        value={`$${avgOrderValue.toFixed(2)}`}
                        icon={<FaChartLine className="text-info" />}
                        color="info"
                    />
                    <StatCard
                        title="Pending Payments"
                        value={pendingCount}
                        icon={<FaClock className="text-warning" />}
                        color="warning"
                    />
                    <StatCard
                        title="Completed Payments"
                        value={paidCount}
                        icon={<FaCheckCircle className="text-success" />}
                        color="success"
                    />
                </div>
            )}

            {/* Main Content */}
            {isLoading ? (
                // renderLoadingTable()
                <TableSkeleton></TableSkeleton>
            ) : isError ? (
                <div className="bg-error/10 text-error p-6 rounded-lg text-center">
                    Failed to load payment data. Please try again.
                </div>
            ) : payments.length === 0 ? (
                <div className="bg-base-200 p-6 rounded-lg text-center">
                    <p className="text-base-content">No payment records found.</p>
                    {startDate && endDate && (
                        <p className="text-sm text-base-content/70 mt-1">
                            Between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}
                        </p>
                    )}
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
                            {/* Table headers and rows */}

                            <thead className="bg-base-200">
                                <tr className="border-b border-base-300">
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
                    <div className="flex justify-between items-center mt-4 bg-base-200 p-2 rounded-lg">
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
                </>
            )}
        </div>
    );
};

// StatCard component for reusable stats cards
const StatCard = ({ title, value, icon, color }) => (
    <div className={`bg-${color}/10 rounded-lg p-4 border-l-4 border-${color}`}>
        <div className="flex justify-between items-center">
            <div>
                <p className={`text-xs font-medium text-${color} uppercase tracking-wider mb-1`}>
                    {title}
                </p>
                <p className="text-2xl font-bold text-base-content">
                    {value}
                </p>
            </div>
            <div className={`bg-${color}/20 p-2 rounded-full`}>
                {icon}
            </div>
        </div>
    </div>
);

export default ManageSales;

