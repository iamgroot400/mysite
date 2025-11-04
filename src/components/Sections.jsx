import { Bot, BarChart3, Shield, Code, Award, GraduationCap, ExternalLink, CheckCircle2, Mail } from 'lucide-react';
import { useCallback } from 'react';

function Section({ id, title, children, glow }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`mx-auto max-w-6xl h-40 blur-3xl opacity-30 ${glow}`} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          {title}
        </h2>
        <div className="mt-6 text-gray-300 leading-relaxed">
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
    window.location.href = `mailto:aashikkc2@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  }, []);

  return (
    <div>
      <Section id="objective" title="Career Objective" glow="bg-cyan-500/20">
        <p>
          To work with forward-thinking organizations where technology, creativity, and human insight intersect. My ambition is to apply skills in AI, data science, cybersecurity, and web development to build systems that enhance efficiency, empower users, and drive innovation. I’m eager to contribute to meaningful projects, grow through collaboration, and lead with curiosity and integrity.
        </p>
      </Section>

      <Section id="about" title="About Me" glow="bg-blue-500/20">
        <p>
          I’m driven by the belief that technology can change how we live, learn, and connect. Pursuing Computer Science in higher secondary school deepened my logical and analytical foundations across mathematics, physics, and chemistry. I enjoy exploring AI models, data structures, network systems, and cybersecurity — always learning through hands-on practice and real-world challenges.
        </p>
      </Section>

      <Section id="experience" title="Experience" glow="bg-cyan-500/20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors">
            <h3 className="text-white font-semibold">Media Manager — KUrautey (Local News Outlet)</h3>
            <p className="mt-2 text-gray-300">
              Managed media outreach, digital strategy, and communication. Learned public engagement, content delivery, and data forensics. Built skills in coordination, adaptability, and content optimization for digital audiences.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors">
            <h3 className="text-white font-semibold">Creative Developer — Thinkniti</h3>
            <p className="mt-2 text-gray-300">
              Designed visual posts, wrote creative content, and maintained digital presence. Improved teamwork, creative direction, and leadership by managing online platforms. Combined design thinking with technical problem-solving to deliver effective campaigns.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors md:col-span-2">
            <h3 className="text-white font-semibold">Independent Projects & Learning</h3>
            <p className="mt-2 text-gray-300">
              Built small-scale websites, explored AI-driven chatbots, automated data dashboards, and experimented with cybersecurity simulations. Gained insights into system security, data visualization, and creative AI workflows.
            </p>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education" glow="bg-blue-500/20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h4 className="text-white font-semibold">Secondary Level</h4>
            <p className="mt-2">
              Demonstrated a consistently solid performance with strong fundamentals and a steady commitment to learning.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h4 className="text-white font-semibold">Higher Secondary – Grade 11</h4>
            <p className="mt-2">
              Faced new academic challenges and grew through them, strengthening analytical habits and discipline across core science subjects.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2">
            <h4 className="text-white font-semibold">Higher Secondary – Grade 12</h4>
            <p className="mt-2">
              Concluded higher secondary with renewed focus and notable improvement, particularly in computer science–related coursework and practical projects.
            </p>
            <p className="mt-3 text-cyan-200">
              English Proficiency: Demonstrated strong command of English with a high PTE performance, reflecting clear communication and comprehension.
            </p>
            <p className="mt-3 text-gray-300">
              Major: Computer Science (Science stream with Mathematics, Physics, and Chemistry), grounding theoretical knowledge in hands-on experimentation.
            </p>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Key Skills" glow="bg-cyan-500/20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-cyan-300"><Bot className="h-5 w-5" /> Technical</div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> AI and intelligent systems — confident explorer, applying models to practical problems.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Data science and visualization — comfortable turning raw information into clear insight.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Cybersecurity and system safety — mindful practitioner with growing hands-on experience.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Networking and web development — building dependable, user-centered interfaces and APIs.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Python, HTML/CSS, and JavaScript — practical fluency with continual improvement.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-cyan-300"><Code className="h-5 w-5" /> Creative</div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Content creation and script writing — persuasive storytelling with a strategic edge.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Digital design and media management — aesthetic judgment paired with consistency.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-cyan-300"><Shield className="h-5 w-5" /> Professional</div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Leadership and collaboration — supportive teammate who steps up when needed.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Communication and critical thinking — clear, attentive, and solution-oriented.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400" /> Time management and adaptability — organized, focused, and resilient under change.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects Portfolio" glow="bg-blue-500/20">
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            title: 'AI Chatbot Assistant',
            desc: 'An experimental chatbot for interactive learning and rapid knowledge lookup.',
            icon: <Bot className="h-5 w-5 text-cyan-400" />
          }, {
            title: 'Smart Data Dashboard',
            desc: 'A real-time analytics and visualization interface for decision clarity.',
            icon: <BarChart3 className="h-5 w-5 text-cyan-400" />
          }, {
            title: 'News Automation Tool',
            desc: 'A workflow that automates media content delivery across channels.',
            icon: <Code className="h-5 w-5 text-cyan-400" />
          }, {
            title: 'Personal Portfolio Website',
            desc: 'This very site — designed and structured by Aashik Khatri.',
            icon: <Award className="h-5 w-5 text-cyan-400" />
          }].map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-2 text-white font-semibold">
                {p.icon}
                {p.title}
              </div>
              <p className="mt-2 text-gray-300">{p.desc}</p>
              <div className="mt-3 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> View
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements & Recognition" glow="bg-cyan-500/20">
        <ul className="space-y-3">
          <li className="flex items-start gap-2"><Award className="h-5 w-5 text-cyan-400 mt-0.5" /> Strong English communication demonstrated through a high PTE performance.</li>
          <li className="flex items-start gap-2"><GraduationCap className="h-5 w-5 text-cyan-400 mt-0.5" /> Recognized in school for creativity, technical curiosity, and leadership.</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" /> Contributed to multiple team-based tech and media initiatives.</li>
        </ul>
      </Section>

      <Section id="contact" title="Contact" glow="bg-blue-500/20">
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="bg-black/40 border border-white/10 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <input name="email" required type="email" placeholder="Your email" className="bg-black/40 border border-white/10 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <textarea name="message" required rows={5} placeholder="Your message" className="bg-black/40 border border-white/10 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors">
                <Mail className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-white font-semibold">Direct</h4>
            <p className="mt-2 text-gray-300">I’d love to connect for internships, collaborations, and mentorship.</p>
            <div className="mt-4">
              <a href="mailto:aashikkc2@gmail.com" className="text-cyan-300 hover:text-white inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> aashikkc2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
