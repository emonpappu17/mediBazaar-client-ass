import toast from "react-hot-toast";
import { useAdminApproval, useAllPayment } from "../../../services/paymentService";
import PaymentHistoryStat from "../../SellerDashboard/paymentHistory/PaymentHistoryStat";
import ManagePaymentRow from './ManagePaymentRow';
import TableSkeleton from "../../common/TableSkeleton";

const ManagePayment = () => {

    // API Calls
    const { data: payments = [], isLoading, isError } = useAllPayment();
    const { mutate } = useAdminApproval();

    const handleAcceptPayment = (id) => {
        mutate(id,
            {
                onSuccess: () => {
                    toast.success('Payment Accepted!!')
                },
                onError: () => {
                    toast.error('error')
                }
            },
        )
    }

    return (
        <div className="drop-shadow-md ">
            <PaymentHistoryStat
                payments={payments}
                adminPaymentManagement={true}
                isLoading={isLoading}
                isError={isError} />
            {isLoading ?
                (
                    <TableSkeleton />
                )
                : (
                    isError ? (
                        <div className="bg-error/10 text-error p-4 rounded-lg mb-6 text-center">
                            Failed to load payments data. Please try again.
                        </div>
                    ) : (
                        payments.length === 0 ? (
                            <div className="bg-base-200 p-6 rounded-lg text-center">
                                <p className="text-base-content">No payment records found.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto drop-shadow-md">
                                <table className="min-w-full bg-base-100 rounded-lg">
                                    <thead className="bg-base-200">
                                        <tr className="border-b border-base-300">
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Customer</th>
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Items</th>
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Date</th>
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Amount</th>
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Status</th>
                                            <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Actions</th>
                                        </tr >
                                    </thead >
                                    <tbody className="divide-y divide-base-300">
                                        {payments?.map((payment) => (
                                            <ManagePaymentRow
                                                key={payment._id}
                                                payment={payment}
                                                handleAcceptPayment={handleAcceptPayment}
                                            />
                                        ))}
                                    </tbody>
                                </table >
                            </div >
                        )
                    )
                )
            }
        </div >
    );
};

export default ManagePayment;
