import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  Sun,
  Thermometer,
  Scissors,
  Bug,
  Sprout,
  Heart,
  BookOpen,
  Search,
  ChevronRight,
} from 'lucide-react';

const PlantCareGuide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const careCategories = [
    {
      id: 'watering',
      icon: Droplets,
      title: 'Watering',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      tips: [
        {
          title: 'Check Soil Moisture',
          description:
            "Stick your finger 2 inches into the soil. If it feels dry, it's time to water.",
          difficulty: 'Beginner',
        },
        {
          title: 'Water Thoroughly',
          description:
            'Water until it drains from the bottom. Ensure the entire root system gets moisture.',
          difficulty: 'Beginner',
        },
        {
          title: 'Avoid Overwatering',
          description:
            'More plants die from overwatering than underwatering. Let soil dry between waterings.',
          difficulty: 'Intermediate',
        },
      ],
    },
    {
      id: 'light',
      icon: Sun,
      title: 'Light Requirements',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      tips: [
        {
          title: 'Understand Light Levels',
          description:
            'Bright light: near south-facing window. Medium: 5-10 feet from window. Low: north-facing or far from windows.',
          difficulty: 'Beginner',
        },
        {
          title: 'Rotate Your Plants',
          description:
            'Turn plants every week to ensure even growth on all sides.',
          difficulty: 'Beginner',
        },
        {
          title: 'Watch for Signs',
          description:
            'Pale leaves = too much light. Leggy growth = not enough light.',
          difficulty: 'Intermediate',
        },
      ],
    },
    {
      id: 'temperature',
      icon: Thermometer,
      title: 'Temperature & Humidity',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      tips: [
        {
          title: 'Ideal Temperature Range',
          description:
            'Most houseplants thrive between 65-75°F (18-24°C). Avoid temperature fluctuations.',
          difficulty: 'Beginner',
        },
        {
          title: 'Increase Humidity',
          description:
            'Mist leaves, use a humidifier, or place plants on pebble trays with water.',
          difficulty: 'Intermediate',
        },
        {
          title: 'Avoid Drafts',
          description:
            'Keep plants away from heating vents, AC units, and drafty windows.',
          difficulty: 'Beginner',
        },
      ],
    },
    {
      id: 'pruning',
      icon: Scissors,
      title: 'Pruning & Grooming',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      tips: [
        {
          title: 'Remove Dead Leaves',
          description:
            'Regularly remove yellow or brown leaves to keep plants healthy and encourage new growth.',
          difficulty: 'Beginner',
        },
        {
          title: 'Prune for Shape',
          description:
            'Trim leggy stems to encourage bushier growth. Cut just above a leaf node.',
          difficulty: 'Intermediate',
        },
        {
          title: 'Clean Leaves',
          description:
            'Wipe dust off leaves with a damp cloth to improve photosynthesis.',
          difficulty: 'Beginner',
        },
      ],
    },
    {
      id: 'pests',
      icon: Bug,
      title: 'Pest Control',
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      tips: [
        {
          title: 'Inspect Regularly',
          description:
            'Check undersides of leaves weekly for pests like spider mites, aphids, or mealybugs.',
          difficulty: 'Beginner',
        },
        {
          title: 'Natural Solutions',
          description:
            'Use neem oil spray or insecticidal soap for most common pests.',
          difficulty: 'Intermediate',
        },
        {
          title: 'Quarantine New Plants',
          description:
            'Keep new plants separate for 2 weeks to prevent pest spread.',
          difficulty: 'Intermediate',
        },
      ],
    },
    {
      id: 'fertilizing',
      icon: Sprout,
      title: 'Fertilizing',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      tips: [
        {
          title: 'Feed During Growing Season',
          description:
            'Fertilize every 2-4 weeks during spring and summer. Reduce in fall and winter.',
          difficulty: 'Beginner',
        },
        {
          title: 'Use Proper Dilution',
          description:
            'Dilute liquid fertilizer to half strength to avoid burning roots.',
          difficulty: 'Intermediate',
        },
        {
          title: 'Know When to Skip',
          description:
            "Don't fertilize stressed, newly potted, or dormant plants.",
          difficulty: 'Advanced',
        },
      ],
    },
  ];

  const quickTips = [
    'Water in the morning to prevent fungal growth',
    'Use well-draining soil to prevent root rot',
    'Repot plants every 1-2 years for healthy growth',
    'Group plants together to increase humidity',
    'Use filtered or room temperature water',
  ];

  const filteredCategories = careCategories.filter(
    cat => selectedCategory === 'all' || cat.id === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getDifficultyColor = difficulty => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 px-4">
      <title>GreenNest - Plant Care Guide</title>

      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-semibold text-sm">
              Expert Guidance
            </span>
          </div>

          <h1 className="text-5xl md:text-5xl font-bold text-green-900 mb-6">
            Plant Care{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Guide
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Everything you need to keep your plants thriving and healthy
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search care tips..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Quick Tips Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 mb-12 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Quick Care Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 text-white">
                <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white/70 text-gray-700 hover:bg-white'
            }`}
          >
            All Topics
          </button>
          {careCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Care Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {filteredCategories.map(category => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center`}
                >
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-green-900">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">
                    Essential tips for {category.title.toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {tip.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                          tip.difficulty
                        )}`}
                      >
                        {tip.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/50"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Need More Help?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our team of plant experts is here to answer your questions and help
            your plants thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Our Experts
            </a>
            <a
              href="/plants"
              className="px-8 py-4 border-2 border-green-600 text-green-700 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              Shop Plants
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlantCareGuide;
