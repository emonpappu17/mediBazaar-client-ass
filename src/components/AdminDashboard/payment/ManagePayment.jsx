import { useState } from "react";
import { FaSearch, FaSort, FaCheckCircle, FaArrowLeft, FaArrowRight, FaEye, FaCheck, FaEllipsisV, FaClock } from 'react-icons/fa';
import { FiSearch, FiFilter, FiDownload, FiCheck, FiX, FiDollarSign, FiCreditCard } from 'react-icons/fi';
import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from 'react-icons/hi';
import { format } from 'date-fns';
import toast from "react-hot-toast";
import { useAdminApproval, useAllPayment } from "../../../services/paymentService";

const ManagePayment = () => {

    // API Calls
    const { data: payments = [], isLoading } = useAllPayment();
    const { mutate } = useAdminApproval();

    const handleAcceptPayment = (id) => {
        mutate(id,
            {
                onSuccess: () => {
                    toast.success('Accepted')

                },
                onError: () => {
                    toast.error('error')

                }
            },
        )
    }
    return (
        <div className="drop-shadow-md lg:mx-16">
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
                    <div className="overflow-x-auto drop-shadow-md">
                        <table className="min-w-full bg-base-100 rounded-lg ">
                            <thead className="bg-base-200">
                                <tr className="border-b border-base-300">
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Customer</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Items</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Date</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Amount</th>
                                    <th className="py-3 px-4 text-left text-xs font-semibold text-base-content uppercase tracking-wider">Status</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-base-300">
                                {payments?.map((payment) => (
                                    // Row
                                    <tr
                                        key={payment._id}
                                        className="hover:bg-base-200">
                                        <td className="py-3 px-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
                                                <span className="text-sm text-base-content/70">{payment.userEmail}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">{payment.transactionId}</td>
                                        <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">{payment.items.length} items</td>

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
                                            {/* <button
                                 // onClick={() => handleViewDetails(payment)}
                                 className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                             >
                                 <FaEye className="text-lg" />
                             </button> */}
                                            {
                                                payment.paymentStatus === 'Paid' ?
                                                    <span className="text-success font-medium">
                                                        {/* flex items-center gap-1 */}
                                                        {/* <FaCheckCircle /> */}
                                                        Accepted
                                                    </span>
                                                    :
                                                    <button
                                                        onClick={() => handleAcceptPayment(payment._id)}
                                                        className="p-2 rounded-full transition-all duration-300 bg-success/20 hover:bg-success text-success hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                                    >
                                                        <FaCheckCircle className="text-lg" />
                                                    </button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default ManagePayment;



// ===============grok
// const ManagePayment = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortBy, setSortBy] = useState('date');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;

//     // Dummy data (simplified from your JSON)
//     const paymentData = [
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "munna vai",
//             userEmail: "hamza@gmail.com",
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-01",
//             adminApproved: false,
//             sellerReceived: false,
//         },
//         {
//             _id: "67e6e7934766af402fd7606b",
//             useName: "hamza",
//             userEmail: "hamza@gmail.com",
//             totalAmount: 113,
//             transactionId: "pi_3R7hSYFSggGe9Blp1hwbwRiV",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-03",
//             adminApproved: false,
//             sellerReceived: false,
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8d",
//             useName: "hamza",
//             userEmail: "hamza@gmail.com",
//             totalAmount: 72,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpXKr",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-05",
//             adminApproved: false,
//             sellerReceived: false,
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8e",
//             useName: "test user",
//             userEmail: "test@gmail.com",
//             totalAmount: 50,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpXKs",
//             paymentStatus: "Paid",
//             paymentMethod: "Stripe",
//             createdAt: "2023-10-06",
//             adminApproved: true,
//             sellerReceived: true,
//         },
//     ];

//     // Filter and sort data
//     const filteredData = paymentData.filter(item =>
//         item.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.useName.toLowerCase().includes(searchTerm.toLowerCase())
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

//     const handleAcceptPayment = () => {
//         alert('Payment accepted! This is a fake functionality.');
//     };
//     return (
//         <div className="container mx-auto p-4">
//             <div className="bg-base-100 rounded-lg shadow-md p-6 mb-6">
//                 <h1 className="text-3xl font-bold text-base-content">Payment Management</h1>
//                 <p className="text-base-content">Manage all payment transactions for the e-commerce platform.</p>
//                 <p className="text-base-content font-semibold mt-2">
//                     Total Payments: <span className="text-primary">${paymentData.reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)}</span> (Pending: ${paymentData.filter(item => !item.adminApproved).reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)} | Paid: ${paymentData.filter(item => item.adminApproved).reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)})
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
//                         <button className="btn join-item bg-primary text-primary-content hover:bg-primary-focus">
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

//             <div className="bg-base-100 rounded-lg shadow-md overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr className="bg-primary text-primary-content">
//                             <th>Transaction ID</th>
//                             <th>Buyer Name</th>
//                             <th>Buyer Email</th>
//                             <th>Total Amount</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map((item) => (
//                             <tr key={item._id} className="hover:bg-base-200">
//                                 <td className="text-base-content">{item.transactionId}</td>
//                                 <td className="text-base-content">{item.useName}</td>
//                                 <td className="text-base-content">{item.userEmail}</td>
//                                 <td className="text-base-content">${item.totalAmount.toFixed(2)}</td>
//                                 <td className="text-base-content">{new Date(item.createdAt).toLocaleDateString()}</td>
//                                 <td className={`text-base-content ${item.paymentStatus === 'Pending' ? 'text-warning' : 'text-success'}`}>
//                                     {item.paymentStatus}
//                                 </td>
//                                 <td>
//                                     {item.paymentStatus === 'Pending' && (
//                                         <button
//                                             className="btn btn-success text-success-content hover:bg-success-focus"
//                                             onClick={handleAcceptPayment}
//                                         >
//                                             <FaCheckCircle className="mr-2" /> Accept
//                                         </button>
//                                     )}
//                                     {item.paymentStatus === 'Paid' && (
//                                         <span className="text-success">Completed</span>
//                                     )}
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

// export default ManagePayment;


//=====================================deepSeek


// const ManagePayment = () => {
//     // Sample data matching your collection structure
//     const [payments] = useState([
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "munna vai",
//             userEmail: "hamza@gmail.com",
//             items: [
//                 {
//                     name: "Antifungal Ointment",
//                     image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                     price: 7,
//                     quantity: 2,
//                     sellerEmail: "emonownmail17@gmail.com"
//                 },
//                 {
//                     name: "Burn Relief Ointment",
//                     image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                     price: 9,
//                     quantity: 3,
//                     sellerEmail: "emon.pappu.5@gmail.com"
//                 }
//             ],
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: 1743653775955,
//             adminApproved: false,
//             sellerReceived: false
//         },
//         // Add more payment records...
//     ]);

//     // Filter states
//     const [searchQuery, setSearchQuery] = useState('');
//     const [statusFilter, setStatusFilter] = useState('all');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });

//     // Calculate summary stats
//     const stats = {
//         totalRevenue: payments.reduce((sum, p) => sum + p.totalAmount, 0),
//         pendingPayments: payments.filter(p => p.paymentStatus === 'Pending').length,
//         completedPayments: payments.filter(p => p.paymentStatus === 'Paid').length,


//     };

//     // Approve payment function (placeholder)
//     const handleApprovePayment = (paymentId) => {
//         console.log(`Approving payment ${paymentId}`);
//         // TODO: Implement API call
//     };
//     return (
//         <div className="p-6 bg-base-100 rounded-xl">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//                 <div>
//                     <h1 className="text-2xl font-bold flex items-center gap-2">
//                         <HiOutlineCurrencyDollar className="text-primary" />
//                         Payment Management
//                     </h1>
//                     <p className="text-gray-500 mt-1">
//                         Manage all platform transactions and payments
//                     </p>
//                 </div>
//                 <div className="flex gap-4">
//                     <button className="btn btn-ghost">
//                         <FiDownload className="mr-2" />
//                         Export Report
//                     </button>
//                 </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                 <div className="card bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-blue-100 p-3 rounded-full">
//                                 <HiOutlineCurrencyDollar className="text-blue-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-blue-800">Total Revenue</h3>
//                                 <p className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-green-100 p-3 rounded-full">
//                                 <FiCheck className="text-green-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-green-800">Completed</h3>
//                                 <p className="text-2xl font-bold">{stats.completedPayments}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-amber-100 p-3 rounded-full">
//                                 <FiX className="text-amber-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-amber-800">Pending</h3>
//                                 <p className="text-2xl font-bold">{stats.pendingPayments}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-purple-100 p-3 rounded-full">
//                                 <HiOutlineUserGroup className="text-purple-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-purple-800">Sellers</h3>
//                                 <p className="text-2xl font-bold">{'random'}</p>
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
//                         placeholder="Search transactions, customers, sellers..."
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
//                     <option value="Pending">Pending Approval</option>
//                     <option value="Paid">Completed</option>
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
//                             <th>Seller</th>
//                             <th>Date</th>
//                             <th>Amount</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {payments.map((payment) => (
//                             <tr key={payment._id} className="hover:bg-gray-50">
//                                 <td>
//                                     <div className="font-medium">{payment.transactionId}</div>
//                                     <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
//                                         <FiCreditCard className="text-sm" />
//                                         {payment.paymentMethod}
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div className="font-medium">{payment.useName}</div>
//                                     <div className="text-xs text-gray-500">{payment.userEmail}</div>
//                                 </td>
//                                 <td>
//                                     <div className="text-sm">
//                                         {payment.items[0]?.sellerEmail}
//                                         {payment.items.length > 1 && (
//                                             <span className="text-xs text-gray-500 ml-1">+{payment.items.length - 1} more</span>
//                                         )}
//                                     </div>
//                                 </td>
//                                 <td>
//                                     {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
//                                 </td>
//                                 <td className="font-semibold">${payment.totalAmount.toFixed(2)}</td>
//                                 <td>
//                                     <span className={`badge ${payment.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'} gap-2`}>
//                                         {payment.paymentStatus}
//                                     </span>
//                                 </td>
//                                 <td>
//                                     <div className="flex gap-2">
//                                         <button
//                                             className={`btn btn-sm ${payment.paymentStatus === 'Paid' ? 'btn-disabled' : 'btn-primary'}`}
//                                             onClick={() => handleApprovePayment(payment._id)}
//                                             disabled={payment.paymentStatus === 'Paid'}
//                                         >
//                                             {payment.paymentStatus === 'Paid' ? 'Approved' : 'Approve'}
//                                         </button>
//                                         <button className="btn btn-ghost btn-sm">
//                                             <FiDownload />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Empty State */}
//             {payments.length === 0 && (
//                 <div className="text-center py-16">
//                     <div className="text-gray-400 mb-4 text-lg">No payment records found</div>
//                     <p className="text-gray-500 mb-6">All completed transactions will appear here</p>
//                 </div>
//             )}

//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-6">
//                 <div className="text-sm text-gray-500">
//                     Showing 1 to {payments.length} of {payments.length} entries
//                 </div>
//                 <div className="join">
//                     <button className="join-item btn btn-sm">«</button>
//                     <button className="join-item btn btn-sm btn-active">1</button>
//                     <button className="join-item btn btn-sm">»</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManagePayment;

//===========================claude

// const ManagePayment = () => {
//     // Dummy data based on your provided collection
//     const [payments, setPayments] = useState([
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
//             useName: "hamza",
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
//                 },
//                 {
//                     medicineId: "67a62eddcff568772a0b0fb9",
//                     name: "Antibiotic Drops",
//                     image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                     price: 12,
//                     discount: 0,
//                     finalPrice: 12,
//                     sellerEmail: "emonbafsd@gmail.com",
//                     quantity: 1
//                 },
//                 {
//                     medicineId: "67a62eddcff568772a0b0fb8",
//                     name: "Eye Drops",
//                     image: "https://i.ibb.co.com/wZW678Fh/Untitled-design-9.png",
//                     price: 5,
//                     discount: 0,
//                     finalPrice: 5,
//                     sellerEmail: "emonbafsd@gmail.com",
//                     quantity: 1
//                 }
//             ],
//             totalAmount: 113,
//             transactionId: "pi_3R7hSYFSggGe9Blp1hwbwRiV",
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: 1743185811964,
//             updatedAt: 1743185811964,
//             adminApproved: false,
//             sellerReceived: false
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8d",
//             useName: "hamza",
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
//             paymentStatus: "Pending",
//             paymentMethod: "Stripe",
//             createdAt: 1743181020010,
//             updatedAt: 1743181020010,
//             adminApproved: false,
//             sellerReceived: false
//         },
//         // Adding a "Paid" example for demonstration
//         {
//             _id: "67e6d4dc28e536cfed6e2d8e",
//             useName: "John Doe",
//             userEmail: "john@example.com",
//             address: "456 Main St, New York",
//             items: [
//                 {
//                     medicineId: "67a62eddcff568772a0b0fc2",
//                     name: "Vitamin C Tablets",
//                     image: "https://i.ibb.co.com/wZW678Fh/Untitled-design-9.png",
//                     price: 15,
//                     discount: 5,
//                     finalPrice: 14.25,
//                     sellerEmail: "emonbafsd@gmail.com",
//                     quantity: 2
//                 }
//             ],
//             totalAmount: 28.5,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpAAA",
//             paymentStatus: "Paid",
//             paymentMethod: "Stripe",
//             createdAt: 1743181020010,
//             updatedAt: 1743181020010,
//             adminApproved: true,
//             sellerReceived: true
//         }
//     ]);

//     const [selectedPayment, setSelectedPayment] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [filterStatus, setFilterStatus] = useState("all"); // "all", "pending", "paid"

//     // Format date function
//     const formatDate = (timestamp) => {
//         return new Date(timestamp).toLocaleString();
//     };

//     // Handle payment approval
//     const handleApprovePayment = (id) => {
//         setPayments(payments.map(payment => {
//             if (payment._id === id) {
//                 return { ...payment, paymentStatus: "Paid", adminApproved: true };
//             }
//             return payment;
//         }));
//         toast.success("Payment status updated to Paid successfully!");
//     };

//     // Handle view details
//     const handleViewDetails = (payment) => {
//         setSelectedPayment(payment);
//         setShowModal(true);
//     };

//     // Filter payments based on status
//     const filteredPayments = filterStatus === "all"
//         ? payments
//         : payments.filter(payment =>
//             filterStatus === "pending"
//                 ? payment.paymentStatus === "Pending"
//                 : payment.paymentStatus === "Paid"
//         );

//     // Calculate totals
//     const pendingTotal = payments
//         .filter(payment => payment.paymentStatus === "Pending")
//         .reduce((total, payment) => total + payment.totalAmount, 0);

//     const paidTotal = payments
//         .filter(payment => payment.paymentStatus === "Paid")
//         .reduce((total, payment) => total + payment.totalAmount, 0);
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-6">Payment Management</h1>

//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                     <h2 className="text-xl font-semibold text-gray-700">Total Revenue</h2>
//                     <p className="text-3xl font-bold mt-2">${(pendingTotal + paidTotal).toFixed(2)}</p>
//                 </div>
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                     <h2 className="text-xl font-semibold text-gray-700">Paid Total</h2>
//                     <p className="text-3xl font-bold mt-2 text-green-600">${paidTotal.toFixed(2)}</p>
//                 </div>
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                     <h2 className="text-xl font-semibold text-gray-700">Pending Total</h2>
//                     <p className="text-3xl font-bold mt-2 text-yellow-600">${pendingTotal.toFixed(2)}</p>
//                 </div>
//             </div>

//             {/* Filter Controls */}
//             <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//                 <div className="mb-4 md:mb-0">
//                     <h2 className="text-2xl font-semibold">Payment List</h2>
//                 </div>
//                 <div className="flex space-x-4">
//                     <select
//                         className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={filterStatus}
//                         onChange={(e) => setFilterStatus(e.target.value)}
//                     >
//                         <option value="all">All Payments</option>
//                         <option value="pending">Pending Payments</option>
//                         <option value="paid">Paid Payments</option>
//                     </select>
//                     <input
//                         type="text"
//                         placeholder="Search by User or Transaction ID"
//                         className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//             </div>

//             {/* Payment Table */}
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     User Info
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Transaction ID
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Items
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Amount
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Date
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Status
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {filteredPayments.map((payment) => (
//                                 <tr key={payment._id} className="hover:bg-gray-50">
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <div>
//                                                 <div className="text-sm font-medium text-gray-900">{payment.useName}</div>
//                                                 <div className="text-sm text-gray-500">{payment.userEmail}</div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="text-sm text-gray-900">{payment.transactionId}</div>
//                                         <div className="text-sm text-gray-500">{payment.paymentMethod}</div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="text-sm text-gray-900">{payment.items.length} items</div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="text-sm font-medium text-gray-900">${payment.totalAmount.toFixed(2)}</div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="text-sm text-gray-900">{formatDate(payment.createdAt)}</div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.paymentStatus === "Paid"
//                                             ? "bg-green-100 text-green-800"
//                                             : "bg-yellow-100 text-yellow-800"
//                                             }`}>
//                                             {payment.paymentStatus}
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                                         <div className="flex space-x-2">
//                                             <button
//                                                 onClick={() => handleViewDetails(payment)}
//                                                 className="text-blue-600 hover:text-blue-900"
//                                             >
//                                                 <FaEye className="h-5 w-5" />
//                                             </button>
//                                             {payment.paymentStatus === "Pending" && (
//                                                 <button
//                                                     onClick={() => handleApprovePayment(payment._id)}
//                                                     className="text-green-600 hover:text-green-900"
//                                                 >
//                                                     <FaCheck className="h-5 w-5" />
//                                                 </button>
//                                             )}
//                                             <button className="text-gray-600 hover:text-gray-900">
//                                                 <FaEllipsisV className="h-5 w-5" />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-6">
//                 <div className="text-sm text-gray-700">
//                     Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPayments.length}</span> of{" "}
//                     <span className="font-medium">{filteredPayments.length}</span> results
//                 </div>
//                 <div className="flex space-x-2">
//                     <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">
//                         Previous
//                     </button>
//                     <button className="px-4 py-2 border rounded-md bg-blue-600 text-white hover:bg-blue-700">
//                         1
//                     </button>
//                     <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">
//                         Next
//                     </button>
//                 </div>
//             </div>

//             {/* Modal for Payment Details */}
//             {showModal && selectedPayment && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
//                         <div className="p-6">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="text-2xl font-bold">Payment Details</h2>
//                                 <button
//                                     onClick={() => setShowModal(false)}
//                                     className="text-gray-500 hover:text-gray-700"
//                                 >
//                                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                 <div>
//                                     <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
//                                     <p><span className="font-medium">Name:</span> {selectedPayment.useName}</p>
//                                     <p><span className="font-medium">Email:</span> {selectedPayment.userEmail}</p>
//                                     <p><span className="font-medium">Address:</span> {selectedPayment.address}</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
//                                     <p><span className="font-medium">Transaction ID:</span> {selectedPayment.transactionId}</p>
//                                     <p><span className="font-medium">Payment Method:</span> {selectedPayment.paymentMethod}</p>
//                                     <p><span className="font-medium">Status:</span> {selectedPayment.paymentStatus}</p>
//                                     <p><span className="font-medium">Date:</span> {formatDate(selectedPayment.createdAt)}</p>
//                                 </div>
//                             </div>

//                             <h3 className="text-lg font-semibold mb-2">Ordered Items</h3>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full divide-y divide-gray-200">
//                                     <thead className="bg-gray-50">
//                                         <tr>
//                                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
//                                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
//                                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final Price</th>
//                                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="bg-white divide-y divide-gray-200">
//                                         {selectedPayment.items.map((item, index) => (
//                                             <tr key={index} className="hover:bg-gray-50">
//                                                 <td className="px-4 py-3 whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <img className="h-10 w-10 rounded-full mr-2" src={item.image} alt={item.name} />
//                                                         <div>
//                                                             <div className="text-sm font-medium text-gray-900">{item.name}</div>
//                                                             <div className="text-sm text-gray-500">Seller: {item.sellerEmail}</div>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
//                                                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.discount}%</td>
//                                                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">${item.finalPrice.toFixed(2)}</td>
//                                                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
//                                                 <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
//                                                     ${(item.finalPrice * item.quantity).toFixed(2)}
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                     <tfoot className="bg-gray-50">
//                                         <tr>
//                                             <td colSpan="5" className="px-4 py-3 text-right text-sm font-medium text-gray-900">Total:</td>
//                                             <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900">
//                                                 ${selectedPayment.totalAmount.toFixed(2)}
//                                             </td>
//                                         </tr>
//                                     </tfoot>
//                                 </table>
//                             </div>

//                             <div className="mt-6 flex justify-end">
//                                 {selectedPayment.paymentStatus === "Pending" && (
//                                     <button
//                                         onClick={() => {
//                                             handleApprovePayment(selectedPayment._id);
//                                             setShowModal(false);
//                                         }}
//                                         className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                                     >
//                                         Approve Payment
//                                     </button>
//                                 )}
//                                 <button
//                                     onClick={() => setShowModal(false)}
//                                     className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ManagePayment;


//=======================Real