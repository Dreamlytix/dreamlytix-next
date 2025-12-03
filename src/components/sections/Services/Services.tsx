import { Code, Globe, Smartphone, Server } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-24" id="services">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          We turn ideas into beautifully crafted digital products using modern,
          scalable, and result-driven technology.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          icon={Code}
          title="Web App Development"
          description="Build secure, scalable, high-performance web applications tailored to your business needs."
        />

        <ServiceCard
          icon={Smartphone}
          title="Mobile App Development"
          description="Create smooth, fast, and modern mobile apps for both Android and iOS platforms."
        />

        <ServiceCard
          icon={Globe}
          title="Website Design"
          description="Craft beautiful, responsive, and conversion-focused website designs for your brand."
        />

        <ServiceCard
          icon={Server}
          title="Backend & API Development"
          description="Power your apps with robust, secure, and scalable server-side architecture."
        />

        <ServiceCard
          icon={Globe}
          title="SEO & Digital Optimization"
          description="Increase your online presence with optimized content, SEO strategy, and fast performance."
        />

        <ServiceCard
          icon={Code}
          title="Custom Software Solutions"
          description="Unique, tailor-made solutions designed specifically for your business challenges."
        />
      </div>
    </section>
  );
};

export default Services;
