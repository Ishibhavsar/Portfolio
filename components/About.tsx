import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Layers, Box, Database, Globe } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Languages', desc: 'C, C++, Python, Javascript' },
  { icon: Globe, title: 'Web Technologies', desc: 'React.js, Node.js, Express.js' },
  { icon: Database, title: 'Database', desc: 'MongoDB, Mongoose' },
  { icon: Box, title: 'Extended Reality', desc: 'EON XR, Blender, Unity' },
  { icon: Terminal, title: 'System Admin', desc: 'Linux (RHEL), Bash' },
  { icon: Layers, title: 'Tools', desc: 'Git, Socket.io, Leaflet' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-space-indigo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-almond-silk font-semibold tracking-wide uppercase text-sm">About Me</h2>
          <h3 className="mt-2 text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-parchment">
            Tech Enthusiast & Problem Solver
          </h3>
          <p className="mt-4 max-w-3xl text-xl text-lilac-ash mx-auto">
            I am a 3rd-year Computer Science student at Techno NJR Institute of Technology. 
            I specialize in full-stack web development and exploring the immersive world of Extended Reality (XR).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dusty-grape p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dusty-grape"
            >
              <div className="w-12 h-12 bg-space-indigo rounded-lg flex items-center justify-center text-almond-silk mb-4">
                <skill.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-parchment mb-2">{skill.title}</h4>
              <p className="text-lilac-ash">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;