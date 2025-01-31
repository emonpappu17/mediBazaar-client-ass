import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Lottie from "lottie-react";
import signupAnimation from '../../assets/registerAnimation.json'
import Button from "../../components/common/Button";

const Register = () => {

    return (
        // <div className="flex h-auto items-center justify-center bg-gray-100">
        //     <div className="md:flex flex-row my-10 md:my-20  rounded-3xl overflow-hidden">
        //         {/* Animation side*/}
        //         <div className="bg-[#35C7DF] flex items-center">
        //             <div className="w-90  md:mr-5  ">
        //                 <Lottie animationData={signupAnimation} loop={true} />
        //             </div>
        //         </div>

        //         {/* SignUp side*/}
        //         <div className={`flex flex-col items-center text-center transition-all duration-500  bg-white p-10 `}>
        //             <h2 className="text-2xl font-semibold ">Signup</h2>
        //             {/* Username */}
        //             <input
        //                 type="text"
        //                 placeholder="Username"
        //                 className="mt-3 w-full p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1 "
        //                 required />
        //             {/* Email */}
        //             <input
        //                 type="email"
        //                 placeholder="Email"
        //                 className="mt-3 p-3 w-full bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1"
        //                 required />
        //             {/* Image */}
        //             <input
        //                 type="file"
        //                 className="file-input  mt-3 w-full  bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1 " />
        //             {/* Password */}
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 className="mt-3 w-full  p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1"
        //                 required />
        //             {/* Confirm Password */}
        //             <input
        //                 type="password"
        //                 placeholder="Confirm password"
        //                 className="mt-3 w-full p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1"
        //                 required />
        //             {/* Role Selection */}
        //             <select placeholder='Role' className="mt-3  w-full p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1">
        //                 <option value="user">User</option>
        //                 <option value="seller">Seller</option>
        //             </select>

        //             {/* Button */}
        //             <button className="mt-3  p-4 w-full text-white rounded bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">Signup</button>

        //             <span className="mt-3"><Link to={'/login '} className="font-bold hover:text-[#0D6FEC]">Login</Link>  or Signup with</span>
        //             {/* Social Login */}
        //             <div className="flex gap-2 mt-2">
        //                 <i className=" text-3xl cursor-pointer mr-2"> <FcGoogle /></i>
        //                 <i className=" text-3xl cursor-pointer"> <BsGithub /></i>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="flex h-auto items-center justify-center bg-base-200">
            <div className="md:flex flex-row my-10 md:my-20 rounded-3xl overflow-hidden">
                {/* Animation side */}
                <div className="bg-primary flex items-center">
                    <div className="w-90 md:mr-5">
                        <Lottie animationData={signupAnimation} loop={true} />
                    </div>
                </div>

                {/* SignUp side */}
                <div className="flex flex-col items-center text-center transition-all duration-500 bg-base-100 p-10">
                    <h2 className="text-2xl font-semibold">Signup</h2>

                    {/* Username */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-primary focus:outline-1"
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-3 p-3 w-full bg-base-200 rounded border-0 outline-primary focus:outline-1"
                        required
                    />

                    {/* Image */}
                    <input
                        type="file"
                        className="file-input mt-3 w-full bg-base-200 rounded border-0 outline-primary focus:outline-1"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-primary focus:outline-1"
                        required
                    />

                    {/* Confirm Password */}
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-primary focus:outline-1"
                        required
                    />

                    {/* Role Selection */}
                    <select
                        placeholder="Role"
                        className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-primary focus:outline-1"
                    >
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>

                    {/* Button */}
                    <Button className="mt-3 p-4 w-full rounded" text="Sign Up"></Button>

                    <span className="mt-3">
                        <Link to={'/login'} className="font-bold hover:text-primary">
                            Login
                        </Link>{' '}
                        or Signup with
                    </span>

                    {/* Social Login */}
                    <div className="flex gap-2 mt-2">
                        <i className="text-3xl cursor-pointer mr-2">
                            <FcGoogle />
                        </i>
                        <i className="text-3xl cursor-pointer">
                            <BsGithub />
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;









