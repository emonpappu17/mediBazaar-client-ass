// import React, { useRef } from "react";
// import { FaDownload, FaPrint } from "react-icons/fa";
// import { useReactToPrint } from "react-to-print";




// const Invoice = () => {

//     // Dummy Data (Replace with actual data from backend)
//     const invoiceData = {
//         invoiceNumber: "INV-20250401",
//         date: "2025-04-01",
//         customerName: "John Doe",
//         customerEmail: "john.doe@example.com",
//         customerAddress: "123 Main Street, New York, USA",
//         paymentMethod: "Stripe",
//         transactionId: "txn_123456789",
//         paymentStatus: "Paid",
//         sellerName: "MediBazaar Pharmacy",
//         sellerEmail: "seller@medibazaar.com",
//         orderItems: [
//             {
//                 name: "Paracetamol",
//                 quantity: 2,
//                 price: 10,
//                 discount: 5, // In percentage
//                 total: 19, // After discount
//             },
//             {
//                 name: "Ibuprofen",
//                 quantity: 1,
//                 price: 15,
//                 discount: 0,
//                 total: 15,
//             },
//         ],
//     };

//     // Calculate Grand Total
//     const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

//     return (
//         <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
//             <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300" 
//             >
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold text-[#0D6FEC]">Invoice</h2>
//                     <p className="text-base-content/70">#{invoiceData.invoiceNumber}</p>
//                 </div>

//                 {/* Customer & Seller Info */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-base-300">
//                     <div>
//                         <h3 className="text-lg font-semibold text-base-content">Customer Details</h3>
//                         <p className="text-base-content/70">{invoiceData.customerName}</p>
//                         <p className="text-base-content/70">{invoiceData.customerEmail}</p>
//                         <p className="text-base-content/70">{invoiceData.customerAddress}</p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-semibold text-base-content">Seller Details</h3>
//                         <p className="text-base-content/70">{invoiceData.sellerName}</p>
//                         <p className="text-base-content/70">{invoiceData.sellerEmail}</p>
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="mt-6 border-b pb-4 border-base-300">
//                     <h3 className="text-lg font-semibold text-base-content mb-4">Order Summary</h3>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full bg-base-100">
//                             <thead className="bg-base-200">
//                                 <tr>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Medicine</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Qty</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Price</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Discount</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-base-300">
//                                 {invoiceData.orderItems.map((item, index) => (
//                                     <tr key={index} className="hover:bg-base-200">
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.name}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.quantity}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">${item.price.toFixed(2)}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.discount}%</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">${item.total.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Payment Info */}
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold text-base-content mb-2">Payment Information</h3>
//                     <p className="text-base-content/70">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
//                     <p className="text-base-content/70">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
//                     <p className="text-base-content/70">Payment Status: <span className="font-semibold text-green-600">{invoiceData.paymentStatus}</span></p>
//                 </div>

//                 {/* Grand Total */}
//                 <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
//                     <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
//                     <span className="text-2xl font-bold text-[#0D6FEC]">${grandTotal.toFixed(2)}</span>
//                 </div>
//             </div>

//             {/* Buttons: Print & Download */}
//             <div className="mt-6 flex justify-center gap-4">
//                 {/* <button
//                     onClick={() => window.print()}
//                     className="btn bg-[#35C7DF] hover:bg-[#0D6FEC] text-white flex items-center gap-2 px-6">
//                     <FaPrint /> Print Invoice
//                 </button> */}
//                 <button                 
//                     className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6">
//                     <FaDownload /> Download PDF
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Invoice;

//=========================================================



// import { FaDownload, FaPrint } from "react-icons/fa";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { useRef } from "react";

// const Invoice = () => {
//     const invoiceRef = useRef();

//     // Dummy Data (Replace with actual data from backend)
//     const invoiceData = {
//         invoiceNumber: "INV-20250401",
//         date: "2025-04-01",
//         customerName: "John Doe",
//         customerEmail: "john.doe@example.com",
//         customerAddress: "123 Main Street, New York, USA",
//         paymentMethod: "Stripe",
//         transactionId: "txn_123456789",
//         paymentStatus: "Paid",
//         sellerName: "MediBazaar Pharmacy",
//         sellerEmail: "seller@medibazaar.com",
//         orderItems: [
//             {
//                 name: "Paracetamol",
//                 quantity: 2,
//                 price: 10,
//                 discount: 5, // In percentage
//                 total: 19, // After discount
//             },
//             {
//                 name: "Ibuprofen",
//                 quantity: 1,
//                 price: 15,
//                 discount: 0,
//                 total: 15,
//             },
//         ],
//     };

//     // Calculate Grand Total
//     const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

//     // PDF download handler
//     const handleDownloadPdf = () => {
//         const input = invoiceRef.current;

//         // Set a fixed width for the PDF (A4 width in pixels at 96 DPI)
//         const pdfWidth = 794; // ~210mm at 96 DPI
//         const pdfHeight = (input.scrollHeight * pdfWidth) / input.scrollWidth;

//         html2canvas(input, {
//             scale: 2, // Higher quality
//             logging: false,
//             useCORS: true,
//             allowTaint: true,
//             scrollX: 0,
//             scrollY: 0,
//             width: input.scrollWidth,
//             height: input.scrollHeight,
//             windowWidth: input.scrollWidth,
//             windowHeight: input.scrollHeight,
//             ignoreElements: (element) => {
//                 // Ignore elements with unsupported color functions
//                 const styles = window.getComputedStyle(element);
//                 return styles.color.includes('oklch') ||
//                     styles.backgroundColor.includes('oklch');
//             },
//             backgroundColor: '#ffffff' // Force white background
//         }).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
//             pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//             pdf.save(`invoice-${invoiceData.invoiceNumber}.pdf`);
//         });
//     };

//     // Print handler using the same PDF generation
//     const handlePrint = () => {
//         handleDownloadPdf(); // You could also implement direct printing here if needed
//     };

//     return (
//         <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
//             <div
//                 ref={invoiceRef}
//                 className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300"
//             >
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold text-[#0D6FEC]">Invoice</h2>
//                     <p className="text-base-content/70">#{invoiceData.invoiceNumber}</p>
//                 </div>

//                 {/* Customer & Seller Info */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-base-300">
//                     <div>
//                         <h3 className="text-lg font-semibold text-base-content">Customer Details</h3>
//                         <p className="text-base-content/70">{invoiceData.customerName}</p>
//                         <p className="text-base-content/70">{invoiceData.customerEmail}</p>
//                         <p className="text-base-content/70">{invoiceData.customerAddress}</p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-semibold text-base-content">Seller Details</h3>
//                         <p className="text-base-content/70">{invoiceData.sellerName}</p>
//                         <p className="text-base-content/70">{invoiceData.sellerEmail}</p>
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="mt-6 border-b pb-4 border-base-300">
//                     <h3 className="text-lg font-semibold text-base-content mb-4">Order Summary</h3>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full bg-base-100">
//                             <thead className="bg-base-200">
//                                 <tr>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Medicine</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Qty</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Price</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Discount</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-base-300">
//                                 {invoiceData.orderItems.map((item, index) => (
//                                     <tr key={index} className="hover:bg-base-200">
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.name}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.quantity}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">${item.price.toFixed(2)}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.discount}%</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">${item.total.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Payment Info */}
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold text-base-content mb-2">Payment Information</h3>
//                     <p className="text-base-content/70">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
//                     <p className="text-base-content/70">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
//                     <p className="text-base-content/70">Payment Status: <span className="font-semibold text-green-600">{invoiceData.paymentStatus}</span></p>
//                 </div>

//                 {/* Grand Total */}
//                 <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
//                     <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
//                     <span className="text-2xl font-bold text-[#0D6FEC]">${grandTotal.toFixed(2)}</span>
//                 </div>
//             </div>

//             {/* Buttons: Print & Download */}
//             <div className="mt-6 flex justify-center gap-4">
//                 <button
//                     onClick={handlePrint}
//                     className="btn bg-[#35C7DF] hover:bg-[#0D6FEC] text-white flex items-center gap-2 px-6"
//                 >
//                     <FaPrint /> Print Invoice
//                 </button>
//                 <button
//                     onClick={handleDownloadPdf}
//                     className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6"
//                 >
//                     <FaDownload /> Download PDF
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Invoice;


// =============================================================
//claude


// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { FaDownload } from 'react-icons/fa';

// const Invoice = () => {
//     // Dummy Data (Replace with actual data from backend)
//     const invoiceData = {
//         invoiceNumber: "INV-20250401",
//         date: "2025-04-01",
//         customerName: "John Doe",
//         customerEmail: "john.doe@example.com",
//         customerAddress: "123 Main Street, New York, USA",
//         paymentMethod: "Stripe",
//         transactionId: "txn_123456789",
//         paymentStatus: "Paid",
//         sellerName: "MediBazaar Pharmacy",
//         sellerEmail: "seller@medibazaar.com",
//         orderItems: [
//             {
//                 name: "Paracetamol",
//                 quantity: 2,
//                 price: 10,
//                 discount: 5, // In percentage
//                 total: 19, // After discount
//             },
//             {
//                 name: "Ibuprofen",
//                 quantity: 1,
//                 price: 15,
//                 discount: 0,
//                 total: 15,
//             },
//         ],
//     };

//     // Calculate Grand Total
//     const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

//     // PDF Download Handler
//     const handleDownloadPDF = () => {
//         const input = document.getElementById('invoice-container');

//         // Increase scale for better quality
//         html2canvas(input, {
//             scale: 2,
//             useCORS: true,
//             logging: false
//         }).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF({
//                 orientation: 'portrait',
//                 unit: 'px',
//                 format: [canvas.width, canvas.height]
//             });

//             // Add image to PDF
//             pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//             // Save PDF with invoice number
//             pdf.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
//         }).catch((err) => {
//             console.error('PDF Generation Error:', err);
//         });
//     };

//     return (
//         <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
//             <div
//                 id="invoice-container"
//                 className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300"
//             >
//                 {/* Rest of your existing invoice code remains the same */}
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold text-[#0D6FEC]">Invoice</h2>
//                     <p className="text-base-content/70">#{invoiceData.invoiceNumber}</p>
//                 </div>

//                 {/* Customer & Seller Info */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-base-300">
//                     <div>
//                         <h3 className="text-lg font-semibold text-base-content">Customer Details</h3>
//                         <p className="text-base-content/70">{invoiceData.customerName}</p>
//                         <p className="text-base-content/70">{invoiceData.customerEmail}</p>
//                         <p className="text-base-content/70">{invoiceData.customerAddress}</p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-semibold text-base-content">Seller Details</h3>
//                         <p className="text-base-content/70">{invoiceData.sellerName}</p>
//                         <p className="text-base-content/70">{invoiceData.sellerEmail}</p>
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="mt-6 border-b pb-4 border-base-300">
//                     <h3 className="text-lg font-semibold text-base-content mb-4">Order Summary</h3>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full bg-base-100">
//                             <thead className="bg-base-200">
//                                 <tr>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Medicine</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Qty</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Price</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Discount</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-base-300">
//                                 {invoiceData.orderItems.map((item, index) => (
//                                     <tr key={index} className="hover:bg-base-200">
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.name}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.quantity}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">${item.price.toFixed(2)}</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">{item.discount}%</td>
//                                         <td className="py-3 px-4 text-sm text-base-content">${item.total.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Payment Info */}
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold text-base-content mb-2">Payment Information</h3>
//                     <p className="text-base-content/70">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
//                     <p className="text-base-content/70">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
//                     <p className="text-base-content/70">Payment Status: <span className="font-semibold text-green-600">{invoiceData.paymentStatus}</span></p>
//                 </div>

//                 {/* Grand Total */}
//                 <div className="mt-6 flex justify-between items-center border-t pt-4 border-base-300">
//                     <h3 className="text-xl font-semibold text-base-content">Grand Total:</h3>
//                     <span className="text-2xl font-bold text-[#0D6FEC]">${grandTotal.toFixed(2)}</span>
//                 </div>
//             </div>

//             {/* Buttons: Download */}
//             <div className="mt-6 flex justify-center gap-4">
//                 <button
//                     onClick={handleDownloadPDF}
//                     className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6">
//                     <FaDownload /> Download PDF
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Invoice;

//================================================
//claude 2

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { FaDownload } from 'react-icons/fa';

// const Invoice = () => {
//     // Dummy Data (Replace with actual data from backend)
//     const invoiceData = {
//         invoiceNumber: "INV-20250401",
//         date: "2025-04-01",
//         customerName: "John Doe",
//         customerEmail: "john.doe@example.com",
//         customerAddress: "123 Main Street, New York, USA",
//         paymentMethod: "Stripe",
//         transactionId: "txn_123456789",
//         paymentStatus: "Paid",
//         sellerName: "MediBazaar Pharmacy",
//         sellerEmail: "seller@medibazaar.com",
//         orderItems: [
//             {
//                 name: "Paracetamol",
//                 quantity: 2,
//                 price: 10,
//                 discount: 5, // In percentage
//                 total: 19, // After discount
//             },
//             {
//                 name: "Ibuprofen",
//                 quantity: 1,
//                 price: 15,
//                 discount: 0,
//                 total: 15,
//             },
//         ],
//     };

//     // Calculate Grand Total
//     const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

//     // PDF Download Handler
//     const handleDownloadPDF = () => {
//         const input = document.getElementById('invoice-container');

//         // Increase scale for better quality
//         html2canvas(input, {
//             scale: 2,
//             useCORS: true,
//             logging: false,
//             backgroundColor: null // Add this to prevent background color parsing issues
//         }).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF({
//                 orientation: 'portrait',
//                 unit: 'px',
//                 format: [canvas.width, canvas.height]
//             });

//             // Add image to PDF
//             pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

//             // Save PDF with invoice number
//             pdf.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
//         }).catch((err) => {
//             console.error('PDF Generation Error:', err);
//         });
//     };

//     return (
//         <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
//             <div
//                 id="invoice-container"
//                 className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-300"
//             >
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold text-blue-600">Invoice</h2>
//                     <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
//                 </div>

//                 {/* Customer & Seller Info */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-gray-300">
//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-800">Customer Details</h3>
//                         <p className="text-gray-600">{invoiceData.customerName}</p>
//                         <p className="text-gray-600">{invoiceData.customerEmail}</p>
//                         <p className="text-gray-600">{invoiceData.customerAddress}</p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-800">Seller Details</h3>
//                         <p className="text-gray-600">{invoiceData.sellerName}</p>
//                         <p className="text-gray-600">{invoiceData.sellerEmail}</p>
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className="mt-6 border-b pb-4 border-gray-300">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white">
//                             <thead className="bg-gray-100">
//                                 <tr>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Medicine</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Qty</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Price</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Discount</th>
//                                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-300">
//                                 {invoiceData.orderItems.map((item, index) => (
//                                     <tr key={index} className="hover:bg-gray-50">
//                                         <td className="py-3 px-4 text-sm text-gray-800">{item.name}</td>
//                                         <td className="py-3 px-4 text-sm text-gray-800">{item.quantity}</td>
//                                         <td className="py-3 px-4 text-sm text-gray-800">${item.price.toFixed(2)}</td>
//                                         <td className="py-3 px-4 text-sm text-gray-800">{item.discount}%</td>
//                                         <td className="py-3 px-4 text-sm text-gray-800">${item.total.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Payment Info */}
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Information</h3>
//                     <p className="text-gray-600">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
//                     <p className="text-gray-600">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
//                     <p className="text-gray-600">Payment Status: <span className="font-semibold text-green-600">{invoiceData.paymentStatus}</span></p>
//                 </div>

//                 {/* Grand Total */}
//                 <div className="mt-6 flex justify-between items-center border-t pt-4 border-gray-300">
//                     <h3 className="text-xl font-semibold text-gray-800">Grand Total:</h3>
//                     <span className="text-2xl font-bold text-blue-600">${grandTotal.toFixed(2)}</span>
//                 </div>
//             </div>

//             {/* Buttons: Download */}
//             <div className="mt-6 flex justify-center gap-4">
//                 <button
//                     onClick={handleDownloadPDF}
//                     className="btn bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 px-6">
//                     <FaDownload /> Download PDF
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Invoice;

//============================
//claude 3
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { FaDownload } from 'react-icons/fa';

const Invoice = () => {
    const invoiceRef = useRef(null);

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
                discount: 5,
                total: 19,
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

    // PDF Download Handler
    const handleDownloadPDF = async () => {
        try {
            // Ensure the ref is current
            const input = invoiceRef.current;
            if (!input) {
                console.error('Invoice container not found');
                return;
            }

            // Create a deep clone of the element to manipulate
            const clonedInput = input.cloneNode(true);
            document.body.appendChild(clonedInput);
            clonedInput.style.position = 'absolute';
            clonedInput.style.left = '-9999px';
            clonedInput.style.width = `${input.offsetWidth}px`;

            // Convert cloned element to canvas
            const canvas = await html2canvas(clonedInput, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#FFFFFF', // Explicitly set white background
                onclone: (documentClone) => {
                    // Apply inline styles to override Tailwind classes
                    const elements = documentClone.querySelectorAll('*');
                    elements.forEach(el => {
                        const computedStyle = window.getComputedStyle(el);
                        el.style.backgroundColor = computedStyle.backgroundColor;
                        el.style.color = computedStyle.color;
                        el.style.borderColor = computedStyle.borderColor;
                    });
                }
            });

            // Remove the cloned element
            document.body.removeChild(clonedInput);

            // Create PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

            // Save PDF with invoice number
            pdf.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
        } catch (err) {
            console.error('PDF Generation Error:', err);
            alert('Failed to generate PDF. Please try again.');
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div
                ref={invoiceRef}
                id="invoice-container"
                className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-300"
                style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-blue-600">Invoice</h2>
                    <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
                </div>

                {/* Customer & Seller Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-4 border-gray-300">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Customer Details</h3>
                        <p className="text-gray-600">{invoiceData.customerName}</p>
                        <p className="text-gray-600">{invoiceData.customerEmail}</p>
                        <p className="text-gray-600">{invoiceData.customerAddress}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Seller Details</h3>
                        <p className="text-gray-600">{invoiceData.sellerName}</p>
                        <p className="text-gray-600">{invoiceData.sellerEmail}</p>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="mt-6 border-b pb-4 border-gray-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Medicine</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Qty</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Price</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Discount</th>
                                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-800 uppercase">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {invoiceData.orderItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-3 px-4 text-sm text-gray-800">{item.name}</td>
                                        <td className="py-3 px-4 text-sm text-gray-800">{item.quantity}</td>
                                        <td className="py-3 px-4 text-sm text-gray-800">${item.price.toFixed(2)}</td>
                                        <td className="py-3 px-4 text-sm text-gray-800">{item.discount}%</td>
                                        <td className="py-3 px-4 text-sm text-gray-800">${item.total.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Information</h3>
                    <p className="text-gray-600">Payment Method: <strong>{invoiceData.paymentMethod}</strong></p>
                    <p className="text-gray-600">Transaction ID: <strong>{invoiceData.transactionId}</strong></p>
                    <p className="text-gray-600">Payment Status: <span className="font-semibold text-green-600">{invoiceData.paymentStatus}</span></p>
                </div>

                {/* Grand Total */}
                <div className="mt-6 flex justify-between items-center border-t pt-4 border-gray-300">
                    <h3 className="text-xl font-semibold text-gray-800">Grand Total:</h3>
                    <span className="text-2xl font-bold text-blue-600">${grandTotal.toFixed(2)}</span>
                </div>
            </div>

            {/* Buttons: Download */}
            <div className="mt-6 flex justify-center gap-4">
                <button
                    onClick={handleDownloadPDF}
                    className="btn bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 px-6">
                    <FaDownload /> Download PDF
                </button>
            </div>
        </div>
    );
};

export default Invoice;

