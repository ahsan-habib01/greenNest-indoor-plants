import React, { useState } from 'react';
import { Link } from 'react-router'; 
import { Eye, EyeOff } from 'lucide-react'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const handleLogin = e => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // 
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-11/12 max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Welcome Back 
        </h2>
        <p className="text-center text-green-700 mb-6">
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
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
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
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
          {/* Forget Password */}
          <div className="text-right">
            <Link
              to="/reset-password"
              className="text-green-600 hover:text-green-800 text-sm font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-green-700 mt-6">
          Don’t have an account?{' '}
          <Link
            to="/register"
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
