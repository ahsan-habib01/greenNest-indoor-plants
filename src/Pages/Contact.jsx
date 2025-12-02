import React from 'react';
import { Link } from 'react-router';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center text-center py-12">
      <title>GreenNest - Contact Us</title>
      <div className="w-11/12 md:w-3/4 mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h1>
        <p className="text-green-800 mb-8">
          Have a question or need some plant care advice? We’d love to hear from
          you!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-green-800 mb-8">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-green-600 text-3xl mb-2" />
            <h3 className="font-semibold">Email</h3>
            <p>support@greennest.com</p>
          </div>

          <div className="flex flex-col items-center">
            <FaPhone className="text-green-600 text-3xl mb-2" />
            <h3 className="font-semibold">Phone</h3>
            <p>+880 1234 567 890</p>
          </div>

          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-green-600 text-3xl mb-2" />
            <h3 className="font-semibold">Address</h3>
            <p>Rangpur, Bangladesh</p>
          </div>
        </div>

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

export default Contact;
