import { DownloadTableExcel } from "react-export-table-to-excel";
import { FaFileCsv, FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";
import { handleExportCsv, handleExportDoc, handleExportPdf } from "../../../services/tableExportService";

const ExportBtns = ({ tableRef, payments }) => {
    return (
        <div className="flex items-center gap-3 ">
            {/* Excel Button */}
            <DownloadTableExcel
                filename="Sales Report"
                sheet="users"
                currentTableRef={tableRef}
            >
                <button
                    className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700  shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                    title="Export to Excel"
                    aria-label="Export to Excel"
                >
                    <FaFileExcel className="text-xl" />
                </button>
            </DownloadTableExcel>

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
        </div>
    );
};

export default ExportBtns;