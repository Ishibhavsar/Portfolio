import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Map, Box, Briefcase } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'College Bus Tracker',
    category: 'Full Stack & IoT',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    description: 'A real-time GPS tracking system with live location updates via Socket.io. Features a dual-interface platform for drivers (sharing) and students (tracking) with sub-5 second latency.',
    tags: ['React', 'Node.js', 'Socket.io', 'Leaflet', 'MongoDB'],
    link: 'https://track-my-bus-seven.vercel.app/'
  },
  {
    id: 2,
    title: 'XR Educational Simulations',
    category: 'Extended Reality',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=800',
    description: 'Immersive 3D simulations for biology education ("Human Eye"). Modeled detailed assets in Blender and deployed interactive AR experiences via EON XR.',
    tags: ['EON XR', 'Blender', '3D Modeling', 'Education'],
    link: 'https://share.eon-xr.com/playlist/748/8149'
  },
  {
    id: 3,
    title: 'IgniteX - Job Portal',
    category: 'MERN Stack',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    description: 'Full-stack job portal allowing users to browse and post job openings. Features secure user authentication, responsive UI, and a scalable backend architecture.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    link: 'https://ignitex-tawny.vercel.app/'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-space-indigo border-t border-dusty-grape">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-almond-silk font-semibold tracking-wide uppercase text-sm">Portfolio</h2>
            <h3 className="mt-2 text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-parchment">
              Featured Projects
            </h3>
          </div>
          <a href="https://github.com/Ishibhavsar" target="_blank" className="hidden md:flex items-center gap-2 text-almond-silk font-medium hover:text-lilac-ash transition-colors mt-4 md:mt-0">
            View Github <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-dusty-grape rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-dusty-grape"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-space-indigo/30 group-hover:bg-space-indigo/10 transition-colors" />
                <span className="absolute top-4 right-4 bg-space-indigo/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-parchment shadow-sm">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-parchment mb-2">{project.title}</h4>
                <p className="text-lilac-ash text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-space-indigo text-almond-silk text-xs font-medium rounded border border-space-indigo">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-almond-silk text-space-indigo rounded-lg hover:bg-almond-silk/80 transition-colors text-sm font-medium mt-auto"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <a href="https://github.com/Ishibhavsar" target="_blank" className="inline-flex items-center gap-2 text-almond-silk font-medium hover:text-lilac-ash transition-colors">
            View Github <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;