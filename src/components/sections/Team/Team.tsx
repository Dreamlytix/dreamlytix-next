import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

interface Member {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const team: Member[] = [
  {
    name: "John Doe",
    role: "Frontend Engineer",
    image: "/hero.svg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sarah Lee",
    role: "Backend Developer",
    image: "/hero.svg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Arjun Patel",
    role: "UI/UX Designer",
    image: "/hero.svg",
    linkedin: "#",
    github: "#",
  },
];

const Team = () => {
  return (
    <section id="team" className="container mx-auto px-6 py-24">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Meet Our <span className="text-orange-500">Team</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          The people behind Dreamlytix — passionate, creative, and dedicated to
          building high-quality digital experiences.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition"
          >
            <div className="w-32 h-32 mx-auto relative mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-orange-600 font-medium mb-4">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="text-gray-700 hover:text-orange-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  className="text-gray-700 hover:text-orange-600 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
