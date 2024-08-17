import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useAuth from './../Hook/useAuth';
import SocialLogin from "../Componants/SocialLogin";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    // Regular expressions to check for at least one uppercase letter and at least one special character
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    if (!uppercaseRegex.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!lowercaseRegex.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!specialCharRegex.test(value)) {
      return "Password must contain at least one special character";
    }

    return true; // Password is valid
  };
  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password).then((result) => {
      if (result.user) {
        navigate(from);
      }

      toast.success("Successfully Register");
        navigate("/");
    });
  };
  return (
    <div className=" flex flex-col mx-auto h-screen items-center justify-center bg-gradient-to-t  from-indigo-800 to-fuchsia-500">
      <Toaster/>
      <img src="https://i.postimg.cc/qRxFGcQ3/logo.png" alt="" className="max-w-40 mb-10" />
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <div className="max-w-96 mx-auto border rounded-xl shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span
                className="label-text"
              >
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
              required
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-error">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span
                className="label-text"
              >
                Password
              </span>
            </label>
            <div
              className="relative"
            >
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                className="input input-bordered w-full bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
                required
                {...register("password", {
                  required: true,
                  validate: validatePassword, // Custom validation function
                })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 my-4 text-right"
              >
                {showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff>}
              </span>
            </div>

            {errors.password && (
              <span className="text-error">{errors.password.message}</span>
            )}
          </div>
          <div
            className="form-control mt-6"
          >
            <button className="btn bg-gradient-to-r  from-indigo-800 to-fuchsia-500 text-white border-0">
              Register
            </button>
          </div>
          <div className="mt-8">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-fuchsia-500">
                <strong>Sign In</strong>
              </Link>{" "}
            </p>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
