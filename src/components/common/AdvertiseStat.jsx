import PropTypes from "prop-types";

const AdvertiseStat = ({ advertises }) => {
    return (
        <>
            <div className="bg-base-100 rounded-lg drop-shadow-md p-6 mb-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-base-content mb-1">Advertisement Management</h1>
                    <p className="text-sm text-base-content/70">
                        Track and manage all advertisement submissions
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Total Advertisements Card */}
                    <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                                    Total Advertisements
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    {advertises?.advertisements?.length}
                                </p>
                            </div>
                            <div className="bg-primary/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Approved Card */}
                    <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-success uppercase tracking-wider mb-1">
                                    Approved
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    {advertises?.counts?.approved}
                                </p>
                            </div>
                            <div className="bg-success/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Pending Card */}
                    <div className="bg-warning/10 rounded-lg p-4 border-l-4 border-warning shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-warning uppercase tracking-wider mb-1">
                                    Pending
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    {advertises?.counts?.pending}
                                </p>
                            </div>
                            <div className="bg-warning/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Rejected Card */}
                    <div className="bg-error/10 rounded-lg p-4 border-l-4 border-error shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-error uppercase tracking-wider mb-1">
                                    Rejected
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    {advertises?.counts?.rejected}
                                </p>
                            </div>
                            <div className="bg-error/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

AdvertiseStat.propTypes = {
    advertises: PropTypes.shape({
        advertisements: PropTypes.arrayOf(PropTypes.object),
        counts: PropTypes.shape({
            approved: PropTypes.number,
            pending: PropTypes.number,
            rejected: PropTypes.number,
        }),
    }),
};

export default AdvertiseStat;