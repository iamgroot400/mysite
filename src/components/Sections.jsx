import { Bot, BarChart3, Shield, Code, Award, GraduationCap, ExternalLink, CheckCircle2, Mail, Github, Car, Compass, Newspaper, Globe, Coffee, Sparkles, Cloud, Heart, Frown } from 'lucide-react';
import { useCallback } from 'react';

function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-20 border-t border-stone-900 first:border-t-0">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-stone-50 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          {title}
        </h2>
        <div className="mt-6 text-stone-400 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:contact@aashikkhatri.com.np?subject=${subject}&body=${body}`;
    form.reset();
  }, []);

  return (
    <div>
      <Section id="objective" title="Career Objective">
        <p>
          To work with forward-thinking organizations where technology, creativity, and human insight intersect. My ambition is to apply skills in AI, data science, cybersecurity, and web development to build systems that enhance efficiency, empower users, and drive innovation. I’m eager to contribute to meaningful projects, grow through collaboration, and lead with curiosity and integrity.
        </p>
      </Section>

      <Section id="about" title="About Me">
        <p>
          I’m driven by the belief that technology can change how we live, learn, and connect. Pursuing Computer Science in higher secondary school deepened my logical and analytical foundations across mathematics, physics, and chemistry. I enjoy exploring AI models, data structures, network systems, and cybersecurity — always learning through hands-on practice and real-world challenges.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5 hover:border-amber-400/30 hover:shadow-sm transition-[border-color,box-shadow] duration-200 md:col-span-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-stone-50 font-semibold">Head of Technical Department — Tourism Times Nepal</h3>
              <span className="text-sm text-amber-300/80">June 2026 – Present · Kathmandu</span>
            </div>
            <p className="mt-2 text-stone-400">
              Leading development and maintenance of Tourism Times Nepal’s digital platforms — website architecture, new technology, performance, and seamless digital experiences that showcase Nepal’s tourism, culture, and natural heritage. Partnering with editorial, design, and marketing on web development, UI/UX, SEO, cloud deployment, security, and content management.
            </p>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5 hover:border-amber-400/30 hover:shadow-sm transition-[border-color,box-shadow] duration-200">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-stone-50 font-semibold">Creative Developer — THINK नीति Foundation</h3>
            </div>
            <span className="text-sm text-amber-300/80">November 2024 – December 2025</span>
            <p className="mt-2 text-stone-400">
              Designed visual posts, wrote creative content, and maintained digital presence. Improved teamwork, creative direction, and leadership by managing online platforms. Combined design thinking with technical problem-solving to deliver effective campaigns.
            </p>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5 hover:border-amber-400/30 hover:shadow-sm transition-[border-color,box-shadow] duration-200">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-stone-50 font-semibold">Marketing Manager — Kurautey</h3>
            </div>
            <span className="text-sm text-amber-300/80">June 2025 – September 2025 · Butwal</span>
            <p className="mt-2 text-stone-400">
              Managed media outreach, digital strategy, and communication. Built skills in coordination, adaptability, and content optimization for digital audiences.
            </p>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5 hover:border-amber-400/30 hover:shadow-sm transition-[border-color,box-shadow] duration-200 md:col-span-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-stone-50 font-semibold">Researcher — Kurautey</h3>
            </div>
            <span className="text-sm text-amber-300/80">July 2024 – January 2025 · Butwal</span>
            <p className="mt-2 text-stone-400">
              Supported Kurautey’s editorial team with research and content preparation for local news coverage, gaining early exposure to public engagement and data forensics.
            </p>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5">
            <h4 className="text-stone-50 font-semibold">Chakreshwor English Boarding School</h4>
            <p className="text-sm text-amber-300/80 mt-1">SEE · March 2024</p>
            <p className="mt-2 text-stone-400">
              Completed secondary-level education (SEE), building a strong foundation across core subjects.
            </p>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5">
            <h4 className="text-stone-50 font-semibold">Kalika Manavgyan Secondary School</h4>
            <p className="text-sm text-amber-300/80 mt-1">+2, Computer Science</p>
            <p className="mt-2 text-stone-400">
              Pursuing higher secondary studies in Computer Science (Science stream), deepening logical and analytical foundations across mathematics, physics, and chemistry.
            </p>
            <p className="mt-3 text-amber-300/90">
              English Proficiency: Demonstrated strong command of English with a high PTE performance, reflecting clear communication and comprehension.
            </p>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Key Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5">
            <div className="flex items-center gap-2 text-stone-100 font-medium"><Bot className="h-5 w-5 text-amber-400" /> Technical</div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> AI and intelligent systems — confident explorer, applying models to practical problems.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Search Engine Optimization (SEO) — hands-on experience across live production sites.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Data science and visualization — comfortable turning raw information into clear insight.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Cybersecurity and system safety — mindful practitioner with growing hands-on experience.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Networking and web development — building dependable, user-centered interfaces and APIs.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Python, HTML/CSS, and JavaScript — practical fluency with continual improvement.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5">
            <div className="flex items-center gap-2 text-stone-100 font-medium"><Code className="h-5 w-5 text-amber-400" /> Creative</div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Web content writing — clear, persuasive copy across editorial and product contexts.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Content creation and script writing — persuasive storytelling with a strategic edge.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Digital design and media management — aesthetic judgment paired with consistency.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-5">
            <div className="flex items-center gap-2 text-stone-100 font-medium"><Shield className="h-5 w-5 text-amber-400" /> Professional</div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Leadership and collaboration — supportive teammate who steps up when needed.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Communication and critical thinking — clear, attentive, and solution-oriented.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400" /> Time management and adaptability — organized, focused, and resilient under change.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects Portfolio">
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            title: 'EV Self Drive Nepal',
            desc: 'A full self-drive electric vehicle rental and road-trip platform for Nepal — fleet browsing, destination guides, and end-to-end online booking.',
            icon: <Car className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://evselfdrivenepal.com',
            githubUrl: 'https://github.com/iamgroot400/evDriveNepal'
          }, {
            title: 'Soul Trek Nepal',
            desc: 'A trekking and tour booking platform for Nepal, connecting travelers with curated trek packages and experienced local guides.',
            icon: <Compass className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://soultreknepal.com',
            githubUrl: 'https://github.com/iamgroot400/SoulTrekNepal'
          }, {
            title: 'Tourism Times Nepal',
            desc: 'A Nepal travel & culture digital magazine covering destinations, stories, and the people behind them.',
            icon: <Newspaper className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://tourismtimesnepal.com',
            githubUrl: 'https://github.com/iamgroot400/TourisimTimesNepal'
          }, {
            title: 'Aashik Khatri — Personal Site',
            desc: 'An earlier personal website and portfolio.',
            icon: <Globe className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://www.aashikkhatri.com.np',
            githubUrl: 'https://github.com/iamgroot400/Portfolio'
          }, {
            title: 'Coffemandu',
            desc: 'A café and coffee-culture website concept for Kathmandu.',
            icon: <Coffee className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://coffemandu.vercel.app',
            githubUrl: 'https://github.com/iamgroot400/coffemandu'
          }, {
            title: 'Elemental Motion AI',
            desc: 'An AI-powered motion and animation experiment.',
            icon: <Sparkles className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://elemental-motion-ai.vercel.app',
            githubUrl: 'https://github.com/iamgroot400/elemental-motion-ai'
          }, {
            title: 'Karma Educational Network',
            desc: 'An educational platform connecting learners with resources and opportunities.',
            icon: <GraduationCap className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://karma-educational-network.vercel.app',
            githubUrl: 'https://github.com/iamgroot400/Karma-Educational-Network'
          }, {
            title: 'Skynepal',
            desc: 'A Nepal-focused web project exploring sky, weather, and travel-related content.',
            icon: <Cloud className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://skynepal.vercel.app',
            githubUrl: 'https://github.com/iamgroot400/skynepal'
          }, {
            title: 'Dateme',
            desc: 'A playful, experimental take on modern dating and connection.',
            icon: <Heart className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://datemepleaseeee.vercel.app',
            githubUrl: 'https://github.com/iamgroot400/Dateme'
          }, {
            title: 'Date Is Boring',
            desc: 'A companion experiment reimagining what dating apps could feel like.',
            icon: <Frown className="h-5 w-5 text-amber-400" />,
            liveUrl: 'https://dateisboring.vercel.app',
            githubUrl: 'https://github.com/iamgroot400/Dateisboring'
          }].map((p) => (
            <div key={p.title} className="rounded-xl border border-stone-800 bg-stone-900/60 p-5 hover:border-amber-400/30 hover:shadow-sm transition-[border-color,box-shadow] duration-200">
              <div className="flex items-center gap-2 text-stone-50 font-semibold">
                {p.icon}
                {p.title}
              </div>
              <p className="mt-2 text-stone-400">{p.desc}</p>
              <div className="mt-3 flex gap-4">
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors">
                    <ExternalLink className="h-4 w-4" /> Live Site
                  </a>
                ) : null}
                {p.githubUrl ? (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors">
                    <Github className="h-4 w-4" /> Code
                  </a>
                ) : null}
                {!p.liveUrl && !p.githubUrl ? (
                  <span className="text-stone-500 text-sm">In Development</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements & Recognition">
        <ul className="space-y-3">
          <li className="flex items-start gap-2"><Award className="h-5 w-5 text-amber-400 mt-0.5" /> Strong English communication demonstrated through a high PTE performance.</li>
          <li className="flex items-start gap-2"><GraduationCap className="h-5 w-5 text-amber-400 mt-0.5" /> Recognized in school for creativity, technical curiosity, and leadership.</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-amber-400 mt-0.5" /> Contributed to multiple team-based tech and media initiatives.</li>
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-xl border border-stone-800 bg-stone-900/60 p-6">
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="bg-stone-950 border border-stone-700 rounded-md px-4 py-2 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <input name="email" required type="email" placeholder="Your email" className="bg-stone-950 border border-stone-700 rounded-md px-4 py-2 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <textarea name="message" required rows={5} placeholder="Your message" className="bg-stone-950 border border-stone-700 rounded-md px-4 py-2 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold px-4 py-2 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]">
                <Mail className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>
          <div className="rounded-xl border border-stone-800 bg-stone-900/60 p-6">
            <h4 className="text-stone-50 font-semibold">Direct</h4>
            <p className="mt-2 text-stone-400">I’d love to connect for internships, collaborations, and mentorship.</p>
            <div className="mt-4">
              <a href="mailto:contact@aashikkhatri.com.np" className="text-amber-300 hover:text-amber-200 inline-flex items-center gap-2 transition-colors">
                <Mail className="h-4 w-4" /> contact@aashikkhatri.com.np
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
