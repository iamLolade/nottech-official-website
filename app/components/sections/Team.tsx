'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Team members data
const teamMembers = [
  {
    name: 'Peter Abiodun',
    role: 'Chief Executive Officer',
    image: '/images/company-assets/peter-2.jpeg',
    delay: 0.1
  },
  {
    name: 'Wilfred Ighalo',
    role: 'Chief Operations Officer',
    image: '/images/company-assets/wilfred-1.jfif',
    delay: 0.2
  },
  {
    name: 'Johnny Olugbodi',
    role: 'Chief Technical Officer',
    image: '/images/company-assets/johnny.jpeg',
    delay: 0.3
  },
  {
    name: 'Ololade Otemade',
    role: 'Head of Business Development',
    image: '/images/company-assets/Ololade.JPG',
    delay: 0.4
  },
  {
    name: 'Ewele Val-Okenyi',
    role: 'Secretary/Head of Admin Ops',
    image: '/images/company-assets/val.jpg',
    delay: 0.5
  },
  {
    name: 'Dennis Okoye',
    role: 'Head of Product Management',
    image: '/images/company-assets/dennis.jpeg',
    delay: 0.6
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our <span className="text-[#D56649]">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated professionals driving innovation at !NotTech Ltd. Our team is comprised 
            of skilled experts committed to delivering exceptional technology solutions and ensuring 
            client success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
            >
              {/* Image Container */}
              <div className="relative h-64 xs:h-72 sm:h-80 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <motion.div 
                className="p-4 sm:p-6 text-center relative bg-gradient-to-b from-transparent to-white dark:to-gray-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: member.delay + 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {member.name}
                </h3>
                <div className="relative">
                  <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#D56649]/10 text-[#D56649] rounded-full text-xs sm:text-sm font-semibold">
                    {member.role}
                  </span>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 sm:mt-16 lg:mt-20 h-px sm:h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-transparent via-[#D56649] to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default TeamSection;
