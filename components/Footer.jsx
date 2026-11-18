// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00064C] text-white px-8 py-6 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-semibold text-base">Laurus Designs</p>

        <div className="flex items-center gap-6 text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/team" className="hover:text-white transition-colors">
            Team
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <p className="text-slate-400">
          © {new Date().getFullYear()} Laurus Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
