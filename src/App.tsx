import { useEffect, useState, type CSSProperties } from 'react';
import { Menu, X } from 'lucide-react';

const github = 'https://github.com/Nabeel1401';
const linkedin = 'https://www.linkedin.com/in/nabeelahmad14';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Certifications', '#certifications'],
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

function Stats() {
  const polar = (r: number, a: number) => ({
    x: -110 + r * Math.cos((a * Math.PI) / 180),
    y: 300 + r * Math.sin((a * Math.PI) / 180),
  });

  const stats = [
    {
      r: 330,
      start: -92,
      end: 16,
      dot: -46,
      value: '06',
      suffix: '',
      label: 'CERTIFICATES',
    },
    {
      r: 395,
      start: -56,
      end: 60,
      dot: 2,
      value: '02',
      suffix: '',
      label: 'INTERNSHIPS',
    },
    {
      r: 460,
      start: -14,
      end: 72,
      dot: 44,
      value: '2027',
      suffix: '',
      label: 'MASTER’S TARGET',
    },
  ];

  return (
    <div className="absolute inset-y-0 right-0 z-40 pointer-events-none hidden sm:block">
      <svg
        viewBox="0 0 380 700"
        preserveAspectRatio="xMaxYMid meet"
        className="h-full w-auto"
        aria-hidden="true"
      >
        {stats.map((s, i) => {
          const a = polar(s.r, s.start);
          const b = polar(s.r, s.end);
          const d = polar(s.r, s.dot);
          const delay = 0.4 + i * 0.22;
          const mark = delay + 0.9;
          const len = (s.r * (s.end - s.start) * Math.PI) / 180;

          return (
            <g key={s.label}>
              <defs>
                <linearGradient
                  id={`arc-${i}`}
                  gradientUnits="userSpaceOnUse"
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                >
                  {[
                    [0, 0],
                    [22, 0.5],
                    [55, 0.5],
                    [85, 0.1],
                    [100, 0],
                  ].map(([offset, opacity]) => (
                    <stop
                      key={offset}
                      offset={`${offset}%`}
                      stopColor="#e8c47c"
                      stopOpacity={opacity}
                    />
                  ))}
                </linearGradient>
              </defs>

              <path
                d={`M ${a.x} ${a.y} A ${s.r} ${s.r} 0 0 1 ${b.x} ${b.y}`}
                fill="none"
                stroke={`url(#arc-${i})`}
                strokeWidth="1.1"
                className="arc-line"
                style={
                  {
                    '--len': len,
                    animationDelay: `${delay}s`,
                  } as CSSProperties
                }
              />

              <circle
                cx={d.x}
                cy={d.y}
                r="3.4"
                fill="#e8c47c"
                className="arc-dot"
                style={{ animationDelay: `${mark}s` }}
              />

              <circle
                cx={d.x}
                cy={d.y}
                r="7"
                fill="none"
                stroke="#e8c47c"
                strokeOpacity=".35"
                className="arc-ring"
                style={{ animationDelay: `${mark + 0.3}s` }}
              />

              <text
                x={d.x + 16}
                y={d.y + 4}
                fill="#fff"
                fontSize="32"
                letterSpacing="-1"
                className="arc-text"
                style={{ animationDelay: `${mark + 0.15}s` }}
              >
                {s.value}
                <tspan fontSize="19" dy="-10">
                  {s.suffix}
                </tspan>
              </text>

              <text
                x={d.x + 18}
                y={d.y + 22}
                fill="#e8c47c"
                fontSize="8.5"
                fontWeight="600"
                letterSpacing="2"
                className="arc-text"
                style={{ animationDelay: `${mark + 0.3}s` }}
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(false);
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div
      className="min-h-screen bg-white tracking-[-0.02em]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <a className="skip" href="#about">
        Skip to portfolio content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center p-4 sm:p-5"
        aria-label="Main navigation"
      >
        <div className="nav-drop hidden md:flex bg-black/60 backdrop-blur-md rounded-full pl-3 pr-2 py-2 items-center gap-1">
          <a
            href="#home"
            className="text-gold p-2"
            aria-label="Nabeel Ahmad home"
          >
            <Logo />
          </a>

          {links.map(([text, url], i) => (
            <a
              key={text}
              href={url}
              className={`text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white ${
                i === 0 ? 'text-white' : 'text-gray-300'
              }`}
            >
              {text}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-gold text-gray-900 text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-yellow-100 ml-1"
          >
            Connect
          </a>
        </div>

        <a
          className="nav-drop md:hidden bg-black/60 backdrop-blur-md rounded-full p-3 text-gold"
          href="#home"
          aria-label="Home"
          onClick={() => setMenu(false)}
        >
          <Logo />
        </a>

        <button
          className="nav-drop md:hidden bg-black/60 backdrop-blur-md rounded-full p-3 text-white"
          aria-label={menu ? 'Close menu' : 'Open menu'}
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menu && (
        <div
          id="mobile-menu"
          className="fixed top-0 left-0 right-0 z-40 bg-white pt-16 pb-6 px-5 shadow-lg md:hidden"
        >
          {links.map(([text, url]) => (
            <a
              key={text}
              href={url}
              className="block text-gray-800 py-3 border-b border-gray-100"
              onClick={() => setMenu(false)}
            >
              {text}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenu(false)}
            className="block mt-4 text-center bg-black text-gold py-3 rounded-full"
          >
            Connect
          </a>
        </div>
      )}

      <section
        id="home"
        className="relative overflow-hidden h-[100dvh] min-h-[680px] bg-[#26080c] text-white"
      >
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-10"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
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

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <img
          src="/assets/nabeel-portrait.jpg"
          alt="Nabeel Ahmad"
          className="absolute inset-0 z-10 h-full w-full object-contain object-[center_35%]"
        />

        <div className="absolute inset-0 z-20 hero-shade" />

        <Stats />

        <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-5 sm:left-8 md:left-12 max-w-[300px] sm:max-w-md z-40">
          <p
            className="hero-rise text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-gold"
            style={{ animationDelay: '.15s' }}
          >
            NABEEL AHMAD / <i>secure by design</i>
          </p>

          <h1
            className="hero-rise mt-5 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.08em] text-white"
            style={{ animationDelay: '.3s' }}
          >
            Building.
            <br />
            Defending.
            <br />
            <span className="text-gold">Always learning.</span>
          </h1>

          <p
            className="hero-rise mt-6 text-sm sm:text-base text-white/90 leading-relaxed"
            style={{ animationDelay: '.5s' }}
          >
            Cybersecurity & Cloud Computing student at ESILV. Exploring
            penetration testing, secure applications and the systems behind them.
          </p>

          <a
            href="#projects"
            className="hero-rise group relative inline-flex overflow-hidden mt-7 bg-gold text-[#26080c] font-semibold text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-black/20 transition-transform hover:scale-[1.04] active:scale-95"
            style={{ animationDelay: '.7s' }}
          >
            Explore my work ↗
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
          </a>
        </div>

        <div className="absolute bottom-5 right-6 text-[9px] text-gold/80 tracking-[.15em] z-40">
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
                I build applications and learn how to defend them.
              </p>

              <p>
                I’m studying Cybersecurity & Cloud Computing at ESILV, building
                on my information technology background and full-stack
                development experience. My internships took me from a MERN
                rental platform to Ethereum applications.
              </p>

              <p>
                Today, I’m strengthening practical security skills through
                Root-Me and TryHackMe. My interests include penetration testing,
                web security and DevSecOps.
              </p>

              <div className="tags">
                <span>Penetration testing</span>
                <span>Cloud computing</span>
                <span>DevSecOps</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <p className="kicker">02 / MY TOOLKIT</p>

          <h2>
            Tools to build.
            <br />
            <span>Skills to defend.</span>
          </h2>

          <div className="skill-grid">
            {[
              [
                'Security',
                'Network security · Information security · Linux · Root-Me · TryHackMe',
              ],
              [
                'Development',
                'JavaScript · React · Next.js · Node.js · Express · REST APIs · MongoDB',
              ],
              [
                'Cloud & delivery',
                'Cloud computing studies · Docker · Git · CI/CD · Secure development',
              ],
              [
                'Web3 & collaboration',
                'Ethereum · Smart contracts · RainbowKit · Tailwind CSS · Scrum',
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
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
            {[
              {
                title: 'Property rental platform',
                type: 'FULL-STACK / PTU INTERNSHIP',
                desc: 'A MERN application for property discovery, recommendations and dealer enquiries.',
                points: [
                  'Location, amenities and preference-based filters',
                  'Property ratings and enquiry handling',
                  'REST APIs, database schemas and image uploads',
                ],
                stack: ['React', 'Node.js', 'MongoDB'],
              },
              {
                title: 'Ethereum decentralized app',
                type: 'WEB3 / REDBLOX INTERNSHIP',
                desc: 'A responsive application connecting Ethereum smart contracts and wallet interactions.',
                points: [
                  'RainbowKit wallet connectivity and authentication',
                  'Ethereum transactions and smart contract integration',
                  'Responsive frontend with Next.js and Tailwind CSS',
                ],
                stack: ['Next.js', 'Ethereum', 'RainbowKit'],
              },
            ].map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <span>0{i + 1} /</span>
                  <code>
                    {i === 0
                      ? 'discover → filter → connect'
                      : 'wallet ↔ contract ↔ ethereum'}
                  </code>
                </div>

                <div className="project-copy">
                  <p className="kicker">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
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
            Project descriptions are based on my internship experience.
            Source-code links currently open my GitHub profile.
          </p>
        </section>

        <section id="experience">
          <p className="kicker">04 / EXPERIENCE</p>

          <h2>
            Learning by <span>doing.</span>
          </h2>

          {[
            [
              'JAN — APR 2025',
              'Full-Stack Web Developer Intern',
              'Puducherry Technological University',
              'Developed a MERN rental platform with property filters, recommendations, ratings and dealer enquiries. Built REST APIs, database schemas and image upload features.',
            ],
            [
              'MAY — JUL 2024',
              'Full-Stack & Blockchain Developer Intern',
              'REDBLOX Technologies Pvt. Ltd.',
              'Developed an Ethereum dApp, built its Next.js and Tailwind CSS frontend, integrated RainbowKit wallet connectivity, and implemented blockchain transaction handling.',
            ],
          ].map(([date, title, org, text]) => (
            <article className="timeline" key={org}>
              <div className="kicker">
                {date}
                <p>Puducherry, India</p>
              </div>

              <div>
                <h3>{title}</h3>
                <h4>{org}</h4>
                <p>{text}</p>
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
            {[
              [
                '2025 — 2027',
                'Master’s in Cybersecurity & Cloud Computing',
                'ESILV — École Supérieure d’Ingénieurs Léonard de Vinci',
              ],
              [
                '2021 — 2025',
                'BTech in Information Technology',
                'Puducherry Technological University',
              ],
              [
                '2019 — 2021',
                'Higher Secondary Certificate — PCMC',
                'Petit Seminaire Higher Secondary School',
              ],
              [
                '2018 — 2019',
                'Secondary School Leaving Certificate',
                'Petit Seminaire Higher Secondary School',
              ],
            ].map(([date, title, org]) => (
              <article key={title}>
                <span className="kicker">{date}</span>
                <h3>{title}</h3>
                <p>{org}</p>
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
                aria-pressed={filter === category}
                className={filter === category ? 'selected' : ''}
                onClick={() => setFilter(category)}
              >
                {category}
                {category === 'All' ? ' / 06' : ''}
              </button>
            ))}
          </div>

          <div>
            {certificates
              .filter(
                (cert) => filter === 'All' || cert.category === filter,
              )
              .map((cert) => (
                <article className="certificate" key={cert.file}>
                  <div>
                    <span className="kicker">
                      {cert.issuer} / {cert.date}
                    </span>
                    <h3>{cert.title}</h3>
                  </div>

                  <div className="certificate-actions">
                    <a
                      href={`https://chatgpt.com/api/library/files/${cert.id}/download`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF ↗
                    </a>

                    {cert.verify && (
                      <a
                        href={cert.verify}
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
            Original PDF links require the owner’s ChatGPT account. Public
            verification links are available where provided by the issuer.
          </p>
        </section>

        <section id="contact">
          <p className="kicker">07 / CONNECT</p>

          <h2>
            Let’s build
            <br />
            <span>what’s next.</span>
          </h2>

          <p>
            Interested in cybersecurity, cloud computing and secure development
            opportunities.
          </p>

          <a className="email-link" href="mailto:fathikaan786@gmail.com">
            fathikaan786@gmail.com ↗
          </a>

          <div className="social-links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>

            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>

            <a href="mailto:fathikaan786@gmail.com">Email ↗</a>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Nabeel Ahmad Kamaludeen
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}