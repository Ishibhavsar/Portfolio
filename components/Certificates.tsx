import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  filePath: string;
  previewImage: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'RHCSA Certification',
    issuer: 'Red Hat',
    filePath: '/Certificate/RHCSA CERTIFICATE .pdf',
    previewImage: '/Certificate/previews/rhcsa-certificate.png'
  },
  {
    id: 2,
    title: 'API Beginner Learning Path',
    issuer: 'API Academy',
    filePath: '/Certificate/API Beginner learning path certificate.pdf',
    previewImage: '/Certificate/previews/api-certificate.png'
  },
  {
    id: 3,
    title: 'GeeksforGeeks Certification',
    issuer: 'GeeksforGeeks',
    filePath: '/Certificate/GFG Certificate.pdf',
    previewImage: '/Certificate/previews/gfg-certificate.png'
  },
  {
    id: 4,
    title: 'AI & ML Internship Certificate',
    issuer: 'IBM SkillsBuild',
    filePath: '/Certificate/Completion Certificate -  IBM SkillsBuild AI ML Internship.pdf',
    previewImage: '/Certificate/previews/ibm-certificate.png'
  },
  {
    id: 5,
    title: 'Cybersecurity Certificate',
    issuer: 'Deloitte',
    filePath: '/Certificate/Deloitte Cyber Job Simulation Completion Certificate.pdf',
    previewImage: '/Certificate/previews/deloitte-certificate.png'
  },
  {
    id: 6,
    title: 'C++ Programming Certificate',
    issuer: 'Simplilearn',
    filePath: '/Certificate/C++ simplilearn certificate.pdf',
    previewImage: '/Certificate/previews/cpp-certificate.png'
  },
  {
    id: 7,
    title: 'SQL Certificate',
    issuer: 'SQL Academy',
    filePath: '/Certificate/SQL certificate.pdf',
    previewImage: '/Certificate/previews/sql-certificate.png'
  }
];

const Certificates: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleDownloadCertificate = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  const handleImageError = (certId: number) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
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

        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-6 min-w-max">
            {certificates.map((cert, index) => {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-72 flex-shrink-0"
                >
                  {/* Certificate Preview */}
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {!imageErrors[cert.id] ? (
                    <img
                      src={cert.previewImage}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(cert.id)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-xs text-gray-500 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Colored Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 min-h-[48px]">
                    {cert.title}
                  </h3>
                  
                  {/* Download Button */}
                  <button
                    onClick={() => handleDownloadCertificate(cert.filePath)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold shadow-sm hover:shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </button>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
