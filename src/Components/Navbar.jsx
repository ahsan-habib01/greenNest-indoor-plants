import React, { use, useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, setUser, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        navigate('/auth/login');
      })
      .catch(e => toast.error(e.message));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100">
      <div className="w-11/12 mx-auto py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-green-50 active:bg-green-100 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} className="text-green-700" />
            ) : (
              <Menu size={24} className="text-green-700" />
            )}
          </button>

          {loading ? (
            <div className="hidden md:flex items-center">
              <HashLoader color="#16a34a" size={35} />
            </div>
          ) : user ? (
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold text-gray-800 leading-tight">
                  {user?.displayName}
                </p>
                {/* <p className="text-xs text-gray-500">{user?.email}</p> */}
              </div>
              <button
                popoverTarget="popover-1"
                style={{ anchorName: '--anchor-1' }}
                className="relative group"
              >
                <img
                  src={
                    user?.photoURL ||
                    'https://img.icons8.com/?size=160&id=114015&format=png'
                  }
                  className="h-11 w-11 border-2 border-green-400 rounded-full object-cover cursor-pointer transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg"
                  alt="User"
                />
                {/* <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div> */}
              </button>

              <div
                className="dropdown dropdown-end menu w-56 rounded-2xl bg-white shadow-2xl p-4 space-y-3 border border-gray-100"
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: '--anchor-1' }}
              >
                <div className="flex flex-col items-center gap-2 pb-3 border-b border-gray-100">
                  <img
                    src={
                      user?.photoURL ||
                      'https://img.icons8.com/?size=160&id=114015&format=png'
                    }
                    className="h-16 w-16 border-2 border-green-400 rounded-full object-cover"
                    alt="User"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    {user?.displayName}
                  </h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <button
                  onClick={handleSignout}
                  className="w-full px-5 py-2 bg-[#E3B23C] text-white rounded-lg font-semibold hover:bg-[#B97C16] transition cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex justify-center items-center gap-4">
              <Link
                to="/auth/login"
                className="px-5 py-2 border-2 border-green-600 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 hover:border-green-700 transition"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="px-5 py-2 border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-green-50/50 to-white border-t border-green-100 py-6 px-4 space-y-5">
          <div className="flex flex-col space-y-3 text-center">
            <NavLinks />
          </div>

          {user ? (
            <div className="space-y-4 pt-4 border-t border-green-100">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-green-100">
                <div className="relative">
                  <img
                    src={
                      user?.photoURL ||
                      'https://img.icons8.com/?size=160&id=114015&format=png'
                    }
                    className="h-14 w-14 rounded-full border-2 border-green-400 object-cover"
                    alt="User"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-gray-800 text-base">
                    {user?.displayName}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleSignout}
                className="w-full px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 pt-4 border-t border-green-100">
              <Link
                to="/auth/login"
                className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="w-full py-2 border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
