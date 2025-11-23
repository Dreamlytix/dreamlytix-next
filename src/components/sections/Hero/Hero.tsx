import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 pt-5 pb-24 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 max-w-xl">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Turning Ideas Into
            <br />
            <span className="text-orange-500">Digital Reality</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We build modern, scalable, and human-centric digital solutions that
            empower businesses to grow, innovate, and transform.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-700 italic text-lg">
            "You Dream, We Build — delivering technology with purpose."
          </blockquote>

          <button className="px-8 py-3 bg-gray-900 text-white rounded-md text-lg font-medium hover:bg-gray-800 transition">
            Get a Free Consultation
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* <Image
              src="https://images.unsplash.com/vector-1761074651005-97a2e57eef29?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working on software project"
              width={600}
              height={600}
              // className="rounded-2xl shadow-xl object-cover"
            /> */}
            <img
              src="/hero.svg"
              alt="background shape"
              // className="w-[900px] md:w-[1100px] h-auto translate-x-40 -translate-y-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
