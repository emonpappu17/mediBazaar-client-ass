import { FaDownload, FaPrint } from "react-icons/fa";
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import logo from '../../assets/websiteLogo.png'

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
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 30
    },
    title: {
        // fontSize: 20,
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
    col1: { width: '30%' },
    col2: { width: '15%' },
    col3: { width: '15%' },
    col4: { width: '20%' },
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
        <Page
            size="A4"
            style={styles.page}>
            {/* Header */}
            <View style={[styles.section, styles.header]}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image src={logo} style={{
                        width: '65px',
                        height: '65px',
                    }}></Image>
                    <Text style={styles.title}>Invoice</Text>
                </View>
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
    </Document >
);


export default InvoicePDF;