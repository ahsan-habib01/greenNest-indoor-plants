import React from 'react';
import { Link } from 'react-router';
import ErrorImg from '../assets/undraw_page-not-found_6wni.svg'

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-800 px-6">
      <img
        src={ErrorImg}
        alt="404 Nature Illustration"
        className="w-80 mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-green-600 text-center mb-8 max-w-md">
        Oops! The page you’re looking for might have been moved or doesn’t
        exist. Let’s get you back to nature 🌿
      </p>

      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
