// import { useState } from 'react';
// import { FaSearch, FaSort, FaDownload, FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// const ManageSales = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortBy, setSortBy] = useState('date');
//     const [startDate, setStartDate] = useState('');

import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaCheckCircle, FaClock, FaEye } from "react-icons/fa";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'
import { applyPlugin } from 'jspdf-autotable'
// import htmlDocx from 'html-docx-js/dist/html-docx';
// import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun } from "docx";
import { saveAs } from "file-saver";


//     //dateRangeFilter
//     const [endDate, setEndDate] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;

//     // Dummy sales data
//     const salesData = [
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "munna vai",
//             userEmail: "hamza@gmail.com",
//             sellerEmail: "emonownmail17@gmail.com",
//             items: [{ name: "Antifungal Ointment", finalPrice: 7, quantity: 2 }, { name: "Burn Relief Ointment", finalPrice: 8.1, quantity: 3 }],
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Pending",
//             createdAt: "2023-10-01",
//         },
//         {
//             _id: "67e6e7934766af402fd7606b",
//             useName: "hamza",
//             userEmail: "hamza@gmail.com",
//             sellerEmail: "emonbafsd@gmail.com",
//             items: [{ name: "Amoxicillin", finalPrice: 18, quantity: 4 }, { name: "Omeprazole", finalPrice: 12, quantity: 2 }, { name: "Antibiotic Drops", finalPrice: 12, quantity: 1 }, { name: "Eye Drops", finalPrice: 5, quantity: 1 }],
//             totalAmount: 113,
//             transactionId: "pi_3R7hSYFSggGe9Blp1hwbwRiV",
//             paymentStatus: "Pending",
//             createdAt: "2023-10-03",
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8d",
//             useName: "hamza",
//             userEmail: "hamza@gmail.com",
//             sellerEmail: "emonbafsd@gmail.com",
//             items: [{ name: "Fish Oil Capsules", finalPrice: 18, quantity: 4 }],
//             totalAmount: 72,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpXKr",
//             paymentStatus: "Pending",
//             createdAt: "2023-10-05",
//         },
//         {
//             _id: "67e6d4dc28e536cfed6e2d8e",
//             useName: "test user",
//             userEmail: "test@gmail.com",
//             sellerEmail: "testseller@gmail.com",
//             items: [{ name: "Vitamin D", finalPrice: 15, quantity: 3 }],
//             totalAmount: 45,
//             transactionId: "pi_3R7gDGFSggGe9Blp0XGzpXKs",
//             paymentStatus: "Paid",
//             createdAt: "2023-10-06",
//         },
//     ];

//     // Filter data by date range
//     const filteredData = salesData.filter(item => {
//         const itemDate = new Date(item.createdAt);
//         const start = startDate ? new Date(startDate) : null;
//         const end = endDate ? new Date(endDate) : null;

//         if (start && end) {
//             return itemDate >= start && itemDate <= end;
//         } else if (start) {
//             return itemDate >= start;
//         } else if (end) {
//             return itemDate <= end;
//         }
//         return true;
//     }).filter(item =>
//         item.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.sellerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

//     const handleDownload = (format) => {
//         alert(`Downloading sales report in ${format} format! This is fake functionality.`);
//     };
//     return (
//         <div className="container mx-auto p-4">
//             <div className="bg-base-100 rounded-lg shadow-md p-6 mb-6">
//                 <h1 className="text-3xl font-bold text-base-content">Sales Report</h1>
//                 <p className="text-base-content">View and download detailed sales information.</p>
//                 <p className="text-base-content font-semibold mt-2">
//                     Total Sales: <span className="text-primary">${salesData.reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)}</span> (Pending: ${salesData.filter(item => item.paymentStatus === 'Pending').reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)} | Paid: ${salesData.filter(item => item.paymentStatus === 'Paid').reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)})
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
//                 <div className="join">
//                     <input
//                         type="date"
//                         className="input input-bordered join-item"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                     />
//                     <span className="join-item btn bg-base-200 text-base-content">to</span>
//                     <input
//                         type="date"
//                         className="input input-bordered join-item"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                     />
//                     <button className="btn join-item bg-success text-success-content hover:bg-success-focus">
//                         <FaCalendarAlt /> Filter
//                     </button>
//                 </div>
//             </div>

//             <div className="bg-base-100 rounded-lg shadow-md overflow-x-auto mb-6">
//                 <table className="table w-full">
//                     <thead>
//                         <tr className="bg-primary text-primary-content">
//                             <th>Transaction ID</th>
//                             <th>Buyer Name</th>
//                             <th>Buyer Email</th>
//                             <th>Seller Email</th>
//                             <th>Medicines</th>
//                             <th>Total Amount</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map((item) => (
//                             <tr key={item._id} className="hover:bg-base-200">
//                                 <td className="text-base-content">{item.transactionId}</td>
//                                 <td className="text-base-content">{item.useName}</td>
//                                 <td className="text-base-content">{item.userEmail}</td>
//                                 <td className="text-base-content">{item.sellerEmail}</td>
//                                 <td className="text-base-content">
//                                     {item.items.map((medicine, index) => (
//                                         <div key={index} className="text-sm">
//                                             {medicine.name} (Qty: {medicine.quantity}, Price: ${medicine.finalPrice})
//                                         </div>
//                                     ))}
//                                 </td>
//                                 <td className="text-base-content">${item.totalAmount.toFixed(2)}</td>
//                                 <td className="text-base-content">{new Date(item.createdAt).toLocaleDateString()}</td>
//                                 <td className={`text-base-content ${item.paymentStatus === 'Pending' ? 'text-warning' : 'text-success'}`}>
//                                     {item.paymentStatus}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="flex justify-between items-center mb-6">
//                 <div className="join">
//                     <button
//                         className="btn btn-outline"
//                         onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                         disabled={currentPage === 1}
//                     >
//                         <FaArrowLeft /> Previous
//                     </button>
//                     {Array.from({ length: totalPages }, (_, i) => (
//                         <button
//                             key={i + 1}
//                             className={`btn ${currentPage === i + 1 ? 'btn-active' : 'btn-outline'}`}
//                             onClick={() => setCurrentPage(i + 1)}
//                         >
//                             {i + 1}
//                         </button>
//                     ))}
//                     <button
//                         className="btn btn-outline"
//                         onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                     >
//                         Next <FaArrowRight />
//                     </button>
//                 </div>
//                 <div className="join">
//                     <button className="btn bg-primary text-primary-content hover:bg-primary-focus" onClick={() => handleDownload('PDF')}>
//                         <FaDownload className="mr-2" /> PDF
//                     </button>
//                     <button className="btn bg-secondary text-secondary-content hover:bg-secondary-focus" onClick={() => handleDownload('DOC')}>
//                         <FaDownload className="mr-2" /> DOC
//                     </button>
//                     <button className="btn bg-accent text-accent-content hover:bg-accent-focus" onClick={() => handleDownload('CSV')}>
//                         <FaDownload className="mr-2" /> CSV
//                     </button>
//                     <button className="btn bg-success text-success-content hover:bg-success-focus" onClick={() => handleDownload('XLSX')}>
//                         <FaDownload className="mr-2" /> XLSX
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageSales;

//===================deepSeek

// import { FiSearch, FiFilter, FiDownload, FiBarChart2, FiTrendingUp, FiUsers } from 'react-icons/fi';
// import { HiOutlineCurrencyDollar, HiOutlineShoppingBag } from 'react-icons/hi';
// import { useState } from 'react';
// import { format } from 'date-fns';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// const ManageSales = () => {
//     // Sample data matching your collection structure
//     const [sales] = useState([
//         {
//             _id: "67ee0b8f64a0ad585e1e1c7a",
//             useName: "munna vai",
//             userEmail: "hamza@gmail.com",
//             items: [
//                 {
//                     name: "Antifungal Ointment",
//                     price: 7,
//                     quantity: 2,
//                     sellerEmail: "emonownmail17@gmail.com"
//                 },
//                 {
//                     name: "Burn Relief Ointment",
//                     price: 9,
//                     quantity: 3,
//                     sellerEmail: "emon.pappu.5@gmail.com"
//                 }
//             ],
//             totalAmount: 38.3,
//             transactionId: "pi_3R9fCMFSggGe9Blp1a4K75I1",
//             paymentStatus: "Paid",
//             createdAt: 1743653775955,
//         },
//         // Add more sales records...
//     ]);

//     // Filter states
//     const [searchQuery, setSearchQuery] = useState('');
//     const [dateRange, setDateRange] = useState({ start: '', end: '' });
//     const [reportType, setReportType] = useState('daily');

//     // Calculate summary stats
//     const stats = {
//         totalSales: sales.reduce((sum, s) => sum + s.totalAmount, 0),
//         totalTransactions: sales.length,
//         topProduct: "Antifungal Ointment",
//         activeCustomers: [...new Set(sales.map(s => s.userEmail))].length,
//         topSeller: "emonownmail17@gmail.com"
//     };

//     // Chart data - would be dynamic in real implementation
//     const chartData = [
//         { name: 'Jan', sales: 4000 },
//         { name: 'Feb', sales: 3000 },
//         { name: 'Mar', sales: 5000 },
//         { name: 'Apr', sales: 2780 },
//         { name: 'May', sales: 1890 },
//         { name: 'Jun', sales: 2390 },
//     ];

//     // Export function placeholder
//     const handleExport = (format) => {
//         console.log(`Exporting as ${format}`);
//         // TODO: Implement export functionality
//     };
//     return (
//         <div className="p-6 bg-base-100 rounded-xl">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//                 <div>
//                     <h1 className="text-2xl font-bold flex items-center gap-2">
//                         <FiBarChart2 className="text-primary" />
//                         Sales Analytics
//                     </h1>
//                     <p className="text-gray-500 mt-1">
//                         Comprehensive sales performance overview
//                     </p>
//                 </div>
//                 <div className="flex gap-4">
//                     <select
//                         className="select select-bordered"
//                         value={reportType}
//                         onChange={(e) => setReportType(e.target.value)}
//                     >
//                         <option value="daily">Daily</option>
//                         <option value="weekly">Weekly</option>
//                         <option value="monthly">Monthly</option>
//                     </select>
//                     <div className="dropdown dropdown-end">
//                         <label tabIndex={0} className="btn btn-primary">
//                             <FiDownload className="mr-2" />
//                             Export
//                         </label>
//                         <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
//                             <li><a onClick={() => handleExport('pdf')}>PDF</a></li>
//                             <li><a onClick={() => handleExport('excel')}>Excel</a></li>
//                             <li><a onClick={() => handleExport('csv')}>CSV</a></li>
//                         </ul>
//                     </div>
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
//                                 <h3 className="text-sm font-medium text-blue-800">Total Sales</h3>
//                                 <p className="text-2xl font-bold">${stats.totalSales.toFixed(2)}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-green-100 p-3 rounded-full">
//                                 <HiOutlineShoppingBag className="text-green-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-green-800">Transactions</h3>
//                                 <p className="text-2xl font-bold">{stats.totalTransactions}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-purple-100 p-3 rounded-full">
//                                 <FiUsers className="text-purple-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-purple-800">Customers</h3>
//                                 <p className="text-2xl font-bold">{stats.activeCustomers}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200">
//                     <div className="card-body p-4">
//                         <div className="flex items-center gap-4">
//                             <div className="bg-amber-100 p-3 rounded-full">
//                                 <FiTrendingUp className="text-amber-600 text-xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm font-medium text-amber-800">Top Product</h3>
//                                 <p className="text-lg font-bold truncate">{stats.topProduct}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Sales Chart */}
//             <div className="card bg-base-100 border border-gray-200 mb-8">
//                 <div className="card-body">
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-lg font-semibold">Sales Trend</h2>
//                         <select className="select select-bordered select-sm">
//                             <option>Last 6 Months</option>
//                             <option>Last Year</option>
//                             <option>Custom Range</option>
//                         </select>
//                     </div>
//                     <div className="h-80">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <BarChart data={chartData}>
//                                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                                 <XAxis dataKey="name" />
//                                 <YAxis />
//                                 <Tooltip />
//                                 <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>
//             </div>

//             {/* Filters Section */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//                 <div className="md:col-span-2 relative">
//                     <FiSearch className="absolute left-3 top-3 text-gray-400" />
//                     <input
//                         type="text"
//                         placeholder="Search transactions, customers, products..."
//                         className="input input-bordered w-full pl-10"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>

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

//                 <select className="select select-bordered">
//                     <option>All Sellers</option>
//                     <option>emonownmail17@gmail.com</option>
//                     <option>emon.pappu.5@gmail.com</option>
//                 </select>
//             </div>

//             {/* Sales Table */}
//             <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
//                 <table className="table">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th>Transaction ID</th>
//                             <th>Customer</th>
//                             <th>Products</th>
//                             <th>Seller</th>
//                             <th>Date</th>
//                             <th>Amount</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {sales.map((sale) => (
//                             <tr key={sale._id} className="hover:bg-gray-50">
//                                 <td className="font-medium">{sale.transactionId}</td>
//                                 <td>
//                                     <div className="font-medium">{sale.useName}</div>
//                                     <div className="text-xs text-gray-500">{sale.userEmail}</div>
//                                 </td>
//                                 <td>
//                                     <div className="flex flex-wrap gap-1 max-w-xs">
//                                         {sale.items.map((item, idx) => (
//                                             <span key={idx} className="badge badge-ghost">
//                                                 {item.name} ×{item.quantity}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </td>
//                                 <td className="text-sm">{sale.items[0]?.sellerEmail}</td>
//                                 <td>{format(new Date(sale.createdAt), 'MMM dd, yyyy')}</td>
//                                 <td className="font-semibold">${sale.totalAmount.toFixed(2)}</td>
//                                 <td>
//                                     <span className={`badge ${sale.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'}`}>
//                                         {sale.paymentStatus}
//                                     </span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-between items-center">
//                 <div className="text-sm text-gray-500">
//                     Showing 1 to {sales.length} of {sales.length} entries
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

// export default ManageSales;


//==========================real

// import { jsPDF } from 'jspdf'
// import { autoTable } from 'jspdf-autotable'

// const ManageSales = () => {
//     const tableRef = useRef(null);

//     // API Calls
//     const { data: payments = [] } = useAllPayment();

//     const doc = new jsPDF()
//     const handleExportPdf = () => {
//         // autoTable(doc, { html: '#my-table' })
//         // doc.save('table.pdf')

//         autoTable(doc, { html: '#my-table' })
//         doc.save('table.pdf')
//     }


//     return (
//         < div className="overflow-x-auto drop-shadow-md ">
//             <DownloadTableExcel
//                 filename="Sales Report"
//                 sheet="users"
//                 currentTableRef={tableRef.current}
//             >
//                 <button className="btn">Export excel</button>
//             </DownloadTableExcel>
//             <button className="btn ml-4" onClick={handleExportPdf}>Export pdf</button>
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
//                 <tbody className="divide-y divide-base-300" >
//                     {payments?.map((payment) => (
//                         // Row
//                         <tr
//                             key={payment._id}
//                             className="hover:bg-base-200">
//                             <td className="py-3 px-4">
//                                 <div className="flex flex-col">
//                                     <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
//                                     <span className="text-sm text-base-content/70">{payment.userEmail}</span>
//                                 </div>
//                             </td>
//                             <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">{payment.transactionId}</td>
//                             <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">
//                                 {payment.items.map((medicine, index) => (
//                                     <div key={index} className="text-sm">
//                                         <span className="font-semibold">{medicine.name}</span> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})
//                                     </div>
//                                 ))}
//                             </td>
//                             <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">
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
//                             <td className="py-3 px-4 font-medium">${payment.totalAmount.toFixed(2)}</td>
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
//         </div>
//     );
// };

// export default ManageSales;


//===================================
// import { jsPDF } from 'jspdf';
// import { autoTable } from 'jspdf-autotable';
// import { useRef } from 'react';
// import { FaClock, FaCheckCircle } from 'react-icons/fa';
// import { format } from 'date-fns'; // Assuming you’re using date-fns for date formatting
// import DownloadTableExcel from 'react-export-table-to-excel'; // Keep this for Excel export

const ManageSales = () => {
    const tableRef = useRef(null);

    // API Calls (assuming useAllPayment is a custom hook)
    const { data: payments = [] } = useAllPayment();

    applyPlugin(jsPDF)
    const doc = new jsPDF('l');

    // Pdf
    const handleExportPdf = () => {
        const table = document.getElementById('my-table');
        if (!table) {
            alert('Table not found! This is fake functionality.');
            return;
        }

        // Extract headers and rows from the table
        const headers = Array.from(table.querySelectorAll('thead th'))
            .map(th => th.textContent);

        const rows = Array.from(table.querySelectorAll('tbody tr'))
            .map(tr => Array.from(tr.cells)
                .map(td => td.textContent.replace(/\s*\n\s*/g, ' ').trim()));

        // Add title
        doc.setFontSize(16);
        doc.text("Sales Report", 14, 10);

        // Create PDF
        doc.autoTable({
            head: [headers],
            body: rows,
            startY: 25,
            theme: 'grid', // Clean, modern table theme
            // styles: {
            //     cellPadding: 2,
            //     fontSize: 10,
            //     overflow: 'linebreak',
            //     halign: 'left',
            // },
            // headStyles: {
            //     fillColor: [41, 128, 185], // DaisyUI primary color (blue) approximated
            //     textColor: [255, 255, 255], // White text
            //     fontStyle: 'bold',
            // },
            // bodyStyles: {
            //     fillColor: [245, 245, 245], // Light gray for body (matches light theme)
            //     textColor: [0, 0, 0], // Black text
            //     alternateRowStyles: { fillColor: [255, 255, 255] }, // White for alternating rows
            // },
            horizontalPageBreak: true,
            horizontalPageBreakBehaviour: 'immediately',
        });

        // Save the PDF
        doc.save('sales_report.pdf');
    };

    //Doc
    const handleExportDoc = () => {
        const table = document.getElementById("my-table");

        if (!table) {
            alert("Table not found! This is fake functionality.");
            return;
        }

        const rows = table.querySelectorAll("tr");
        const docRows = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll("th, td");
            const docCells = [];

            cells.forEach(cell => {
                const cellText = cell.textContent.trim();
                docCells.push(
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [new TextRun(cellText)],
                            }),
                        ],
                    })
                );
            });

            docRows.push(new TableRow({ children: docCells }));
        });

        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Sales Report",
                                    bold: true,
                                    size: 28,
                                }),
                            ],
                        }),
                        new Table({
                            rows: docRows,
                        }),
                    ],
                },
            ],
        });

        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, "sales_report.docx");
        });
    };

    return (
        <div className="overflow-x-auto drop-shadow-md">
            <div className="flex justify-start mb-4">
                <DownloadTableExcel
                    filename="Sales Report"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >
                    <button className="btn btn-primary">Export Excel</button>
                </DownloadTableExcel>
                <button className="btn btn-primary ml-4" onClick={handleExportPdf}>Export PDF</button>
                <button className="btn btn-primary ml-4" onClick={handleExportDoc}>Export Word</button>

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
                                {/* <div className="flex flex-col">
                                    <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
                                    <span className="text-sm text-base-content/70">{payment.userEmail}</span>
                                </div> */}
                                <span className="text-sm text-base-content/70">{payment.userEmail}</span>
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
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning text-warning-content">
                                        <FaClock className="mr-1 text-warning" /> Pending
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success text-success-content">
                                        <FaCheckCircle className="mr-1 text-success" /> Paid
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageSales;