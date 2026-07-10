import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaCalendarAlt, FaCamera, FaEnvelope, FaSave, FaUser } from "react-icons/fa";
import avatarImg from "../../../assets/placeholder.jpg";
import useAuth from "../../../hooks/useAuth";
import uploadImageToImgBB from "../../../services/imgbbService";
import { useUpdateUserProfile, useUserProfile } from "../../../services/userService";

const ManageAccount = () => {
    const { user: authUser, updateUserProfile } = useAuth();
    const { data: profile, isLoading: isProfileLoading, isError } = useUserProfile();
    const { mutateAsync: updateProfileDB, isLoading: isUpdatingDB } = useUpdateUserProfile();

    const [imgPreview, setImgPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Set default values when profile is loaded
    useEffect(() => {
        if (profile) {
            setValue("username", profile.name);
            setImgPreview(profile.image || authUser?.photoURL || avatarImg);
        } else if (authUser) {
            setValue("username", authUser.displayName || "");
            setImgPreview(authUser.photoURL || avatarImg);
        }
    }, [profile, authUser, setValue]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImgPreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data) => {
        setIsSaving(true);
        const toastId = toast.loading("Updating your account details...");

        try {
            let finalImageUrl = profile?.image || authUser?.photoURL;

            // 1. Upload new image if selected
            if (selectedFile) {
                toast.loading("Uploading new profile image...", { id: toastId });
                finalImageUrl = await uploadImageToImgBB(selectedFile);
            }

            // 2. Update Firebase Auth Profile
            toast.loading("Updating authentication profile...", { id: toastId });
            await updateUserProfile(data.username, finalImageUrl);

            // 3. Update Database (MongoDB) Profile
            toast.loading("Saving changes to database...", { id: toastId });
            await updateProfileDB({
                email: authUser?.email,
                name: data.username,
                image: finalImageUrl,
            });

            toast.success("Account updated successfully!", { id: toastId });
            setSelectedFile(null);
        } catch (error) {
            console.error("Account update error:", error);
            toast.error(error.message || "Failed to update account", { id: toastId });
        } finally {
            setIsSaving(false);
        }
    };

    if (isProfileLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner loading-lg text-[#0D6FEC]"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="alert alert-error shadow-lg max-w-xl mx-auto my-10">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error loading user profile. Please reload the page.</span>
                </div>
            </div>
        );
    }

    const formattedJoinDate = profile?.createdAt
        ? new Date(profile.createdAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "N/A";

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 text-base-content space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-base-content">Manage Account</h1>
                <p className="text-sm text-base-content/70">Update your profile info, username, and profile image.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Card - Current Profile Display */}
                <div className="card bg-base-100 border border-base-300 shadow-md">
                    <div className="card-body items-center text-center p-6 space-y-4">
                        <div className="relative group">
                            <div className="avatar">
                                <div className="w-32 h-32 rounded-full  ring-offset-base-100 ring-offset-2 overflow-hidden shadow-inner">
                                    <img
                                        src={imgPreview}
                                        alt="Profile Preview"
                                        referrerPolicy="no-referrer"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold truncate max-w-[240px] text-base-content">
                                {profile?.name || authUser?.displayName || "User"}
                            </h2>
                            <p className="text-sm text-base-content/60 truncate max-w-[240px]">{authUser?.email}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center w-fit">


                            <p className=" py-1  text-xs font-semibold text-[12px] bg-[#35C7DF]  px-2 rounded-2xl text-white capitalize drop-shadow-lg">{profile?.role || "User"}</p>
                        </div>

                        <div className="divider my-2"></div>

                        <div className="w-full text-left space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-base-content/80">
                                <FaEnvelope className="text-[#0D6FEC]" />
                                <span className="truncate">{authUser?.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-base-content/80">
                                <FaCalendarAlt className="text-[#0D6FEC]" />
                                <span>Joined: {formattedJoinDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Card - Edit Profile Form */}
                <div className="card lg:col-span-2 bg-base-100 border border-base-300 shadow-md">
                    <div className="card-body p-6 md:p-8">
                        <h3 className="card-title text-xl mb-6 text-base-content border-b pb-2 border-base-200">
                            Profile Details
                        </h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Username input */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FaUser className="text-[#0D6FEC]" /> Username / Full Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className={`input input-bordered w-full text-base-content bg-base-100 focus:outline-none focus:border-[#0D6FEC] ${errors.username ? "border-error" : "border-base-300"
                                        }`}
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: { value: 3, message: "Name must be at least 3 characters" },
                                        maxLength: { value: 30, message: "Name must not exceed 30 characters" },
                                    })}
                                />
                                {errors.username && (
                                    <label className="label">
                                        <span className="label-text-alt text-error">{errors.username.message}</span>
                                    </label>
                                )}
                            </div>

                            {/* Email display (Read Only) */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FaEnvelope className="text-base-content/50" /> Email Address (Read-only)
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    value={authUser?.email || ""}
                                    readOnly
                                    className="input input-bordered w-full bg-base-200 text-base-content/65 cursor-not-allowed border-base-300"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-base-content/50">
                                        Your registered email address cannot be changed.
                                    </span>
                                </label>
                            </div>

                            {/* Profile Image Input */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FaCamera className="text-[#0D6FEC]" /> Profile Photo
                                    </span>
                                </label>
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="avatar sm:hidden">
                                        <div className="w-16 h-16 rounded-full ring ring-[#0D6FEC] overflow-hidden">
                                            <img src={imgPreview} alt="Mobile Preview" className="object-cover" />
                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="file-input file-input-bordered file-input-primary w-full text-base-content bg-base-100 border-base-300 focus:outline-none"
                                    />
                                </div>
                                <label className="label">
                                    <span className="label-text-alt text-base-content/50">
                                        Accepts JPG, PNG, WEBP files. Max size 5MB.
                                    </span>
                                </label>
                            </div>

                            {/* Form Submit Button */}
                            <div className="card-actions justify-end pt-4">
                                <button
                                    type="submit"
                                    disabled={isSaving || isUpdatingDB}
                                    className="btn btn-primary bg-[#0D6FEC] border-none text-white hover:bg-[#0b5cbe] gap-2 shadow-md w-full sm:w-auto min-w-[150px]"
                                >
                                    {isSaving || isUpdatingDB ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <FaSave /> Save Changes
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAccount;