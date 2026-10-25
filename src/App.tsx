import { useEffect, useState} from 'react';
import { Menu, X } from 'lucide-react';

const email = 'nabeelahmad1401@gmail.com';
const github = 'https://github.com/Nabeel1401';
const linkedin = 'https://www.linkedin.com/in/nabeelahmad14';

const links = [
  { label: 'About Me', href: '#about' },
  { label: 'My Toolkit', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Connect', href: '#contact' },
];

const skills = [
  {
    title: 'Cybersecurity fundamentals',
    text: 'Network security · Information security · Web security · Vulnerability assessment',
  },
  {
    title: 'Security tools & practice',
    text: 'Linux · Kali Linux · Nmap · Metasploit · Root-Me · TryHackMe',
  },
  {
    title: 'Cloud & DevSecOps',
    text: 'Cloud computing · Docker · Docker Compose · Git · CI/CD · Trivy',
  },
  {
    title: 'Governance & risk',
    text: 'ISO/IEC 27001 fundamentals · ISO/IEC 27005 fundamentals · Security risk assessment',
  },
];

const certificates = [
  {
    title: 'Cybersecurity ISO 27001 & 27005',
    issuer: 'Enablers',
    date: '25 September 2026',
    category: 'Security',
    file: 'iso27001',
    id: 'libfile_5dec10f6dd588191899431016910f023',
    verify:
      'https://www.enablers.school/redirect/api/certification/7077234732463992/authed/html',
  },
  {
    title: 'Getting Started with Cybersecurity',
    issuer: 'IBM SkillsBuild',
    date: '14 April 2026',
    category: 'Security',
    file: 'cybersecurity',
    id: 'libfile_4f970e6f4d5c8191bb64b2bb743435b1',
    verify:
      'https://www.credly.com/badges/b0255e8d-fdc0-4727-9eec-a55c4ba6775f',
  },
  {
    title: 'Certified WiFi Pentesting 101',
    issuer: 'Cappriciosec University',
    date: '24 January 2026',
    category: 'Security',
    file: 'wifi',
    id: 'libfile_d727aa7a83848191ae36c2c50ea60daa',
    verify: '',
  },
  {
    title: 'Scrum — Agile Methodology',
    issuer: 'Enablers',
    date: '25 November 2025',
    category: 'Agile',
    file: 'agile',
    id: 'libfile_c3d00422b72c8191b6daf94d8523f638',
    verify:
      'https://www.enablers.school/redirect/api/certification/7792505000999024',
  },
  {
    title: 'Getting Started with Data',
    issuer: 'IBM SkillsBuild',
    date: '6 September 2025',
    category: 'Data',
    file: 'getting-started-data',
    id: 'libfile_930df657a44481919c7c869fadfa7be6',
    verify:
      'https://www.credly.com/badges/407d4199-ef90-4a5b-ac14-d1a9ec28065e',
  },
  {
    title: 'Data Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '5 September 2025',
    category: 'Data',
    file: 'data-fundamentals',
    id: 'libfile_0a50b2065a948191944bec59f1230200',
    verify:
      'https://www.credly.com/badges/126d7190-0ef2-40cd-aee4-327617b6f01b',
  },
];

const projects = [
  {
    title: 'Property rental platform',
    type: 'FULL-STACK / PTU INTERNSHIP',
    description:
      'A MERN application for property discovery, recommendations and dealer enquiries.',
    highlights: [
      'Location, amenities and preference-based filters',
      'Property ratings and enquiry handling',
      'REST APIs, database schemas and image uploads',
    ],
    stack: ['React', 'Node.js', 'MongoDB'],
    visual: 'discover → filter → connect',
  },
  {
    title: 'Ethereum decentralized app',
    type: 'WEB3 / REDBLOX INTERNSHIP',
    description:
      'A responsive application connecting Ethereum smart contracts and wallet interactions.',
    highlights: [
      'RainbowKit wallet connectivity and authentication',
      'Ethereum transactions and smart contract integration',
      'Responsive frontend with Next.js and Tailwind CSS',
    ],
    stack: ['Next.js', 'Ethereum', 'RainbowKit'],
    visual: 'wallet ↔ contract ↔ ethereum',
  },
];

const experience = [
  {
    date: 'JAN — APR 2025',
    title: 'Full-Stack Web Developer Intern',
    organization: 'Puducherry Technological University',
    description:
      'Developed a MERN rental platform with property filters, recommendations, ratings and dealer enquiries. Built REST APIs, database schemas and image upload features.',
  },
  {
    date: 'MAY — JUL 2024',
    title: 'Full-Stack & Blockchain Developer Intern',
    organization: 'REDBLOX Technologies Pvt. Ltd.',
    description:
      'Developed an Ethereum dApp, built its Next.js and Tailwind CSS frontend, integrated RainbowKit wallet connectivity, and implemented blockchain transaction handling.',
  },
];

const education = [
  {
    date: '2025 — 2027',
    title: 'Master’s in Cybersecurity & Cloud Computing',
    institution:
      'ESILV — École Supérieure d’Ingénieurs Léonard de Vinci',
  },
  {
    date: '2021 — 2025',
    title: 'BTech in Information Technology',
    institution: 'Puducherry Technological University',
  },
  {
    date: '2019 — 2021',
    title: 'Higher Secondary Certificate — PCMC',
    institution: 'Petit Seminaire Higher Secondary School',
  },
  {
    date: '2018 — 2019',
    title: 'Secondary School Leaving Certificate',
    institution: 'Petit Seminaire Higher Secondary School',
  },
];

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let scheduled = false;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let current = 'home';

      document
        .querySelectorAll<HTMLElement>('section[id]')
        .forEach((section) => {
          if (section.getBoundingClientRect().top <= marker) {
            current = section.id;
          }
        });

      setActiveSection(current);
      scheduled = false;
    };

    const handleScroll = () => {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const goToSection = (href: string) => {
    setMenuOpen(false);

    const section = document.getElementById(href.replace('#', ''));

    if (!section) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const top =
      section.getBoundingClientRect().top + window.scrollY - 96;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });

    window.history.replaceState(null, '', href);
    setActiveSection(section.id);
  };

  return (
    <div
      className="min-h-screen bg-white tracking-[-0.02em]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <a className="skip" href="#about">
        Skip to portfolio content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:justify-center p-4 sm:p-5"
        aria-label="Main navigation"
      >
        <div className="nav-drop hidden lg:flex items-center gap-1 rounded-full bg-black/80 backdrop-blur-md pl-3 pr-2 py-2">
          <a
            href="#home"
            className="p-2 text-gold"
            aria-label="Nabeel Ahmad home"
            onClick={(event) => {
              event.preventDefault();
              goToSection('#home');
            }}
          >
            <Logo />
          </a>

          {links.map((link) => {
            const isConnect = link.href === '#contact';
            const isActive =
              activeSection === link.href.substring(1);

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(link.href);
                }}
                className={
                  isConnect
                    ? 'ml-1 whitespace-nowrap rounded-full bg-gold px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-100'
                    : `whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300'
                      }`
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#home"
          className="nav-drop rounded-full bg-black/80 p-3 text-gold backdrop-blur-md lg:hidden"
          aria-label="Nabeel Ahmad home"
          onClick={(event) => {
            event.preventDefault();
            goToSection('#home');
          }}
        >
          <Logo />
        </a>

        <button
          type="button"
          className="nav-drop rounded-full bg-black/80 p-3 text-white backdrop-blur-md lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-0 z-40 max-h-[100dvh] overflow-y-auto bg-[#19080c] px-5 pb-6 pt-20 shadow-lg lg:hidden"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              event.preventDefault();
              goToSection(link.href);
            }}
            className={
              link.href === '#contact'
                ? 'mt-5 block rounded-full bg-gold px-5 py-3 text-center font-semibold text-gray-900'
                : 'block border-b border-white/10 py-4 text-sm text-white hover:text-gold'
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <section
        id="home"
        className="relative h-[100dvh] min-h-[680px] overflow-hidden bg-[#26080c] text-white"
      >
        <svg
          className="absolute inset-0 z-0 h-full w-full opacity-10"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#64748b"
                strokeWidth=".6"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <img
          src="/assets/nabeel-portrait.jpg"
          alt="Nabeel Ahmad"
          className="absolute inset-0 z-10 h-full w-full object-contain object-[center_35%]"
        />

        <div className="hero-shade absolute inset-0 z-20" />

        <aside
  aria-label="Portfolio sections"
  className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-2xl border border-[#e8c47c]/30 bg-black/75 p-3 backdrop-blur-md sm:right-8 sm:p-5"
>
  <nav className="flex flex-col gap-1">
    {[
      ['About Me', 'about'],
      ['My Toolkit', 'skills'],
      ['Projects', 'projects'],
      ['Experience', 'experience'],
      ['Education', 'education'],
      ['Certifications', 'certifications'],
      ['Connect', 'contact'],
    ].map(([label, id], index) => (
      <a
        key={id}
        href={`#${id}`}
        onClick={(event) => {
          event.preventDefault();

          const section = document.getElementById(id);
          if (!section) return;

          const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
          ).matches;

          window.scrollTo({
            top: Math.max(
              0,
              section.getBoundingClientRect().top +
                window.scrollY -
                96,
            ),
            behavior: reducedMotion ? 'auto' : 'smooth',
          });

          window.history.replaceState(null, '', `#${id}`);
        }}
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-xs text-white transition-colors hover:bg-white/10 hover:text-[#e8c47c] sm:text-sm"
      >
        <span className="text-[10px] text-[#e8c47c]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span>{label}</span>
      </a>
    ))}
  </nav>
</aside>

        <div className="absolute bottom-12 left-5 z-40 max-w-[300px] sm:bottom-16 sm:left-8 sm:max-w-md md:bottom-24 md:left-12">
          <p
            className="hero-rise text-[11px] font-semibold tracking-[0.12em] text-gold sm:text-xs"
            style={{ animationDelay: '.15s' }}
          >
            NABEEL AHMAD / <i>secure by design</i>
          </p>

          <h1
            className="hero-rise mt-5 text-4xl leading-[1.05] tracking-[-0.08em] text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '.3s' }}
          >
            Investigating.
            <br />
            Defending.
            <br />
            <span className="text-gold">Always learning.</span>
          </h1>

          <p
            className="hero-rise mt-6 text-sm leading-relaxed text-white/90 sm:text-base"
            style={{ animationDelay: '.5s' }}
          >
            Cybersecurity & Cloud Computing student at ESILV.
            Exploring penetration testing, network security and threat
            analysis.
          </p>

          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              goToSection('#projects');
            }}
            className="hero-rise group relative mt-7 inline-flex overflow-hidden rounded-full bg-gold px-7 py-3 text-sm font-semibold text-[#26080c] shadow-lg shadow-black/20 transition-transform hover:scale-[1.04] active:scale-95 sm:px-8 sm:py-3.5"
            style={{ animationDelay: '.7s' }}
          >
            Explore my work ↗
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
        </div>

        <div className="absolute bottom-5 right-6 z-40 text-[9px] tracking-[.15em] text-gold/80">
          ÎLE-DE-FRANCE / FRANCE
        </div>
      </section>

      <main className="portfolio-content">
        <section id="about">
          <p className="kicker">01 / ABOUT ME</p>

          <div className="content-grid">
            <h2>
              Curiosity.
              <br />
              <span>With purpose.</span>
            </h2>

            <div>
              <p className="lead">
                I investigate security risks and learn how to defend
                systems.
              </p>

              <p>
                I’m studying Cybersecurity & Cloud Computing at ESILV,
                building on my information technology background.
                I’m focused on understanding vulnerabilities,
                assessing security risks and protecting networks and
                cloud environments.
              </p>

              <p>
                I’m strengthening my practical security skills through
                Root-Me and TryHackMe. My interests include SOC
                analysis, penetration testing, web security and
                DevSecOps.
              </p>

              <div className="tags">
                <span>SOC analysis</span>
                <span>Penetration testing</span>
                <span>Cloud security</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <p className="kicker">02 / MY TOOLKIT</p>

          <h2>
            Tools to investigate.
            <br />
            <span>Skills to defend.</span>
          </h2>

          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <p className="kicker">03 / SELECTED PROJECTS</p>

          <h2>
            Learning through
            <br />
            <span>real work.</span>
          </h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <span>0{index + 1} /</span>
                  <code>{project.visual}</code>
                </div>

                <div className="project-copy">
                  <p className="kicker">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="inline-link"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore my GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="small-note">
            Project descriptions are based on my internship
            experience. Source-code links currently open my GitHub
            profile.
          </p>
        </section>

        <section id="experience">
          <p className="kicker">04 / EXPERIENCE</p>

          <h2>
            Learning by <span>doing.</span>
          </h2>

          {experience.map((role) => (
            <article className="timeline" key={role.organization}>
              <div>
                <span className="kicker">{role.date}</span>
                <p>Puducherry, India</p>
              </div>

              <div>
                <h3>{role.title}</h3>
                <h4>{role.organization}</h4>
                <p>{role.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="education">
          <p className="kicker">05 / EDUCATION</p>

          <h2>
            A foundation.
            <br />
            <span>Always evolving.</span>
          </h2>

          <div className="education-grid">
            {education.map((item) => (
              <article key={item.title}>
                <span className="kicker">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications">
          <p className="kicker">06 / CERTIFICATIONS</p>

          <h2>
            Knowledge.
            <br />
            <span>With credentials.</span>
          </h2>

          <div className="filters">
            {['All', 'Security', 'Data', 'Agile'].map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                className={filter === category ? 'selected' : ''}
                onClick={() => setFilter(category)}
              >
                {category}
                {category === 'All'
                  ? ` / ${String(certificates.length).padStart(2, '0')}`
                  : ''}
              </button>
            ))}
          </div>

          <div>
            {certificates
              .filter(
                (certificate) =>
                  filter === 'All' ||
                  certificate.category === filter,
              )
              .map((certificate) => (
                <article
                  className="certificate"
                  key={certificate.file}
                >
                  <div>
                    <span className="kicker">
                      {certificate.issuer} / {certificate.date}
                    </span>

                    <h3>{certificate.title}</h3>
                  </div>

                  <div className="certificate-actions">
                    <a
                      href={`https://chatgpt.com/api/library/files/${certificate.id}/download`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF ↗
                    </a>

                    {certificate.verify && (
                      <a
                        href={certificate.verify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
          </div>

          <p className="small-note">
            Original PDF links require the owner’s ChatGPT account.
            Public verification links are available where provided
            by the issuer.
          </p>
        </section>

        <section id="contact">
          <p className="kicker">07 / CONNECT</p>

          <h2>
            Let’s connect
            <br />
            <span>on cybersecurity.</span>
          </h2>

          <p>
            Interested in cybersecurity, SOC analysis, penetration
            testing and cloud security opportunities.
          </p>

          <a className="email-link" href={`mailto:${email}`}>
            {email} ↗
          </a>

          <div className="social-links">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a href={`mailto:${email}`}>Email ↗</a>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Nabeel Ahmad Kamaludeen

        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            goToSection('#home');
          }}
        >
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}