// import { useState } from "react";
// import SearchFilter from "./SearchFilter";
// import UserTable from "./UserTable";
import { FiSearch, FiUserPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
import { HiChevronUpDown } from 'react-icons/hi2';


import { useState } from "react";

const ManageUsers = () => {
    // const [search, setSearch] = useState("");
    // const [roleFilter, setRoleFilter] = useState("");


    // Demo data - replace with real data later
    const [users] = useState([
        {
            id: 1,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            avatar: 'https://i.pravatar.cc/40?img=1',
            role: 'admin',
            status: 'active',
            joined: '2023-03-15'
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'michael@example.com',
            avatar: 'https://i.pravatar.cc/40?img=2',
            role: 'seller',
            status: 'active',
            joined: '2023-04-22'
        },
        // Add more demo users...
    ]);

    // Demo filter state
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState('all');


    return (
        // <div className="p-6 bg-base-100 shadow-lg rounded-lg">
        //     <h2 className="text-3xl font-bold mb-4 text-base-content">Manage Users</h2>

        //     {/* Search & Filter */}
        //     <SearchFilter
        //         search={search}
        //         setSearch={setSearch}
        //         roleFilter={roleFilter}
        //         setRoleFilter={setRoleFilter}
        //     />

        //     {/* User Table */}
        //     <UserTable search={search} roleFilter={roleFilter} />
        // </div>



        // <>
        //     <h1 className="text-2xl font-semibold mb-4 text-base-content">Manage Users</h1>
        //     <input
        //         type="text"
        //         placeholder="Search by name or email"
        //         className="input input-bordered w-full mb-4 focus:ring-2 focus:ring-primary"
        //     />
        //     <div className="overflow-x-auto">
        //         <table className="table hover w-full">
        //             <thead className="bg-secondary text-base-content">
        //                 <tr>
        //                     <th className="text-base-content/70">Name</th>
        //                     <th className="text-base-content/70">Email</th>
        //                     <th className="text-base-content/70">Role</th>
        //                     <th className="text-base-content/70">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tfoot>
        //                 <tr>
        //                     <th colSpan="4" className="text-base-content/70">Total users: 5</th>
        //                 </tr>
        //             </tfoot>
        //             <tbody>
        //                 <tr className="hover:bg-gray-100">
        //                     <td>John Doe</td>
        //                     <td>john@example.com</td>
        //                     <td>User</td>
        //                     <td>
        //                         <select
        //                             className="select select-sm w-full max-w-xs focus:ring-2 focus:ring-primary rounded-md"
        //                             defaultValue="user"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="seller">Seller</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </td>
        //                 </tr>
        //                 <tr className="hover:bg-gray-100">
        //                     <td>Jane Smith</td>
        //                     <td>jane@example.com</td>
        //                     <td>Seller</td>
        //                     <td>
        //                         <select
        //                             className="select select-sm w-full max-w-xs focus:ring-2 focus:ring-primary rounded-md"
        //                             defaultValue="seller"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="seller">Seller</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </td>
        //                 </tr>
        //                 <tr className="hover:bg-gray-100">
        //                     <td>Bob Johnson</td>
        //                     <td>bob@example.com</td>
        //                     <td>Admin</td>
        //                     <td>
        //                         <select
        //                             className="select select-sm w-full max-w-xs focus:ring-2 focus:ring-primary rounded-md"
        //                             defaultValue="admin"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="seller">Seller</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </td>
        //                 </tr>
        //                 <tr className="hover:bg-gray-100">
        //                     <td>Alice Brown</td>
        //                     <td>alice@example.com</td>
        //                     <td>User</td>
        //                     <td>
        //                         <select
        //                             className="select select-sm w-full max-w-xs focus:ring-2 focus:ring-primary rounded-md"
        //                             defaultValue="user"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="seller">Seller</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </td>
        //                 </tr>
        //                 <tr className="hover:bg-gray-100">
        //                     <td>Charlie Wilson</td>
        //                     <td>charlie@example.com</td>
        //                     <td>Seller</td>
        //                     <td>
        //                         <select
        //                             className="select select-sm w-full max-w-xs focus:ring-2 focus:ring-primary rounded-md"
        //                             defaultValue="seller"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="seller">Seller</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </>




        <div className="p-6 bg-base-100 rounded-lg shadow-sm">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
                    <p className="text-gray-500 mt-1">48 total users</p>
                </div>
                <button className="btn btn-primary">
                    <FiUserPlus className="text-xl mr-2" />
                    Add New User
                </button>
            </div>

            {/* Controls Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="input input-bordered w-full pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <select
                    className="select select-bordered w-full md:w-48"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                >
                    <option value="all">All Roles</option>
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto rounded-lg border">
                <table className="table table-zebra">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="w-12"></th>
                            <th>Name <HiChevronUpDown className="inline-block ml-1 text-gray-400" /></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Joined</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.avatar} alt={user.name} />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-medium">{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <select
                                        className="select select-bordered select-sm w-32"
                                        value={user.role}
                                        onChange={(e) => {/* Add role change handler */ }}
                                    >
                                        <option value="user">User</option>
                                        <option value="seller">Seller</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td>
                                    <span className="badge badge-success badge-sm">
                                        {user.status}
                                    </span>
                                </td>
                                <td>{new Date(user.joined).toLocaleDateString()}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="btn btn-ghost btn-sm">
                                            <FiEdit className="text-lg" />
                                        </button>
                                        <button className="btn btn-ghost btn-sm text-error">
                                            <FiTrash2 className="text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-6">
                <div className="join">
                    <button className="join-item btn btn-sm">1</button>
                    <button className="join-item btn btn-sm btn-active">2</button>
                    <button className="join-item btn btn-sm">3</button>
                    <button className="join-item btn btn-sm">4</button>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;


