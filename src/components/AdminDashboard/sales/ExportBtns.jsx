import { useDownloadExcel } from "react-export-table-to-excel";
import { FaFileCsv, FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { handleExportCsv, handleExportDoc, handleExportPdf } from "../../../services/tableExportService";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const ExportBtns = ({ tableRef, payments, isLoading }) => {
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef,
        filename: 'Sales Report',
        sheet: 'Payments'
    })

    // Export to Excel
    const handleExport = () => {
        if (payments.length === 0 && !isLoading) {
            return toast.error('No payment data to export')
        }
        onDownload();
        toast.success('Excel Exported Successfully!');
    }
    return (
        <div className="flex items-center gap-3 ">
            {/* Excel Button */}
            <button
                className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700  shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                title="Export to Excel"
                aria-label="Export to Excel"
                onClick={handleExport}
            >
                <FaFileExcel className="text-xl" />
            </button>

            {/* PDF Button */}
            <button
                className="flex items-center justify-center p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
                onClick={() => handleExportPdf(payments)}
                title="Export to PDF"
                aria-label="Export to PDF"
            >
                <FaFilePdf className="text-xl" />
            </button>

            {/* Word Button */}
            <button
                className="flex items-center justify-center p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
                onClick={() => handleExportDoc(payments)}
                title="Export to Word"
                aria-label="Export to Word"
            >
                <FaFileWord className="text-xl" />
            </button>

            {/* CSV Button */}
            <button
                className="flex items-center justify-center p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
                onClick={() => handleExportCsv(payments)}
                title="Export to CSV"
                aria-label="Export to CSV"
            >
                <FaFileCsv className="text-xl" />
            </button>
        </div >
    );
};

ExportBtns.propTypes = {
    tableRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired,
    payments: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default ExportBtns;