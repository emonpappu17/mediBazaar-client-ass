// import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useState } from "react";
// import UserDetailsModal from "./UserDetailsModal";

import { useState } from "react";
import UserDetailsModal from "./UserDetailsModal";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const UserRow = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <tr className="border-b border-gray-300">
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <span className={`badge ${user.role === "Admin" ? "badge-primary" : user.role === "Seller" ? "badge-secondary" : "badge-accent"}`}>
                    {user.role}
                </span>
            </td>
            <td>
                <span className={`badge ${user.status === "Active" ? "badge-success" : "badge-error"}`}>
                    {user.status}
                </span>
            </td>
            <td className="flex gap-2">
                <button className="btn btn-sm btn-outline" onClick={() => setIsModalOpen(true)}>
                    <FaEye />
                </button>
                <button className="btn btn-sm btn-outline">
                    <FaEdit />
                </button>
                <button className="btn btn-sm btn-error">
                    <FaTrash />
                </button>
            </td>

            {/* User Details Modal */}
            {isModalOpen && <UserDetailsModal user={user} onClose={() => setIsModalOpen(false)} />}
        </tr>
    );
};

export default UserRow;
