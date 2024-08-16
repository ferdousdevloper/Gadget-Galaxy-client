import { useState } from "react";
import useAuth from "../Hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
          
          toast.success("Logged in successfully");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
    return (
        <div className="container flex flex-col mx-auto h-screen items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <div className="max-w-96 mx-auto border rounded-xl shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="900"
                    className="label-text"
                  >
                    Email
                  </span>
                </label>
                <input
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1100"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="1300"
                    className="label-text"
                  >
                    Password
                  </span>
                </label>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                  className="relative"
                >
                  <input
                    type={showPassword ? "password" : "text"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                    {...register("password", { required: true })}
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
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1900"
                className="form-control mt-6"
              >
                <button className="btn bg-blue-500 border-0 text-white font-extrabold">
                  Login
                </button>
              </div>
              <div className="mt-8">
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="2100"
                >
                  New to here? Please{" "}
                  <Link to="/register" className="text-primary">
                    <strong>Register</strong>
                  </Link>{" "}
                </p>
              </div>
            </form>
            </div>
        </div>
    );
};

export default Login;