import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  ShieldCheck, Database, BrainCircuit, Code2, BarChart3, Terminal,
  GraduationCap, Award, Users, Trophy, ExternalLink, Send, Sparkles,
  Network, LockKeyhole, Activity, FileCode2
} from 'lucide-react';
import './styles.css';
const profile = {
  name: 'Geethika Inakollu',
  email: 'geethikainakollu8@gmail.com',
  github: 'https://github.com/geethikainakollu8-prog',
  linkedin: 'https://www.linkedin.com/in/geethika-inakollu-43970a3ba/',
  hackerrank: 'https://www.hackerrank.com/profile/geethikainakoll1',
};

const projects = [
  {
    number: '01', category: 'CYBERSECURITY', title: 'SOC Monitoring Dashboard',
    description: 'A security operations dashboard concept for viewing generated log activity and highlighting suspicious events through a threat-detection workflow.',
    stack: ['Python', 'React', 'Log Analysis', 'Threat Detection'], icon: ShieldCheck,
    tone: 'violet',
  },
  {
    number: '02', category: 'DATA ANALYTICS', title: 'Cryptocurrency API Analysis',
    description: 'Collected cryptocurrency market data using the CoinGecko API, processed it with Pandas and prepared visual analysis of prices, market capitalisation and trading volume.',
    stack: ['Python', 'Pandas', 'CoinGecko API', 'Power BI'], icon: BarChart3,
    tone: 'blue',
  },
  {
    number: '03', category: 'MACHINE LEARNING', title: 'Phishing Email Detection',
    description: 'A machine-learning project that classifies email text as legitimate or phishing using text vectorisation and a Naive Bayes classifier.',
    stack: ['Python', 'Flask', 'CountVectorizer', 'Naive Bayes'], icon: BrainCircuit,
    tone: 'pink',
  },
  {
    number: '04', category: 'WEB DEVELOPMENT', title: 'Student Database Management',
    description: 'A web application for student registration, login, profile management and CRUD operations with a MySQL database.',
    stack: ['Python', 'Flask', 'MySQL', 'HTML/CSS'], icon: Database,
    tone: 'teal',
  },
];

const skillGroups = [
  { title: 'Programming', icon: Code2, items: ['Python', 'R (Basic)', 'Scala (Basic)', 'HTML', 'CSS', 'SQL'] },
  { title: 'Data & Analytics', icon: BarChart3, items: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'] },
  { title: 'Cybersecurity', icon: ShieldCheck, items: ['Cybersecurity Fundamentals', 'Ethical Hacking Fundamentals', 'Networking', 'Security Monitoring'] },
  { title: 'Tools & Platforms', icon: Terminal, items: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'Git & GitHub', 'Streamlit', 'Kali Linux'] },
];

const certificates = [
  {
    title: 'Cyber Security Internship',
    issuer: 'YoungMinds Technology Solutions',
    date: 'May–June 2026 · 7 weeks',
    image: '/Screenshot_4-11-2026_184542_.jpeg',
  },
  {
    title: 'Fundamentals of Information Security',
    issuer: 'Infosys Springboard',
    date: 'October 24, 2026',
    image: '/Screenshot_24-10-2026_132937_.jpeg',
  },
  {
    title: 'Introduction to Cyber Security',
    issuer: 'Infosys Springboard',
    date: 'October 24, 2026',
    image: '/Screenshot_24-10-2026_133537_.jpeg',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: 'Earned October 21, 2026',
    image: '/Screenshot_22-10-2026_205457_.jpeg',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = ['About', 'Skills', 'Projects', 'Certificates', 'Journey', 'Contact'];
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">G.</span><span>geethika<span className="brand-dot">.</span></span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href={`mailto:${profile.email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <h1>Hi! I'm <span className="gradient-text">Geethika Inakollu</span></h1>
            <p className="hero-role">COMPUTER SCIENCE STUDENT | DATA &amp; DATABASES | CYBERSECURITY &amp; NETWORKING</p>
            <p className="hero-lead">I'm a Computer Science student who enjoys working with data, exploring databases, and learning how computer networks connect systems. I'm also building my cybersecurity knowledge and exploring analytics and AI through hands-on projects. I’m curious about how technology works and how to make it more useful and secure.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button button-quiet" href={`mailto:${profile.email}`}>Get in touch <Mail size={16}/></a></div>
            <div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href={profile.hackerrank} target="_blank" rel="noreferrer"><Code2 size={17}/> HackerRank</a></div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="hero-glow"/>
            <div className="photo-frame"><img src="/profile-cutout.png" alt="Geethika Inakollu"/></div>
            <div className="float-chip chip-python"><Terminal size={16}/> Python</div><div className="float-chip chip-sql"><Database size={16}/> SQL</div><div className="float-chip chip-ai"><BrainCircuit size={16}/> AI / ML</div>
            <div className="art-caption"><span className="caption-line"/> THINK · BUILD · IMPROVE</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="about-grid"><div><h2>Learning today.<br/><span className="muted-gradient">Building for tomorrow.</span></h2></div><div className="about-text"><p>I'm pursuing a B.Tech in Computer Science and Engineering (IoT & Cyber Security including Blockchain Technology) at Pace Institute of Technology and Sciences, with expected graduation in 2027.</p><p>I'm interested in understanding how technology works beneath the surface — from protecting systems and analysing data to building useful applications. I value hands-on learning, teamwork and steady improvement.</p><div className="education-line"><GraduationCap size={20}/><div><strong>Pace Institute of Technology and Sciences</strong><span>B.Tech · Expected 2027</span></div></div></div></div>
          <div className="stat-strip"><div><strong>2027</strong><span>Graduation year</span></div><div><strong>4+</strong><span>Featured projects</span></div><div><strong>3</strong><span>Core learning areas</span></div><div><strong>SQL</strong><span>HackerRank certified</span></div></div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / MY TOOLKIT</div><h2>Skills I’m growing</h2></div><p>A practical mix of programming, analytics and security foundations — strengthened through coursework and projects.</p></div>
          <div className="skill-grid">{skillGroups.map((group, i) => {const Icon = group.icon; return <article className={`skill-card skill-${i}`} key={group.title}><div className="skill-icon"><Icon size={21}/></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>})}</div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects with purpose</h2></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></div>
          <div className="project-grid">{projects.map(project => {const Icon = project.icon; return <article className={`project-card ${project.tone}`} key={project.number}><div className="project-top"><span>{project.number} <i>/</i> {project.category}</span><div className="project-icon"><Icon size={22}/></div></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a href={profile.github} target="_blank" rel="noreferrer" className="project-link">View GitHub profile <ArrowUpRight size={15}/></a></article>})}</div>
          <p className="project-note"><Sparkles size={15}/> Project repository links can be added individually as each project is published to GitHub.</p>
        </section>

        <section className="certificates section-wrap section-block" id="certificates">
          <div className="section-heading"><div><div className="section-kicker">04 / CERTIFICATES</div><h2>Learning in action</h2></div><div className="certificate-intro"><p>A few milestones from my cybersecurity and database learning journey.</p><a className="text-link" href={profile.hackerrank} target="_blank" rel="noreferrer">View HackerRank profile <ArrowUpRight size={15}/></a></div></div>
          <div className="certificate-grid">{certificates.map(certificate => (
            <article className="certificate-card" key={certificate.title}>
              <a className="certificate-image-link" href={certificate.image} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate`}>
                <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy"/>
                <span className="certificate-open"><ExternalLink size={16}/> View certificate</span>
              </a>
              <div className="certificate-info"><h3>{certificate.title}</h3><p>{certificate.issuer}</p><span>{certificate.date}</span></div>
            </article>
          ))}</div>
        </section>

        <section className="journey section-wrap section-block" id="journey">
          <div className="section-kicker">05 / MY JOURNEY</div><h2>Experiences that shape me</h2>
          <div className="journey-grid">
            <article className="journey-card"><div className="journey-icon"><Award size={22}/></div><div className="journey-label">CERTIFICATIONS</div><h3>Learning beyond the classroom</h3><p>Explore certificates earned in cybersecurity and SQL.</p><a href="#certificates" className="text-link">View my certificates <ArrowRight size={15}/></a></article>
            <article className="journey-card"><div className="journey-icon"><Users size={22}/></div><div className="journey-label">LEADERSHIP & TEAMWORK</div><h3>Growing through people</h3><p>As an NCC cadet, I developed discipline, confidence, communication and team coordination through camps and leadership responsibilities.</p><p>I have also participated in football at district and state levels, building teamwork and resilience.</p></article>
            <article className="journey-card"><div className="journey-icon"><Trophy size={22}/></div><div className="journey-label">ACADEMIC HIGHLIGHTS</div><h3>Taking ideas forward</h3><p>Earned second place in a cybersecurity project presentation and worked as a team lead on an academic project, coordinating development and testing tasks.</p><p className="journey-small">I’m always looking for the next opportunity to learn, collaborate and contribute.</p></article>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact"><div className="contact-panel"><div className="contact-orb"/><div className="section-kicker">06 / LET'S CONNECT</div><h2>Have an opportunity<br/>or an idea to discuss?</h2><p>I'm happy to connect, learn from others and explore opportunities to contribute.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <Send size={16}/></a><div className="contact-links"><a href={profile.email ? `mailto:${profile.email}` : '#'}><Mail size={17}/>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn <ExternalLink size={13}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub <ExternalLink size={13}/></a></div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">G.</span><span>geethika<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity · © {new Date().getFullYear()} Geethika Inakollu</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
