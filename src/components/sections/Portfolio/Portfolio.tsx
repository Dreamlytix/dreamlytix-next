import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Business Dashboard Platform",
    desc: "A modern analytics dashboard with role-based access, charts, and real-time updates.",
    image: "/hero.svg", // add your placeholder here
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "E-Commerce Web Application",
    desc: "A scalable e-commerce platform with product management, checkout, and payment integration.",
    image: "/hero.svg",
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "Mobile App UI Design",
    desc: "A clean mobile application interface for finance tracking with smooth interactions.",
    image: "/hero.svg",
    tags: ["Figma", "React Native", "UX"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-orange-500">Work</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          A showcase of the products and experiences we’ve built.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-orange-600 transition">
                View Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
