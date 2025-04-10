import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { useRef } from "react";

import ExportBtns from "./ExportBtns";

const ManageSales = () => {

    //For Excel
    const tableRef = useRef(null);

    // API Calls 
    const { data: payments = [] } = useAllPayment();

    return (
        <div className="overflow-x-auto drop-shadow-md  lg:mx-16">

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

            {/* Export Buttons */}
            <div className="flex justify-end  py-3">
                <ExportBtns
                    tableRef={tableRef.current}
                    payments={payments} />
            </div>
        </div>
    );
};

export default ManageSales;