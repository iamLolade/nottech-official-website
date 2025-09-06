'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Main About */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to <span className="text-[#D56649]">!Not Tech Ltd</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            An Africa-based technology startup founded in 2022, committed to revolutionizing 
            the digital landscape. Our passionate team of tech enthusiasts combines deep local 
            market insights with a vision to empower businesses and individuals through 
            innovative technological solutions.
          </p>
        </motion.div>

        {/* Vision, Mission, Plan Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {[
            {
              title: "Our Vision",
              description: "Leading the tech landscape in Africa and beyond, seamlessly integrating technology into businesses and individuals' operations, fostering growth, efficiency, and innovation.",
              icon: "undraw_launch-event_aur1.svg",
              delay: 0.2
            },
            {
              title: "Our Mission",
              description: "Empowering businesses with innovative technology solutions, driving growth, enhancing efficiency, and transforming the digital landscape through collaboration and knowledge-sharing.",
              icon: "undraw_engineering-team_13ax.svg",
              delay: 0.4
            },
            {
              title: "Our Plan",
              description: "Crafting bespoke technology solutions through innovation, strategic collaboration, and a client-focused approach, setting new standards in software applications.",
              icon: "undraw_creative-flow_t3kz.svg",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <motion.div 
                className="relative h-32 sm:h-40 mb-4 sm:mb-6 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={`/images/vector/${item.icon}`}
                  alt={item.title}
                  fill
                  className="object-contain dark:invert-0 transition-transform duration-300 group-hover:drop-shadow-lg"
                />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="relative h-[200px] sm:h-[250px] md:h-[300px] group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/images/vector/undraw_founding-team_8uhm.svg"
                alt="Our Approach"
                fill
                className="object-contain dark:invert-0 transition-transform duration-300 group-hover:drop-shadow-xl"
              />
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Our Approach to Excellence
              </h3>
              <ul className="space-y-4">
                {[
                  "Deep understanding of local market dynamics",
                  "Innovative solutions tailored to African context",
                  "Commitment to quality and reliability",
                  "Focus on user experience and satisfaction",
                  "Continuous learning and adaptation"
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300 p-1 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <svg className="w-5 h-5 mr-3 text-[#D56649]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;