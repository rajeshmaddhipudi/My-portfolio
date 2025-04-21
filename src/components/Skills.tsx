import React from 'react';
import { Code2, Server, Database, Users } from 'lucide-react';

interface SkillsProps {
  isDarkTheme: boolean;
  skillsData: {
    technical: {
      frontend: {
        languages: string[];
        frameworks: string[];
        tooling: string[];
      };
      backend: {
        languages: string[];
        frameworks: string[];
        messaging: string[];
        architecture: string[];
      };
      databases: {
        relational: string[];
        nosql: string[];
      };
      devops: string[];
      tools: string[];
      practices: string[];
    };
    soft: Array<{
      title: string;
      description: string;
    }>;
  };
}

const Skills: React.FC<SkillsProps> = ({ isDarkTheme, skillsData }) => {
  return (
    <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'} md:pl-64`}>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="pt-16 md:pt-0">
              <h1 className={`section-heading text-center ${
                isDarkTheme 
                  ? 'text-[#9F7AEA]' 
                  : 'text-gradient'
              }`}>
                Skills & Expertise
              </h1>
              <p className={`section-subheading text-center max-w-2xl mx-auto ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`}>
                A comprehensive overview of my technical capabilities
              </p>
              
              {/* Technical Skills */}
              <div className="mb-24 space-y-16">
                {/* Frontend Development */}
                <div>
                  <h2 className={`text-2xl font-semibold mb-8 flex items-center gap-3 ${
                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                  }`}>
                    <Code2 className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                    Frontend Development
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.frontend.languages.map((lang, index) => (
                          <span key={index} className="skill-tag">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.frontend.frameworks.map((framework, index) => (
                          <span key={index} className="skill-tag">
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.frontend.tooling.map((tool, index) => (
                          <span key={index} className="skill-tag">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Development */}
                <div>
                  <h2 className={`text-2xl font-semibold mb-8 flex items-center gap-3 ${
                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                  }`}>
                    <Server className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                    Backend Development
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Core Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {[...skillsData.technical.backend.languages, ...skillsData.technical.backend.frameworks].map((tech, index) => (
                          <span key={index} className="skill-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Architecture & Systems</h3>
                      <div className="flex flex-wrap gap-2">
                        {[...skillsData.technical.backend.messaging, ...skillsData.technical.backend.architecture].map((item, index) => (
                          <span key={index} className="skill-tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Databases & DevOps */}
                <div>
                  <h2 className={`text-2xl font-semibold mb-8 flex items-center gap-3 ${
                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                  }`}>
                    <Database className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                    Infrastructure & Data
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        {[...skillsData.technical.databases.relational, ...skillsData.technical.databases.nosql].map((db, index) => (
                          <span key={index} className="skill-tag">
                            {db}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>DevOps & Cloud</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.devops.map((tool, index) => (
                          <span key={index} className="skill-tag">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soft Skills */}
              <div>
                <h2 className={`text-2xl font-semibold mb-8 flex items-center gap-3 ${
                  isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                }`}>
                  <Users className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                  Professional Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillsData.soft.map((skill, index) => (
                    <div key={index} className={`glass-card rounded-xl p-6`}>
                      <h3 className={`card-heading ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>{skill.title}</h3>
                      <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 