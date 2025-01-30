import { Link } from "react-router";
import loginAnimation from '../../../public/loginAnimation.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
    return (
        <div className="flex h-auto items-center justify-center bg-gray-100 ">
            <div className="md:flex flex-row my-10  md:my-30 rounded-3xl overflow-hidden">
                {/* Animation side*/}
                <div className="bg-[#35C7DF] flex items-center">
                    <div className="w-90  md:mr-5  ">
                        <Lottie animationData={loginAnimation} loop={true} />
                    </div>
                </div>

                {/* SignUp side*/}
                <div className={`flex flex-col items-center text-center transition-all duration-500  bg-white p-10 `}>
                    <h2 className="text-2xl font-semibold ">Login</h2>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-3 p-3 w-full bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1"
                        required />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="mt-3 w-full  p-3 bg-gray-200 rounded border-0 outline-sky-500 focus:outline-1"
                        required />

                    {/* Button */}
                    <button className="mt-3  p-4 w-full text-white rounded bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">Signup</button>

                    <span className="mt-3"><Link to={'/register '} className="font-bold hover:text-[#0D6FEC]">Sign up</Link>  or Login with</span>
                    {/* Social Login */}
                    <div className="flex gap-2 mt-2">
                        <i className=" text-3xl cursor-pointer mr-2"> <FcGoogle /></i>
                        <i className=" text-3xl cursor-pointer"> <BsGithub /></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;