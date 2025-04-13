import { format } from "date-fns";
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
import toast from "react-hot-toast";

applyPlugin(jsPDF)
// const doc = new jsPDF('l');

// Making PDF
// export const handleExportPdf = (payments) => {
//     if (!payments || payments.length === 0) return toast.error('No payment data to export');

//     console.log('handleExportPdf', payments);

//     const table = document.getElementById('my-table');
//     if (!table) {
//         toast.error('Table not found!')
//         return;
//     }

//     // Create a NEW jsPDF instance each time
//     const doc = new jsPDF('l');

//     // Extract headers and rows for the table

//     // const headers = Array.from(table.querySelectorAll('thead th'))
//     //     .map(th => th.textContent);
//     const headers = [
//         'Customer',
//         'Transaction ID',
//         'Medicines',
//         'Seller',
//         'Date',
//         'Amount',
//         'Status'
//     ];

//     // const rows = Array.from(table.querySelectorAll('tbody tr'))
//     //     .map(tr => Array.from(tr.cells)
//     //         .map(td => td.textContent.replace(/\s*\n\s*/g, ' ').trim()));

//     // Create table rows
//     const rows = payments?.map(payment => {
//         // Format medicines information
//         const medicinesText = payment.items.map(medicine =>
//             `${medicine.name} (Qty: ${medicine.quantity}, Price: $${medicine.finalPrice.toFixed(2)})`
//         ).join("\n");

//         // Format seller information
//         const sellerText = payment.items.map(medicine =>
//             `${medicine.name.slice(0, 4)}... (${medicine.sellerEmail || 'Random'})`
//         ).join("\n");

//         return [
//             payment.userEmail || "",
//             payment.transactionId || "",
//             medicinesText,
//             sellerText,
//             format(new Date(payment.createdAt), 'MMM dd, yyyy'),
//             `$${payment.totalAmount.toFixed(2)}`,
//             payment.paymentStatus === 'Pending' ? 'Pending' : 'Paid'
//         ];
//     });

//     // Add title
//     doc.setFontSize(16);
//     doc.text("Sales Report", 14, 10);

//     // Create PDF
//     doc.autoTable({
//         head: [headers],
//         body: rows,
//         startY: 20,
//         theme: 'grid',
//         styles: {
//             cellPadding: 2,
//             fontSize: 10,
//             // overflow: 'ellipsize',
//             // cellWidth: 'wrap',
//             halign: 'left',
//         },
//         headStyles: {
//             fillColor: [41, 128, 185], // DaisyUI primary color (blue) approximated
//             textColor: [255, 255, 255], // White text
//             fontStyle: 'bold',
//         },
//         bodyStyles: {
//             fillColor: [245, 245, 245], // Light gray for body (matches light theme)
//             textColor: [0, 0, 0], // Black text
//             alternateRowStyles: { fillColor: [255, 255, 255] }, // White for alternating rows
//         },
//         // pageBreak: 'always',
//         // rowPageBreak: 'avoid'
//         horizontalPageBreak: true,
//         // horizontalPageBreakBehaviour: 'immediately',
//     });

//     // Add title
//     // doc.setFontSize(16);
//     // doc.text("Sales Report", 14, 10);
//     // doc.text("Hello world!", 10, 10);

//     // Save the PDF
//     doc.save('sales_report.pdf');
//     toast.success('PDF Exported Successfully!!')
// };

// Making PDF
export const handleExportPdf = (payments) => {
    if (!payments || payments.length === 0) {
        toast.error('No payment data to export');
        return;
    }

    // Create a NEW jsPDF instance each time
    const doc = new jsPDF('l');

    try {
        // Extract headers from the first payment (or define manually)
        const headers = [
            'Customer',
            'Transaction ID',
            'Medicines',
            'Seller',
            'Date',
            'Amount',
            'Status'
        ];

        // Create table rows from current payments data
        const rows = payments.map(payment => {
            // Format medicines information
            const medicinesText = payment.items.map(medicine =>
                `${medicine.name} (Qty: ${medicine.quantity}, Price: $${medicine.finalPrice.toFixed(2)})`
            ).join("\n");

            // Format seller information
            const sellerText = payment.items.map(medicine =>
                `${medicine.name.slice(0, 4)}... (${medicine.sellerEmail || 'Random'})`
            ).join("\n");

            return [
                payment.userEmail || "",
                payment.transactionId || "",
                medicinesText,
                sellerText,
                format(new Date(payment.createdAt), 'MMM dd, yyyy'),
                `$${payment.totalAmount.toFixed(2)}`,
                payment.paymentStatus === 'Pending' ? 'Pending' : 'Paid'
            ];
        });

        // Add title
        doc.setFontSize(16);
        doc.text("Sales Report", 14, 10);

        // Create PDF table with current data only
        doc.autoTable({
            head: [headers],
            body: rows,
            startY: 20,
            theme: 'grid',
            styles: {
                cellPadding: 2,
                fontSize: 10,
                halign: 'left',
            },
            headStyles: {
                fillColor: [41, 128, 185],
                textColor: [255, 255, 255],
                fontStyle: 'bold',
            },
            bodyStyles: {
                fillColor: [245, 245, 245],
                textColor: [0, 0, 0],
                alternateRowStyles: { fillColor: [255, 255, 255] },
            },
            horizontalPageBreak: true,
        });

        // Save the PDF
        doc.save('sales_report.pdf');
        toast.success('PDF Exported Successfully!');
    } catch (error) {
        console.error('PDF export error:', error);
        toast.error('Failed to export PDF');
    }
};

// Making DOC
export const handleExportDoc = async (payments) => {
    if (!payments || payments.length === 0) {
        toast.error('No payment data to export');
        return;
    }

    // Prepare the table headers
    const headers = [
        "Customer",
        "Transaction ID",
        "Medicines",
        "Seller",
        "Date",
        "Amount",
        "Status"
    ];

    // Create table rows
    const rows = payments?.map(payment => {
        // Format medicines information
        const medicinesText = payment.items.map(medicine =>
            `${medicine.name} (Qty: ${medicine.quantity}, Price: $${medicine.finalPrice.toFixed(2)})`
        ).join("\n");

        // Format seller information
        const sellerText = payment.items.map(medicine =>
            `${medicine.name.slice(0, 4)}... (${medicine.sellerEmail || 'Random'})`
        ).join("\n");

        return [
            payment.userEmail || "",
            payment.transactionId || "",
            medicinesText,
            sellerText,
            format(new Date(payment.createdAt), 'MMM dd, yyyy'),
            `$${payment.totalAmount.toFixed(2)}`,
            payment.paymentStatus === 'Pending' ? 'Pending' : 'Paid'
        ];
    });

    // Create Word document table structure
    const tableRows = [
        new TableRow({
            children: headers.map(header => new TableCell({
                children: [new Paragraph({
                    children: [new TextRun({
                        text: header,
                        bold: true,
                        size: 22
                    })]
                })],
                width: {
                    size: 2000,
                    type: WidthType.DXA
                },
            })),
        }),
        ...rows.map(row => new TableRow({
            children: row.map(cell => new TableCell({
                children: [new Paragraph({
                    children: [new TextRun({
                        text: cell,
                        size: 20
                    })]
                })],
                width: {
                    size: 2000,
                    type: WidthType.DXA
                },
            })),
        }))
    ];

    // Create the document
    const doc = new Document({
        sections: [{
            children: [
                new Table({
                    rows: tableRows,
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE
                    }
                })
            ]
        }]
    });

    // Generate and download the document
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "payments_report.docx");
    toast.success('DOC Exported Successfully!');
};

// Making CSV
export const handleExportCsv = (payments) => {
    if (!payments || payments.length === 0) {
        toast.error('No payment data to export');
        return;
    }

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
        ).join("\n");

        const sellers = payment.items.map(item =>
            `${item.name.slice(0, 4)}... (${item.sellerEmail || 'Random'})`
        ).join("\n");

        return [
            `"${payment.userEmail}"`,
            `"${payment.transactionId}"`,
            `"${medicines}"`,
            `"${sellers}"`,
            `"${format(new Date(payment.createdAt), 'MMM dd, yyyy')}"`,
            `$${payment.totalAmount.toFixed(2)}`,
            payment.paymentStatus,
        ];
    });

    // Combine headers and data
    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');

    // Create download link REAL
    // const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const blob = new Blob([csvContent], { type: 'text/csv' })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'sales_report.csv')
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
    toast.success('CSV Exported Successfully!');
}