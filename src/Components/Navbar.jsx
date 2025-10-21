import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <div className=" bg-green-100">
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
        <Logo></Logo>
        <NavLinks></NavLinks>
        <div className="flex gap-5">
          <button className=" px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Login
          </button>
          <button className=" px-5 py-2 border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
