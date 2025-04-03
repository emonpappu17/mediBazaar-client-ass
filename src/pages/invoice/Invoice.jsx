import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "../../components/invoice/InvoicePDF";
import { FaDownload, FaPrint, FaHome } from "react-icons/fa";
import logo from '../../assets/websiteLogo.png'
import { Link, useParams } from "react-router";
import { usePayment } from "../../services/paymentService";
import { format } from "date-fns";
import Button from "../../components/common/Button";
import Lottie from "lottie-react";
import loader from '../../assets/loaderAnimation.json'

const Invoice = () => {
    const { id } = useParams();

    // API Calls
    const { data: invoiceData, isLoading, error } = usePayment(id);

    if (isLoading) return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-20" animationData={loader}></Lottie></div>
    if (error) return <p>got error</p>
    
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200 ">
            {/* Display invoice */}
            <div className=" max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300 ">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center  ">
                        <img className="size-16" src={logo} />
                        <h2 className="text-3xl font-bold text-[#0D6FEC]">Invoice</h2>
                    </div>
                    <p className="text-base-content/70">#INV-20250401</p>
                </div>

                {/* Customer & Seller Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-base-300">
                    <div>
                        <h3 className="text-lg font-semibold text-base-content">Customer Details</h3>
                        <p className="text-base-content/70">{invoiceData.name}</p>
                        <p className="text-base-content/70">{invoiceData.userEmail}</p>
                        <p className="text-base-content/70">{invoiceData.address}</p>
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
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Medicine</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Qty</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Price</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Discount</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-base-300">
                                {invoiceData.items.map((item, index) => {

                                    // Calculating itemTotal price
                                    const itemTotal = item.finalPrice * item.quantity

                                    return (
                                        <tr key={index} className="hover:bg-base-200">
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
                    <p className="text-base-content/70">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
                    <p className="text-base-content/70">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
                    <p className="text-base-content/70">Payment Date: <strong> {invoiceData.createdAt ? format(new Date(invoiceData.createdAt), "yyyy-MM-dd") : '2025-03-15'}</strong></p>
                    <p className="text-base-content/70">Payment Status: <span className="font-semibold text-green-600">Paid</span></p>
                </div>

                {/* Grand Total */}
                <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
                    <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
                    <span className="text-2xl font-bold text-[#0D6FEC]">${invoiceData.totalAmount.toFixed(2)}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-center flex-wrap gap-4">
                {/* Print */}
                <Button
                    onclick={() => window.print()}
                    text="Print Invoice"
                    className="px-6 rounded-[3px] h-10 flex items-center"
                    doubleBtn={true}
                    icon={FaPrint} />

                {/* Download */}
                <PDFDownloadLink
                    document={<InvoicePDF invoiceData={invoiceData} />}
                    fileName={`invoice.pdf`}
                    className=" bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6 h-10 rounded-[3px]"
                >
                    {({ loading }) => (
                        loading ? 'Preparing document...' : <><FaDownload /> Download PDF</>
                    )}
                </PDFDownloadLink>

                {/* Navigate to home */}
                <Link to={'/'}>
                    <Button
                        icon={FaHome}
                        text="Go to home"
                        className="px-6 rounded-[3px] h-10 flex items-center"
                        doubleBtn={true} />
                </Link>
            </div>
        </div>
        // <PDFViewer style={{ width: '100%', height: '100vh' }}>
        //     <InvoicePDF invoiceData={invoiceData}></InvoicePDF>
        // </PDFViewer>
    );
};

export default Invoice;




