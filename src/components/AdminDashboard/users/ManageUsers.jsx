// import { useState } from "react";
// import SearchFilter from "./SearchFilter";
// import UserTable from "./UserTable";
// import { FiSearch, FiUserPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
// import { HiChevronUpDown } from 'react-icons/hi2';


import { useUsers } from '../../../services/userService';
import { MoreVertical, Shield, UserMinus, UserPlus } from 'lucide';
import avatarImg from '../../../assets/placeholder.jpg'
import { AiFillAppstore } from "react-icons/ai";
import { MdMoreVert } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { format } from 'date-fns';




const ManageUsers = () => {

    const { data, isLoading, error } = useUsers();
    // console.log('ManageUsers', data);

    if (isLoading) return <p>loading...</p>
    if (error) return <p>error</p>

    // const getRoleBadgeColor = (role) => {
    //     console.log('getRoleBadgeColor', role);

    //     if (role === 'admin') {
    //         return 'bg-indigo-600'
    //     }
    //     else if (role === 'seller') {
    //         return 'bg-green-500'
    //     }
    //     else {
    //         return 'bg-blue-500'
    //     }
    // }

    const getRoleBadgeColor = (role) => {
        switch (role) {
            case 'admin': return 'bg-purple-100 text-purple-800';
            case 'seller': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    return (
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

        // <>
        //     {/* Users Table */}
        //     <div className="overflow-x-auto">
        //         <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        //             <thead className="bg-gray-50 ">
        //                 <tr className="border-b-gray-200 border-b">
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined Date</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="divide-y divide-gray-200 ">
        //                 {data?.map((user) => (
        //                     <tr key={user._id} className="hover:bg-gray-50">
        //                         <td className="py-3 px-4">
        //                             <div className="flex items-center">
        //                                 <div className="h-10 w-10 flex-shrink-0">
        //                                     <img className="h-10 w-10 rounded-full object-cover"
        //                                         src={user && user?.image ? user?.image : avatarImg}
        //                                         alt={`${user.name} avatar`} />
        //                                 </div>
        //                                 <div className="ml-4">
        //                                     <div className="font-medium text-gray-900">{user.name}</div>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-gray-500">{user.email}</td>
        //                         <td className="py-3 px-4">
        //                             <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800`}>
        //                                 {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-gray-500">{user.createdAt}</td>
        //                         <td className="py-3 px-4">
        //                             <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full  bg-green-100 text-green-800`}>
        //                                 {/* {user.status.charAt(0).toUpperCase() + user.status.slice(1)} */}active
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-gray-500">
        //                             <div className="relative group">
        //                                 <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
        //                                     <MdMoreVert className="h-5 w-5" />

        //                                 </button>
        //                                 {/* modal here */}



        //                                 {/* <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg  z-10 hidden group-hover:block border">
        //                                     <div className="py-1">
        //                                         {user.role !== 'seller' && user.role !== 'admin' && (
        //                                             <button

        //                                                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
        //                                             >
        //                                                 <CiUser className="mr-2 h-4 w-4" />

        //                                                 Make Seller
        //                                             </button>
        //                                         )}
        //                                         {user.role !== 'admin' && (
        //                                             <button

        //                                                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
        //                                             >

        //                                                 Make Admin
        //                                             </button>
        //                                         )}
        //                                         {(user.role === 'seller' || user.role === 'admin') && (
        //                                             <button

        //                                                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
        //                                             >

        //                                                 Downgrade to User
        //                                             </button>
        //                                         )}
        //                                     </div>
        //                                 </div> */}
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </>

        // final look
        <>
            <div className="overflow-x-auto  drop-shadow-md rounded-lg">
                <table className="min-w-full bg-base-100 rounded-lg  ">
                    <thead className="bg-base-200">
                        <tr className="border-b border-base-300">
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">User</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Email</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Role</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Joined Date</th>
                            {/* <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th> */}
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300">
                        {data?.map((user) => (
                            <tr key={user._id} className="hover:bg-base-200">
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full object-cover "
                                                src={user?.image || avatarImg}
                                                alt={`${user.name} avatar`} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="font-medium text-base-content text-nowrap">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-base-content">{user.email}</td>
                                <td className="py-3 px-4">
                                    {/* text-primary-content */}
                                    {/*  {user.role.charAt(0).toUpperCase() + user.role.slice(1)} */}
                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full capitalize  ${getRoleBadgeColor(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                                    {/* {user.createdAt} */}
                                    {(format(new Date(user.createdAt), "yyyy-MM-dd"))}
                                </td>
                                {/* <td className="py-3 px-4">
                                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-success text-success-content">
                                        Active
                                    </span>
                                </td> */}
                                <td className="py-3 px-4 text-sm text-base-content">
                                    <div className="relative group">
                                        <button className="
                                        text-base-content  cursor-pointer  transition-transform hover:scale-110  hover:bg-base-300  rounded-md p-2
                                        ">
                                            <MdMoreVert className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>


        // <>
        //     <div className="overflow-x-auto shadow-md rounded-lg">
        //         <table className="min-w-full text-sm text-left text-base-content dark:text-base-content-dark">
        //             <thead className="text-xs text-base-content-medium uppercase bg-base-200 dark:bg-base-700">
        //                 <tr>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">User</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Email</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Role</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Joined Date</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="divide-y divide-base-300 dark:divide-base-700">
        //                 {data?.map((user) => (
        //                     <tr key={user._id} className="bg-base-100 dark:bg-base-800 hover:bg-base-200 dark:hover:bg-base-600">
        //                         <td className="py-3 px-4">
        //                             <div className="flex items-center">
        //                                 <div className="h-10 w-10 flex-shrink-0 border-2 border-base-300 rounded-full">
        //                                     <img className="h-10 w-10 rounded-full object-cover"
        //                                         src={user?.image || avatarImg}
        //                                         alt={user.name + " avatar"} />
        //                                 </div>
        //                                 <div className="ml-4">
        //                                     <div className="font-medium text-base-content">{user.name}</div>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-base-content">{user.email}</td>
        //                         <td className="py-3 px-4">
        //                             <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary text-primary-content">
        //                                 {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-base-content">{user.createdAt}</td>
        //                         <td className="py-3 px-4">
        //                             <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-success text-success-content">
        //                                 Active
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-base-content">
        //                             <div className="relative group">
        //                                 <button className="text-base-content hover:text-primary cursor-pointer transition-transform hover:scale-110">
        //                                     <MdMoreVert className="h-5 w-5" />
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </>




        // <div className="p-6 bg-base-100 rounded-lg shadow-sm">
        //     {/* Header Section */}
        //     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        //         <div>
        //             <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
        //             <p className="text-gray-500 mt-1">48 total users</p>
        //         </div>
        //         <button className="btn btn-primary">
        //             <FiUserPlus className="text-xl mr-2" />
        //             Add New User
        //         </button>
        //     </div>

        //     {/* Controls Section */}
        //     <div className="flex flex-col md:flex-row gap-4 mb-6">
        //         <div className="relative flex-1">
        //             <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
        //             <input
        //                 type="text"
        //                 placeholder="Search users..."
        //                 className="input input-bordered w-full pl-10"
        //                 value={searchQuery}
        //                 onChange={(e) => setSearchQuery(e.target.value)}
        //             />
        //         </div>

        //         <select
        //             className="select select-bordered w-full md:w-48"
        //             value={selectedRole}
        //             onChange={(e) => setSelectedRole(e.target.value)}
        //         >
        //             <option value="all">All Roles</option>
        //             <option value="user">User</option>
        //             <option value="seller">Seller</option>
        //             <option value="admin">Admin</option>
        //         </select>
        //     </div>

        //     {/* Users Table */}
        //     <div className="overflow-x-auto rounded-lg border">
        //         <table className="table table-zebra">
        //             <thead className="bg-gray-50">
        //                 <tr>
        //                     <th className="w-12"></th>
        //                     <th>Name <HiChevronUpDown className="inline-block ml-1 text-gray-400" /></th>
        //                     <th>Email</th>
        //                     <th>Role</th>
        //                     <th>Status</th>
        //                     <th>Joined</th>
        //                     <th>Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {users.map((user) => (
        //                     <tr key={user.id}>
        //                         <td>
        //                             <div className="avatar">
        //                                 <div className="w-10 rounded-full">
        //                                     <img src={user.avatar} alt={user.name} />
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td className="font-medium">{user.name}</td>
        //                         <td>{user.email}</td>
        //                         <td>
        //                             <select
        //                                 className="select select-bordered select-sm w-32"
        //                                 value={user.role}
        //                                 onChange={(e) => {/* Add role change handler */ }}
        //                             >
        //                                 <option value="user">User</option>
        //                                 <option value="seller">Seller</option>
        //                                 <option value="admin">Admin</option>
        //                             </select>
        //                         </td>
        //                         <td>
        //                             <span className="badge badge-success badge-sm">
        //                                 {user.status}
        //                             </span>
        //                         </td>
        //                         <td>{new Date(user.joined).toLocaleDateString()}</td>
        //                         <td>
        //                             <div className="flex gap-2">
        //                                 <button className="btn btn-ghost btn-sm">
        //                                     <FiEdit className="text-lg" />
        //                                 </button>
        //                                 <button className="btn btn-ghost btn-sm text-error">
        //                                     <FiTrash2 className="text-lg" />
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>

        //     {/* Pagination */}
        //     <div className="flex justify-end mt-6">
        //         <div className="join">
        //             <button className="join-item btn btn-sm">1</button>
        //             <button className="join-item btn btn-sm btn-active">2</button>
        //             <button className="join-item btn btn-sm">3</button>
        //             <button className="join-item btn btn-sm">4</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ManageUsers;


