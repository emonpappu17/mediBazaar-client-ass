import { Link } from "react-router";
import Button from "../../components/common/Button";

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>

                <form className="space-y-4">
                    {/* Username Field */}
                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-sm font-medium">Role</label>
                        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="user">User</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <Button text="Sign Up" type="submit" className="w-full" />
                </form>

                {/* Google Signup Button */}
                <button className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600 transition">
                    Sign Up with Google
                </button>

                {/* Already Have an Account? */}
                <p className="mt-4 text-center text-sm">
                    Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;









