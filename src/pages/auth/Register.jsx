import { Link } from "react-router";
import Button from "../../components/common/Button";
import { useState } from "react";

const Register = () => {
    const [isSignup, setIsSignup] = useState(false);
    return (
        // <div className="flex justify-center items-center min-h-screen bg-gray-100">
        //     <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        //         <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>

        //         <form className="space-y-4">
        //             {/* Username Field */}
        //             <div>
        //                 <label className="block text-sm font-medium">Username</label>
        //                 <input
        //                     type="text"
        //                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                     placeholder="Enter your username"
        //                 />
        //             </div>

        //             {/* Email Field */}
        //             <div>
        //                 <label className="block text-sm font-medium">Email</label>
        //                 <input
        //                     type="email"
        //                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                     placeholder="Enter your email"
        //                 />
        //             </div>

        //             {/* Password Field */}
        //             <div>
        //                 <label className="block text-sm font-medium">Password</label>
        //                 <input
        //                     type="password"
        //                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                     placeholder="Enter your password"
        //                 />
        //             </div>

        //             {/* Confirm Password Field */}
        //             <div>
        //                 <label className="block text-sm font-medium">Confirm Password</label>
        //                 <input
        //                     type="password"
        //                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                     placeholder="Confirm your password"
        //                 />
        //             </div>

        //             {/* Role Selection */}
        //             <div>
        //                 <label className="block text-sm font-medium">Role</label>
        //                 <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
        //                     <option value="user">User</option>
        //                     <option value="seller">Seller</option>
        //                 </select>
        //             </div>

        //             {/* Submit Button */}
        //             <Button text="Sign Up" type="submit" className="w-full" />
        //         </form>

        //         {/* Google Signup Button */}
        //         <button className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600 transition">
        //             Sign Up with Google
        //         </button>

        //         {/* Already Have an Account? */}
        //         <p className="mt-4 text-center text-sm">
        //             Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        //         </p>
        //     </div>
        // </div>

        <div className={`flex h-screen items-center justify-center bg-gray-100 `}>
            <div className={`relative w-[760px] h-fit bg-white flex overflow-hidden rounded-3xl py-10`}>
                {/* Forms Container */}
                <div className={`relative w-1/2 flex flex-col items-center text-center transition-all duration-500 ${isSignup ? "hidden" : "block"} `}>
                    {/* Signin Form */}
                    <h2 className="text-2xl font-semibold ">Signin</h2>
                    <input type="text" placeholder="Username" className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0  outline-sky-500 focus:outline-1" required />
                    <input type="password" placeholder="Password" className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1" required />
                    <button className="mt-3 w-3/4 p-4  text-white rounded bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">Signin</button>
                    <span className="mt-3">or signin with</span>
                    <div className="flex gap-2 mt-2">
                        <i className="fab fa-facebook-f p-2 bg-blue-600 text-white rounded-full"></i>
                        <i className="fab fa-google-plus-g p-2 bg-red-600 text-white rounded-full"></i>
                        <i className="fab fa-linkedin-in p-2 bg-blue-800 text-white rounded-full"></i>
                    </div>
                </div>
                {/* Signup Form */}
                <div className={`relative w-1/2 flex flex-col items-center text-center transition-all duration-500 ${isSignup ? "block" : "hidden"}`}>
                    <h2 className="text-2xl font-semibold ">Signup</h2>
                    <input type="text" placeholder="Username" className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1" required />
                    <input type="email" placeholder="Email" className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1" required />
                    <input
                        type="file"
                        placeholder="Select Image"
                        name='image'
                        accept='image/*'
                        className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1" required />
                    <input type="password" placeholder="Password" className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1" required />
                    <input type="password" placeholder="Confirm password" className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1" required />


                    {/* Role Selection */}

                    {/* <label className=" border border-red-600    mt-3 w-3/4 p-3 bg-gray-200 rounded  outline-sky-500 focus:outline-1">Role</label> */}
                    <select placeholder='Role' className="mt-3 w-3/4 p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1">
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>


                    <button className="mt-3 w-3/4 p-4  text-white rounded bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">Signup</button>
                    <span className="mt-3">or signup with</span>
                    <div className="flex gap-2 mt-2">
                        <i className="fab fa-facebook-f p-2 bg-blue-600 text-white rounded-full"></i>
                        <i className="fab fa-google-plus-g p-2 bg-red-600 text-white rounded-full"></i>
                        <i className="fab fa-linkedin-in p-2 bg-blue-800 text-white rounded-full"></i>
                    </div>
                </div>
                {/* Intro Container */}
                <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-[#4CCBBD] to-[#218277] transition-all duration-500">
                    <h2 className="text-2xl font-semibold">{isSignup ? "Come join us!" : "Welcome back!"}</h2>
                    <p className="mx-6 mt-4">{isSignup ? "Create an account for exclusive offers and rewards." : "We are happy to see you again!"}</p>
                    <button onClick={() => setIsSignup(!isSignup)} className="mt-4 px-6 py-3   rounded-full  text-white  nunito-font text-[16px] font-bold bg-sky-500/50 backdrop-blur-none hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">
                        {isSignup ? "Already have an account? Signin." : "No account yet? Signup."}
                    </button>
                    {/* <button onClick={() => setIsSignup(!isSignup)} className="mt-4 px-6 py-3   rounded-full  text-white  nunito-font text-[16px] font-bold  bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">
                        {isSignup ? "Already have an account? Signin." : "No account yet? Signup."}
                    </button> */}
                </div>
            </div>
        </div>

    );
};

export default Register;









