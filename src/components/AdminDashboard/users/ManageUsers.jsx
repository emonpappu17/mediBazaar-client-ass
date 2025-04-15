import { useUsers } from '../../../services/userService';
import TableSkeleton from '../../common/TableSkeleton';
import UserRow from './UserRow';

const ManageUsers = () => {
    //API Call
    const { data, isLoading, isError } = useUsers();
    return (
        <>
            {
                isLoading ? (
                    <TableSkeleton />
                ) : (
                    isError ? (
                        <div className="bg-error/10 text-error p-4 rounded-lg mb-6 text-center">
                            Failed to load users data. Please try again.
                        </div>
                    ) : (
                        data?.length === 0 ? (
                            <div className="bg-base-200 p-6 rounded-lg text-center">
                                <p className="text-base-content">No user records found.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto drop-shadow-md rounded-lg">
                                <table className="min-w-full divide-y divide-base-300">
                                    <thead className="bg-base-200">
                                        <tr>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">
                                                User
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">
                                                Joined Date
                                            </th>
                                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-base-300 bg-base-100">
                                        {data?.map((user) => (
                                            <UserRow key={user._id} user={user} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )
                )
            }


        </>
    );
};

export default ManageUsers;


