import { FaDownload, FaPrint } from "react-icons/fa";
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Define styles for PDF
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica'
    },
    section: {
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0D6FEC'
    },
    invoiceNumber: {
        fontSize: 14,
        color: '#666'
    },
    twoColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingBottom: 20,
        borderBottom: '1px solid #eee'
    },
    column: {
        width: '48%'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        color: '#555'
    },
    table: {
        width: '100%',
        marginBottom: 20,
        borderBottom: '1px solid #eee',
        paddingBottom: 20
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        padding: 8,
        fontWeight: 'bold'
    },
    tableRow: {
        flexDirection: 'row',
        padding: 8,
        borderBottom: '1px solid #f5f5f5'
    },
    col1: { width: '40%' },
    col2: { width: '15%' },
    col3: { width: '15%' },
    col4: { width: '15%' },
    col5: { width: '15%' },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingTop: 10,
        borderTop: '1px solid #eee'
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0D6FEC'
    },
    statusPaid: {
        color: '#22c55e',
        fontWeight: 'bold'
    }
});

// PDF Document Component
const InvoicePDF = ({ invoiceData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={[styles.section, styles.header]}>
                <Text style={styles.title}>Invoice</Text>
                <Text style={styles.invoiceNumber}>#{invoiceData.invoiceNumber}</Text>
            </View>

            {/* Customer & Seller Info */}
            <View style={[styles.section, styles.twoColumn]}>
                <View style={styles.column}>
                    <Text style={styles.subtitle}>Customer Details</Text>
                    <Text style={styles.text}>{invoiceData.customerName}</Text>
                    <Text style={styles.text}>{invoiceData.customerEmail}</Text>
                    <Text style={styles.text}>{invoiceData.customerAddress}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.subtitle}>Seller Details</Text>
                    <Text style={styles.text}>{invoiceData.sellerName}</Text>
                    <Text style={styles.text}>{invoiceData.sellerEmail}</Text>
                </View>
            </View>

            {/* Order Summary */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Order Summary</Text>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <Text style={styles.col1}>Medicine</Text>
                        <Text style={styles.col2}>Qty</Text>
                        <Text style={styles.col3}>Price</Text>
                        <Text style={styles.col4}>Discount</Text>
                        <Text style={styles.col5}>Total</Text>
                    </View>

                    {/* Table Rows */}
                    {invoiceData.orderItems.map((item, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.col1}>{item.name}</Text>
                            <Text style={styles.col2}>{item.quantity}</Text>
                            <Text style={styles.col3}>${item.price.toFixed(2)}</Text>
                            <Text style={styles.col4}>{item.discount}%</Text>
                            <Text style={styles.col5}>${item.total.toFixed(2)}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Payment Info */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Payment Information</Text>
                <Text style={styles.text}>Payment Method: <Text style={{ fontWeight: 'bold' }}>{invoiceData.paymentMethod}</Text></Text>
                <Text style={styles.text}>Transaction ID: <Text style={{ fontWeight: 'bold' }}>{invoiceData.transactionId}</Text></Text>
                <Text style={styles.text}>Payment Status: <Text style={styles.statusPaid}>{invoiceData.paymentStatus}</Text></Text>
            </View>

            {/* Grand Total */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Grand Total:</Text>
                <Text style={styles.totalAmount}>${invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0).toFixed(2)}</Text>
            </View>
        </Page>
    </Document>
);

const Invoice = () => {
    // Invoice data
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

    // Calculate grand total
    const grandTotal = invoiceData.orderItems.reduce((acc, item) => acc + item.total, 0);

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-base-200">
            {/* Display invoice */}
            <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg border border-base-300">
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

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-4">
                {/* <button
                    onClick={() => window.print()}
                    className="btn bg-[#35C7DF] hover:bg-[#0D6FEC] text-white flex items-center gap-2 px-6"
                >
                    <FaPrint /> Print Invoice
                </button> */}

                <PDFDownloadLink
                    document={<InvoicePDF invoiceData={invoiceData} />}
                    fileName={`invoice-${invoiceData.invoiceNumber}.pdf`}
                    className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white flex items-center gap-2 px-6"
                >
                    {({ loading }) => (
                        loading ? 'Preparing document...' : <><FaDownload /> Download PDF</>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default Invoice;




