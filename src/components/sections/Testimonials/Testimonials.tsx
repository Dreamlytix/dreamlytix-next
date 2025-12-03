import { FC } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Founder, BrightTech Solutions",
    text: "Dreamlytix delivered a clean, scalable solution ahead of schedule. Their attention to detail and communication made the process smooth and stress-free.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager, NovaCorp",
    text: "The team understood our vision perfectly and transformed it into a beautiful, functional platform. Highly recommended for startups!",
  },
  {
    name: "Rahul Jain",
    role: "Director, BlueWave Systems",
    text: "Exceptional work! The UI/UX and performance exceeded expectations. We’ll definitely collaborate again for future projects.",
  },
];

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What <span className="text-orange-500">Clients Say</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Real words from people we've had the pleasure to work with.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-lg 
                      transition rounded-2xl p-8"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-orange-500 fill-orange-500"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-700 leading-relaxed mb-6">"{t.text}"</p>

            {/* Footer */}
            <div>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
