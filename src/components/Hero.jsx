import { Download, ExternalLink, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Plain black gradient background with subtle cyan glows */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(700px_320px_at_15%_20%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(600px_300px_at_85%_65%,rgba(6,182,212,0.08),transparent_60%),radial-gradient(900px_500px_at_50%_120%,rgba(59,130,246,0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid gap-10 items-center pt-24">
        <div className="text-left max-w-3xl">
          <span className="inline-flex items-center gap-2 text-cyan-300/90 text-sm tracking-widest uppercase">
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
            Future-focused Technologist
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight text-white">
            Aashik Khatri — Aspiring Computer Scientist | Developer | Creative Technologist.
          </h1>
          <p className="mt-4 text-cyan-100/90 text-lg">
            Turning ideas into digital impact through innovation and intelligence.
          </p>
          <p className="mt-6 text-gray-300 max-w-2xl">
            I’m Aashik Khatri — a young technologist from Nepal who discovered his love for computers in class 5. What started as curiosity became a purpose: to build intelligent, creative, and data-driven solutions that make life smarter. I’m focused on using technology not just as a tool, but as a way to connect people, solve problems, and inspire progress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 px-4 py-2 transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> View My Projects
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <Github />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <Instagram />
            </a>
            <a href="mailto:aashikkc2@gmail.com" className="text-gray-300 hover:text-white">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
