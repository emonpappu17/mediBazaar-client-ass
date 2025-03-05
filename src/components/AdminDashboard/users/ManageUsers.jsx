// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

const SELECT_CLASS = "block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D6FEC] focus:ring-opacity-50";

const ManageUsers = () => {
    //   const [users, setUsers] = useState(null);
    //   const [loading, setLoading] = useState(true);
    //   const [searchQuery, setSearchQuery] = useState('');

    //   useEffect(() => {
    //     fetchUsers();
    //   }, []);

    //   const fetchUsers = async () => {
    //     try {
    //       const response = await Axios.get('/api/users');
    //       setUsers(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   const handleRoleChange = async (userId, newRole) => {
    //     const confirm = await Swal.fire({
    //       title: 'Confirm Role Change',
    //       text: `Are you sure you want to change the role of this user to ${newRole}?`,
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#0D6FEC',
    //       cancelButtonColor: '#d33',
    //       confirmButtonText: 'Yes, change role'
    //     });

    //     if (confirm.isConfirmed) {
    //       try {
    //         setUsers(prevUsers => prevUsers.map(user => {
    //           if (user._id === userId) {
    //             return { ...user, role: newRole };
    //           }
    //           return user;
    //         }));
    //         await Axios.put(`api/user/${userId}`, { role: newRole });
    //         Swal.fire('Role changed successfully!', '', 'success');
    //       } catch (error) {
    //         setUsers(prevUsers => prevUsers.map(user => {
    //           if (user._id === userId) {
    //             const originalUser = prevUsers.find(u => u._id === userId);
    //             return { ...user, role: originalUser.role };
    //           }
    //           return user;
    //         }));
    //         Swal.fire('Error changing role', error.message, 'error');
    //         console.error(error);
    //       }
    //     }
    //   };

    //   const handleSearch = e => {
    //     setSearchQuery(e.target.value);
    //   };

    //   const filteredUsers = users ? users.filter(user => {
    //     const query = searchQuery.toLowerCase();
    //     return user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
    //   }) : [];

    //   if (loading) {
    //     return <div className="text-center text-gray-500">Loading...</div>;
    //   }

    //   if (!users || users.length === 0) {
    //     return <div className="text-center text-gray-500">No users found.</div>;
    //   }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Manage Users</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D6FEC] focus:ring-opacity-50"
                //   value={searchQuery}
                //   onChange={handleSearch}
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th colSpan="4" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Total users: 48 
                                {/* {filteredUsers.length} */}
                                </th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {/* {filteredUsers.map(user => (
                  <tr key={user._id} className="bg-white hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{user.role}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <select
                        value={user.role}
                        className={SELECT_CLASS}
                        onChange={e => handleRoleChange(user._id, e.target.value)}
                      >
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))} */}

                        <tr  className="bg-white hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Limon</td>
                            <td className="px-6 py-4 whitespace-no-wrap">limon@gmail.com</td>
                            <td className="px-6 py-4 whitespace-no-wrap">admin</td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                <select
                                    value={'admin'}
                                    className={SELECT_CLASS}
                                    // onChange={e => handleRoleChange(user._id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="seller">Seller</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                        </tr>
                        <tr  className="bg-white hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-no-wrap">Limon</td>
                            <td className="px-6 py-4 whitespace-no-wrap">limon@gmail.com</td>
                            <td className="px-6 py-4 whitespace-no-wrap">admin</td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                <select
                                    value={'admin'}
                                    className={SELECT_CLASS}
                                    // onChange={e => handleRoleChange(user._id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="seller">Seller</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>





        // <div className="container mx-auto p-4">
        //     <h1 className="text-2xl font-semibold mb-4 text-center text-base-content">Manage Users</h1>
        //     <div className="mb-4">
        //         <input
        //             type="text"
        //             placeholder="Search by name or email"
        //             className="block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D6FEC] focus:ring-opacity-50"
        //         />
        //     </div>
        //     <div className="overflow-x-auto">
        //         <table className="min-w-full divide-y divide-gray-200">
        //             <thead>
        //                 <tr>
        //                     <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
        //                     <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
        //                     <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Role</th>
        //                     <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tfoot>
        //                 <tr>
        //                     <th colSpan="4" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Total users: 0</th>
        //                 </tr>
        //             </tfoot>
        //             <tbody>
        //                 <tr className="bg-white hover:bg-gray-100">
        //                     <td className="px-6 py-4 whitespace-no-wrap">John Doe</td>
        //                     <td className="px-6 py-4 whitespace-no-wrap">john@example.com</td>
        //                     <td className="px-6 py-4 whitespace-no-wrap">User</td>
        //                     <td className="px-6 py-4 whitespace-no-wrap">
        //                         <select
        //                             className="block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D6FEC] focus:ring-opacity-50"
        //                         >
        //                             <option value="user">User</option>
        //                             <option value="seller">Seller</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </td>
        //                 </tr>
        //                 {/* Add more rows as needed for example */}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
};

export default ManageUsers;