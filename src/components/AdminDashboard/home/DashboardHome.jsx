// import { FaCheckCircle, FaClock, FaMoneyBillWave, FaShoppingCart, FaTable, FaTimesCircle } from "react-icons/fa";

// import { FaMoneyBillWave, FaClock, FaTable, FaCheckCircle, FaTimesCircle, FaShoppingCart } from 'react-icons/fa';
// import { FiDollarSign, FiPackage, FiUser } from 'react-icons/fi';

// const DashboardHome = () => {
//     // Sample data matching your MongoDB structure
//     const paymentData = {
//         _id: "67fc8f7fdecace6a296b5ff5",
//         userName: "ronalodo17",
//         userEmail: "ronaldo17@gmail.com",
//         address: "Badda, Link Road, Dhaka",
//         items: [
//             {
//                 medicineId: "67a62eddcff568772a0b0fb7",
//                 name: "Antihistamine Syrup",
//                 image: "https://i.ibb.co.com/YBnL66Gq/Untitled-design-16.png",
//                 price: 10,
//                 discount: 5,
//                 finalPrice: 9.5,
//                 sellerEmail: "emon.pappu.5@gmail.com",
//                 quantity: 1
//             },
//             {
//                 medicineId: "67a62eddcff568772a0b0fba",
//                 name: "Antifungal Ointment",
//                 image: "https://i.ibb.co.com/vCznGXdv/Untitled-design-18.png",
//                 price: 7,
//                 discount: 0,
//                 finalPrice: 7,
//                 sellerEmail: "emonownmail17@gmail.com",
//                 quantity: 1
//             },
//             {
//                 medicineId: "67a62eddcff568772a0b0fb5",
//                 name: "Heparin",
//                 image: "https://i.ibb.co.com/1wgHcpt/Untitled-design-15.png",
//                 price: 45,
//                 discount: 15,
//                 finalPrice: 38.25,
//                 sellerEmail: "emon.pappu.5@gmail.com",
//                 quantity: 1
//             }
//         ],
//         totalAmount: 54.75,
//         transactionId: "pi_3RDefcFSggGe9Blp19X8fiaa",
//         paymentStatus: "Pending",
//         paymentMethod: "Stripe",
//         createdAt: 1744605055965,
//         updatedAt: 1744605055965,
//         adminApproved: false,
//         sellerReceived: false
//     };

//     // Calculate metrics
//     const totalSales = 12500; // Would come from API in real app
//     const paidTotal = 8500;
//     const pendingTotal = 4000;
//     const paidPercentage = Math.round((paidTotal / totalSales) * 100);
//     const pendingPercentage = Math.round((pendingTotal / totalSales) * 100);

//     // Recent payments (would come from API)
//     const recentPayments = [
//         paymentData,
//         {
//             ...paymentData,
//             _id: "67fc8f7fdecace6a296b5ff6",
//             paymentStatus: "Paid",
//             totalAmount: 32.50,
//             createdAt: 1744605055965 - 86400000,
//             adminApproved: true
//         }
//     ];
//     return (
//         <div className="p-6 max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold mb-8 text-primary">Seller Dashboard</h2>

//             {/* Stats Overview */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                 {/* Total Revenue */}
//                 <div className="card bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg">
//                     <div className="card-body">
//                         <div className="flex items-center">
//                             <div className="rounded-full bg-primary/20 p-3 mr-4">
//                                 <FiDollarSign className="text-primary text-2xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm text-base-content/70">Total Revenue</h3>
//                                 <p className="text-2xl font-bold">${totalSales.toLocaleString()}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Paid Amount */}
//                 <div className="card bg-gradient-to-br from-success/10 to-success/5 shadow-lg">
//                     <div className="card-body">
//                         <div className="flex items-center">
//                             <div className="rounded-full bg-success/20 p-3 mr-4">
//                                 <FaMoneyBillWave className="text-success text-2xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm text-base-content/70">Paid Amount</h3>
//                                 <p className="text-2xl font-bold">${paidTotal.toLocaleString()}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Pending Amount */}
//                 <div className="card bg-gradient-to-br from-warning/10 to-warning/5 shadow-lg">
//                     <div className="card-body">
//                         <div className="flex items-center">
//                             <div className="rounded-full bg-warning/20 p-3 mr-4">
//                                 <FaClock className="text-warning text-2xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm text-base-content/70">Pending Amount</h3>
//                                 <p className="text-2xl font-bold">${pendingTotal.toLocaleString()}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Total Orders */}
//                 <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-lg">
//                     <div className="card-body">
//                         <div className="flex items-center">
//                             <div className="rounded-full bg-secondary/20 p-3 mr-4">
//                                 <FaShoppingCart className="text-secondary text-2xl" />
//                             </div>
//                             <div>
//                                 <h3 className="text-sm text-base-content/70">Total Orders</h3>
//                                 <p className="text-2xl font-bold">24</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Payment Status Chart */}
//             <div className="card shadow-lg mb-8 bg-base-100">
//                 <div className="card-body">
//                     <h3 className="card-title text-lg">Payment Status Overview</h3>
//                     <div className="flex justify-between text-sm mb-2">
//                         <span className="text-success">Paid ({paidPercentage}%)</span>
//                         <span className="text-warning">Pending ({pendingPercentage}%)</span>
//                     </div>
//                     <div className="w-full bg-base-200 rounded-full h-3">
//                         <div
//                             className="bg-success h-3 rounded-full"
//                             style={{ width: `${paidPercentage}%` }}
//                         ></div>
//                         <div
//                             className="bg-warning h-3 rounded-full -ml-1"
//                             style={{ width: `${pendingPercentage}%` }}
//                         ></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Recent Transactions */}
//             <div className="card shadow-lg bg-base-100">
//                 <div className="card-body">
//                     <div className="flex items-center mb-4">
//                         <FaTable className="mr-2 text-primary" />
//                         <h3 className="card-title text-lg">Recent Transactions</h3>
//                     </div>

//                     <div className="overflow-x-auto">
//                         <table className="table w-full">
//                             <thead>
//                                 <tr>
//                                     <th>Order ID</th>
//                                     <th>Customer</th>
//                                     <th>Items</th>
//                                     <th>Amount</th>
//                                     <th>Status</th>
//                                     <th>Date</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {recentPayments.map((payment, index) => (
//                                     <tr key={index} className="hover:bg-base-200">
//                                         <td className="font-mono text-sm">{payment._id.substring(0, 8)}...</td>
//                                         <td>
//                                             <div className="flex items-center">
//                                                 <div className="avatar placeholder mr-2">
//                                                     <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
//                                                         <span>{payment.userName.substring(0, 1)}</span>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <div className="font-bold">{payment.userName}</div>
//                                                     <div className="text-xs opacity-50">{payment.userEmail}</div>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <div className="flex -space-x-2">
//                                                 {payment.items.slice(0, 3).map((item, i) => (
//                                                     <div key={i} className="tooltip" data-tip={item.name}>
//                                                         <div className="avatar">
//                                                             <div className="w-8 h-8 rounded-full ring-2 ring-base-100">
//                                                                 <img src={item.image} alt={item.name} />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                                 {payment.items.length > 3 && (
//                                                     <div className="avatar placeholder">
//                                                         <div className="w-8 h-8 bg-neutral-focus text-neutral-content rounded-full ring-2 ring-base-100">
//                                                             <span>+{payment.items.length - 3}</span>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </td>
//                                         <td className="font-bold">${payment.totalAmount}</td>
//                                         <td>
//                                             <div className={`badge gap-2 ${payment.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'}`}>
//                                                 {payment.paymentStatus === 'Paid' ? <FaCheckCircle /> : <FaTimesCircle />}
//                                                 {payment.paymentStatus}
//                                             </div>
//                                         </td>
//                                         <td>
//                                             {new Date(payment.createdAt).toLocaleDateString()}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                     <div className="card-actions justify-end mt-4">
//                         <button className="btn btn-primary btn-sm">View All Transactions</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardHome;

//========================gtp

import { FaClock, FaDollarSign } from 'react-icons/fa';
import {
    FaShoppingCart,
    FaStar,
    FaChartBar,
} from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import StatCard from '../../common/StatCard';
import { useSellerStats } from '../../../services/dashboardStats';
import useAuth from '../../../hooks/useAuth';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Legend } from '@headlessui/react';

const DashboardHome = () => {
    const { user } = useAuth();
    // API Calls
    const { data: sellerStats } = useSellerStats();

    console.log('sellerStats', sellerStats);

    const totalRevenue = sellerStats?.aggregatedData?.revenueSummary[0].totalRevenue;
    const pendingRevenue = sellerStats?.aggregatedData?.revenueSummary[0].pendingRevenue;
    const totalOrders = sellerStats?.aggregatedData?.revenueSummary[0].totalOrders
    const stockCount = sellerStats?.stockCountResult?.stockCount;
    const topSelling = sellerStats?.aggregatedData?.topSelling
    const lastSevenDaysRevenue = sellerStats?.aggregatedData?.lastSevenDaysRevenue;

    const recentSales = [
        { name: "Heparin", price: 45, qty: 1, total: 45, date: "Apr 16, 2025" },
        { name: "Cough Syrup", price: 8, qty: 2, total: 16, date: "Apr 15, 2025" },
        { name: "Amoxicillin", price: 20, qty: 1, total: 18, date: "Apr 14, 2025" },
    ];

    return (
        // <div className="px-4 sm:px-8 py-8 space-y-10">
        //     <div className="space-y-1">
        //         <h1 className="text-3xl font-bold text-base-content">Welcome Back, Seller!</h1>
        //         <p className="text-base-content/70">Here's a quick overview of your sales and performance.</p>
        //     </div>

        //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //         <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary shadow-sm">
        //             <div className="flex justify-between items-center">
        //                 <div>
        //                     <p className="text-primary font-medium">Total Revenue</p>
        //                     <p className="text-3xl font-bold text-primary">${totalRevenue.toFixed(2)}</p>
        //                 </div>
        //                 <div className="bg-primary/20 p-3 rounded-full">
        //                     <FaDollarSign className="text-primary text-xl" />
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="bg-warning/10 p-6 rounded-lg border-l-4 border-warning shadow-sm">
        //             <div className="flex justify-between items-center">
        //                 <div>
        //                     <p className="text-warning font-medium">Pending Payments</p>
        //                     <p className="text-3xl font-bold text-warning">${pendingRevenue.toFixed(2)}</p>
        //                 </div>
        //                 <div className="bg-warning/20 p-3 rounded-full">
        //                     <FaSpinner className="text-warning text-xl animate-spin" />
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="bg-success/10 p-6 rounded-lg border-l-4 border-success shadow-sm">
        //             <div className="flex justify-between items-center">
        //                 <div>
        //                     <p className="text-success font-medium">Total Orders</p>
        //                     <p className="text-3xl font-bold text-success">{totalOrders}</p>
        //                 </div>
        //                 <div className="bg-success/20 p-3 rounded-full">
        //                     <FaShoppingBag className="text-success text-xl" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="bg-base-100 p-6 rounded-lg border border-base-300 shadow-md">
        //         <h2 className="text-xl font-semibold text-base-content mb-4">Top Selling Medicines</h2>
        //         <ul className="space-y-2">
        //             {topSelling.map((med, index) => (
        //                 <li key={index} className="flex justify-between text-base-content/80">
        //                     <span>{index + 1}. {med.name}</span>
        //                     <span>{med.qty} sold</span>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
        <>
            <div className=" space-y-8 ">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-base-content">{`👋 Welcome Back, ${user?.displayName}!`}</h1>
                    <p className="text-base-content/70">Track your sales, orders, and performance at MediBazaar.</p>
                </div>

                {/* Analytics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Revenue"
                        value={`$${totalRevenue}`}
                        icon={<FaDollarSign className="text-primary" />}
                        color="primary"
                    />
                    <StatCard
                        title="Pending Payments"
                        value={`$${pendingRevenue}`}
                        icon={<FaClock className="text-warning" />}
                        color="warning"
                    />
                    <StatCard
                        title="Total Orders"
                        value={totalOrders}
                        icon={<FaShoppingCart className="text-success" />}
                        color="success"
                    />
                    <StatCard
                        title="Total Stock Items"
                        value={stockCount}
                        icon={<MdInventory2 className="text-info" />}
                        color="info"
                    />
                </div>

                {/* Top Selling + Sales Overview */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Top Selling */}
                    <div className="bg-base-100 p-6 rounded-xl border border-base-300 shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-base-content">Top Selling Products</h2>
                            <div className="p-2 rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                                <BiTrendingUp className="text-xl animate-pulse" />
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={topSelling}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                className=''
                            >
                                <defs>
                                    <linearGradient id="colorQty" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0D6FEC" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#0D6FEC" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis
                                    dataKey="name"
                                    className="text-xs fill-base-content"
                                    axisLine={{ stroke: '#d1d5db' }}
                                />
                                <YAxis
                                    className="text-xs fill-base-content"
                                    axisLine={{ stroke: '#d1d5db' }}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '6px', color: 'white' }}
                                    labelStyle={{ color: 'white' }}
                                    itemStyle={{ color: 'white' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '14px', color: '#4b5563' }} className={'border'} />
                                <Bar
                                    dataKey="qty"
                                    fill="url(#colorQty)"
                                    radius={[4, 4, 0, 0]}
                                    barSize={90}
                                    background={false}
                                    activeBar={false}
                                    layout='horizontal'
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Sales Overview */}
                    <div className="bg-base-100 p-6 rounded-xl  border border-base-300 shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-base-content">Sales Overview (Last 7 Days)</h2>
                            <div className="p-2 rounded-full bg-[#35C7DF]/10 text-[#35C7DF]">
                                <FaChartBar className="text-xl  animate-pulse" />
                            </div>
                        </div>
                        <div>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={lastSevenDaysRevenue}>
                                    <defs>
                                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0D6FEC" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#0D6FEC" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="date"
                                        className="text-xs fill-base-content"
                                        axisLine={{ stroke: '#d1d5db' }}
                                    />
                                    <YAxis
                                        className="text-xs fill-base-content"
                                        axisLine={{ stroke: '#d1d5db' }}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '6px', color: 'white' }}
                                        labelStyle={{ color: 'white' }}
                                        itemStyle={{ color: 'white' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke='none'
                                        fillOpacity={1}
                                        fill="url(#colorRev)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Recent Sales Table */}
                <div className="bg-base-100 p-6 rounded-xl  border border-base-300 shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-base-content">Recent Sales</h2>
                        <FaStar className="text-xl text-yellow-500" />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="bg-base-200 text-base-content/70">
                                <tr>
                                    <th className="p-3 text-left">Medicine</th>
                                    <th className="p-3 text-left">Qty</th>
                                    <th className="p-3 text-left">Unit Price</th>
                                    <th className="p-3 text-left">Total</th>
                                    <th className="p-3 text-left">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentSales.map((sale, index) => (
                                    <tr key={index} className="hover:bg-base-200 text-base-content">
                                        <td className="p-3">{sale.name}</td>
                                        <td className="p-3">{sale.qty}</td>
                                        <td className="p-3">${sale.price.toFixed(2)}</td>
                                        <td className="p-3">${sale.total.toFixed(2)}</td>
                                        <td className="p-3">{sale.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;