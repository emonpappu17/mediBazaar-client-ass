import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Lottie from "lottie-react";
import signupAnimation from '../../assets/registerAnimation.json'
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import uploadImageToImgBB from "../../services/imgbbService";
import { saveUserToDB } from "../../services/userService";

const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle, signInWithGithub } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            // Upload image to ImgBB
            const imageUrl = await uploadImageToImgBB(data.profileImage[0]);

            // User Registration
            await createUser(data.email, data.password);

            // Save username and photo in firebase
            await updateUserProfile(data.username, imageUrl);

            // Prepare user data for your database
            const userData = {
                email: data.email,
                name: data.username,
                // image: imageUrl,
                role: data.role,
            }
            await saveUserToDB(userData);

            navigate('/')
            toast.success("Account created successfully!");
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

    // Github Login
    const handleGithubLogin = async () => {
        try {
            await signInWithGithub();
            navigate('/')
            toast.success("Account login successfully!");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // console.log(watch("role"))

    return (
        <div className="flex h-auto items-center justify-center bg-base-200 ">
            <div className="md:flex flex-row my-10 md:my-20 rounded-3xl overflow-hidden">
                {/* Animation side */}
                <div className="bg-[#0D6FEC] flex items-center">
                    <div className="w-90 md:mr-5">
                        <Lottie animationData={signupAnimation} loop={true} />
                    </div>
                </div>

                {/* SignUp side */}
                <div className="flex flex-col items-center text-center transition-all duration-500 bg-base-100 p-10 ">
                    <h2 className="text-2xl font-semibold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                        {/* Username */}
                        <input
                            {...register("username", { required: "Username is required" })}
                            type="text"
                            placeholder="Username"
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                            required
                        />
                        {errors.username && <p className="text-red-500 text-sm  mt-2">{errors.username.message}</p>}

                        {/* Email */}
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            className="mt-3 p-3 w-full bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}

                        {/* Image */}
                        <input
                            {...register("profileImage", { required: "Profile image is required" })}
                            type="file"
                            className="file-input mt-3 w-full bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                        />
                        {errors.profileImage && <p className="text-red-500 text-sm mt-2">{errors.profileImage.message}</p>}

                        {/* Password */}
                        <input
                            {...register("password", { required: "Password is required", minLength: 6 })}
                            type="password"
                            placeholder="Password"
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-2">Password must be at least 6 characters</p>}

                        {/* Confirm Password */}
                        <input
                            {...register("confirmPassword", { validate: value => value === watch("password") || "Password do not match" })}
                            type="password"
                            placeholder="Confirm password"
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                            required
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}

                        {/* Role Selection */}
                        <select
                            {...register("role", { required: "Role is required" })}
                            placeholder="Role"
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                        >
                            <option value="user">User</option>
                            <option value="seller">Seller</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-sm mt-2">{errors.role.message}</p>}

                        {/* Button */}
                        <Button
                            type="submit"
                            className="mt-3 p-4 w-full rounded" text={loading || "Sign Up"}
                            spinner={loading}
                            disabled={loading}
                        />
                    </form>

                    <span className="mt-3">
                        <Link to={'/login'} className="font-bold hover:text-[#0D6FEC]">
                            Login
                        </Link>{' '}
                        or Signup with
                    </span>

                    {/* Social Login */}
                    <div className="flex gap-2 mt-2">
                        <i className="text-3xl cursor-pointer mr-2" onClick={handleGoogleLogin}>
                            <FcGoogle />
                        </i>
                        <i className="text-3xl cursor-pointer" onClick={handleGithubLogin}>
                            <BsGithub />
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;









