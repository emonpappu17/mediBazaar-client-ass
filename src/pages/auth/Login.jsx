import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from '../../assets/loginAnimation.json';
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";

// Demo account credentials stored in environment variables
const DEMO_ACCOUNTS = [
    {
        role: "Admin",
        email: import.meta.env.VITE_DEMO_ADMIN_EMAIL,
        password: import.meta.env.VITE_DEMO_ADMIN_PASSWORD,
        redirect: "/dashboard",
        icon: "👑",
        accent: "#7C3AED",       // purple
        bg: "rgba(124,58,237,0.08)",
        border: "rgba(124,58,237,0.25)",
        description: "Full dashboard access",
    },
    {
        role: "Seller",
        email: import.meta.env.VITE_DEMO_SELLER_EMAIL,
        password: import.meta.env.VITE_DEMO_SELLER_PASSWORD,
        redirect: "/dashboard",
        icon: "🏪",
        accent: "#0D6FEC",       // blue (brand)
        bg: "rgba(13,111,236,0.08)",
        border: "rgba(13,111,236,0.25)",
        description: "Manage medicines & sales",
    },
    {
        role: "User",
        email: import.meta.env.VITE_DEMO_USER_EMAIL,
        password: import.meta.env.VITE_DEMO_USER_PASSWORD,
        redirect: "/",
        icon: "🛒",
        accent: "#059669",       // green
        bg: "rgba(5,150,105,0.08)",
        border: "rgba(5,150,105,0.25)",
        description: "Browse & purchase medicines",
    },
];

const Login = () => {

    const { signIn, signInWithGoogle, resetPassword, signInWithGithub } = useAuth();
    const [loading, setLoading] = useState(false);
    const [demoLoading, setDemoLoading] = useState(null); // tracks which demo button is active
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigateTo = location?.state || '/'
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
            navigate(navigateTo)
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
            navigate(navigateTo)
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
            navigate(navigateTo)
            toast.success("Account login successfully!");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // Reset Password
    const handleResetPassword = async (email) => {
        if (!email) return toast.warn('Please write your email first!')
        setLoading(true)
        try {
            await resetPassword(email)
            toast.success('Request Success! Check your email for further process...')
        } catch (err) {
            console.log(err);
        }
        setLoading(false)
    }

    // Demo Login — single-click login 
    const handleDemoLogin = async (account) => {
        if (demoLoading) return; // prevent double-click
        setDemoLoading(account.role);
        try {
            await signIn(account.email, account.password);
            toast.success(`Logged in as Demo ${account.role}!`);
            // const userData = {
            //     email: account.email,
            //     // name: account.username,
            //     // image: account,
            //     role: account.role,
            // }
            // await saveUserToDB(userData);
            navigate(account.redirect);
        } catch (error) {
            console.log(error);
            toast.error(`Demo login failed: ${error.message}`);
        }
        setDemoLoading(null);
    }

    return (
        <div className="flex h-auto items-center justify-center bg-base-200">
            <div className="md:flex flex-row my-10 md:my-30 rounded-3xl overflow-hidden">
                {/* Animation side */}
                <div className="bg-[#0D6FEC] mt-2 flex items-center">
                    <div className="w-90 md:mr-5">
                        <Lottie animationData={loginAnimation} loop={true} />
                    </div>
                </div>

                {/* Login side */}
                <div className="flex flex-col items-center text-center transition-all duration-500 bg-base-100 p-10">
                    <h2 className="text-2xl font-semibold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full">

                        {/* Email */}
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}

                        {/* Password */}
                        <input
                            {...register("password", { required: "Password is required", minLength: 6 })}
                            type="password"
                            placeholder="Password"
                            className="mt-3 w-full p-3 bg-base-200 rounded border-0 outline-base-content focus:outline-1"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-2">Password must be at least 6 characters</p>}

                        {/* Button */}
                        <Button
                            type="submit"
                            className="mt-3 p-4 w-full rounded"
                            text={loading || "Login"}
                            spinner={loading}
                            disabled={loading}
                        />

                    </form>

                    {/* Forgot password */}
                    <div className="space-y-1">
                        <button
                            onClick={() => handleResetPassword(email)}
                            className="cursor-pointer text-xs hover:underline text-base-content hover:text-[#0D6FEC] mt-2"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <span className="mt-3">
                        <Link to={'/register '} className="font-bold hover:text-[#0D6FEC] mt-2">Sign up</Link>
                        {" "}or Login with
                    </span>

                    {/* Social Login */}
                    <div className="flex gap-2 mt-2">
                        <i className="text-3xl cursor-pointer mr-2" onClick={handleGoogleLogin}><FcGoogle /></i>
                        <i className="text-3xl cursor-pointer" onClick={handleGithubLogin}><BsGithub /></i>
                    </div>

                    {/* ── Demo Access Section ── */}
                    <div style={{
                        marginTop: "24px",
                        width: "100%",
                        borderTop: "1px dashed rgba(128,128,128,0.3)",
                        paddingTop: "20px",
                    }}>
                        {/* Header */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "4px" }}>
                            <span style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                color: "#0D6FEC",
                                backgroundColor: "rgba(13,111,236,0.08)",
                                padding: "2px 10px",
                                borderRadius: "99px",
                                border: "1px solid rgba(13,111,236,0.2)",
                            }}>
                                🎯 Demo Access
                            </span>
                        </div>
                        <p style={{ fontSize: "12px", color: "rgba(128,128,128,0.9)", marginBottom: "14px", marginTop: "6px" }}>
                            Explore the app instantly — no account needed
                        </p>

                        {/* Role Cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                            {DEMO_ACCOUNTS.map((account) => (
                                <button
                                    key={account.role}
                                    id={`demo-login-${account.role.toLowerCase()}`}
                                    onClick={() => handleDemoLogin(account)}
                                    disabled={!!demoLoading}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        padding: "12px 16px",
                                        borderRadius: "12px",
                                        border: `1px solid ${account.border}`,
                                        backgroundColor: demoLoading === account.role ? account.bg : "transparent",
                                        cursor: demoLoading ? "not-allowed" : "pointer",
                                        transition: "all 0.2s ease",
                                        outline: "none",
                                        opacity: demoLoading && demoLoading !== account.role ? 0.5 : 1,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!demoLoading) e.currentTarget.style.backgroundColor = account.bg;
                                    }}
                                    onMouseLeave={(e) => {
                                        if (demoLoading !== account.role) e.currentTarget.style.backgroundColor = "transparent";
                                    }}
                                >
                                    {/* Left: icon + role info */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <span style={{
                                            fontSize: "22px",
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "10px",
                                            backgroundColor: account.bg,
                                            border: `1px solid ${account.border}`,
                                            flexShrink: 0,
                                        }}>
                                            {account.icon}
                                        </span>
                                        <div style={{ textAlign: "left" }}>
                                            <p style={{ margin: 0, fontWeight: 700, fontSize: "14px", color: account.accent }}>
                                                {account.role}
                                            </p>
                                            <p style={{ margin: 0, fontSize: "11px", color: "rgba(128,128,128,0.85)" }}>
                                                {account.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: CTA or spinner */}
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: account.accent,
                                        flexShrink: 0,
                                    }}>
                                        {demoLoading === account.role ? (
                                            <>
                                                <span style={{
                                                    width: "14px",
                                                    height: "14px",
                                                    border: `2px solid ${account.accent}`,
                                                    borderTopColor: "transparent",
                                                    borderRadius: "50%",
                                                    animation: "spin 0.7s linear infinite",
                                                    display: "inline-block",
                                                }} />
                                                Logging in…
                                            </>
                                        ) : (
                                            <>Continue as {account.role} →</>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Spinner keyframe (injected inline so no extra CSS file needed) */}
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            </div>
        </div>
    );
};

export default Login;
