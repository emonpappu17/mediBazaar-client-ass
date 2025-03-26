import { useRef } from "react";
import { FaDownload, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

// import { useRef } from "react";
// import { FaDownload, FaPrint } from "react-icons/fa";
// import { useReactToPrint } from "react-to-print";

// import { FaPrint } from "react-icons/fa";

const Invoice = () => {
    const invoiceRef = useRef(); // Ref for PDF download
    console.log('invoiceRef',  invoiceRef);


    // Dummy Data (Replace with actual data from backend)
    const invoiceData = {
        invoiceNumber: "INV-20250401",
        date: "2025-04-01",
        customerName: "John Doe",
        customerEmail: "john.doe@example.com",
        customerAddress: "123 Main Street, New York, USA",
        paymentMethod: "Stripe",
        transactionId: "txn_123456789",
        paymentStatus: "Paid",
        sellerName: "MediBazaar Pharmacy",
        sellerEmail: "seller@medibazaar.com",
        orderItems: [
            {
                name: "Paracetamol",
                quantity: 2,
                price: 10,
                discount: 5, // In percentage
                total: 19, // After discount
            },
            {
                name: "Ibuprofen",
                quantity: 1,
                price: 15,
                discount: 0,
                total: 15,
            },
        ],
    };

    // Calculate Grand Total
    const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

    // Function to Download as PDF
    const handleDownloadPDF = useReactToPrint({
        content: () => invoiceRef.current || null,
        documentTitle: `Invoice-${invoiceData.invoiceNumber}`,
    });
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
            <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300" ref={invoiceRef}>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-[#0D6FEC]">Invoice</h2>
                    <p className="text-base-content/70">#{invoiceData.invoiceNumber}</p>
                </div>

                {/* Customer & Seller Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-base-300">
                    <div>
                        <h3 className="text-lg font-semibold text-base-content">Customer Details</h3>
                        <p className="text-base-content/70">{invoiceData.customerName}</p>
                        <p className="text-base-content/70">{invoiceData.customerEmail}</p>
                        <p className="text-base-content/70">{invoiceData.customerAddress}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-base-content">Seller Details</h3>
                        <p className="text-base-content/70">{invoiceData.sellerName}</p>
                        <p className="text-base-content/70">{invoiceData.sellerEmail}</p>
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
                                {invoiceData.orderItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-base-200">
                                        <td className="py-3 px-4 text-sm text-base-content">{item.name}</td>
                                        <td className="py-3 px-4 text-sm text-base-content">{item.quantity}</td>
                                        <td className="py-3 px-4 text-sm text-base-content">${item.price.toFixed(2)}</td>
                                        <td className="py-3 px-4 text-sm text-base-content">{item.discount}%</td>
                                        <td className="py-3 px-4 text-sm text-base-content">${item.total.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-base-content mb-2">Payment Information</h3>
                    <p className="text-base-content/70">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
                    <p className="text-base-content/70">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
                    <p className="text-base-content/70">Payment Status: <span className="font-semibold text-green-600">{invoiceData.paymentStatus}</span></p>
                </div>

                {/* Grand Total */}
                <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
                    <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
                    <span className="text-2xl font-bold text-[#0D6FEC]">${grandTotal.toFixed(2)}</span>
                </div>
            </div>

            {/* Buttons: Print & Download */}
            <div className="mt-6 flex justify-center gap-4">
                {/* <button
                    onClick={() => window.print()}
                    className="btn bg-[#35C7DF] hover:bg-[#0D6FEC] text-white flex items-center gap-2 px-6">
                    <FaPrint /> Print Invoice
                </button> */}
                <button
                    onClick={handleDownloadPDF}
                    className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6">
                    <FaDownload /> Download PDF
                </button>
            </div>
        </div>
    );
};

export default Invoice;


//====================================================================================================


// const Invoice = () => {
//     // Fake data for demonstration
//     const userInfo = {
//         name: "John Doe",
//         email: "johndoe@example.com",
//         address: "123 Health St, Wellness City, HC 45678",
//     };

//     const purchaseInfo = [
//         {
//             name: "Paracetamol",
//             company: "MediCorp",
//             quantity: 2,
//             pricePerUnit: 5.99,
//             total: 11.98,
//         },
//         {
//             name: "Ibuprofen",
//             company: "HealthPlus",
//             quantity: 1,
//             pricePerUnit: 8.49,
//             total: 8.49,
//         },
//     ];

//     const subtotal = purchaseInfo.reduce((acc, item) => acc + item.total, 0);
//     const tax = subtotal * 0.1; // 10% tax as an example
//     const grandTotal = subtotal + tax;

//     // Function to handle printing (this will trigger the browser's print dialog)
//     const handlePrint = () => {
//         window.print();
//     };
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
//             <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg">
//                 {/* Header */}
//                 <div className="flex justify-between items-center border-b pb-4">
//                     <div className="flex items-center">
//                         <img
//                             src="https://via.placeholder.com/50" // Replace with your website logo URL
//                             alt="Website Logo"
//                             className="w-12 h-12 mr-4"
//                         />
//                         <h1 className="text-3xl font-bold text-blue-700">
//                             MediShop Invoice
//                         </h1>
//                     </div>
//                     <div className="text-right">
//                         <p className="text-gray-600">Invoice #INV-00123</p>
//                         <p className="text-gray-600">Date: March 26, 2025</p>
//                     </div>
//                 </div>

//                 {/* User Info */}
//                 <div className="mt-6">
//                     <h2 className="text-xl font-semibold text-gray-800">Billed To:</h2>
//                     <p className="text-gray-700">{userInfo.name}</p>
//                     <p className="text-gray-700">{userInfo.email}</p>
//                     <p className="text-gray-700">{userInfo.address}</p>
//                 </div>

//                 {/* Purchase Info Table */}
//                 <div className="mt-8">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                         Purchase Details
//                     </h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full text-left border-collapse">
//                             <thead className="bg-blue-600 text-white">
//                                 <tr>
//                                     <th className="p-3">Medicine Name</th>
//                                     <th className="p-3">Company</th>
//                                     <th className="p-3">Quantity</th>
//                                     <th className="p-3">Price/Unit</th>
//                                     <th className="p-3">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {purchaseInfo.map((item, index) => (
//                                     <tr
//                                         key={index}
//                                         className="border-b hover:bg-gray-50 transition-colors"
//                                     >
//                                         <td className="p-3">{item.name}</td>
//                                         <td className="p-3">{item.company}</td>
//                                         <td className="p-3">{item.quantity}</td>
//                                         <td className="p-3">${item.pricePerUnit.toFixed(2)}</td>
//                                         <td className="p-3">${item.total.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Summary */}
//                 <div className="mt-8 flex justify-end">
//                     <div className="w-64 bg-gray-50 p-4 rounded-lg shadow-sm">
//                         <div className="flex justify-between text-gray-700">
//                             <span>Subtotal:</span>
//                             <span>${subtotal.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between text-gray-700 mt-2">
//                             <span>Tax (10%):</span>
//                             <span>${tax.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between text-lg font-bold text-blue-700 mt-3 border-t pt-2">
//                             <span>Grand Total:</span>
//                             <span>${grandTotal.toFixed(2)}</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-10 flex justify-between items-center border-t pt-4">
//                     <div className="text-gray-600">
//                         <p>MediShop - Your Trusted Pharmacy</p>
//                         <p>Contact: support@medishop.com | +1-800-123-4567</p>
//                     </div>
//                     <button
//                         onClick={handlePrint}
//                         className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                         <FaPrint className="mr-2" />
//                         Print Invoice
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Invoice;



//====================================================================================



// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import { FaDownload, FaPrint } from "react-icons/fa";

// const Invoice = () => {
//     const invoiceRef = useRef(); // ✅ Ref for PDF download

//     console.log();
    
//     const invoiceData = {
//         invoiceNumber: "INV-20250401",
//         date: "2025-04-01",
//         customerName: "John Doe",
//         customerEmail: "john.doe@example.com",
//         customerAddress: "123 Main Street, New York, USA",
//         paymentMethod: "Stripe",
//         transactionId: "txn_123456789",
//         paymentStatus: "Paid",
//         orderItems: [
//             { name: "Paracetamol", quantity: 2, price: 10, discount: 5, total: 19 },
//             { name: "Ibuprofen", quantity: 1, price: 15, discount: 0, total: 15 },
//         ],
//     };

//     const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

//     // ✅ Ensure the reference is valid
//     const handleDownloadPDF = useReactToPrint({
//         content: () => invoiceRef.current || null, // Ensure a valid reference is returned
//         documentTitle: `Invoice-${invoiceData.invoiceNumber}`,
//     });

//     return (
//         <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
//             <div ref={invoiceRef} className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold text-[#0D6FEC]">Invoice</h2>
//                     <p className="text-base-content/70">#{invoiceData.invoiceNumber}</p>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="mt-6 border-b pb-4 border-base-300">
//                     <h3 className="text-lg font-semibold text-base-content mb-4">Order Summary</h3>
//                     <table className="min-w-full bg-base-100">
//                         <thead className="bg-base-200">
//                             <tr>
//                                 <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Medicine</th>
//                                 <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Qty</th>
//                                 <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Price</th>
//                                 <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Discount</th>
//                                 <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Total</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-base-300">
//                             {invoiceData.orderItems.map((item, index) => (
//                                 <tr key={index} className="hover:bg-base-200">
//                                     <td className="py-3 px-4 text-sm text-base-content">{item.name}</td>
//                                     <td className="py-3 px-4 text-sm text-base-content">{item.quantity}</td>
//                                     <td className="py-3 px-4 text-sm text-base-content">${item.price.toFixed(2)}</td>
//                                     <td className="py-3 px-4 text-sm text-base-content">{item.discount}%</td>
//                                     <td className="py-3 px-4 text-sm text-base-content">${item.total.toFixed(2)}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Grand Total */}
//                 <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
//                     <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
//                     <span className="text-2xl font-bold text-[#0D6FEC]">${grandTotal.toFixed(2)}</span>
//                 </div>
//             </div>

//             {/* Buttons: Print & Download */}
//             <div className="mt-6 flex justify-center gap-4">
//                 <button onClick={() => window.print()} className="btn bg-[#35C7DF] hover:bg-[#0D6FEC] text-white flex items-center gap-2 px-6">
//                     <FaPrint /> Print Invoice
//                 </button>
//                 <button onClick={handleDownloadPDF} className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6">
//                     <FaDownload /> Download PDF
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Invoice;
