import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-space-indigo">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-dusty-grape rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-lilac-ash rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-dusty-grape rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 bg-dusty-grape text-parchment rounded-full text-sm font-semibold tracking-wide mb-4 border border-dusty-grape">
            Open to Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-parchment leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-almond-silk to-lilac-ash">
              Ishi Bhavsar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-almond-silk font-medium">
            Full Stack Developer (MERN) & XR Enthusiast
          </p>
          <p className="text-lilac-ash max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Dedicated B.Tech CS student at Techno NJR. Proven track record in building real-time applications and delivering functional MVPs for high-stakes hackathons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#contact" className="px-8 py-3 bg-almond-silk text-space-indigo rounded-lg font-medium hover:bg-almond-silk/80 transition-colors shadow-lg flex items-center justify-center gap-2">
              Contact Me <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="px-8 py-3 bg-dusty-grape text-parchment border border-dusty-grape rounded-lg font-medium hover:bg-dusty-grape/80 transition-colors flex items-center justify-center">
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start pt-6">
            <a href="https://github.com/Ishibhavsar" target="_blank" rel="noopener noreferrer" className="text-lilac-ash hover:text-almond-silk transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/ishi-bhavsar" target="_blank" rel="noopener noreferrer" className="text-lilac-ash hover:text-almond-silk transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ishibhavsar41@gmail.com" className="text-lilac-ash hover:text-almond-silk transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-dusty-grape transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://github.com/Ishibhavsar.png" 
              alt="Ishi Bhavsar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-indigo/90 to-transparent flex flex-col justify-end p-6 text-white">
              <p className="font-bold text-xl text-parchment">Ishi Bhavsar</p>
              <p className="text-almond-silk text-sm">RHCSA Certified</p>
            </div>
          </div>
          
          {/* Decorative floating cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-4 top-20 bg-dusty-grape p-4 rounded-xl shadow-lg border border-dusty-grape hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-space-indigo rounded-full flex items-center justify-center text-almond-silk font-bold">FS</div>
              <div>
                <p className="text-xs text-lilac-ash">Stack</p>
                <p className="font-bold text-parchment">MERN</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-32 bg-dusty-grape p-4 rounded-xl shadow-lg border border-dusty-grape hidden md:block"
          >
             <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-space-indigo rounded-full flex items-center justify-center text-almond-silk font-bold">XR</div>
              <div>
                <p className="text-xs text-lilac-ash">Focus</p>
                <p className="font-bold text-parchment">XR</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;