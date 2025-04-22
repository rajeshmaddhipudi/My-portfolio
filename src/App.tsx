import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Heart, Code2, Brain, Database, Palette, Shield, Globe, Menu, X, ChevronDown, ChevronUp, Wrench, Terminal, Server, Cloud, Settings, Users, BookOpen, Sun, Moon } from 'lucide-react';
import profilePic from './assets/profile.jpg';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main App Content
function AppContent() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    experience: true,
    skills: true,
    education: true
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach((element) => {
        const speed = Number(element.getAttribute('data-speed')) || 0.2;
        const offset = window.pageYOffset * speed;
        element.setAttribute('style', `transform: translateY(${offset}px)`);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleSection = (section: 'intro' | 'experience' | 'skills' | 'education') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const experiences = [
    {
      period: "12/2015 – 05/2016",
      title: "Research and Technology data vision Demonstrator (Intern)",
      company: "Airbus Gmbh",
      points: [
        "Identifying and segregating data according to Protégé Software using various C# parsing techniques",
        "Implementation of standardized languages (OWL, RDF Schema, TURTLE) for expressing Ontologies",
        "Designed and researched ONTOLOGY to capture information into formalized data",
        "Extracted optical fiber measurement data from HTML pages and converted to JSON format",
        "Visualized extracted data using HTML5, JavaScript and CSS3",
        "Analyzed requirements, designed software modules, performed testing, and generated technical documentation"
      ]
    },
    {
      period: "08/2017 – 12/2017",
      title: "Junior Web Developer",
      company: "Ibeo Automotive Systems GmbH",
      points: [
        "Developed Web Frontend for Ibeo Evaluation Suite - a modular software for automatic object labeling and post-processing of test drive data",
        "Created web-site mock-ups for Jenkins dashboard to track real-time build status across master, feature and release branches",
        "Responsible for developing user interface and documentation for developed mock-ups",
        "Assisted senior web developers with design and coding tasks",
        "Gained experience with JavaScript frameworks including Angular 2"
      ]
    },
    {
      period: "06/2018- 03/2019",
      title: "Frontend Developer",
      company: "Synergeticon GmbH",
      points: [
        "Developed 5+ websites using Meteor.js, MongoDB, HTML, and Material Design",
        "Created custom components for internal Meteor.js framework",
        "Led UI development and documentation efforts for various projects",
        "Collaborated with Scrum team to develop GUI applications using frontend frameworks",
        "Gained hands-on experience with Vue.js and modern web technologies"
      ]
    },
    
    {
      period: "05/2019 - current",
      company: "SMS group GmbH",
      roles: [
        {
          title: "Technical Co-Contributor And Fullstack Developer-- Flexible Chemistry Analyzer  ",
          period: "June 2024 - Present",
          points: [
            "Led technical implementation of an MVP product for flexible chemistry analysis, enabling efficient material backlog planning",
            "Designed a graphical network system allowing users to visualize and sequence materials with diverse chemical compositions for improved throughput",
            "Guided team in system architecture decisions and development practices",
            "Worked with a technology stack including C#, Python (backend) and React (frontend)",
            "Collaborated with team to gather requirements and translate them into actionable development tasks"
          ]
        },
        {
          title: "Full Stack Developer -MES Revamp",
          period: "04/2022 - 05/2024",
          points: [
            "Contributed to the comprehensive revamp of Manufacturing Execution System (MES) products within a global team setup",
            "Worked closely with PLASMA Framework to create intuitive, responsive user interfaces",
            "Collaborated with international teams to ensure consistent implementation across global sites"
          ]
        },
        {
          "title": "Technical Co-Contributor And Fullstack Developer - Holistic Sequence Planning",
          "period": "03/2021 - 03/2022",
          "points": [
            "Involved in a small development team to implement holistic sequence planning solutions for complete production processes",
            "Developed scheduling and sequencing applications covering CSP, PLTCM, and CGL production lines",
            "Built dynamic frontends using React, TypeScript, and integrated with Node.js backend",
            "Assumed technical leadership responsibilities including code reviews, architecture decisions, and implementation strategies",
            "Ensured efficient production planning and optimized resource allocation through custom-built solutions"
          ]
        },
        {
          "title": "Frontend Developer - Big River Steel",
          "period": "03/2019 - 03/2021",
          "points": [
            "Collaborated with cross-functional development teams to implement customer-centric product demand planning and pre-grouping solutions",
            "Developed responsive and intuitive user interfaces using Angular framework, ensuring optimal performance and user experience",
            "Participated in agile development methodology, successfully delivering features within sprint deadlines"
          ]
        }
      ]
    }
  ].reverse(); // Reverse to show most recent first

  // Add education data
  const education = [
    {
      year: "2015-2017",
      degree: "Master in Control and Embedded Instrumentation",
      institution: "ESIGELEC",
      location: "Rouen, France"
    },
    {
      year: "2014-2016",
      degree: "Master in Embedded System and Instrumentation",
      institution: "Manipal University",
      location: "Manipal, India"
    },
    {
      year: "2008-2013",
      degree: "Bachelor in Electronics and Communication",
      institution: "Visveswaraya technological University",
      location: "Bangalore, India"
    }
  ];

  // Add skills data
  const skillsData = {
    technical: {
      frontend: {
        languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        frameworks: ['React.js', 'Next.js', 'Tailwind CSS', 'Zustand', 'Redux', 'React Query', 'Jest'],
        tooling: ['Webpack', 'Vite', 'Chrome DevTools']
      },
      backend: {
        languages: ['Node.js', 'C#', 'Python'],
        frameworks: ['NestJS'],
        messaging: ['Kafka'],
        architecture: ['REST APIs', 'Microservices', 'Event-Driven Systems']
      },
      databases: {
        relational: ['PostgreSQL', 'Oracle DB', 'SQL'],
        nosql: ['MongoDB']
      },
      devops: ['Docker', 'AWS', 'Firebase', 'Netlify', 'Azure Artifacts', 'JFrog', 'GitHub Actions', 'Git', 'NPM', 'Yarn'],
      tools: ['VS Code', 'Postman', 'Figma', 'GitHub', 'MS Office', 'DevTools', 'Jira', 'Confluence', 'Azure DevOps'],
      practices: ['Agile', 'Scrum', 'Kanban', 'Cross-functional collaboration', 'Version control', 'Code reviews', 'CI/CD pipelines']
    },
    soft: [
      {
        title: 'Collaborative',
        description: 'I work well in cross-functional teams and have experience pairing with designers, testers, and product owners to deliver features smoothly.'
      },
      {
        title: 'Communicative',
        description: 'I\'m comfortable presenting technical ideas clearly — whether it\'s during sprint reviews, retrospectives, or async updates.'
      },
      {
        title: 'Adaptable',
        description: 'I\'ve worked in both fast-paced startups and structured corporate teams, quickly adapting to changing priorities and tech stacks.'
      },
      {
        title: 'Mentorship',
        description: 'I enjoy mentoring junior developers and sharing code quality practices, often through PR reviews or internal tech sessions.'
      },
      {
        title: 'Problem Solver',
        description: 'I tend to break complex problems into manageable pieces and am persistent when debugging or untangling legacy codebases.'
      },
      {
        title: 'Growth Mindset',
        description: 'I\'m always looking to improve—whether it\'s learning a new tool like Zustand or refining how I structure APIs for scalability.'
      }
    ]
  };

  // Add theme toggle function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} ref={parallaxRef}>
      <ScrollToTop />
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 h-screen w-64 ${
        isDarkTheme 
          ? 'bg-[#2D2B36]/80' 
          : 'bg-white/80 border-r border-gray-100 shadow-[4px_0_24px_-8px_rgba(0,0,0,0.1)]'
      } backdrop-blur-md hidden md:flex flex-col p-6 z-50`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gradient'}`}>Rajesh</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDarkTheme 
                ? 'hover:bg-[#1E1B26] text-[#9F7AEA]' 
                : 'hover:bg-gray-100 text-blue-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className="space-y-4">
          <Link 
            to="/"
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/' 
                ? isDarkTheme 
                  ? 'bg-[#1E1B26] text-[#9F7AEA]' 
                  : 'bg-blue-50 text-blue-600 shadow-sm'
                : isDarkTheme
                  ? 'text-gray-300 hover:bg-[#1E1B26] hover:text-[#9F7AEA]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm'
            }`}
          >
            About
          </Link>
          <Link 
            to="/resume"
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/resume'
                ? isDarkTheme 
                  ? 'bg-[#1E1B26] text-[#9F7AEA]' 
                  : 'bg-blue-50 text-blue-600 shadow-sm'
                : isDarkTheme
                  ? 'text-gray-300 hover:bg-[#1E1B26] hover:text-[#9F7AEA]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm'
            }`}
          >
            Resume
          </Link>
          <Link
            to="/skills"
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/skills'
                ? isDarkTheme 
                  ? 'bg-[#1E1B26] text-[#9F7AEA]' 
                  : 'bg-blue-50 text-blue-600 shadow-sm'
                : isDarkTheme
                  ? 'text-gray-300 hover:bg-[#1E1B26] hover:text-[#9F7AEA]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm'
            }`}
          >
            Skills
          </Link>
          <Link 
            to="/contact"
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/contact'
                ? isDarkTheme 
                  ? 'bg-[#1E1B26] text-[#9F7AEA]' 
                  : 'bg-blue-50 text-blue-600 shadow-sm'
                : isDarkTheme
                  ? 'text-gray-300 hover:bg-[#1E1B26] hover:text-[#9F7AEA]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm'
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkTheme 
          ? 'bg-[#2D2B36]/80' 
          : 'bg-white/80 border-b border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)]'
      } backdrop-blur-md md:hidden`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-xl font-bold ${isDarkTheme ? 'text-white' : 'text-gradient'}`}>
            Rajesh Maddhipudi
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkTheme 
                  ? 'hover:bg-[#1E1B26] text-[#9F7AEA]' 
                  : 'hover:bg-gray-100 text-blue-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkTheme 
                  ? 'hover:bg-[#1E1B26] text-white' 
                  : 'hover:bg-gray-100 text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={isDarkTheme ? 'bg-[#2D2B36] border-t border-gray-800' : 'bg-white border-t'}>
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/"
                className={`block w-full text-left py-2 ${
                  location.pathname === '/'
                    ? isDarkTheme 
                      ? 'text-[#9F7AEA]' 
                      : 'text-blue-600'
                    : isDarkTheme
                      ? 'text-gray-300 hover:text-[#9F7AEA]'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/resume"
                className={`block w-full text-left py-2 ${
                  location.pathname === '/resume'
                    ? isDarkTheme 
                      ? 'text-[#9F7AEA]' 
                      : 'text-blue-600'
                    : isDarkTheme
                      ? 'text-gray-300 hover:text-[#9F7AEA]'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                to="/skills"
                className={`block w-full text-left py-2 ${
                  location.pathname === '/skills'
                    ? isDarkTheme 
                      ? 'text-[#9F7AEA]' 
                      : 'text-blue-600'
                    : isDarkTheme
                      ? 'text-gray-300 hover:text-[#9F7AEA]'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className={`block w-full text-left py-2 ${
                  location.pathname === '/contact'
                    ? isDarkTheme 
                      ? 'text-[#9F7AEA]' 
                      : 'text-blue-600'
                    : isDarkTheme
                      ? 'text-gray-300 hover:text-[#9F7AEA]'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">
        <Routes>
          <Route path="/" element={
            <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
              <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <header className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0 ${
                  isDarkTheme ? 'bg-[#1E1B26]' : 'bg-gradient-to-b from-white to-gray-50'
                }`}>
                  <div className="absolute inset-0 z-0">
                    {/* Enhanced background animations */}
                    <div className={`absolute top-20 left-[20%] w-96 h-96 rounded-full blur-[120px] opacity-20 transition-transform duration-300 ${
                      isDarkTheme ? 'bg-[#9F7AEA]/20' : 'bg-blue-200/20'
                    }`} data-speed="-0.3"></div>
                    <div className={`absolute bottom-20 right-[20%] w-96 h-96 rounded-full blur-[120px] opacity-20 transition-transform duration-300 ${
                      isDarkTheme ? 'bg-[#805AD5]/20' : 'bg-cyan-200/20'
                    }`} data-speed="0.3"></div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[80px] animate-spin-slow ${
                      isDarkTheme 
                        ? 'bg-gradient-to-r from-[#9F7AEA]/10 to-[#805AD5]/10' 
                        : 'bg-gradient-to-r from-blue-400/10 to-cyan-400/10'
                    }`}></div>
                    
                    {/* Floating tech icons */}
                    <div className="hidden md:block">
                      <div className="absolute top-[20%] left-[15%] animate-float" style={{ animationDelay: '0.5s' }}>
                        <Code2 size={32} className={isDarkTheme ? 'text-[#9F7AEA]/40' : 'text-blue-500/40'} />
                      </div>
                      <div className="absolute top-[30%] right-[20%] animate-float" style={{ animationDelay: '1s' }}>
                        <Database size={32} className={isDarkTheme ? 'text-[#805AD5]/40' : 'text-cyan-500/40'} />
                      </div>
                      <div className="absolute bottom-[30%] left-[20%] animate-float" style={{ animationDelay: '1.5s' }}>
                        <Brain size={32} className={isDarkTheme ? 'text-[#9F7AEA]/40' : 'text-blue-500/40'} />
                      </div>
                      <div className="absolute bottom-[20%] right-[15%] animate-float" style={{ animationDelay: '2s' }}>
                        <Globe size={32} className={isDarkTheme ? 'text-[#805AD5]/40' : 'text-cyan-500/40'} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="container max-w-6xl mx-auto px-4 z-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                      {/* Profile Image with enhanced animation */}
                      <div className="w-64 h-64 md:w-[400px] md:h-[400px] relative animate-float">
                        <div className={`absolute inset-0 rounded-full blur-2xl scale-110 animate-pulse-slow ${
                          isDarkTheme 
                            ? 'bg-gradient-to-r from-[#9F7AEA]/20 to-[#805AD5]/20' 
                            : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                        }`}></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-2 ring-white/20 animate-scale-in">
                          <img 
                            src={profilePic}
                            alt="Rajesh Maddhipudi" 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </div>
                      
                      {/* Text content with staggered animations */}
                      <div className="text-center md:text-left max-w-xl">
                        <div className="mb-6 animate-fade-in-up">
                          <div className={`inline-block px-4 py-2 rounded-full font-medium mb-4 ${
                            isDarkTheme 
                              ? 'bg-[#2D2B36] text-[#9F7AEA]' 
                              : 'bg-blue-50 text-blue-600'
                          }`}>
                            👋 Welcome to my portfolio
                          </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                          <span className={`bg-clip-text text-transparent ${
                            isDarkTheme 
                              ? 'bg-gradient-to-r from-[#9F7AEA] to-[#805AD5]' 
                              : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                          }`}>Rajesh Maddhipudi</span>
                        </h1>
                        <p className={`text-2xl mb-6 animate-fade-in-up ${
                          isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                        }`} style={{ animationDelay: '0.2s' }}>Senior Software Developer</p>
                        <p className={`text-lg mb-8 animate-fade-in-up ${
                          isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                        }`} style={{ animationDelay: '0.3s' }}>
                          Crafting innovative digital solutions with modern technologies. Specialized in full-stack development and scalable architectures.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                          <Link 
                            to="/contact" 
                            className={`px-6 py-3 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                              isDarkTheme 
                                ? 'bg-gradient-to-r from-[#9F7AEA] to-[#805AD5]' 
                                : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                            }`}
                          >
                            <Mail size={20} />
                            Get in Touch
                          </Link>
                        </div>
                        <div className="flex gap-6 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                          <a 
                            href="https://www.linkedin.com/in/rajesh-maddhipudi-232618a5/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`transition-colors transform hover:scale-110 duration-300 button-hover ${
                              isDarkTheme ? 'text-gray-300 hover:text-[#9F7AEA]' : 'text-gray-700 hover:text-blue-500'
                            }`}
                          >
                            <Linkedin size={28} />
                          </a>
                          <a href="mailto:rajeshmaddhipudi@gmail.com" className={`transition-colors transform hover:scale-110 duration-300 button-hover ${
                            isDarkTheme ? 'text-gray-300 hover:text-[#9F7AEA]' : 'text-gray-700 hover:text-blue-500'
                          }`}>
                            <Mail size={28} />
                          </a>
                        </div>
                        
                        {/* Tech stack pills */}
                        <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                          {['React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 'C#'].map((tech, index) => (
                            <span key={index} className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              isDarkTheme 
                                ? 'bg-[#2D2B36] text-gray-300 hover:bg-[#373447]' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

                {/* About Content */}
                <div id="about-content" className="py-16 md:py-32">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent ${
                      isDarkTheme 
                        ? 'bg-gradient-to-r from-[#9F7AEA] to-[#805AD5]' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                    }`}>About Me</h2>
                    <p className={`text-lg md:text-xl leading-relaxed animate-fade-in-up ${
                      isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                    }`} style={{ animationDelay: '0.2s' }}>
                      I am a passionate software developer with expertise in full-stack development. My journey in technology has been driven by a constant desire to learn and create innovative solutions. I specialize in building scalable web applications using modern technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/resume" element={
            <Resume 
              isDarkTheme={isDarkTheme}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
              experiences={experiences}
              education={education}
            />
          } />
          <Route path="/skills" element={
            <Skills 
              isDarkTheme={isDarkTheme}
              skillsData={skillsData}
            />
          } />
          <Route path="/contact" element={
            <Contact 
              isDarkTheme={isDarkTheme}
            />
          } />
        </Routes>
      </main>

      <footer className={`container mx-auto px-4 py-8 text-center ${
        isDarkTheme ? 'text-gray-400' : 'text-gray-600'
      } md:pl-64`}>
        <p>© {new Date().getFullYear()} Rajesh Maddhipudi. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Main App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;