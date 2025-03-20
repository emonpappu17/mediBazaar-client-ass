import PropTypes from "prop-types";

const AdvertiseStat = ({ advertises }) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 mb-6 gap-5">
            {/* Total Advertisement Card */}
            <div className="p-5 rounded-lg bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center ">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-200 dark:bg-blue-900 rounded-full">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-base-content/70">Total Advertisement</p>
                        <p className="text-2xl font-semibold text-base-content">{advertises?.advertisements?.length}</p>
                    </div>
                </div>
            </div>

            {/* Approved Card */}
            <div className="p-5 rounded-lg bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-200 dark:bg-green-900 rounded-full">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-base-content/70">Approved</p>
                        <p className="text-2xl font-semibold text-base-content">{advertises?.counts?.approved}</p>
                    </div>
                </div>
            </div>

            {/* Pending Card */}
            <div className="p-5 rounded-lg bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-yellow-200 dark:bg-yellow-900 rounded-full">
                        <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-base-content/70">Pending</p>
                        <p className="text-2xl font-semibold text-base-content">{advertises?.counts?.pending}</p>
                    </div>
                </div>
            </div>

            {/* Rejected Card */}
            <div className="p-5 rounded-lg bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-200 dark:bg-red-900 rounded-full">
                        <svg className="w-6 h-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-base-content/70">Rejected</p>
                        <p className="text-2xl font-semibold text-base-content">{advertises?.counts?.rejected}</p>
                    </div>
                </div>
            </div>
        </div>
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