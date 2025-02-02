import { Link, useNavigate } from "react-router";
import loginAnimation from '../../assets/loginAnimation.json'
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {

    const { signIn, signInWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            // User Login
            await signIn(data.email, data.password)

            navigate('/')
            toast.success("Account login successfully!");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
        setLoading(false);
    }

    // Google Login
    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            navigate('/')
            toast.success("Account login successfully!");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

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

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center  w-full">

                        {/* Email */}
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            className="mt-3 p-3 w-full bg-base-200 rounded border-0 outline-primary focus:outline-1"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}

                        {/* Password */}
                        <input
                            {...register("password", { required: "Password is required", minLength: 6 })}
                            type="password"
                            placeholder="Password"
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-primary focus:outline-1"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-2">Password must be at least 6 characters</p>}

                        {/* Button */}
                        <Button
                            type="submit"
                            className="mt-3 p-4 w-full rounded" text={loading || "Login"}
                            spinner={loading}
                            disabled={loading}
                        />
                    </form>

                    <span className="mt-3"><Link to={'/register '} className="font-bold hover:text-primary">Sign up</Link>  or Login with</span>
                    {/* Social Login */}
                    <div className="flex gap-2 mt-2">
                        <i className=" text-3xl cursor-pointer mr-2" onClick={handleGoogleLogin}> <FcGoogle /></i>
                        <i className=" text-3xl cursor-pointer"> <BsGithub /></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;