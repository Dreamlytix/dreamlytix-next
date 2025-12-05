import { Users, Target, Rocket, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Who We Are",
    icon: Users,
    desc: "Dreamlytix is a passionate 3-member tech team specializing in modern web development, UI/UX design, backend engineering, and scalable cloud solutions. We focus on building digital experiences that are fast, beautiful, and built to last.",
  },
  {
    title: "Our Mission",
    icon: Target,
    desc: "To transform ideas into high-quality digital experiences through clean engineering, thoughtful design, and the latest modern technologies.",
  },
  {
    title: "What We Do",
    icon: Rocket,
    desc: "We develop websites, web apps, mobile apps, custom software, and business-ready digital solutions that help companies grow, automate, and innovate.",
  },
  {
    title: "Why Choose Us",
    icon: HeartHandshake,
    desc: "We believe in transparency, fast delivery, and long-term partnerships. Every project is treated like our own — with attention, ownership, and a commitment to excellence.",
  },
];

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          About <span className="text-orange-500">Dreamlytix</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          A small team with big ambitions — building smart, scalable,
          and human-centric digital products.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                <Icon className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
