// import useAuth from "../../hooks/useAuth";

const AdminNavbar = () => {
    // const { user, logOut } = useAuth();

    return (
        <div className="bg-base-100 shadow-md py-4 px-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
            <div className="flex items-center gap-4">
                <p className="text-lg">Emon howlader</p>
                <button className="btn btn-sm btn-outline" >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar;
