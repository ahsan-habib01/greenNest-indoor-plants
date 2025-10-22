import React, { use } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const { user, setUser, signOutUser } = use(AuthContext);
    const navigate = useNavigate();
  // console.log(user);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        // toast.success('Signout successful');
        setUser(null);
        navigate('/auth/login')
      })
      .catch(e => {
        toast.error(e.message);
      });
  };

  return (
    <div className=" bg-green-100">
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
        <Logo></Logo>
        <NavLinks></NavLinks>

        {user ? (
          <div className="text-center space-y-3">
            <button
              className=""
              popoverTarget="popover-1"
              style={{ anchorName: '--anchor-1' }}
            >
              <img
                src={
                  user?.photoURL ||
                  'https://img.icons8.com/?size=160&id=114015&format=png'
                }
                className="h-11 w-11 border-3 border-green-400 rounded-full mx-auto"
                alt=""
              />
            </button>

            <div
              className="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm space-y-2"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: '--anchor-1' } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="">{user?.email}</p>
              <button
                onClick={handleSignout}
                className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <Link
              to={'/auth/login'}
              className=" px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login
            </Link>

            <Link
              to={'/auth/register'}
              className=" px-5 py-2 border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
