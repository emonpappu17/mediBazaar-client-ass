import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { handleExportDoc, handleExportPdf } from "../../../services/tableExportService";

const ManageSales = () => {
    const tableRef = useRef(null);

    // API Calls (assuming useAllPayment is a custom hook)
    const { data: payments = [] } = useAllPayment();

    const handleExportCsv = () => {
        // Prepare headers
        const headers = [
            'Customer Email',
            'Transaction ID',
            'Medicines',
            'Seller',
            'Date',
            'Amount',
            'Status'
        ];

        // Prepare data rows
        const rows = payments?.map(payment => {
            const medicines = payment.items.map(item =>
                `${item.name} (Qty: ${item.quantity}, Price: $${item.finalPrice.toFixed(2)})`
            ).join('; ');

            const sellers = payment.items.map(item =>
                `${item.name.slice(0, 4)}... (${item.sellerEmail || 'Random'})`
            ).join('; ');

            return [
                `"${payment.userEmail}"`,
                `"${payment.transactionId}"`,
                `"${medicines}"`,
                `"${sellers}"`,
                `"${format(new Date(payment.createdAt), 'MMM dd, yyyy')}"`,
                `$${payment.totalAmount.toFixed(2)}`,
                payment.paymentStatus
            ];
        });

        // Combine headers and data
        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        console.log('rows', rows);

        console.log('csvContent', csvContent);

        // Create download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'sales_report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);





        // const data = payments?.map(payment => {
        //     const medicines = payment.items.map(item =>
        //         `${item.name} (Qty: ${item.quantity}, Price: $${item.finalPrice.toFixed(2)})`
        //     ).join('; ');

        //     const sellers = payment.items.map(item =>
        //         `${item.name.slice(0, 4)}... (${item.sellerEmail || 'Random'})`
        //     ).join('; ');

        //     return {
        //         'Customer Email': payment.userEmail,
        //         'Transaction ID': payment.transactionId,
        //         'Medicines': medicines,
        //         'Seller': sellers,
        //         'Date': format(new Date(payment.createdAt), 'MMM dd, yyyy'),
        //         'Amount': `$${payment.totalAmount.toFixed(2)}`,
        //         'Status': payment.paymentStatus
        //     };
        // });


        // console.log(data);

        // const csv = Papa.unparse(data, {
        //     quotes: true,
        //     header: true
        // });
        // console.log('csv', csv);


        // const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'sales_report.csv');
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);





        // if (!payments || payments.length === 0) {
        //     alert('No data to export');
        //     return;
        // }

        // // CSV escape function
        // const escapeCsv = (value) => {
        //     console.log('value', value);

        //     if (value === null || value === undefined) return '';
        //     if (typeof value === 'number') return value.toString();
        //     return `"${String(value).replace(/"/g, '""')}"`;
        // };

        // // Headers
        // const headers = [
        //     'Customer Email', 'Transaction ID', 'Medicines',
        //     'Seller', 'Date', 'Amount', 'Status'
        // ].map(escapeCsv).join(',');

        // // Rows
        // const rows = payments.map(payment => {
        //     const medicines = payment.items.map(item =>
        //         `${item.name} (Qty: ${item.quantity}, Price: $${item.finalPrice.toFixed(2)})`
        //     ).join(' | ');

        //     const sellers = payment.items.map(item =>
        //         `${item.name.slice(0, 4)}... (${item.sellerEmail || 'Random'})`
        //     ).join(' | ');

        //     return [
        //         payment.userEmail,
        //         payment.transactionId,
        //         medicines,
        //         sellers,
        //         format(new Date(payment.createdAt), 'MMM dd, yyyy'),
        //         payment.totalAmount.toFixed(2),
        //         payment.paymentStatus
        //     ].map(escapeCsv).join(',');
        // });

        // // Full CSV content
        // const csvContent = [headers, ...rows].join('\n');
        // console.log('csvContent', csvContent);

        // // Download
        // const blob = new Blob([csvContent], { type: 'text/csv' });
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = `sales_report_${new Date().toISOString().slice(0, 10)}.csv`;
        // document.body.appendChild(link);
        // link.click();
        // setTimeout(() => {
        //     document.body.removeChild(link);
        //     URL.revokeObjectURL(url);
        // }, 100);
    }

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
                <button className="btn btn-primary ml-4" onClick={() => handleExportPdf(payments)}>Export PDF</button>
                <button className="btn btn-primary ml-4" onClick={() => handleExportDoc(payments)}>Export Word</button>
                <button className="btn btn-primary ml-4" onClick={handleExportCsv}>Export CSV</button>
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