import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router';


const Logo = () => {
  return (
    <Link to={'/'} className="flex items-center gap-2">
      <Leaf className="text-green-600" size={28} />
      <h1 className="text-2xl font-bold">
        <span className="text-green-700">Green</span>
        <span className="text-green-900">Nest</span>
      </h1>
    </Link>
  );
};

export default Logo;
