'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Team members data
const teamMembers = [
  {
    name: 'Peter Abiodun',
    role: 'Chief Executive Officer',
    image: '/images/company-assets/peter-2.jpeg',
    linkedin: 'https://www.linkedin.com/in/peter-abisayo-abiodun-7b288b102/',
    delay: 0.1
  },
  {
    name: 'Wilfred Ighalo',
    role: 'Chief Operations Officer',
    image: '/images/company-assets/wilfred_headshot.jpeg',
    linkedin: 'https://www.linkedin.com/in/wilfred-ighalo-a0374a91',
    delay: 0.2
  },
  {
    name: 'Johnny Olugbodi',
    role: 'Chief Technical Officer',
    image: '/images/company-assets/johnny_headshot.jpeg',
    linkedin: 'https://www.linkedin.com/in/johnny-olugbodi-b0147576/',
    delay: 0.3
  },
  {
    name: 'Ololade Otemade',
    role: 'Head of Business Development',
    image: '/images/company-assets/Ololade.JPG',
    linkedin: 'https://www.linkedin.com/in/ololade-otemade/',
    delay: 0.4
  },
  {
    name: 'Ewele Val-Okenyi',
    role: 'Secretary/Head of Admin Ops',
    image: '/images/company-assets/val.jpg',
    linkedin: 'https://www.linkedin.com/in/eweleval/',
    delay: 0.5
  },
  {
    name: 'Dennis Okoye',
    role: 'Head of Product Management',
    image: '/images/company-assets/dennis.jpeg',
    linkedin: 'https://www.linkedin.com/in/dennis-okoye-9b00b71b0/',
    delay: 0.6
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-surface-muted dark:bg-gray-900/50">
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
          <p className="text-base sm:text-lg text-brand-secondary/90 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated professionals driving innovation at !NotTech Ltd. Our team is comprised 
            of skilled experts committed to delivering exceptional technology solutions and ensuring 
            client success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              key={member.name}
              className="group relative bg-surface-light dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className="relative h-64 xs:h-72 sm:h-80 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  aria-label={`Profile photo of ${member.name}, ${member.role} at !Not Tech${member.linkedin ? '. Click to view LinkedIn profile' : ''}`}
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

              {/* LinkedIn Icon */}
              {member.linkedin && (
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 sm:mt-16 lg:mt-20 h-px sm:h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-transparent via-[#D56649] to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default TeamSection;
