export default function Footer() {
  return (
    <footer className="py-10 border-t border-stone-900 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-500">
        <p>
          © {new Date().getFullYear()} Aashik Khatri. Crafted with curiosity and purpose.
        </p>
      </div>
    </footer>
  );
}
