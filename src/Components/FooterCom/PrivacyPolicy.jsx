import React from 'react';
import { Link } from 'react-router';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center py-12 text-green-900 text-center">
      <title>GreenNest - Privacy & Policy</title>
      <div className="w-11/12 md:w-3/4 mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At GreenNest, we value your privacy and are committed to protecting
          your personal information. This policy outlines how we collect, use,
          and safeguard your data when you use our website.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p>
          We may collect basic details like your name, email address, and usage
          data to provide you with a better experience.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          2. How We Use Your Data
        </h2>
        <p>
          Your data helps us improve our platform, offer personalized content,
          and ensure secure transactions.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          3. Contact Us
        </h2>
        <p className="mb-8">
          If you have any concerns about your data or this policy, feel free to
          reach out at{' '}
          <span className="font-semibold text-green-700">
            privacy@greennest.com
          </span>
          .
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 bg-[#E3B23C] text-white font-semibold rounded-lg hover:bg-[#B97C16] transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
