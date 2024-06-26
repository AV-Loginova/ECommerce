import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full flex justify-center">
      <form className="flex flex-col w-[300px] border-1 p-5 pt-3 rounded-md bg-[#f7583e]">
        <p className="text-white font-bold text-2xl text-center">Login</p>
        <label className="text-white">Email:</label>
        <input type="email" className="rounded-md p-1"></input>
        <label className="text-white">Password:</label>
        <input type="password" className="rounded-md p-1"></input>
        <p className="text-[13px] text-white">
          Don't have an account?{" "}
          <Link className="text-white" to={"/signup"}>
            Sign up
          </Link>
        </p>
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-[#f7583e] bg-white py-1 rounded-md"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
