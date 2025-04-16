import { format } from "date-fns";
import { useAllPayment } from "../../../services/paymentService";
import { FaChartLine, FaCheckCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ExportBtns from "./ExportBtns";
import "react-datepicker/dist/react-datepicker.css";
import TableSkeleton from "../../common/TableSkeleton";
import StatsSkeleton from "../../common/StatsSkeleton";
import StatCard from "../../common/StatCard";
import ManageSalesRow from "./ManageSalesRow";
import SalesFilter from "./SalesFilter";

const ManageSales = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [tableEl, setTableEl] = useState(null);
    const tableRef = useRef(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // API Calls
    const { data: payments = [], isLoading, isError } = useAllPayment(
        startDate,
        endDate,
        searchTerm,
        statusFilter
    );

    // Filter Date
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // Getting ref of table
    useEffect(() => {
        if (tableRef.current) {
            setTableEl(tableRef.current);
        }
    }, [payments]);

    // Calculate stats for the summary cards
    const totalRevenue = payments.reduce((sum, p) => sum + (p.paymentStatus === 'Paid' ? p.totalAmount : 0), 0);
    const avgOrderValue = payments.length
        ? (payments.reduce((sum, p) => sum + p.totalAmount, 0) / payments.length).toFixed(2)
        : "0.00";
    const pendingCount = payments.filter(p => p.paymentStatus === 'Pending').length;
    const paidCount = payments.filter(p => p.paymentStatus === 'Paid').length;

    return (
        <div>
            {/* Title and Filters */}
            <SalesFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                isLoading={isLoading}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
            />

            {/* Stats Cards */}
            {
                isLoading ? (
                    <StatsSkeleton count={4} />
                ) : isError ? (
                    <div className="bg-error/10 text-error p-4 rounded-lg mb-6 text-center">
                        Failed to load statistics
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <StatCard
                            title="Total Revenue"
                            value={`$${totalRevenue.toFixed(2)}`}
                            icon={<FaMoneyBillWave className="text-primary" />}
                            color="primary"
                        />
                        <StatCard
                            title="Avg. Order Value"
                            value={`$${avgOrderValue}`}
                            icon={<FaChartLine className="text-info" />}
                            color="info"
                        />
                        <StatCard
                            title="Pending Payments"
                            value={pendingCount}
                            icon={<FaClock className="text-warning" />}
                            color="warning"
                        />
                        <StatCard
                            title="Completed Payments"
                            value={paidCount}
                            icon={<FaCheckCircle className="text-success" />}
                            color="success"
                        />
                    </div>
                )
            }

            {/* Main Content */}
            {
                isLoading ? (
                    <TableSkeleton />
                ) : isError ? (
                    <div className="bg-error/10 text-error p-6 rounded-lg text-center">
                        Failed to load payment data. Please try again.
                    </div>
                ) : payments.length === 0 ? (
                    <div className="bg-base-200 p-6 rounded-lg text-center">
                        <p className="text-base-content">No payment records found.</p>
                        {startDate && endDate && (
                            <p className="text-sm text-base-content/70 mt-1">
                                Between  {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}
                            </p>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto drop-shadow-md">
                            <table id="my-table" className="min-w-full bg-base-100 rounded-lg" ref={tableRef}>
                                <thead className="bg-base-200">
                                    <tr className="border-b border-base-300">
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Customer</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Transaction ID</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Medicines</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Seller</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Date</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Amount</th>
                                        <th className="py-3 px-4 text-left text-sm font-semibold text-base-content uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-base-300">
                                    {payments?.map((payment) => (
                                        <ManageSalesRow key={payment._id} payment={payment} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center mt-4 bg-base-200 p-2 rounded-lg">
                            <div className="text-sm text-base-content">
                                Showing <span className="font-semibold">{payments.length}</span> transactions
                                {startDate && endDate && (
                                    <span> between {format(startDate, 'MMM d, yyyy')} and {format(endDate, 'MMM d, yyyy')}</span>
                                )}
                            </div>
                            <ExportBtns
                                isLoading={isLoading}
                                tableRef={tableEl}
                                payments={payments}
                            />
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default ManageSales;

