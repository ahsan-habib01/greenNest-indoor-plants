import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Curated Selection',
      description: 'Handpicked plants perfect for every space and lifestyle',
    },
    {
      icon: Heart,
      title: 'Expert Care Tips',
      description: 'Personalized guidance to help your plants thrive',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of plant lovers on their green journey',
    },
    {
      icon: Sparkles,
      title: 'Sustainable Choice',
      description: 'Eco-friendly practices from nursery to your doorstep',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 px-4">
      <title>GreenNest - About Us</title>

      <div className="w-11/12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Leaf className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-900 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              GreenNest
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where nature meets modern living
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 mb-12"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-center">
              GreenNest started with one mission — to make every home feel
              alive, peaceful, and deeply connected to nature. We believe plants
              don't just decorate a space; they transform it.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
              From easy-care indoor plants to expert guidance and personalized
              suggestions, GreenNest ensures that every plant lover — beginner
              or experienced — finds the perfect companion to brighten their
              environment.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-green-100 text-lg">Happy Plant Parents</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-green-100 text-lg">Plant Varieties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-green-100 text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-700 text-lg mb-6">
            Ready to start your green journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plants"
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Plants
            </Link>
            <Link
              to="/"
              className="px-8 py-4 border-2 border-green-600 text-green-700 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
