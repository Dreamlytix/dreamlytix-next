import Image from "next/image";

const techList = [
  { name: "React", logo: "/tech/react.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "TypeScript", logo: "/tech/typescript.svg" },
  { name: "JavaScript", logo: "/tech/javascript.svg" },
  { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
  { name: "Node.js", logo: "/tech/node.svg" },
  { name: "Express", logo: "/tech/express.svg" },
  { name: "MongoDB", logo: "/tech/mongodb.svg" },
  { name: "Docker", logo: "/tech/docker.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "GitHub", logo: "/tech/github.svg" },
];

const TechStack = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold text-orange-500 bg-orange-50 px-4 py-1.5 rounded-full">
            TECH STACK
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Technologies <span className="text-orange-500 relative">
            We Use
          </span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Powered by a robust ecosystem of modern tools and frameworks that drive innovation and performance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 place-items-center">
        {techList.map(({ name, logo }) => (
          <div
            key={name}
            className="group relative w-full max-w-[180px]"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/10 to-orange-300/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

            {/* Main card */}
            <div className="flex flex-col items-center gap-4 p-6 md:p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 transform hover:-translate-y-2">

              {/* Logo container with gradient border */}
              <div className="relative p-4 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={name}
                    width={60}
                    height={60}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Name with animated underline */}
              <div className="text-center">
                <p className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {name}
                </p>
                <div className="mt-2 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-500 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
