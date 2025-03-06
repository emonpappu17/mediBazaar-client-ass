// import { Dialog } from "@headlessui/react";

import { Dialog } from "@headlessui/react";

const UserDetailsModal = ({ user, onClose }) => {
    return (
        <Dialog open={true} onClose={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                <Dialog.Title className="text-xl font-bold">User Details</Dialog.Title>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Status:</strong> {user.status}</p>

                <button onClick={onClose} className="btn btn-sm btn-primary mt-4">Close</button>
            </div>
        </Dialog>
    );
};

export default UserDetailsModal;
