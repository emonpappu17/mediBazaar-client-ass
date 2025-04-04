import { useState } from "react";
import { useSellerPayments } from "../../../services/paymentService";
import PaymentHistoryStat from "./PaymentHistoryStat";
import PaymentHistoryRow from "./PaymentHistoryRow";
import PaymentHistoryModal from "./PaymentHistoryModal";

const PaymentHistory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [payment, setPayment] = useState(null);

    // API Call
    const { data: payments = [], isLoading } = useSellerPayments();

    // Opening the modal
    const handleViewDetails = (payment) => {
        setPayment(payment)
        setIsModalOpen(true)
    }

    return (
        <div className="drop-shadow-md lg:mx-16">
            {/* Header Stat*/}
            <PaymentHistoryStat payments={payments} />

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
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-base-300">
                                {payments?.map((payment) => (
                                    // Row
                                    <PaymentHistoryRow
                                        key={payment._id}
                                        payment={payment}
                                        handleViewDetails={handleViewDetails} />
                                ))}
                            </tbody>
                        </table>
                    </div>}

            {/* Modal */}
            <PaymentHistoryModal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                payment={payment}
                setIsModalOpen={setIsModalOpen}
            />
        </div >
    );
};

export default PaymentHistory;








