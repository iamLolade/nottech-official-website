'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Project categories
const categories = ['All', 'Payment Solutions', 'E-Commerce'];

// !Not Tech's flagship solutions
const projects = [
  {
    id: 1,
    title: 'Buy Meter',
    category: 'Payment Solutions',
    description: 'A comprehensive bill payment solution focused on simplifying electricity meter token purchases. Features secure payment processing and instant token delivery.',
    image: '/images/vector/undraw_instant-analysis_vm8x.svg',
    technologies: ['Next.js', 'TypeScript', 'Java', 'Payment APIs'],
    link: 'https://buy-meter.netlify.app/signin'
  },
  {
    id: 2,
    title: 'Bringam',
    category: 'E-Commerce',
    description: 'A modern e-commerce platform that connects buyers with sellers, featuring a sleek user interface and robust product management system.',
    image: '/images/vector/undraw_product-explainer_b7ft.svg',
    technologies: ['Next.js', 'TypeScript', 'Java', 'E-commerce APIs'],
    link: 'https://bringam.vercel.app/'
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Featured <span className="text-[#D56649]">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our flagship solutions that demonstrate our commitment to innovation
            and excellence in digital transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#D56649] text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          layout
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 bg-gray-100 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 dark:invert-0 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-[#D56649] bg-[#D56649]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i}
                      className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-[#D56649]/10 text-[#D56649] hover:bg-[#D56649]/20 font-semibold transition-all duration-200 group/link"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Solution
                  <svg 
                    className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;