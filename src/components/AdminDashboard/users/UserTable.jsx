// import UserRow from "./UserRow";
// import Pagination from "../../../components/common/Pagination";

import UserRow from "./UserRow";

// Fake User Data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Seller", status: "Inactive" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "User", status: "Active" },
];

const UserTable = ({ search, roleFilter }) => {
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) &&
        (roleFilter ? user.role === roleFilter : true)
    );

    return (
        <div className="overflow-x-auto">
            <table className="table w-full bg-base-100 rounded-lg shadow-md">
                {/* Table Head */}
                <thead className="bg-gray-200">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {filteredUsers.map(user => <UserRow key={user.id} user={user} />)}
                </tbody>
            </table>

            {/* Pagination Placeholder */}
            {/* <Pagination /> */}
        </div>
    );
};

export default UserTable;
