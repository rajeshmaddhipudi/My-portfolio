import React from 'react';
import { Code2, Server, Database, Users } from 'lucide-react';
import { Icon } from '@iconify/react';

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
  // Icon mapping for technical skills
  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: string } = {
      // Frontend Languages
      'HTML': 'vscode-icons:file-type-html',
      'CSS': 'vscode-icons:file-type-css',
      'JavaScript': 'vscode-icons:file-type-js',
      'TypeScript': 'vscode-icons:file-type-typescript',
      
      // Frontend Frameworks
      'React.js': 'vscode-icons:file-type-reactjs',
      'Next.js': 'vscode-icons:file-type-nextjs',
      'Tailwind CSS': 'vscode-icons:file-type-tailwind',
      'Zustand': 'simple-icons:zustand',
      'Redux': 'vscode-icons:file-type-redux',
      'React Query': 'simple-icons:reactquery',
      'Jest': 'vscode-icons:file-type-jest',
      
      // Frontend Tooling
      'Webpack': 'vscode-icons:file-type-webpack',
      'Vite': 'vscode-icons:file-type-vite',
      'Chrome DevTools': 'simple-icons:googlechrome',
      
      // Backend Languages
      'Node.js': 'vscode-icons:file-type-node',
      'C#': 'vscode-icons:file-type-csharp',
      'Python': 'vscode-icons:file-type-python',
      
      // Backend Frameworks
      'NestJS': 'vscode-icons:file-type-nestjs',
      
      // Messaging
      'Kafka': 'simple-icons:apachekafka',
      
      // Architecture
      'REST APIs': 'simple-icons:rest',
      'Microservices': 'simple-icons:microservices',
      'Event-Driven Systems': 'simple-icons:eventstore',
      
      // Databases
      'PostgreSQL': 'vscode-icons:file-type-pgsql',
      'Oracle DB': 'simple-icons:oracle',
      'SQL': 'vscode-icons:file-type-sql',
      'MongoDB': 'vscode-icons:file-type-mongo',
      
      // DevOps
      'Docker': 'vscode-icons:file-type-docker',
      'AWS': 'vscode-icons:file-type-aws',
      'Firebase': 'vscode-icons:file-type-firebase',
      'Netlify': 'vscode-icons:file-type-netlify',
      'Azure Artifacts': 'simple-icons:azureartifacts',
      'JFrog': 'simple-icons:jfrog',
      'GitHub Actions': 'simple-icons:githubactions',
      'Git': 'vscode-icons:file-type-git',
      'NPM': 'vscode-icons:file-type-npm',
      'Yarn': 'vscode-icons:file-type-yarn',
      
      // Tools
      'VS Code': 'vscode-icons:file-type-vscode',
      'Postman': 'vscode-icons:file-type-postman',
      'Figma': 'vscode-icons:file-type-figma',
      'GitHub': 'vscode-icons:file-type-github',
      'MS Office': 'simple-icons:microsoftoffice',
      'DevTools': 'simple-icons:googlechrome',
      'Jira': 'vscode-icons:file-type-jira',
      'Confluence': 'simple-icons:confluence',
      'Azure DevOps': 'simple-icons:azuredevops'
    };

    return iconMap[skill] || 'mdi:code-braces';
  };

  return (
    <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'} md:pl-64`}>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="pt-16 md:pt-0">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h1 className={`text-3xl md:text-4xl font-medium tracking-tight mb-4 ${
                  isDarkTheme 
                    ? 'text-[#9F7AEA]' 
                    : 'text-gradient'
                }`}>
                  Skills & Expertise
                </h1>
                <p className={`text-base md:text-lg max-w-2xl mx-auto ${
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  A comprehensive overview of my technical capabilities
                </p>
              </div>
              
              {/* Technical Skills */}
              <div className="space-y-12 md:space-y-16">
                {/* Frontend Development */}
                <div>
                  <h2 className={`text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3 ${
                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                  }`}>
                    <Code2 className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                    Frontend Development
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <div className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.frontend.languages.map((lang, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(lang)} className="w-4 h-4" />
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.frontend.frameworks.map((framework, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(framework)} className="w-4 h-4" />
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-4 md:p-6 sm:col-span-2 lg:col-span-1`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.frontend.tooling.map((tool, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(tool)} className="w-4 h-4" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Development */}
                <div>
                  <h2 className={`text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3 ${
                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                  }`}>
                    <Server className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                    Backend Development
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Core Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {[...skillsData.technical.backend.languages, ...skillsData.technical.backend.frameworks].map((tech, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(tech)} className="w-4 h-4" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Architecture & Systems</h3>
                      <div className="flex flex-wrap gap-2">
                        {[...skillsData.technical.backend.messaging, ...skillsData.technical.backend.architecture].map((item, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(item)} className="w-4 h-4" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Databases & DevOps */}
                <div>
                  <h2 className={`text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3 ${
                    isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                  }`}>
                    <Database className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                    Infrastructure & Data
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        {[...skillsData.technical.databases.relational, ...skillsData.technical.databases.nosql].map((db, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(db)} className="w-4 h-4" />
                            {db}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-3 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>DevOps & Cloud</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsData.technical.devops.map((tool, index) => (
                          <span key={index} className="skill-tag text-sm flex items-center gap-1">
                            <Icon icon={getSkillIcon(tool)} className="w-4 h-4" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soft Skills */}
              <div className="mt-12 md:mt-16">
                <h2 className={`text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3 ${
                  isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'
                }`}>
                  <Users className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-600'} />
                  Professional Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {skillsData.soft.map((skill, index) => (
                    <div key={index} className={`glass-card rounded-xl p-4 md:p-6`}>
                      <h3 className={`text-lg font-medium mb-2 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-800'
                      }`}>{skill.title}</h3>
                      <p className={`text-sm md:text-base ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
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