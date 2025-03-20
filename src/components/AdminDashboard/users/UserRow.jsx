import { useState } from 'react';
import avatarImg from '../../../assets/placeholder.jpg';
import clsx from 'clsx';
import { format } from 'date-fns';
import { MdMoreVert } from 'react-icons/md';
import RoleUpdateModal from './RoleUpdateModal';
import PropTypes from 'prop-types';
import { useUpdateUserRole } from '../../../services/userService';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const UserRow = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(user.role);
    const { user: loggedInUser } = useAuth();
    const { mutateAsync } = useUpdateUserRole();

    const getRoleBadgeColor = (role) => ({
        admin: "bg-purple-100 text-purple-800",
        seller: "bg-blue-100 text-blue-800",
        user: "bg-gray-100 text-gray-800",
    }[role] || "bg-gray-100 text-gray-800");

    const handleRoleUpdate = async () => {
        if (loggedInUser.email === user.email) {
            setIsModalOpen(false);
            setSelectedRole(user.role)
            return toast.error('Can not change own role')
        }

        if (user.role === selectedRole) {
            return setIsModalOpen(false);
        }

        try {
            await mutateAsync({ email: user.email, role: selectedRole })
            setIsModalOpen(false);
            toast.success('Role changed successfully')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
            setIsModalOpen(false);
        }
        setIsModalOpen(false);
    };

    return (
        <tr className="hover:bg-base-200">
            <td className="py-3 px-4">
                <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full object-cover" src={user?.image || avatarImg} alt={`${user.name} avatar`} />
                    <div className="ml-4 font-medium text-base-content">{user.name}</div>
                </div>
            </td>
            <td className="py-3 px-4 text-sm text-base-content">{user.email}</td>
            <td className="py-3 px-4">
                <p className={clsx("px-2 py-1 inline-flex text-xs font-semibold rounded-full capitalize", getRoleBadgeColor(user.role))}>
                    {user.role}
                </p>
            </td>
            <td className="py-3 px-4 text-sm text-base-content text-nowrap">{format(new Date(user.createdAt), "yyyy-MM-dd")}</td>
            <td className="py-3 px-4 text-sm text-base-content">
                <button className="text-base-content cursor-pointer hover:scale-110 hover:bg-base-300 rounded-md p-2 transition-transform"
                    onClick={() => setIsModalOpen(true)}>
                    <MdMoreVert className="h-5 w-5" />
                </button>

                <RoleUpdateModal
                    user={user}
                    isModalOpen={isModalOpen}
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                    closeModal={() => setIsModalOpen(false)}
                    handleRoleUpdate={handleRoleUpdate}
                />

            </td>
        </tr>
    );
};

UserRow.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.oneOf(["admin", "seller", "user"]).isRequired,
        image: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserRow;
