import { Link } from "react-router";
import loginAnimation from '../../assets/loginAnimation.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Button from "../../components/common/Button";

const Login = () => {
    return (
        <div className="flex h-auto items-center justify-center bg-base-200 ">
            <div className="md:flex flex-row my-10  md:my-30 rounded-3xl overflow-hidden">
                {/* Animation side*/}
                <div className="bg-primary  flex items-center">
                    <div className="w-90  md:mr-5  ">
                        <Lottie animationData={loginAnimation} loop={true} />
                    </div>
                </div>

                {/* SignUp side*/}
                <div className={`flex flex-col items-center text-center transition-all duration-500  bg-base-100 p-10 `}>
                    <h2 className="text-2xl font-semibold ">Login</h2>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-3 p-3 w-full bg-base-200 rounded border-0 outline-sky-500 focus:outline-1"
                        required />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="mt-3 w-full  p-3 bg-base-200 rounded border-0 outline-sky-500 focus:outline-1"
                        required />

                    {/* Button */}
                    <Button className="mt-3 p-4 w-full rounded" text="Login"></Button>

                    <span className="mt-3"><Link to={'/register '} className="font-bold hover:text-primary">Sign up</Link>  or Login with</span>
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