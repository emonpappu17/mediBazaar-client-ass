import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';
import Button from '../../common/Button';

const roles = ["admin", "seller", "user"];

const RoleUpdateModal = ({ user, isModalOpen, selectedRole, setSelectedRole, closeModal, handleRoleUpdate }) => {
    return (
        <Dialog open={isModalOpen} as='div' onClose={closeModal} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-sm bg-base-100  rounded-lg shadow-xl p-6   duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                    <DialogTitle className="text-lg font-medium text-base-content">Update Role for {user?.name}</DialogTitle>
                    <p className="mt-2 text-sm text-base-content/70">Select a new role from the dropdown below.</p>

                    <Listbox value={selectedRole} onChange={setSelectedRole}>
                        <div className="relative mt-4">
                            <ListboxButton className="w-full bg-base-200  text-base-content rounded-md py-2 px-3 flex justify-between">
                                <p>{selectedRole}</p>
                                <p className="pointer-events-none">▼</p>
                            </ListboxButton>
                            <ListboxOptions className="absolute mt-1 w-full bg-base-100 dark:bg-base-800 rounded-md shadow-lg max-h-60 overflow-auto z-10">
                                {roles.map((role) => (
                                    <ListboxOption key={role} value={role} className="relative cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200">
                                        {({ selected }) => (
                                            <div className="flex items-center justify-between">
                                                <p className={selected ? "font-semibold capitalize" : "font-normal capitalize"}>{role}</p>
                                                {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                            </div>
                                        )}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </div>
                    </Listbox>

                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={closeModal} className="px-4 py-2 bg-base-300  text-base-content rounded-md hover:bg-base-400 transition-colors">
                            Close
                        </button>
                        <Button text='Change Role' onclick={handleRoleUpdate} className='px-4 py-2 rounded-md'></Button>
                        {/* <button onClick={handleRoleUpdate} className="px-4 py-2 bg-[#0D6FEC] text-primary-content rounded-md hover:bg-[#0D6FEC]/90 transition-colors">
                            Change Role
                        </button> */}
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

RoleUpdateModal.propTypes = {
    user: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    selectedRole: PropTypes.string.isRequired,
    setSelectedRole: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleRoleUpdate: PropTypes.func.isRequired,
};

export default RoleUpdateModal;