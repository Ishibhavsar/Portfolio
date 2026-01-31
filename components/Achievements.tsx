import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, MapPin, Zap, Rocket, Car } from 'lucide-react';
import { Achievement } from '../types';

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'MCD Smart Parking System',
    event: 'Hack4Delhi Hackathon',
    badge: 'PARTICIPANT',
    description: 'Developed an end-to-end MERN solution featuring a User Portal, Admin Dashboard, and Hardware Simulator. Implemented live OCR-based ANPR scanning and ghost vehicle detection.',
    tags: ['MERN', 'OCR', 'Security Logic'],
    link: 'https://mcd-smart-parking-system.vercel.app/'
  },
  {
    id: 2,
    title: 'Gamified STEM Platform',
    event: 'Smart India Hackathon 2025',
    badge: 'PARTICIPANT',
    description: 'Engineered a gamified learning platform for Team HackNRun to increase rural student engagement. Built a teacher analytics dashboard using Node.js/MongoDB.',
    tags: ['Node.js', 'Gamification', 'Analytics'],
    link: 'https://youtu.be/cpnoWL4YSlQ'
  },
  {
    id: 3,
    title: 'Cosmic Canvas',
    event: 'NASA Space Apps Challenge 2025',
    badge: 'RUNNER UP',
    description: 'Frontend Developer for a zoomable imagery viewer utilizing NASA\'s open-source astronomical data APIs to visualize cosmic data.',
    tags: ['Frontend', 'NASA API', 'Visualization'],
    link: 'https://cosmic-canvas.wiki/'
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-space-indigo border-t border-dusty-grape">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-almond-silk font-semibold tracking-wide uppercase text-sm">Experience</h2>
          <h3 className="mt-2 text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-parchment">
            Hackathons & Events
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-lilac-ash mx-auto">
            Participating in high-stakes hackathons to build rapid, innovative solutions.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-6 min-w-max">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-dusty-grape border border-dusty-grape rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-80 flex-shrink-0"
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm bg-space-indigo text-almond-silk`}>
                    <Medal className="w-3 h-3 mr-1" />
                    {item.badge}
                  </span>
                </div>

                <div className="p-5 pt-12 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-lilac-ash mb-1">{item.event}</h4>
                    <h3 className="text-lg font-bold text-parchment group-hover:text-almond-silk transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-lilac-ash mb-4 flex-1 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-space-indigo text-almond-silk text-xs rounded border border-space-indigo">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-almond-silk text-space-indigo rounded-lg hover:bg-almond-silk/80 transition-colors text-sm font-medium mt-auto"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
