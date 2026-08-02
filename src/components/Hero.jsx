import { Download, ExternalLink, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Deep charcoal base with a restrained gold glow and grain for texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_500px_at_15%_10%,rgba(251,191,36,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid gap-10 items-center pt-24">
        <div className="text-left max-w-3xl">
          <span className="inline-flex items-center gap-2 text-amber-300/90 text-sm tracking-widest uppercase">
            <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
            Head of Technical Department, Tourism Times Nepal
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-semibold leading-tight text-stone-50">
            Aashik Khatri — Aspiring Computer Student | Creative Developer |  Aspiring Cybersecurity Student.
          </h1>
          <p className="mt-4 text-stone-300 text-lg">
            Turning ideas into digital impact through innovation and intelligence.
          </p>
          <p className="mt-6 text-stone-400 max-w-2xl">
            I’m Aashik Khatri — a young student from Nepal who discovered his love for computers. What started as curiosity became a purpose: to build intelligent, creative, and data-driven solutions that make life smarter. I’m focused on using technology not just as a tool, but as a way to connect people, solve problems, and inspire progress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold px-4 py-2 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] shadow-lg shadow-amber-950/40"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-stone-700 text-stone-300 hover:text-amber-300 hover:border-amber-400/60 px-4 py-2 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            >
              <ExternalLink className="h-4 w-4" /> View My Projects
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/aashikkhatri" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/iamgroot400" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors">
              <Github />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors">
              <Instagram />
            </a>
            <a href="mailto:contact@aashikkhatri.com.np" className="text-stone-400 hover:text-amber-300 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
