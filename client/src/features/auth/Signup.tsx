import { Link } from "react-router-dom";

// src/pages/Signup.tsx
const SignupPage = () => {
  return (
    <div className="flex flex-col  md:flex-row h-screen w-2/10">
      <div className="hidden md:flex w-full md:w-1/2 relative flex-col justify-center px-10 bg-gradient-to-tr from-indigo-200 via-zinc-300 to-pink-300">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-800 mb-4">
            Join DevConnect — a space where developers collaborate, share ideas, and grow together.
          </h1>

        </div>
        <div className="absolute bottom-6 left-10 text-sm text-gray-500 flex flex-col gap-2">
          <div className="flex gap-4">
            <Link to="#">Terms</Link>
            <Link to="#">Plans</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-zinc-200 to-indigo-200">
        <div className="bg-white w-full max-w-md mx-4 md:mx-0 rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-5 text-center">Sign Up</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-indigo-600" />
              I accept the <Link to="#" className="text-indigo-600">Term</Link>
            </label>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-tr from-indigo-500 via-indigo-200-300 to-pink-500 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            <div className="text-sm text-center text-gray-400">Or</div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="flex-1 py-2 border gap-2 rounded-md text-sm flex items-center justify-center"
              >
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                <p className="text-gray-800">Sign In with Google</p>
              </button>

            </div>
          </form>

          <p className="text-sm text-center mt-4 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
