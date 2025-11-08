import React, { useState, useEffect } from 'react';
import minesweeper from './assets/minesweeper.png';
import purongginto from './assets/purongginto.png';
import attendance from './assets/attendance.png';
import issay from './assets/issay.png';
import portpaulio from './assets/portpaulio.png';
import headerbg from './assets/headerbg.jpg';
import { useRef } from "react";
import aboutbg from './assets/aboutbg.png';
import contactbg from './assets/contactbg.jpg';
import mypic from './assets/pol.jpg';
import logo from './assets/logo.png';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverColor, setHoverColor] = useState('from-slate-50 to-slate-100');
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,    
    offset: 100,    
  });
}, []);

useEffect(() => {
  const THRESHOLD = 20; // para hindi agad gumagalaw kapag konti lang scroll

  const onScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;

        if (Math.abs(currentY - lastScrollY.current) < THRESHOLD) {
          ticking.current = false;
          return;
        }

        if (currentY > lastScrollY.current && currentY > 50) {
          // scroll down tapos hide header
          setShowHeader(false);
        } else {
          // scroll up tapos show header
          setShowHeader(true);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

    const projects = [
  {
    title: "Minesweeper",
    description: "A game to uncover all the squares on a grid that do not contain mines without being blown up by clicking on a square with a mine underneath",
    tech: ["HTML/CSS"],
    link: "#",
    github: "#"
  },
  {
    title: "Purong Ginto",
    description: "These services allow customers to buy groceries, household items, and other products for home delivery or in-store pickup",
    tech: ["JavaScript", "HTML/CSS",],
    link: "#",
    github: "#"
  },
  {
    title: "Attendance Checker",
    description: "Tool used to monitor and record individuals like students if they are present or not",
    tech: ["PHP", "HTML/CSS", "SQL"],
    link: "#",
    github: "#"
  },
  {
    title: "BITE-ex",
    description: "A modern blogging platform where users can create, edit, and share posts with authentication and commenting features.",
    tech: ["PHP", "HTML/CSS", "SQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, projects, and contact information with a responsive and modern UI.",
    tech: ["PHP", "HTML/CSS", "SQL"],
    link: "#",
    github: "#"
  }
];


  const skills = [
    { 
      emoji: "💻", 
      name: "Frontend Development", 
      items: ["React", "TypeScript", "Tailwind CSS"] 
    },
    { 
      emoji: "🎨", 
      name: "UI/UX Design", 
      items: ["Figma", "Responsive Design", "Accessibility"] 
    },
    { 
      emoji: "🚀", 
      name: "Backend & Tools", 
      items: ["Node.js", "Git", "REST APIs"] 
    }
  ];

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<div className="font-montserrat ...">


      {/* Navigation */}

      <nav
  className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md transition-transform duration-500 ${
    showHeader ? 'translate-y-0' : '-translate-y-full'
  }`}
>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div
  className="flex items-center cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img
    src={logo}
    alt="Logo"
    className="w-24 h-24 md:w-40 md:h-38 object-contain"
  />
</div>



      <div className="hidden md:flex space-x-8">
        {navigation.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-colors duration-200 ${
              activeSection === item.id
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <button
        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {mobileMenuOpen && (
    <div className="md:hidden bg-white shadow-lg border-t">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
              activeSection === item.id
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>


      {/* Home Section */}
      
<section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center text-white scroll-smooth"
  style={{ backgroundImage: `url(${headerbg})` }}
>
  {/* LEFT SIDE - TEXT */}
  <div
    className="md:w-1/2 w-full text-center md:text-left px-8 md:pl-24 md:pt-16 transform translate-x-4 translate-y-6 scale-[0.85] origin-top-left"
    data-aos="fade-up"
  >
    <h1 className="font-pixel pixel-outline text-4xl md:text-6xl uppercase tracking-wide mb-4">
      Hi, I’m <br /> Paul Olivo
    </h1>
    <p className="text-lg md:text-xl font-montserrat pixel-outline mb-8 leading-relaxed">
      A passionate web developer who loves creating pixel-inspired experiences ✨
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start" data-aos="zoom-in" data-aos-delay="300">
      {/* View Work Button */}
      <a
        href="#projects"
        className="font-pixel bg-black/70 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
      >
        View My Work
      </a>

      {/* Contact Button */}
      <a
        href="#contact"
        className="font-pixel bg-white/80 border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
      >
        Contact Me
      </a>
    </div>
  </div>

  {/* RIGHT SIDE - YUNG IMAGE */}
  <div
    className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0 scale-[0.75]"
    data-aos="fade-left"
    data-aos-delay="500"
  >
    <img
      src={mypic}
      alt="My portrait"
      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white shadow-lg shadow-black/50"
    />
  </div>
</section>






      {/* About Section */}
      {/* About Section */}
<section
  id="about"
  className="relative py-20 px-4 bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${aboutbg})` }}
>
  <div className="max-w-6xl mx-auto" data-aos="fade-up">
    <h2 className="font-pixel text-4xl text-center text-white mb-10 drop-shadow-[2px_2px_0_#000]">
      ABOUT ME
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Side - Text */}
      <div
        className="bg-black/60 border-2 border-white rounded-lg p-6 backdrop-blur-sm"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <p className="mb-4 leading-relaxed">
          Hi! I’m Paul Emmanuel Olivo, a person who’s passionate about growth, creativity, and doing things with purpose. 
          I love challenging myself whether it’s through sports, new projects, or learning something new every day.
        </p>
        <p className="mb-4 leading-relaxed">
          I’m into badminton, and it’s one of the things that keeps me focused, disciplined, and driven to improve. 
          I believe in working hard, staying consistent, and enjoying the process while aiming to be better than yesterday.
        </p>
        <p className="leading-relaxed">
          Outside of what I do, I value simplicity, authenticity, and meaningful connections. 
          I’m the kind of person who puts effort into everything I care about and always tries to make things 
          not just good, but something I can be proud of.
        </p>
      </div>

      {/* Right Side - Abilities */}
      <div
        className="bg-black/60 border-2 border-white rounded-lg p-6 backdrop-blur-sm"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h3 className="font-pixel text-xl mb-6 text-center drop-shadow-[2px_2px_0_#000]">Abilities</h3>
        <ul className="space-y-3 font-medium">
          <li>• Flexible</li>
          <li>• Creative Thinking</li>
          <li>• Critical Thinker</li>
          <li>• Fast Learner</li>
        </ul>
      </div>
    </div>

    <h3
      className="font-pixel text-2xl text-center mt-16 mb-8 drop-shadow-[2px_2px_0_#000]"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      Skills & Expertise
    </h3>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-3 gap-6" data-aos="zoom-in-up" data-aos-delay="800">
      {[
        { title: "Frontend Development", skills: ["React", "TypeScript", "Tailwind CSS"] },
        { title: "UI/UX Design", skills: ["Figma", "Responsive Design", "Accessibility"] },
        { title: "Backend & Tools", skills: ["Node.js", "Git", "REST APIs"] },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-black/60 border-2 border-white rounded-lg p-6 backdrop-blur-sm 
          transition-transform duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[4px_4px_0_#fff]"
        >
          <h4 className="font-pixel text-lg mb-4">{item.title}</h4>
          <ul className="space-y-2 text-sm">
            {item.skills.map((skill, i) => (
              <li key={i}>• {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>




<section
  id="projects"
  className="relative py-20 px-4 transition-all duration-700 bg-[url('/path-to-your-pixel-bg-projects.png')] bg-cover bg-center overflow-hidden"
>
  <div className={`absolute inset-0 ${hoverColor} opacity-60 transition-all duration-700`}></div>

  <div className="relative max-w-7xl mx-auto z-10" data-aos="fade-up">
    <h2 className="font-pixel pixel-outline text-center text-4xl uppercase">Projects</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-12 rounded-full"></div>

    <div className="grid lg:grid-cols-2 gap-12 items-start text-white" data-aos="fade-up" data-aos-delay="200">
      {/* LEFT SIDE yung mga box*/}
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setActiveSection(project.title);
              if (project.title === "Minesweeper") setHoverColor("bg-gradient-to-br from-blue-100 to-purple-200");
              else if (project.title === "Purong Ginto") setHoverColor("bg-gradient-to-br from-yellow-100 to-orange-200");
              else if (project.title === "Attendance Checker") setHoverColor("bg-gradient-to-br from-green-100 to-emerald-200");
              else if (project.title === "BITE-ex") setHoverColor("bg-gradient-to-br from-pink-100 to-rose-200");
              else if (project.title === "Portfolio Website") setHoverColor("bg-gradient-to-br from-indigo-100 to-sky-200");
              else setHoverColor("bg-gradient-to-br from-white to-gray-100");
            }}
            onMouseLeave={() => {
              setActiveSection("");
              setHoverColor("bg-gradient-to-br from-white to-gray-100");
            }}
            onClick={() => {
              setSelectedProject(project);
              setIsModalOpen(true);
            }}
            className="p-6 rounded-xl border border-white/20 bg-white/60 backdrop-blur-sm cursor-pointer transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3 className="text-2xl font-semibold mb-2 text-black">{project.title}</h3>
            <p className="text-sm text-gray-800 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center mt-20" data-aos="fade-left" data-aos-delay="400">
        <div className="relative w-full max-w-[700px] h-[420px] rounded-xl overflow-hidden shadow-2xl bg-black/40 flex items-center justify-center backdrop-blur-sm">
          <img
            src={
              activeSection === "Minesweeper"
                ? minesweeper
                : activeSection === "Purong Ginto"
                ? purongginto
                : activeSection === "Attendance Checker"
                ? attendance
                : activeSection === "BITE-ex"
                ? issay
                : activeSection === "Portfolio Website"
                ? portpaulio
                : null
            }
            alt=""
            className="object-contain w-full h-full scale-[0.97] transition-transform duration-700"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3 text-lg font-semibold">
            {activeSection || "Hover over a project to preview"}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>










      {/* Contact Section */}
<section
  id="contact"
  className="relative py-20 px-4 bg-cover bg-center"
  style={{ backgroundImage: `url(${contactbg})` }}
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

  <div
    className="relative z-10 max-w-4xl mx-auto text-white text-center space-y-8"
    data-aos="fade-up"
  >
    <h2 className="text-5xl font-pixel font-bold mb-6 drop-shadow-[3px_3px_0px_#000]">
      Let’s Create Something Cool
    </h2>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Got ideas? Let’s bring them to life — one pixel at a time.  
      Reach out through any of my socials below and let’s make magic happen!
    </p>

    <div className="flex flex-col items-center gap-4 mt-10" data-aos="zoom-in" data-aos-delay="300">
      <a
        href="mailto:polyccio.olivo@gmail.com"
        className="text-xl font-semibold bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg backdrop-blur-md transition duration-300"
      >
        📧 polyccio.olivo@gmail.com
      </a>

      <a
        href="https://github.com/PaulEmmanuelOlivo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg backdrop-blur-md transition duration-300"
      >
        💻 github.com/PaulEmmanuelOlivo
      </a>

      <a
        href="https://www.facebook.com/subtleart"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg backdrop-blur-md transition duration-300"
      >
        💬 Facebook: Paul Emmanuel Olivo
      </a>
    </div>
  </div>
</section>





{/* Popup ng boxes sa project left side*/}
{isModalOpen && selectedProject && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] transition-opacity">
    <div className="bg-white rounded-2xl max-w-lg w-[90%] p-6 shadow-2xl relative animate-fadeIn">
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 transition-colors text-xl"
      >
        ✕
      </button>
      
      <h3 className="text-2xl font-bold text-slate-800 mb-3">
        {selectedProject.title}
      </h3>
      <div className="w-full h-56 bg-slate-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={
            selectedProject.title === "Minesweeper"
              ? minesweeper
              : selectedProject.title === "Purong Ginto"
              ? purongginto
              : selectedProject.title === "Attendance Checker"
              ? attendance
              : selectedProject.title === "BITE-ex"
              ? issay
              : selectedProject.title === "Portfolio Website"
              ? portpaulio
              : null
          }
          alt={selectedProject.title}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-slate-600 mb-4 leading-relaxed">
        {selectedProject.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedProject.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-end">
        
      </div>
    </div>
  </div>
)}






      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Appreciated, Player.
          </p>
        </div>
      </footer>
    </div>
  );
}
