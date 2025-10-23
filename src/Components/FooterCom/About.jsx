import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center text-center py-12">
      <title>GreenNest - About Us</title>
      <div className="w-11/12 md:w-3/4 mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About GreenNest
        </h1>
        <p className="text-green-800 leading-relaxed text-lg mb-6">
          GreenNest was born from the love of nature and the desire to bring a
          little piece of the outdoors inside your home. We believe every space
          deserves the freshness and calm that only plants can bring.
        </p>
        <p className="text-green-800 leading-relaxed mb-8">
          Whether you’re a beginner or a seasoned plant lover, GreenNest offers
          curated indoor plants, expert care guides, and personalized
          consultations to help your green companions thrive all year round.
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

export default About;
