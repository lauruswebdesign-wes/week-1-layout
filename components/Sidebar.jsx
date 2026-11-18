// components/Sidebar.jsx
import Link from "next/link";
import { FiHome, FiInfo, FiUsers, FiMail, FiGrid } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-52 bg-slate-900 text-white p-6 flex flex-col gap-4">
      <Link href="/" className="flex items-center gap-3 hover:text-blue-400">
        <FiHome className="text-xl" />
        <span>Home</span>
      </Link>

      <Link href="/about" className="flex items-center gap-3 hover:text-blue-400">
        <FiInfo className="text-xl" />
        <span>About</span>
      </Link>

      <Link href="/team" className="flex items-center gap-3 hover:text-blue-400">
        <FiUsers className="text-xl" />
        <span>Team</span>
      </Link>

      <Link href="/contact" className="flex items-center gap-3 hover:text-blue-400">
        <FiMail className="text-xl" />
        <span>Contact</span>
      </Link>

      <Link href="/" className="flex items-center gap-3 hover:text-blue-400">
        <FiGrid className="text-xl" />
        <span>Portfolio</span>
      </Link>
    </aside>
  );
}
