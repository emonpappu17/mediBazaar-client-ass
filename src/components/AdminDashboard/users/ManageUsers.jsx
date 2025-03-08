import { useUsers } from '../../../services/userService';
import UserRow from './UserRow';

const ManageUsers = () => {
    //API Call
    const { data, isLoading, error } = useUsers();

    if (isLoading) return <p>loading...</p>
    if (error) return <p>error</p>

    return (
        <>
            <div className="overflow-x-auto drop-shadow-md rounded-lg">
                <table className="min-w-full bg-base-100 rounded-lg">
                    <thead className="bg-base-200">
                        <tr className="border-b border-base-300">
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">User</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Email</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Role</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Joined Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300">
                        {data?.map((user) => (
                            <UserRow key={user._id} user={user}></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageUsers;


