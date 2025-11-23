import Image from "next/image";

const techList = [
  { name: "React", logo: "/tech/react.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "Node.js", logo: "/tech/node.svg" },
  { name: "Express", logo: "/tech/express.svg" },
  { name: "MongoDB", logo: "/tech/mongodb.svg" },
  { name: "TypeScript", logo: "/tech/typescript.svg" },
  { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
  { name: "Docker", logo: "/tech/docker.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "GitHub", logo: "/tech/github.svg" },
];

const TechStack = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Technologies <span className="text-orange-500">We Use</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Powered by a robust ecosystem of modern tools and frameworks.
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
        {techList.map(({ name, logo }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition"
          >
            <Image
              src={logo}
              alt={name}
              width={50}
              height={50}
              className="w-12 h-12 object-contain grayscale"
            />
            <p className="text-sm text-gray-700">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
