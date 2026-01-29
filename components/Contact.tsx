import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-space-indigo border-t border-dusty-grape">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-parchment sm:text-4xl mb-6">
          Let's work together
        </h2>
        <p className="text-xl text-lilac-ash mb-10">
          I'm currently looking for internships and opportunities in Full Stack Development and XR.
          Let's build something amazing!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
           <a href="mailto:ishibhavsar41@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-dusty-grape rounded-xl shadow-sm border border-dusty-grape hover:border-almond-silk hover:shadow-md transition-all group w-full md:w-auto">
             <div className="p-2 bg-space-indigo rounded-full text-almond-silk group-hover:bg-almond-silk group-hover:text-space-indigo transition-colors">
               <Mail className="w-6 h-6" />
             </div>
             <div className="text-left">
               <p className="text-sm text-lilac-ash font-medium">Email Me</p>
               <p className="text-parchment font-semibold">ishibhavsar41@gmail.com</p>
             </div>
           </a>
           
           <div className="flex items-center gap-3 px-6 py-4 bg-dusty-grape rounded-xl shadow-sm border border-dusty-grape w-full md:w-auto">
             <div className="p-2 bg-space-indigo rounded-full text-almond-silk">
               <MapPin className="w-6 h-6" />
             </div>
             <div className="text-left">
               <p className="text-sm text-lilac-ash font-medium">Location</p>
               <p className="text-parchment font-semibold">Udaipur, Rajasthan</p>
             </div>
           </div>
        </div>

        <div className="flex justify-center space-x-8">
          <a href="https://linkedin.com/in/ishi-bhavsar" target="_blank" className="text-lilac-ash hover:text-almond-silk transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/Ishibhavsar" target="_blank" className="text-lilac-ash hover:text-almond-silk transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;