// app/team/page.jsx
import Image from "next/image";

const teamMembers = [
  {
    name: "Elena Vance",
    role: "Founder & Creative Director",
    bio: "Leads brand vision, design systems, and client strategy across all web projects.",
    image: "/team/1.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Lead UI/UX Designer",
    bio: "Specializes in user research, interactive Figma prototypes, and responsive layouts.",
    image: "/team/2.jpg",
  },
  {
    name: "Sofia Patel",
    role: "Senior Frontend Developer",
    bio: "Translates complex design systems into fast, accessible Next.js applications.",
    image: "/team/3.jpg",
  },
  {
    name: "David Kim",
    role: "Brand & Visual Designer",
    bio: "Crafts typography, color systems, and digital assets tailored to client goals.",
    image: "/team/4.jpg",
  },
];

export default function TeamPage() {
  return (
    <section className="max-w-6xl space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#00064C]">
          Meet Our Team
        </h1>
        <p className="text-lg text-slate-600">
          The designers and developers behind Laurus Designs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-[#00064C]"
            />
            <h2 className="text-xl font-bold text-slate-900">{member.name}</h2>
            <p className="text-sm font-medium text-[#00064C] mt-1">
              {member.role}
            </p>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
