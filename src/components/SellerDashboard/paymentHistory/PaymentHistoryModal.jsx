import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "../../common/Button";
import { format } from "date-fns";
import { useSellerReceived } from "../../../services/paymentService";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const PaymentHistoryModal = ({ isModalOpen, closeModal, payment, setIsModalOpen }) => {

    // API Call
    const { mutate } = useSellerReceived();

    // Updating seller payment received
    const handleSellerReceived = (id) => {
        mutate(id,
            {
                onSuccess: () => {
                    toast.success('Received')
                    setIsModalOpen(false)
                },
                onError: () => {
                    toast.error('error')
                    setIsModalOpen(false)
                }
            },
        )
    }
    return (
        <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">

            <div className="fixed inset-0 bg-black/30" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full  shadow-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 max-w-[700px]  bg-base-100  overflow-y-auto rounded-2xl  max-h-[90vh]">
                    <div className="px-4 pt-4 sm:pt-6 sm:px-6 md:p-10 p-5">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-[#0D6FEC]">Payment Details</h2>
                        </div>

                        {/* Customer & Seller Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-base-300">
                            <div>
                                <h3 className="text-lg font-semibold text-base-content">Customer Details</h3>
                                <p className="text-base-content/70">{payment?.name}</p>
                                <p className="text-base-content/70">{payment?.userEmail}</p>
                                <p className="text-base-content/70">{payment?.address}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-base-content">Shop Details</h3>
                                <p className="text-base-content/70">MediBazaar Pharmacy</p>
                                <p className="text-base-content/70">medibazaar@gmail.com</p>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="mt-6 border-b pb-4 border-base-300">
                            <h3 className="text-lg font-semibold text-base-content mb-4">Order Summary</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-base-100">
                                    <thead className="bg-base-200">
                                        <tr>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Image</th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Medicine</th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Qty</th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Price</th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Discount</th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-base-300">
                                        {payment?.items?.map((item, index) => {

                                            // Calculating itemTotal price
                                            const itemTotal = item.finalPrice * item.quantity
                                            return (
                                                <tr key={index} className="hover:bg-base-200">
                                                    <td className="py-3 px-4 ">
                                                        <div className="flex items-center">
                                                            <img className="size-16 rounded-md object-cover" src={item?.image} alt={`${item.name}`} />
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4 text-sm text-base-content">{item.name}</td>
                                                    <td className="py-3 px-4 text-sm text-base-content">{item.quantity}</td>
                                                    <td className="py-3 px-4 text-sm text-base-content">${item.price.toFixed(2)}</td>
                                                    <td className="py-3 px-4 text-sm text-base-content">{item.discount}%</td>
                                                    <td className="py-3 px-4 text-sm text-base-content">${itemTotal.toFixed(2)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-base-content mb-2">Payment Information</h3>
                            <p className="text-base-content/70">Payment Method: <strong>{payment?.paymentMethod}</strong></p>
                            <p className="text-base-content/70">Transaction ID: <strong>{payment?.transactionId}</strong></p>
                            <p className="text-base-content/70">Payment Date: <strong> {payment?.createdAt ? format(new Date(payment?.createdAt), "yyyy-MM-dd") : '2025-03-15'}</strong></p>
                            <p className="text-base-content/70">Payment Status: <span className="font-semibold text-green-600">Paid</span></p>
                        </div>

                        {/* Grand Total */}
                        <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
                            <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
                            <span className="text-2xl font-bold text-[#0D6FEC]">${payment?.totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="sticky bottom-0 bg-base-100  flex justify-end gap-3 z-20 pr-4 pb-4 ">
                        <button type="button" onClick={closeModal} className="btn">Close</button>
                        <Button
                            disabled={payment?.sellerReceived}
                            onclick={() => handleSellerReceived(payment?._id)}
                            type="button"
                            text={payment?.sellerReceived ? 'Received' : 'Make as received'}
                            className="px-4 py-2 rounded-md w-40"
                        />
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    );
};

PaymentHistoryModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    payment: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        userEmail: PropTypes.string,
        address: PropTypes.string,
        paymentMethod: PropTypes.string,
        transactionId: PropTypes.string,
        createdAt: PropTypes.string,
        totalAmount: PropTypes.number,
        sellerReceived: PropTypes.bool,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                finalPrice: PropTypes.number.isRequired,
                discount: PropTypes.number.isRequired,
            })
        ),
    }),
};

export default PaymentHistoryModal;