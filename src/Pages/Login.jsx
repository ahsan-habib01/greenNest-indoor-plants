import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate()

  const { setUser, signIn, googleSignIn, forgetPassword } = use(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log('Logging in with:', email, password);

    signIn(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        // toast.success('Signin successful');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(e => {
        // console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(res => {
        // console.log(res);
        setUser(res.user);
        toast.success('Signin successful');
      })
      .catch(e => {
        // console.log(e);
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // console.log(email);
    forgetPassword(email)
      .then(() => {
        toast.success('Password reset email sent! Check your inbox.');
      })
      .catch(e => {
        toast.error(e.message);
      });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-11/12 max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-green-700 mb-6">
          Log in to continue exploring GreenNest
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-green-800 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password  */}
          <div>
            <label className="block text-green-800 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-green-700 hover:text-green-900"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}{' '}
              </button>
            </div>
          </div>

          <button type="button" onClick={handleForgetPassword}>
            <a className="text-green-600 hover:text-green-800 text-sm font-medium text-right">
              Forgot Password?
            </a>
          </button>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center my-1">
          <div className="w-1/4 h-px bg-green-300"></div>
          <span className="mx-3 text-green-700 font-medium">or</span>
          <div className="w-1/4 h-px bg-green-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-green-400 text-green-700 font-semibold py-2 rounded-lg hover:bg-green-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-green-700 mt-6">
          Don’t have an account?{' '}
          <Link
            to="/auth/register"
            className="text-green-600 font-semibold hover:text-green-800"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
