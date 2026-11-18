// components/Header.jsx
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="w-full bg-[#00064C] text-white px-8 py-4 flex items-center justify-between border-b border-white/10">
      {/* Brand Name on Left */}
      <Link href="/" className="text-2xl font-bold tracking-wide">
        Laurus Designs
      </Link>

      {/* Navigation Links & Auth Buttons on Right */}
      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300 transition-colors">
            About
          </Link>
          <Link href="/team" className="hover:text-blue-300 transition-colors">
            Team
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button text="Login" variant="outline" />
          <Button text="Sign Up" variant="light" />
        </div>
      </div>
    </header>
  );
}
