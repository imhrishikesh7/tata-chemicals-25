import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Best Annual Report Award (Chemicals Category)',
    description:
      'Recognised at India’s Best Annual Report Awards 2023 by Free Press Journal & CareEdge',
  },
  {
    title: 'Aegis Graham Bell Award ',
    description: 'Tata Chemicals and Rallis India awarded for innovation in agriculture',
  },
  {
    title: 'Business World Ranking',
    description: 'Ranked 16th among India’s Top 50 Most Sustainable Companies and 1st in the Chemicals Sector',
  },
  {
    title: 'National Most Innovative Knowledge Enterprise (MIKE) Award ',
    description: 'Recognised for excellence in knowledge-driven innovation',
  },
  {
    title: 'EcoVadis Gold Rating',
    description: 'TCE ranked in the top 5% of companies globally for sustainability performance',
  },
  {
    title: 'CII Safety Excellence Award ',
    description: 'Tata Chemicals Mambattu won Silver for safety excellence',
  },
];

// ✨ Animation variant
const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AwardCard = ({ title, description, index }) => (
  <motion.div
    className="relative w-full"
    custom={index}
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // ✅ Trigger when 20% visible
  >
    {/* Red top-right corner */}
    <div className="absolute top-0 right-0 w-50 h-25 bg-[#ed1c24] rounded-tr-[40px] z-0 translate-x-[4.5%] -translate-y-[8%]" />

    {/* Blue card */}
    <div className="relative bg-[#04386f] text-white z-10 p-6 rounded-tr-[35px] min-h-[230px]">
      <div className="text-[#ed1c24] text-xl mb-3">
        <FaStar className="inline-block animate-pulse" />
      </div>
      <h2 className="text-[#59c3ec] text-2xl font-normal mb-2">{title}</h2>
      <p className="text-white text-xl">{description}</p>
    </div>
  </motion.div>
);

const AwardsGrid = () => (
  <div className="px-6 py-10 bg-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, index) => (
        <AwardCard
          key={index}
          index={index}
          title={award.title}
          description={award.description}
        />
      ))}
    </div>
  </div>
);

export default AwardsGrid;
