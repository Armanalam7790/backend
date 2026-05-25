import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = ({settoggle}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to continue your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
            Login
          </button>


                  <p onClick={()=> settoggle(prev=> !prev)}  className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account? <span className="text-black font-semibold">Register</span>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;