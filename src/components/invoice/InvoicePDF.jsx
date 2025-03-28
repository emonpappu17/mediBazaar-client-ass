import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/websiteLogo.png'
import { format } from "date-fns";
import PropTypes from 'prop-types';

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
        alignItems: 'center',
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
        fontSize: 12,
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
    col2: { width: '17%' },
    col3: { width: '17%' },
    col4: { width: '17%' },
    col5: { width: '17%' },
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
                <Text style={styles.invoiceNumber}>##INV-20250401</Text>
            </View>

            {/* Customer & Seller Info */}
            <View style={[styles.section, styles.twoColumn]}>
                <View style={styles.column}>
                    <Text style={styles.subtitle}>Customer Details</Text>
                    <Text style={styles.text}>{invoiceData.name}</Text>
                    <Text style={styles.text}>{invoiceData.userEmail}</Text>
                    <Text style={styles.text}>{invoiceData.address}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.subtitle}>Shop Details</Text>
                    <Text style={styles.text}>MediBazaar Pharmacy</Text>
                    <Text style={styles.text}>medibazaar@gmail.com</Text>
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
                    {invoiceData.items.map((item, index) => {

                        // Calculating itemTotal price
                        const itemTotal = item.finalPrice * item.quantity

                        return (
                            <View key={index} style={styles.tableRow}>
                                <Text style={styles.col1}>{item.name}</Text>
                                <Text style={styles.col2}>{item.quantity}</Text>
                                <Text style={styles.col3}>${item.price.toFixed(2)}</Text>
                                <Text style={styles.col4}>{item.discount}%</Text>
                                <Text style={styles.col5}>${itemTotal.toFixed(2)}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>

            {/* Payment Info */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Payment Information</Text>
                <Text style={styles.text}>Payment Method: <Text style={{ fontWeight: 'bold' }}>{invoiceData.paymentMethod}</Text></Text>
                <Text style={styles.text}>Transaction ID: <Text style={{ fontWeight: 'bold' }}>{invoiceData.transactionId}</Text></Text>
                <Text style={styles.text}>Payment Date: <Text style={{ fontWeight: 'bold' }}>{invoiceData.createdAt ? format(new Date(invoiceData.createdAt), "yyyy-MM-dd") : '2025-03-15'}</Text></Text>
                <Text style={styles.text}>Payment Status: <Text style={styles.statusPaid}>Paid</Text></Text>
            </View>

            {/* Grand Total */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Grand Total:</Text>
                <Text style={styles.totalAmount}>${invoiceData.totalAmount.toFixed(2)}</Text>
            </View>
        </Page>
    </Document >
);
InvoicePDF.propTypes = {
    invoiceData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        userEmail: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                discount: PropTypes.number.isRequired,
                finalPrice: PropTypes.number.isRequired,
            })
        ).isRequired,
        paymentMethod: PropTypes.string.isRequired,
        transactionId: PropTypes.string.isRequired,
        createdAt: PropTypes.string, // Assuming createdAt is an ISO date string
        totalAmount: PropTypes.number.isRequired,
    }).isRequired,
};

export default InvoicePDF;