// import { FaFileDownload, FaFilter, FaSearch } from "react-icons/fa";
// import { useSellerPayments } from "../../../services/paymentService";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaCheckCircle, FaChevronLeft, FaChevronRight, FaCircle, FaClock, FaEllipsisV, FaEye, FaFileDownload, FaFilter, FaMoneyBillWave, FaSearch, FaTrashAlt } from "react-icons/fa";
// import { TbReceipt } from "react-icons/tb";

import { FiCheckCircle, FiClock, FiDollarSign, FiDownload, FiFilter, FiSearch } from 'react-icons/fi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { TbReceipt } from 'react-icons/tb';
import { useSellerMedicines } from "../../../services/medicineService";
import { useSellerPayments } from "../../../services/paymentService";

const PaymentHistory = () => {
    // API Call
    const { data: payments = [], isLoading } = useSellerPayments();
    // const payments = []
    // const isLoading = true
    // console.log('useSellerPayments', payments);

    // Total Revenue
    const totalPaid = payments.reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    // Total Pending Revenue 
    const pendingTotal = payments.filter(payment => payment.paymentStatus === 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0)

    // Total Paid Revenue
    const paidTotal = payments.filter(payment => payment.paymentStatus !== 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0)

    return (
        // <div className="p-6 bg-base-100 shadow-xl rounded-lg">
        //     {/* Page Title */}
        //     <h2 className="text-2xl font-bold mb-4 text-primary">Payment History</h2>

        //     {/* Search & Filter Section */}
        //     <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        //         <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        //             <FaSearch className="text-gray-500" />
        //             <input
        //                 type="text"
        //                 placeholder="Search Transaction ID..."
        //                 className="ml-2 outline-none"
        //                 value={'mango'}
        //             // onChange={(e) => setSearchQuery(e.target.value)}
        //             />
        //         </div>

        //         <div className="flex items-center gap-3">
        //             <FaFilter className="text-gray-500" />
        //             <select
        //                 className="select select-bordered"
        //                 value={'orange'}
        //             // onChange={(e) => setStatusFilter(e.target.value)}
        //             >
        //                 <option value="All">All</option>
        //                 <option value="Pending">Pending</option>
        //                 <option value="Paid">Paid</option>
        //             </select>
        //         </div>
        //     </div>

        //     {/* Table */}
        //     <div className="overflow-x-auto">
        //         <table className="table table-zebra w-full">
        //             <thead>
        //                 <tr>
        //                     <th>Transaction ID</th>
        //                     <th>Customer</th>
        //                     <th>Total Amount</th>
        //                     <th>Status</th>
        //                     <th>Date</th>
        //                     <th>Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {isLoading ? (
        //                     <tr>
        //                         <td colSpan="6" className="text-center py-4">
        //                             Loading...
        //                         </td>
        //                     </tr>
        //                 ) : (
        //                     payments.map((payment) => (
        //                         <tr key={payment.transactionId}>
        //                             <td className="text-primary font-medium">{payment.transactionId}</td>
        //                             <td>{payment.useName || 'limon'}</td>
        //                             <td className="font-semibold">${payment.totalAmount}</td>
        //                             <td>
        //                                 <span
        //                                     className={`badge ${payment.paymentStatus === "Paid"
        //                                         ? "badge-success"
        //                                         : "badge-warning"
        //                                         }`}
        //                                 >
        //                                     {payment.paymentStatus}
        //                                 </span>
        //                             </td>
        //                             <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
        //                             <td>
        //                                 <button className="btn btn-sm btn-outline btn-primary flex items-center gap-1">
        //                                     <FaFileDownload />
        //                                     Invoice
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     ))
        //                 )}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>

        <div className="drop-shadow-md lg:mx-16">
            {/* Header */}
            <div className="bg-base-100 rounded-lg drop-shadow-md p-6 mb-6">
                <h1 className="text-2xl font-bold text-base-content">Payment History</h1>
                <p className="text-base-content/70">Track and manage all your medicine sales payments</p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-primary font-medium">Total Revenue</p>
                                <p className="text-2xl font-bold text-content">${totalPaid}</p>
                            </div>
                            <div className="bg-primary/20 p-3 rounded-full">
                                <FaMoneyBillWave className="text-primary text-xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-warning/10 rounded-lg p-4 border-l-4 border-warning shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-warning font-medium">Total Pending</p>
                                <p className="text-2xl font-bold text-warning-content">${pendingTotal}</p>
                            </div>
                            <div className="bg-warning/20 p-3 rounded-full">
                                <FaClock className="text-warning text-xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-success font-medium">Total Paid</p>
                                <p className="text-2xl font-bold text-success-content">${paidTotal}</p>
                            </div>
                            <div className="bg-success/20 p-3 rounded-full">
                                <FaCheckCircle className="text-success text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading ?
                // Loader
                <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-base-content">Loading payment history...</p>
                </div>
                :
                // If payments found
                payments.length === 0 ?
                    <div className="p-6 text-center">
                        <p className="text-base-content">No payment records found.</p>
                    </div>
                    :
                    // Table
                    < div className="overflow-x-auto drop-shadow-md ">
                        <table className="min-w-full bg-base-100 rounded-lg ">
                            <thead className="bg-base-200">
                                <tr className="border-b border-base-300">
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Customer</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Date</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Amount</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Status</th>
                                    {/* <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Admin Approval</th> */}
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-base-300">
                                {payments?.map((payment) => (
                                    <tr
                                        key={payment._id}
                                        className="hover:bg-base-200">
                                        <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">{payment.transactionId}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
                                                <span className="text-sm text-base-content/70">{payment.userEmail}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-base-content/80">
                                            {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
                                        </td>
                                        <td className="py-3 px-4 font-medium">${payment.totalAmount.toFixed(2)}</td>
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
                                        <td className="py-3 px-4">
                                            <button
                                                // onClick={() => handleViewDetails(payment)}
                                                className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                            >
                                                <FaEye className="text-lg" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>}
        </div >
    );
};

export default PaymentHistory;



///======================== claude final


// const PaymentHistory = () => {
//     // Dummy data based on your MongoDB structure
//     const dummyPayments = [
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "Munna Vai",
//             userEmail: "hamza@gmail.com",
//             address: "123 Street Kalu Ganj, Bindabon, Rongpur",
//             items: [
//                 {
//                     medicineId: "67a62eddcff568772a0b0fba",
//                     name: "Antifungal Ointment",
//                     image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                     price: 7,
//                     discount: 0,
//                     finalPrice: 7,
//                     sellerEmail: "emonownmail17@gmail.com",
//                     quantity: 2
//                 },
//                 {
//                     medicineId: "67a62eddcff568772a0b0fbb",
//                     name: "Burn Relief Ointment",
//                     image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                     price: 9,
//                     discount: 10,
//                     finalPrice: 8.1,
//                     sellerEmail: "emon.pappu.5@gmail.com",
//                     quantity: 3
//                 }
//             ],
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: 1743653775955,
//             updatedAt: 1743653775955,
//             adminApproved: false,
//             sellerReceived: false
//         },
//         {
//             _id: "67e6e7934766af402fd7606b",
//             useName: "Hamza",
//             userEmail: "hamza@gmail.com",
//             address: "lkjlakjdf",
//             items: [
//                 {
//                     medicineId: "67a62eddcff568772a0b0fb2",
//                     name: "Amoxicillin",
//                     image: "https://i.ibb.co.com/whXzPLZz/Untitled-design-14.png",
//                     price: 20,
//                     discount: 10,
//                     finalPrice: 18,
//                     sellerEmail: "emonbafsd@gmail.com",
//                     quantity: 4
//                 },
//                 {
//                     medicineId: "67a62eddcff568772a0b0fb3",
//                     name: "Omeprazole",
//                     image: "https://i.ibb.co.com/yc2r4tGx/Untitled-design-13.png",
//                     price: 12,
//                     discount: 0,
//                     finalPrice: 12,
//                     sellerEmail: "emonbafsd@gmail.com",
//                     quantity: 2
//                 }
//             ],
//             totalAmount: 113,
//             transactionId: "pi_3R7hSYFSggGe9Blp1hwbwRiV",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: 1743185811964,
//             updatedAt: 1743185811964,
//             adminApproved: true,
//             sellerReceived: false
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8d",
//             useName: "Hamza",
//             userEmail: "hamza@gmail.com",
//             address: "fgadg",
//             items: [
//                 {
//                     medicineId: "67a62eddcff568772a0b0fc1",
//                     name: "Fish Oil Capsules",
//                     image: "https://i.ibb.co.com/wZW678Fh/Untitled-design-9.png",
//                     price: 18,
//                     discount: 0,
//                     finalPrice: 18,
//                     sellerEmail: "emonbafsd@gmail.com",
//                     quantity: 4
//                 }
//             ],
//             totalAmount: 72,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpXKr",
//             paymentStatus: "Paid",
//             paymentMethod: "Stripe",
//             createdAt: 1743181020010,
//             updatedAt: 1743181020010,
//             adminApproved: true,
//             sellerReceived: true
//         }
//     ];

//     const [payments, setPayments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterStatus, setFilterStatus] = useState('all');
//     const [viewDetails, setViewDetails] = useState(null);
//     const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

//     useEffect(() => {
//         // Simulate API call
//         setTimeout(() => {
//             setPayments(dummyPayments);
//             setLoading(false);
//         }, 1000);
//     }, []);

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleFilterChange = (e) => {
//         setFilterStatus(e.target.value);
//     };

//     const handleViewDetails = (payment) => {
//         setViewDetails(payment);
//     };

//     const closeDetails = () => {
//         setViewDetails(null);
//     };

//     const handleDateRangeChange = (e) => {
//         setDateRange({
//             ...dateRange,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleDownloadReport = () => {
//         // Dummy function for download button
//         alert('Report downloading...');
//     };

//     const filteredPayments = payments.filter(payment => {
//         // Filter by search term (transaction ID or customer name)
//         const searchMatch = payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             payment.useName.toLowerCase().includes(searchTerm.toLowerCase());

//         // Filter by payment status
//         let statusMatch = true;
//         if (filterStatus === 'pending') {
//             statusMatch = payment.paymentStatus === 'Pending';
//         } else if (filterStatus === 'paid') {
//             statusMatch = payment.paymentStatus === 'Paid';
//         } else if (filterStatus === 'approved') {
//             statusMatch = payment.adminApproved;
//         } else if (filterStatus === 'received') {
//             statusMatch = payment.sellerReceived;
//         }

//         // Filter by date range
//         let dateMatch = true;
//         if (dateRange.startDate && dateRange.endDate) {
//             const paymentDate = new Date(payment.createdAt);
//             const startDate = new Date(dateRange.startDate);
//             const endDate = new Date(dateRange.endDate);
//             endDate.setHours(23, 59, 59, 999); // Set to end of day

//             dateMatch = paymentDate >= startDate && paymentDate <= endDate;
//         }

//         return searchMatch && statusMatch && dateMatch;
//     });

//     // Calculate totals
//     const totalRevenue = filteredPayments.reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2);
//     const pendingRevenue = filteredPayments
//         .filter(payment => payment.paymentStatus === 'Pending')
//         .reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2);
//     const receivedRevenue = filteredPayments
//         .filter(payment => payment.sellerReceived)
//         .reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2);
//     return (
//         <div className="bg-gray-50 min-h-screen p-6">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                     <h1 className="text-2xl font-bold text-gray-800">Payment History</h1>
//                     <p className="text-gray-500">Track and manage all your medicine sales payments</p>

//                     {/* Stats Cards */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//                         <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     <p className="text-blue-800 font-medium">Total Revenue</p>
//                                     <p className="text-2xl font-bold text-blue-900">${totalRevenue}</p>
//                                 </div>
//                                 <div className="bg-blue-100 p-3 rounded-full">
//                                     <FaMoneyBillWave className="text-blue-600 text-xl" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     <p className="text-amber-800 font-medium">Pending Revenue</p>
//                                     <p className="text-2xl font-bold text-amber-900">${pendingRevenue}</p>
//                                 </div>
//                                 <div className="bg-amber-100 p-3 rounded-full">
//                                     <FaClock className="text-amber-600 text-xl" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     <p className="text-green-800 font-medium">Received Revenue</p>
//                                     <p className="text-2xl font-bold text-green-900">${receivedRevenue}</p>
//                                 </div>
//                                 <div className="bg-green-100 p-3 rounded-full">
//                                     <FaCheckCircle className="text-green-600 text-xl" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Filters and Search */}
//                 <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                     <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
//                         <div className="relative w-full lg:w-1/3">
//                             <input
//                                 type="text"
//                                 placeholder="Search by transaction ID or customer name..."
//                                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={searchTerm}
//                                 onChange={handleSearch}
//                             />
//                             <FaSearch className="absolute left-3 top-3 text-gray-400" />
//                         </div>

//                         <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
//                             <div className="flex items-center gap-2 w-full md:w-1/3">
//                                 <FaFilter className="text-gray-400" />
//                                 <select
//                                     className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     value={filterStatus}
//                                     onChange={handleFilterChange}
//                                 >
//                                     <option value="all">All Statuses</option>
//                                     <option value="pending">Pending Payments</option>
//                                     <option value="paid">Paid Payments</option>
//                                     <option value="approved">Admin Approved</option>
//                                     <option value="received">Seller Received</option>
//                                 </select>
//                             </div>

//                             <div className="flex items-center w-full md:w-1/3">
//                                 <div className="flex items-center gap-2 w-full">
//                                     <FaCalendarAlt className="text-gray-400" />
//                                     <input
//                                         type="date"
//                                         name="startDate"
//                                         className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         value={dateRange.startDate}
//                                         onChange={handleDateRangeChange}
//                                     />
//                                 </div>
//                             </div>

//                             <div className="flex items-center w-full md:w-1/3">
//                                 <div className="flex items-center gap-2 w-full">
//                                     <FaCalendarAlt className="text-gray-400" />
//                                     <input
//                                         type="date"
//                                         name="endDate"
//                                         className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         value={dateRange.endDate}
//                                         onChange={handleDateRangeChange}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <button
//                             className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors w-full md:w-auto"
//                             onClick={handleDownloadReport}
//                         >
//                             <FaFileDownload />
//                             <span>Export</span>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Payment Table */}
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                     {loading ? (
//                         <div className="p-6 text-center">
//                             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//                             <p className="mt-2 text-gray-600">Loading payment history...</p>
//                         </div>
//                     ) : filteredPayments.length === 0 ? (
//                         <div className="p-6 text-center">
//                             <p className="text-gray-600">No payment records found.</p>
//                         </div>
//                     ) : (
//                         <div className="overflow-x-auto">
//                             <table className="w-full text-left">
//                                 <thead>
//                                     <tr className="bg-gray-100">
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Transaction ID</th>
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Customer</th>
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Date</th>
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Amount</th>
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Status</th>
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Admin Approval</th>
//                                         <th className="px-6 py-3 text-gray-600 font-semibold">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="divide-y divide-gray-200">
//                                     {filteredPayments.map((payment) => (
//                                         <tr key={payment._id} className="hover:bg-gray-50">
//                                             <td className="px-6 py-4 font-mono text-sm text-gray-800 truncate max-w-xs">
//                                                 {payment.transactionId}
//                                             </td>
//                                             <td className="px-6 py-4">
//                                                 <div className="flex flex-col">
//                                                     <span className="font-medium text-gray-800">{payment.useName}</span>
//                                                     <span className="text-sm text-gray-500">{payment.userEmail}</span>
//                                                 </div>
//                                             </td>
//                                             <td className="px-6 py-4 text-gray-600">
//                                                 {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
//                                             </td>
//                                             <td className="px-6 py-4 font-medium">${payment.totalAmount.toFixed(2)}</td>
//                                             <td className="px-6 py-4">
//                                                 {payment.paymentStatus === 'Pending' ? (
//                                                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
//                                                         <FaClock className="mr-1 text-amber-500" /> Pending
//                                                     </span>
//                                                 ) : (
//                                                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                                                         <FaCheckCircle className="mr-1 text-green-500" /> Paid
//                                                     </span>
//                                                 )}
//                                             </td>
//                                             <td className="px-6 py-4">
//                                                 <div className="flex gap-1">
//                                                     {payment.adminApproved ? (
//                                                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                                                             Approved
//                                                         </span>
//                                                     ) : (
//                                                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                                                             Pending
//                                                         </span>
//                                                     )}
//                                                     {payment.sellerReceived && (
//                                                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                                                             Received
//                                                         </span>
//                                                     )}
//                                                 </div>
//                                             </td>
//                                             <td className="px-6 py-4">
//                                                 <button
//                                                     onClick={() => handleViewDetails(payment)}
//                                                     className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
//                                                 >
//                                                     <FaEye /> View
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}
//                 </div>

//                 {/* Pagination - Simplified for demo */}
//                 <div className="mt-6 flex justify-between items-center">
//                     <div className="text-sm text-gray-600">
//                         Showing {filteredPayments.length} of {payments.length} payments
//                     </div>
//                     <div className="flex gap-2">
//                         <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50">
//                             Previous
//                         </button>
//                         <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                             1
//                         </button>
//                         <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Order Details Modal */}
//             {viewDetails && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto">
//                         <div className="p-6 border-b border-gray-200">
//                             <div className="flex justify-between items-center">
//                                 <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
//                                 <button onClick={closeDetails} className="text-gray-400 hover:text-gray-600">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="p-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                 <div>
//                                     <h3 className="text-sm font-medium text-gray-500">ORDER INFORMATION</h3>
//                                     <div className="mt-2 space-y-2">
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Transaction ID:</span>
//                                             <span className="font-medium text-gray-900">{viewDetails.transactionId}</span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Payment Method:</span>
//                                             <span className="font-medium text-gray-900">{viewDetails.paymentMethod}</span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Payment Status:</span>
//                                             <span className={`font-medium ${viewDetails.paymentStatus === 'Pending' ? 'text-amber-600' : 'text-green-600'}`}>
//                                                 {viewDetails.paymentStatus}
//                                             </span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Admin Approved:</span>
//                                             <span className={`font-medium ${viewDetails.adminApproved ? 'text-green-600' : 'text-gray-600'}`}>
//                                                 {viewDetails.adminApproved ? 'Yes' : 'Pending'}
//                                             </span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Seller Received:</span>
//                                             <span className={`font-medium ${viewDetails.sellerReceived ? 'text-green-600' : 'text-gray-600'}`}>
//                                                 {viewDetails.sellerReceived ? 'Yes' : 'Pending'}
//                                             </span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Date:</span>
//                                             <span className="font-medium text-gray-900">
//                                                 {format(new Date(viewDetails.createdAt), 'PPpp')}
//                                             </span>
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="text-sm font-medium text-gray-500">CUSTOMER INFORMATION</h3>
//                                     <div className="mt-2 space-y-2">
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Name:</span>
//                                             <span className="font-medium text-gray-900">{viewDetails.useName}</span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Email:</span>
//                                             <span className="font-medium text-gray-900">{viewDetails.userEmail}</span>
//                                         </p>
//                                         <p className="flex justify-between">
//                                             <span className="text-gray-600">Shipping Address:</span>
//                                             <span className="font-medium text-gray-900 text-right">{viewDetails.address}</span>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mb-6">
//                                 <h3 className="text-sm font-medium text-gray-500 mb-3">ORDERED MEDICINES</h3>
//                                 <div className="border rounded-lg overflow-hidden">
//                                     <table className="w-full text-left">
//                                         <thead>
//                                             <tr className="bg-gray-50">
//                                                 <th className="px-4 py-2 text-xs font-medium text-gray-500">Product</th>
//                                                 <th className="px-4 py-2 text-xs font-medium text-gray-500">Price</th>
//                                                 <th className="px-4 py-2 text-xs font-medium text-gray-500">Discount</th>
//                                                 <th className="px-4 py-2 text-xs font-medium text-gray-500">Quantity</th>
//                                                 <th className="px-4 py-2 text-xs font-medium text-gray-500 text-right">Total</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="divide-y divide-gray-200">
//                                             {viewDetails.items.map((item) => (
//                                                 <tr key={item.medicineId}>
//                                                     <td className="px-4 py-3">
//                                                         <div className="flex items-center">
//                                                             <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded mr-3" />
//                                                             <div>
//                                                                 <p className="font-medium text-gray-900">{item.name}</p>
//                                                                 <p className="text-xs text-gray-500">ID: {item.medicineId.substring(0, 8)}...</p>
//                                                             </div>
//                                                         </div>
//                                                     </td>
//                                                     <td className="px-4 py-3 text-gray-700">${item.price.toFixed(2)}</td>
//                                                     <td className="px-4 py-3 text-gray-700">{item.discount}%</td>
//                                                     <td className="px-4 py-3 text-gray-700">{item.quantity}</td>
//                                                     <td className="px-4 py-3 text-gray-700 text-right font-medium">
//                                                         ${(item.finalPrice * item.quantity).toFixed(2)}
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                         <tfoot className="bg-gray-50">
//                                             <tr>
//                                                 <td colSpan="4" className="px-4 py-3 text-right font-medium text-gray-700">Total Amount:</td>
//                                                 <td className="px-4 py-3 text-right font-bold text-gray-900">${viewDetails.totalAmount.toFixed(2)}</td>
//                                             </tr>
//                                         </tfoot>
//                                     </table>
//                                 </div>
//                             </div>

//                             <div className="flex justify-end gap-3">
//                                 <button
//                                     onClick={closeDetails}
//                                     className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//                                 >
//                                     Close
//                                 </button>
//                                 {!viewDetails.sellerReceived && viewDetails.adminApproved && (
//                                     <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//                                         Mark as Received
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PaymentHistory;


//=============================================================== deepSeek


// const PaymentHistory = () => {
//     // Dummy data - replace with real data later
//     const [payments] = useState([
//         {
//             id: 'PY-1001',
//             medicine: 'Paracetamol 500mg',
//             buyer: 'john.doe@example.com',
//             date: '2023-06-15',
//             amount: 24.99,
//             status: 'paid',
//             invoice: '#INV-2023-1001'
//         },
//         {
//             id: 'PY-1002',
//             medicine: 'Ibuprofen 200mg',
//             buyer: 'sarah.smith@example.com',
//             date: '2023-06-14',
//             amount: 18.50,
//             status: 'pending',
//             invoice: '#INV-2023-1002'
//         },
//         // Add more dummy payments...
//     ]);

//     // Filter states
//     const [searchQuery, setSearchQuery] = useState('');
//     const [statusFilter, setStatusFilter] = useState('all');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     return (
//         <div className="p-6 bg-base-100 rounded-xl shadow-sm">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//                 <div>
//                     <h1 className="text-2xl font-bold flex items-center gap-2">
//                         <HiOutlineCurrencyDollar className="text-primary" />
//                         Payment History
//                     </h1>
//                     <p className="text-gray-500 mt-1">Track all your transactions</p>
//                 </div>

//                 <div className="stats shadow bg-base-200">
//                     <div className="stat">
//                         <div className="stat-title">Total Revenue</div>
//                         <div className="stat-value text-primary">$1,245.80</div>
//                         <div className="stat-desc">From 28 transactions</div>
//                     </div>
//                 </div>
//             </div>

//             {/* Filters Section */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//                 <div className="md:col-span-2 relative">
//                     <FiSearch className="absolute left-3 top-3 text-gray-400" />
//                     <input
//                         type="text"
//                         placeholder="Search payments..."
//                         className="input input-bordered w-full pl-10"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>

//                 <select
//                     className="select select-bordered"
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                 >
//                     <option value="all">All Status</option>
//                     <option value="paid">Paid</option>
//                     <option value="pending">Pending</option>
//                 </select>

//                 <div className="flex items-center gap-2">
//                     <FiFilter className="text-gray-500" />
//                     <input
//                         type="date"
//                         className="input input-bordered flex-1"
//                         placeholder="Start Date"
//                         value={dateRange.start}
//                         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                     />
//                     <span>to</span>
//                     <input
//                         type="date"
//                         className="input input-bordered flex-1"
//                         placeholder="End Date"
//                         value={dateRange.end}
//                         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                     />
//                 </div>
//             </div>

//             {/* Payments Table */}
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//                 <table className="table">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th>Payment ID</th>
//                             <th>Medicine</th>
//                             <th>Buyer</th>
//                             <th>Date</th>
//                             <th>Amount</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {payments.map((payment) => (
//                             <tr key={payment.id} className="hover:bg-gray-50">
//                                 <td className="font-medium">{payment.id}</td>
//                                 <td>{payment.medicine}</td>
//                                 <td className="text-gray-600">{payment.buyer}</td>
//                                 <td>{new Date(payment.date).toLocaleDateString()}</td>
//                                 <td className="font-semibold">${payment.amount.toFixed(2)}</td>
//                                 <td>
//                                     <span className={`badge ${payment.status === 'paid' ? 'badge-success' : 'badge-warning'} badge-lg`}>
//                                         {payment.status}
//                                     </span>
//                                 </td>
//                                 <td>
//                                     <div className="flex gap-2">
//                                         <button className="btn btn-ghost btn-sm" title="Download Invoice">
//                                             <FiDownload />
//                                         </button>
//                                         <button className="btn btn-ghost btn-sm" title="View Details">
//                                             <TbReceipt />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                 <div className="card bg-blue-50 border border-blue-100">
//                     <div className="card-body">
//                         <h3 className="card-title text-blue-800">Total Earnings</h3>
//                         <p className="text-3xl font-bold text-blue-600">$2,845.20</p>
//                         <p className="text-blue-500">All-time revenue</p>
//                     </div>
//                 </div>

//                 <div className="card bg-green-50 border border-green-100">
//                     <div className="card-body">
//                         <h3 className="card-title text-green-800">Paid Amount</h3>
//                         <p className="text-3xl font-bold text-green-600">$2,120.75</p>
//                         <p className="text-green-500">Received payments</p>
//                     </div>
//                 </div>

//                 <div className="card bg-amber-50 border border-amber-100">
//                     <div className="card-body">
//                         <h3 className="card-title text-amber-800">Pending Amount</h3>
//                         <p className="text-3xl font-bold text-amber-600">$724.45</p>
//                         <p className="text-amber-500">Awaiting clearance</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Empty State (for demo) */}
//             {payments.length === 0 && (
//                 <div className="text-center py-12">
//                     <div className="text-gray-400 mb-4">No payment records found</div>
//                     <button className="btn btn-ghost text-primary">Refresh Data</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PaymentHistory;


//====================================================== claude


// const PaymentHistory = () => {
//     // Dummy data for payment history
//     const dummyPayments = [
//         {
//             id: "TXN-25042301",
//             medicineName: "Paracetamol 500mg",
//             customerName: "John Doe",
//             customerEmail: "john.doe@example.com",
//             date: "2025-04-01",
//             amount: 120.50,
//             quantity: 3,
//             status: "paid",
//             paymentMethod: "Credit Card"
//         },
//         {
//             id: "TXN-25042302",
//             medicineName: "Amoxicillin 250mg",
//             customerName: "Sarah Connor",
//             customerEmail: "sarah.connor@example.com",
//             date: "2025-04-01",
//             amount: 85.25,
//             quantity: 2,
//             status: "pending",
//             paymentMethod: "Stripe"
//         },
//         {
//             id: "TXN-25042303",
//             medicineName: "Ibuprofen 400mg",
//             customerName: "Mike Ross",
//             customerEmail: "mike.ross@example.com",
//             date: "2025-03-30",
//             amount: 56.75,
//             quantity: 1,
//             status: "paid",
//             paymentMethod: "PayPal"
//         },
//         {
//             id: "TXN-25042304",
//             medicineName: "Cetirizine 10mg",
//             customerName: "Rachel Green",
//             customerEmail: "rachel.green@example.com",
//             date: "2025-03-29",
//             amount: 210.00,
//             quantity: 5,
//             status: "paid",
//             paymentMethod: "Credit Card"
//         },
//         {
//             id: "TXN-25042305",
//             medicineName: "Omeprazole 20mg",
//             customerName: "Bruce Wayne",
//             customerEmail: "bruce.wayne@example.com",
//             date: "2025-03-28",
//             amount: 95.30,
//             quantity: 2,
//             status: "pending",
//             paymentMethod: "Debit Card"
//         },
//         {
//             id: "TXN-25042306",
//             medicineName: "Vitamin D3 1000IU",
//             customerName: "Tony Stark",
//             customerEmail: "tony.stark@example.com",
//             date: "2025-03-27",
//             amount: 150.00,
//             quantity: 3,
//             status: "paid",
//             paymentMethod: "Stripe"
//         },
//         {
//             id: "TXN-25042307",
//             medicineName: "Aspirin 81mg",
//             customerName: "Peter Parker",
//             customerEmail: "peter.parker@example.com",
//             date: "2025-03-26",
//             amount: 45.50,
//             quantity: 1,
//             status: "pending",
//             paymentMethod: "PayPal"
//         }
//     ];

//     // State for filters and pagination
//     const [searchTerm, setSearchTerm] = useState('');
//     const [statusFilter, setStatusFilter] = useState('all');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;

//     // Filter payments based on search term and status
//     const filteredPayments = dummyPayments.filter(payment => {
//         const matchesSearch = payment.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             payment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             payment.id.toLowerCase().includes(searchTerm.toLowerCase());

//         const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;

//         return matchesSearch && matchesStatus;
//     });

//     // Pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

//     // Event handlers
//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//         setCurrentPage(1);
//     };

//     const handleStatusFilter = (status) => {
//         setStatusFilter(status);
//         setCurrentPage(1);
//     };

//     const handleDateRangeChange = (e) => {
//         setDateRange({ ...dateRange, [e.target.name]: e.target.value });
//         setCurrentPage(1);
//     };

//     // Calculate total revenue
//     const totalRevenue = dummyPayments.reduce((sum, payment) => sum + payment.amount, 0);
//     const paidRevenue = dummyPayments
//         .filter(payment => payment.status === 'paid')
//         .reduce((sum, payment) => sum + payment.amount, 0);
//     const pendingRevenue = dummyPayments
//         .filter(payment => payment.status === 'pending')
//         .reduce((sum, payment) => sum + payment.amount, 0);
//     return (
//         <div className="bg-gray-50 min-h-screen">
//             {/* Header */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800">Payment History</h1>
//                 <p className="text-gray-600">View and manage your medicine sales payment history</p>

//                 {/* Summary Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//                     <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//                         <p className="text-sm text-blue-600 font-medium">Total Revenue</p>
//                         <h3 className="text-2xl font-bold text-blue-700">${totalRevenue.toFixed(2)}</h3>
//                     </div>
//                     <div className="bg-green-50 p-4 rounded-lg border border-green-100">
//                         <p className="text-sm text-green-600 font-medium">Paid Revenue</p>
//                         <h3 className="text-2xl font-bold text-green-700">${paidRevenue.toFixed(2)}</h3>
//                     </div>
//                     <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
//                         <p className="text-sm text-yellow-600 font-medium">Pending Revenue</p>
//                         <h3 className="text-2xl font-bold text-yellow-700">${pendingRevenue.toFixed(2)}</h3>
//                     </div>
//                 </div>
//             </div>

//             {/* Filters Section */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                     {/* Search */}
//                     <div className="relative flex-1">
//                         <FaSearch className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                             type="text"
//                             placeholder="Search by medicine, customer or transaction ID"
//                             className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={searchTerm}
//                             onChange={handleSearch}
//                         />
//                     </div>

//                     {/* Status Filter */}
//                     <div className="flex-shrink-0">
//                         <select
//                             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={statusFilter}
//                             onChange={(e) => handleStatusFilter(e.target.value)}
//                         >
//                             <option value="all">All Status</option>
//                             <option value="paid">Paid</option>
//                             <option value="pending">Pending</option>
//                         </select>
//                     </div>

//                     {/* Date Range */}
//                     <div className="flex gap-2 flex-shrink-0">
//                         <div className="relative">
//                             <input
//                                 type="date"
//                                 name="start"
//                                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={dateRange.start}
//                                 onChange={handleDateRangeChange}
//                             />
//                             <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
//                         </div>
//                         <span className="flex items-center text-gray-500">to</span>
//                         <div className="relative">
//                             <input
//                                 type="date"
//                                 name="end"
//                                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={dateRange.end}
//                                 onChange={handleDateRangeChange}
//                             />
//                             <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
//                         </div>
//                     </div>

//                     {/* Export Button */}
//                     <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0">
//                         <FaFileDownload />
//                         Export
//                     </button>
//                 </div>
//             </div>

//             {/* Payments Table */}
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Transaction ID
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Medicine
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Customer
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Date
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Amount
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Status
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Method
//                                 </th>
//                                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Actions
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {currentItems.map((payment) => (
//                                 <tr key={payment.id} className="hover:bg-gray-50">
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
//                                         {payment.id}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
//                                         {payment.medicineName}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                                         <div>{payment.customerName}</div>
//                                         <div className="text-xs text-gray-500">{payment.customerEmail}</div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                                         {format(new Date(payment.date), 'MMM dd, yyyy')}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                         ${payment.amount.toFixed(2)}
//                                         <div className="text-xs text-gray-500">Qty: {payment.quantity}</div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <span
//                                             className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.status === 'paid'
//                                                 ? 'bg-green-100 text-green-800'
//                                                 : 'bg-yellow-100 text-yellow-800'
//                                                 }`}
//                                         >
//                                             <FaCircle className={`mr-1 text-xs self-center ${payment.status === 'paid' ? 'text-green-500' : 'text-yellow-500'
//                                                 }`} />
//                                             {payment.status === 'paid' ? 'Paid' : 'Pending'}
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                                         {payment.paymentMethod}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                         <button className="text-gray-500 hover:text-gray-700">
//                                             <FaEllipsisV />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Pagination */}
//                 <div className="flex items-center justify-between bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
//                     <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                         <div>
//                             <p className="text-sm text-gray-700">
//                                 Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
//                                 <span className="font-medium">
//                                     {Math.min(indexOfLastItem, filteredPayments.length)}
//                                 </span>{' '}
//                                 of <span className="font-medium">{filteredPayments.length}</span> results
//                             </p>
//                         </div>
//                         <div>
//                             <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                                 <button
//                                     onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                                     disabled={currentPage === 1}
//                                     className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
//                                         }`}
//                                 >
//                                     <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
//                                 </button>

//                                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                                     <button
//                                         key={page}
//                                         onClick={() => setCurrentPage(page)}
//                                         className={`relative inline-flex items-center px-4 py-2 border ${currentPage === page
//                                             ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
//                                             : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
//                                             } text-sm font-medium`}
//                                     >
//                                         {page}
//                                     </button>
//                                 ))}

//                                 <button
//                                     onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//                                     disabled={currentPage === totalPages}
//                                     className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
//                                         }`}
//                                 >
//                                     <FaChevronRight className="h-5 w-5" aria-hidden="true" />
//                                 </button>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentHistory;



///====================deepSeek


// const PaymentHistory = () => {
//     // Sample data transformation (you'll get this from API)
//     const [allPayments] = useState([
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "munna vai",
//             userEmail: "hamza@gmail.com",
//             address: "123 street kalu ganj,bindabon, rongpur",
//             items: [
//                 {
//                     medicineId: "67a62eddcff568772a0b0fba",
//                     name: "Antifungal Ointment",
//                     image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                     price: 7,
//                     discount: 0,
//                     finalPrice: 7,
//                     sellerEmail: "emonownmail17@gmail.com",
//                     quantity: 2
//                 },
//                 // More items...
//             ],
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: 1743653775955,
//             updatedAt: 1743653775955,
//             adminApproved: false,
//             sellerReceived: false
//         },
//         // More payments...
//     ]);

//     // Filter states
//     const [searchQuery, setSearchQuery] = useState('');
//     const [statusFilter, setStatusFilter] = useState('all');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });

//     // Calculate summary stats
//     const summaryStats = {
//         totalSales: allPayments.reduce((sum, payment) => sum + payment.totalAmount, 0),
//         paidAmount: allPayments
//             .filter(p => p.paymentStatus === 'Paid')
//             .reduce((sum, payment) => sum + payment.totalAmount, 0),
//         pendingAmount: allPayments
//             .filter(p => p.paymentStatus === 'Pending')
//             .reduce((sum, payment) => sum + payment.totalAmount, 0),
//         totalTransactions: allPayments.length
//     };
//     return (
//         <div className="p-6 bg-base-100 rounded-xl">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//                 <div>
//                     <h1 className="text-2xl font-bold flex items-center gap-2">
//                         <FiDollarSign className="text-primary" />
//                         Payment History
//                     </h1>
//                     <p className="text-gray-500 mt-1">
//                         {summaryStats.totalTransactions} transactions • ${summaryStats.totalSales.toFixed(2)} total
//                     </p>
//                 </div>

//                 <div className="flex gap-4">
//                     <div className="tooltip tooltip-bottom" data-tip="Refresh Data">
//                         <button className="btn btn-circle btn-ghost">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                             </svg>
//                         </button>
//                     </div>
//                     <button className="btn btn-primary gap-2">
//                         <FiDownload />
//                         Export Report
//                     </button>
//                 </div>
//             </div>

//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="card bg-blue-50 border border-blue-100">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-3">
//                             <div className="bg-blue-100 p-3 rounded-full">
//                                 <FiDollarSign className="text-blue-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-blue-800">Total Sales</h3>
//                                 <p className="text-2xl font-bold text-blue-600">
//                                     ${summaryStats.totalSales.toFixed(2)}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-green-50 border border-green-100">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-3">
//                             <div className="bg-green-100 p-3 rounded-full">
//                                 <FiCheckCircle className="text-green-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-green-800">Received</h3>
//                                 <p className="text-2xl font-bold text-green-600">
//                                     ${summaryStats.paidAmount.toFixed(2)}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-amber-50 border border-amber-100">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-3">
//                             <div className="bg-amber-100 p-3 rounded-full">
//                                 <FiClock className="text-amber-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-amber-800">Pending</h3>
//                                 <p className="text-2xl font-bold text-amber-600">
//                                     ${summaryStats.pendingAmount.toFixed(2)}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Filters Section */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//                 <div className="md:col-span-2 relative">
//                     <FiSearch className="absolute left-3 top-3 text-gray-400" />
//                     <input
//                         type="text"
//                         placeholder="Search by transaction ID, customer..."
//                         className="input input-bordered w-full pl-10"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>

//                 <select
//                     className="select select-bordered"
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                 >
//                     <option value="all">All Status</option>
//                     <option value="Paid">Paid</option>
//                     <option value="Pending">Pending</option>
//                 </select>

//                 <div className="flex items-center gap-2">
//                     <FiFilter className="text-gray-500" />
//                     <input
//                         type="date"
//                         className="input input-bordered flex-1"
//                         placeholder="Start Date"
//                         value={dateRange.start}
//                         onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                     />
//                     <span className="text-gray-400">to</span>
//                     <input
//                         type="date"
//                         className="input input-bordered flex-1"
//                         placeholder="End Date"
//                         value={dateRange.end}
//                         onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                     />
//                 </div>
//             </div>

//             {/* Payments Table */}
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//                 <table className="table">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th>Transaction</th>
//                             <th>Customer</th>
//                             <th>Date</th>
//                             <th>Items</th>
//                             <th>Amount</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allPayments.map((payment) => (
//                             <tr key={payment._id} className="hover:bg-gray-50">
//                                 <td>
//                                     <div className="font-medium">{payment.transactionId}</div>
//                                     <div className="text-xs text-gray-500 mt-1">
//                                         {payment.paymentMethod}
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div className="font-medium">{payment.useName}</div>
//                                     <div className="text-xs text-gray-500">{payment.userEmail}</div>
//                                 </td>
//                                 <td>
//                                     {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
//                                     <div className="text-xs text-gray-500">
//                                         {format(new Date(payment.createdAt), 'h:mm a')}
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div className="flex -space-x-2">
//                                         {payment.items.slice(0, 3).map((item, idx) => (
//                                             <div key={idx} className="tooltip" data-tip={item.name}>
//                                                 <img
//                                                     src={item.image}
//                                                     alt={item.name}
//                                                     className="w-8 h-8 rounded-full border-2 border-white"
//                                                 />
//                                             </div>
//                                         ))}
//                                         {payment.items.length > 3 && (
//                                             <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
//                                                 +{payment.items.length - 3}
//                                             </div>
//                                         )}
//                                     </div>
//                                 </td>
//                                 <td className="font-semibold">${payment.totalAmount.toFixed(2)}</td>
//                                 <td>
//                                     <span className={`badge ${payment.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'} gap-2`}>
//                                         {payment.paymentStatus === 'Paid' ? (
//                                             <FiCheckCircle />
//                                         ) : (
//                                             <FiClock />
//                                         )}
//                                         {payment.paymentStatus}
//                                     </span>
//                                 </td>
//                                 <td>
//                                     <div className="flex gap-2">
//                                         <button className="btn btn-ghost btn-sm" title="Download Invoice">
//                                             <FiDownload />
//                                         </button>
//                                         <button
//                                             className="btn btn-sm"
//                                             disabled={payment.paymentStatus === 'Paid'}
//                                             title={payment.paymentStatus === 'Paid' ? 'Payment received' : 'Mark as paid'}
//                                         >
//                                             {payment.paymentStatus === 'Paid' ? 'Received' : 'Confirm'}
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Empty State */}
//             {allPayments.length === 0 && (
//                 <div className="text-center py-16">
//                     <div className="text-gray-400 mb-4 text-lg">No payment records found</div>
//                     <p className="text-gray-500 mb-6">Your completed transactions will appear here</p>
//                     <button className="btn btn-primary">Refresh Data</button>
//                 </div>
//             )}

//             {/* Pagination */}
//             {allPayments.length > 0 && (
//                 <div className="flex justify-between items-center mt-6">
//                     <div className="text-sm text-gray-500">
//                         Showing 1 to {allPayments.length} of {allPayments.length} entries
//                     </div>
//                     <div className="join">
//                         <button className="join-item btn btn-sm">«</button>
//                         <button className="join-item btn btn-sm btn-active">1</button>
//                         <button className="join-item btn btn-sm">»</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PaymentHistory;


//============================= grok


// const PaymentHistory = () => {
//     // Dummy data from your collection
//     const paymentData = [
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "munna vai",
//             userEmail: "hamza@gmail.com",
//             address: "123 street kalu ganj,bindabon, rongpur",
//             items: [
//                 { name: "Antifungal Ointment", finalPrice: 7, quantity: 2 },
//                 { name: "Burn Relief Ointment", finalPrice: 8.1, quantity: 3 },
//             ],
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-01",
//         },
//         {
//             _id: "67e6e7934766af402fd7606b",
//             useName: "hamza",
//             userEmail: "hamza@gmail.com",
//             address: "lkjlakjdf",
//             items: [
//                 { name: "Amoxicillin", finalPrice: 18, quantity: 4 },
//                 { name: "Omeprazole", finalPrice: 12, quantity: 2 },
//                 { name: "Antibiotic Drops", finalPrice: 12, quantity: 1 },
//                 { name: "Eye Drops", finalPrice: 5, quantity: 1 },
//             ],
//             totalAmount: 113,
//             transactionId: "pi_3R7hSYFSggGe9Blp1hwbwRiV",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-03",
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8d",
//             useName: "hamza",
//             userEmail: "hamza@gmail.com",
//             address: "fgadg",
//             items: [{ name: "Fish Oil Capsules", finalPrice: 18, quantity: 4 }],
//             totalAmount: 72,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpXKr",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-05",
//         },
//     ];

//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortBy, setSortBy] = useState('date');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;

//     // Filter and sort data
//     const filteredData = paymentData.filter(item =>
//         item.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.items.some(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     const sortedData = [...filteredData].sort((a, b) => {
//         if (sortBy === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
//         if (sortBy === 'amount') return b.totalAmount - a.totalAmount;
//         return 0;
//     });

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//     return (
//         <div className="container mx-auto p-4">
//             <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6 rounded-lg shadow-lg mb-6">
//                 <h1 className="text-3xl font-bold">Seller Dashboard - Payment History</h1>
//                 <p className="text-lg">Welcome, John Doe! Here’s an overview of your payment transactions.</p>
//                 <p className="text-lg font-semibold">
//                     Total Revenue: <span className="text-yellow-300">$225.3</span> (Paid: $0 | Pending: $225.3)
//                 </p>
//             </div>

//             <div className="flex flex-col md:flex-row gap-4 mb-6">
//                 <div className="flex-1">
//                     <div className="join">
//                         <input
//                             type="text"
//                             placeholder="Search transactions..."
//                             className="input input-bordered w-full join-item"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <button className="btn join-item bg-blue-500 text-white hover:bg-blue-600">
//                             <FaSearch />
//                         </button>
//                     </div>
//                 </div>
//                 <select
//                     className="select select-bordered w-full md:w-auto"
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                 >
//                     <option value="date">Sort by Date</option>
//                     <option value="amount">Sort by Amount</option>
//                     <option value="status">Sort by Status</option>
//                 </select>
//             </div>

//             <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr className="bg-blue-900 text-white">
//                             <th>Transaction ID</th>
//                             <th>Buyer Email</th>
//                             <th>Medicine Names</th>
//                             <th>Total Amount</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map((item) => (
//                             <tr key={item._id} className="hover:bg-gray-100">
//                                 <td>{item.transactionId}</td>
//                                 <td>{item.userEmail}</td>
//                                 <td>
//                                     {item.items.map((medicine, index) => (
//                                         <div key={index} className="text-sm">
//                                             {medicine.name} (Qty: {medicine.quantity})
//                                         </div>
//                                     ))}
//                                 </td>
//                                 <td>${item.totalAmount.toFixed(2)}</td>
//                                 <td>{new Date(item.createdAt).toLocaleDateString()}</td>
//                                 <td>
//                                     <span className={`badge ${item.paymentStatus === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
//                                         {item.paymentStatus}
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="join mt-6 flex justify-center gap-2">
//                 <button
//                     className="btn btn-outline"
//                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                 >
//                     <FaArrowLeft /> Previous
//                 </button>
//                 {Array.from({ length: totalPages }, (_, i) => (
//                     <button
//                         key={i + 1}
//                         className={`btn ${currentPage === i + 1 ? 'btn-active' : 'btn-outline'}`}
//                         onClick={() => setCurrentPage(i + 1)}
//                     >
//                         {i + 1}
//                     </button>
//                 ))}
//                 <button
//                     className="btn btn-outline"
//                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next <FaArrowRight />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PaymentHistory;





