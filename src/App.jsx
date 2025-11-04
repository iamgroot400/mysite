import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200 scroll-smooth">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
