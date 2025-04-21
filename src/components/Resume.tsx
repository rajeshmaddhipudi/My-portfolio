import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ResumeProps {
  isDarkTheme: boolean;
  expandedSections: {
    intro: boolean;
    experience: boolean;
    education: boolean;
  };
  toggleSection: (section: 'intro' | 'experience' | 'education') => void;
  experiences: Array<{
    period: string;
    title?: string;
    company: string;
    points?: string[];
    roles?: Array<{
      title: string;
      period: string;
      points: string[];
    }>;
  }>;
  education: Array<{
    year: string;
    degree: string;
    institution: string;
    location: string;
  }>;
}

const Resume: React.FC<ResumeProps> = ({ 
  isDarkTheme, 
  expandedSections, 
  toggleSection, 
  experiences, 
  education 
}) => {
  return (
    <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'} md:pl-64 font-inter`}>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="pt-16 md:pt-0">
            {/* Intro Section */}
            <div className="mb-12">
              <div className={`flex items-center justify-between mb-4 rounded-lg p-4 ${
                isDarkTheme ? 'bg-[#2D2B36]' : 'bg-gray-50'
              }`}>
                <h2 className={`text-3xl font-medium tracking-tight ${
                  isDarkTheme 
                    ? 'text-[#9F7AEA]' 
                    : 'text-gradient'
                }`}>Intro</h2>
                <button 
                  onClick={() => toggleSection('intro')}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkTheme 
                      ? 'hover:bg-[#1E1B26]' 
                      : 'hover:bg-gray-100'
                  }`}
                  aria-expanded={expandedSections.intro}
                >
                  {expandedSections.intro ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              {expandedSections.intro && (
                <div className="glass-card rounded-xl p-6">
                  <p className={`text-base leading-relaxed font-normal ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    I am a passionate software developer seeking a new challenge. I specialize in front-end & serverless backend-development using Typescript, React.js, and Node.js. As an advocate for web performance, accessibility, I create amazing web applications to improve the internet. I love encountering hard-to-solve-problems and approach them with patience, determination, and relentless perseverance.
                  </p>
                </div>
              )}
            </div>
            
            {/* Experience Timeline */}
            <div className="mb-12">
              <div className={`flex items-center justify-between mb-8 rounded-lg p-4 ${
                isDarkTheme ? 'bg-[#2D2B36]' : 'bg-gray-50'
              }`}>
                <h2 className={`text-3xl font-medium tracking-tight ${
                  isDarkTheme 
                    ? 'text-[#9F7AEA]' 
                    : 'text-gradient'
                }`}>Experience</h2>
                <button 
                  onClick={() => toggleSection('experience')}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkTheme 
                      ? 'hover:bg-[#1E1B26]' 
                      : 'hover:bg-gray-100'
                  }`}
                  aria-expanded={expandedSections.experience}
                >
                  {expandedSections.experience ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              {expandedSections.experience && (
                <div className="relative">
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative flex">
                        {/* Date on the left */}
                        <div className="w-[100px] md:w-[140px] flex-shrink-0 text-right">
                          <h3 className={`text-sm font-medium tracking-wide ${
                            isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                          }`}>{exp.period}</h3>
                        </div>

                        {/* Timeline Dot and Line */}
                        <div className="relative mx-4 md:mx-6 flex-shrink-0">
                          {/* Vertical line segment */}
                          {index !== experiences.length - 1 && (
                            <div className={`absolute left-[11px] top-[24px] w-[2px] h-[calc(100%+32px)] ${
                              isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                            }`}></div>
                          )}
                          {/* Dot */}
                          <div className={`w-6 h-6 rounded-full border-4 z-10 flex items-center justify-center ${
                            isDarkTheme 
                              ? 'border-[#1E1B26] bg-[#2D2B36]' 
                              : 'border-white bg-blue-50'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              isDarkTheme ? 'bg-[#9F7AEA]' : 'bg-blue-500'
                            }`}></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow pb-8">
                          <div className="glass-card rounded-xl p-6">
                            {exp.roles ? (
                              // Multiple roles in same company
                              <>
                                <div className="flex justify-between items-center mb-6">
                                  <span className={`text-xl font-medium tracking-tight ${
                                    isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                                  }`}>{exp.company}</span>
                                </div>
                                <div className="space-y-6">
                                  {exp.roles.map((role, roleIndex) => (
                                    <div key={roleIndex} className={`relative pl-4 ${
                                      isDarkTheme ? 'border-l-2 border-gray-700' : 'border-l-2 border-blue-100'
                                    }`}>
                                      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
                                        isDarkTheme 
                                          ? 'bg-[#2D2B36] border-2 border-gray-700' 
                                          : 'bg-blue-50 border-2 border-blue-200'
                                      }`}></div>
                                      <div className="flex justify-between items-center mb-2">
                                        <h3 className={`text-lg font-medium tracking-tight ${
                                          isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                                        }`}>{role.title}</h3>
                                        <span className={`text-sm font-medium tracking-wide ${
                                          isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                                        }`}>{role.period}</span>
                                      </div>
                                      <ul className="space-y-2">
                                        {role.points.map((point, pointIndex) => (
                                          <li key={pointIndex} className="flex items-start gap-2">
                                            <span className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-500'}>•</span>
                                            <p className={`text-base leading-relaxed font-normal ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{point}</p>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : (
                              // Single role
                              <>
                                <div className="flex justify-between items-center mb-4">
                                  <h3 className={`text-lg font-medium tracking-tight ${
                                    isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                                  }`}>{exp.title}</h3>
                                  <span className={`text-sm font-medium tracking-wide ${
                                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                                  }`}>{exp.company}</span>
                                </div>
                                <ul className="space-y-2">
                                  {exp.points?.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-start gap-2">
                                      <span className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-500'}>•</span>
                                      <p className={`text-base leading-relaxed font-normal ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{point}</p>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="mb-12">
              <div className={`flex items-center justify-between mb-8 rounded-lg p-4 ${
                isDarkTheme ? 'bg-[#2D2B36]' : 'bg-gray-50'
              }`}>
                <h2 className={`text-3xl font-medium tracking-tight ${
                  isDarkTheme 
                    ? 'text-[#9F7AEA]' 
                    : 'text-gradient'
                }`}>Education</h2>
                <button 
                  onClick={() => toggleSection('education')}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkTheme 
                      ? 'hover:bg-[#1E1B26]' 
                      : 'hover:bg-gray-100'
                  }`}
                  aria-expanded={expandedSections.education}
                >
                  {expandedSections.education ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              {expandedSections.education && (
                <div className="relative">
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="relative flex">
                        {/* Year on the left */}
                        <div className="w-[100px] md:w-[140px] flex-shrink-0 text-right">
                          <h3 className={`text-sm font-medium tracking-wide ${
                            isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                          }`}>{edu.year}</h3>
                        </div>

                        {/* Timeline Dot and Line */}
                        <div className="relative mx-4 md:mx-6 flex-shrink-0">
                          {/* Vertical line segment */}
                          {index !== education.length - 1 && (
                            <div className={`absolute left-[11px] top-[24px] w-[2px] h-[calc(100%+32px)] ${
                              isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'
                            }`}></div>
                          )}
                          {/* Dot */}
                          <div className={`w-6 h-6 rounded-full border-4 z-10 flex items-center justify-center ${
                            isDarkTheme 
                              ? 'border-[#1E1B26] bg-[#2D2B36]' 
                              : 'border-white bg-blue-50'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              isDarkTheme ? 'bg-[#9F7AEA]' : 'bg-blue-500'
                            }`}></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow pb-8">
                          <div className="glass-card rounded-xl p-6">
                            <div className="flex flex-col gap-1">
                              <h3 className={`text-lg font-medium tracking-tight ${
                                isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                              }`}>{edu.degree}</h3>
                              <div className="flex items-center gap-2">
                                <span className={`text-base font-normal ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {edu.institution}
                                </span>
                                <span className={isDarkTheme ? 'text-gray-600' : 'text-gray-400'}>•</span>
                                <span className={`text-base font-normal ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                                  {edu.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 