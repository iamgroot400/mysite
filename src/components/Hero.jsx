import { Download, ExternalLink, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Plain white background with a whisper of neutral depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(900px_500px_at_50%_0%,rgba(0,0,0,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid gap-10 items-center pt-24">
        <div className="text-left max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gray-500 text-sm tracking-widest uppercase">
            <span className="h-1 w-1 rounded-full bg-indigo-600 animate-pulse" />
            Future-focused Learner
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight text-gray-900">
            Aashik Khatri — Aspiring Computer Student | Creative Developer |  Aspiring Cybersecurity Student.
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Turning ideas into digital impact through innovation and intelligence.
          </p>
          <p className="mt-6 text-gray-600 max-w-2xl">
            I’m Aashik Khatri — a young student from Nepal who discovered his love for computers. What started as curiosity became a purpose: to build intelligent, creative, and data-driven solutions that make life smarter. I’m focused on using technology not just as a tool, but as a way to connect people, solve problems, and inspire progress.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 hover:bg-gray-800 text-white font-semibold px-4 py-2 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] shadow-sm"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 px-4 py-2 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            >
              <ExternalLink className="h-4 w-4" /> View My Projects
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/aashikkhatri" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/iamgroot400" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Instagram />
            </a>
            <a href="mailto:aashikkc2@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
