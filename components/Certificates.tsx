import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  description: string;
  filePath: string;
  icon: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'API Beginner Learning Path',
    issuer: 'API Academy',
    description: 'Comprehensive introduction to API development and integration',
    filePath: '/Certificate/API Beginner learning path certificate.pdf',
    icon: '🌐'
  },
  {
    id: 2,
    title: 'C++ Programming',
    issuer: 'Simplilearn',
    description: 'Advanced C++ programming concepts and applications',
    filePath: '/Certificate/C++ simplilearn certificate.pdf',
    icon: '💻'
  },
  {
    id: 3,
    title: 'AI & ML Internship',
    issuer: 'IBM SkillsBuild',
    description: 'Completed comprehensive AI and Machine Learning internship program',
    filePath: '/Certificate/Completion Certificate -  IBM SkillsBuild AI ML Internship.pdf',
    icon: '🤖'
  },
  {
    id: 4,
    title: 'Cyber Security Job Simulation',
    issuer: 'Deloitte',
    description: 'Completed cybersecurity simulation and practical exercises',
    filePath: '/Certificate/Deloitte Cyber Job Simulation Completion Certificate.pdf',
    icon: '🔒'
  },
  {
    id: 5,
    title: 'GeeksforGeeks Certification',
    issuer: 'GeeksforGeeks',
    description: 'Technical proficiency and problem-solving skills validation',
    filePath: '/Certificate/GFG Certificate.pdf',
    icon: '🎓'
  },
  {
    id: 6,
    title: 'RHCSA Certification',
    issuer: 'Red Hat',
    description: 'Red Hat Certified System Administrator',
    filePath: '/Certificate/RHCSA CERTIFICATE .pdf',
    icon: '🐧'
  },
  {
    id: 7,
    title: 'SQL Fundamentals',
    issuer: 'SQL Academy',
    description: 'Database management and SQL query optimization',
    filePath: '/Certificate/SQL certificate.pdf',
    icon: '📊'
  }
];

const Certificates: React.FC = () => {
  const handleViewCertificate = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  return (
    <section id="certificates" className="py-20 bg-space-indigo border-t border-dusty-grape">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-almond-silk font-semibold tracking-wide uppercase text-sm">Credentials</h2>
          <h3 className="mt-2 text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-parchment">
            Certificates & Achievements
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-lilac-ash mx-auto">
            Professional certifications and completed training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-dusty-grape border border-dusty-grape rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-6"
            >
              {/* Icon Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-space-indigo flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <button
                  onClick={() => handleViewCertificate(cert.filePath)}
                  className="p-2 rounded-lg hover:bg-space-indigo transition-colors"
                  aria-label="View certificate"
                >
                  <ExternalLink className="w-5 h-5 text-almond-silk" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-almond-silk uppercase tracking-wider mb-2">
                  {cert.issuer}
                </h4>
                <h3 className="text-lg font-bold text-parchment mb-3 group-hover:text-almond-silk transition-colors">
                  {cert.title}
                </h3>
                <p className="text-lilac-ash text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* View Button */}
              <div className="mt-6 pt-4 border-t border-space-indigo">
                <button
                  onClick={() => handleViewCertificate(cert.filePath)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-almond-silk text-space-indigo rounded-lg hover:bg-almond-silk/80 transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  View Certificate
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-almond-silk rounded-2xl transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
