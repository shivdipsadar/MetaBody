import React from 'react';
import whoImage from '../assets/who.jpg'; // Update with correct path

const WhoWeAre = () => {
  return (
    <section id="WhoWeAre" className="bg-black text-white px-4 py-16 md:px-16 overflow-hidden p-20 pt-0">
      {/* Layered Heading */}
      <div className="relative w-full text-center mb-12">
        <h1 className="text-[3rem] md:text-[7rem] font-extrabold text-[#1e1e1e] uppercase tracking-wide z-0 select-none">
          WHO WE ARE
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold uppercase z-10">
          Who We Are
        </h2>
      </div>

      {/* Content layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-stretch gap-10">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 h-auto">
          <div className="relative w-full h-full">
            <img
              src={whoImage}
              alt="Gym"
              className="w-full h-[450px] md:h-[500px] object-cover rounded-md"
            />

            {/* Outlined 01 */}
            <div className="absolute top-[-40px] left-[-30px] z-20 pointer-events-none">
              <svg viewBox="0 0 200 100" className="w-[130px] md:w-[160px]">
                <text
                  x="0"
                  y="80"
                  fontFamily="Arial Black"
                  fontSize="90"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  01
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-base leading-relaxed space-y-5">
          <p className="text-gray-300">
            Our mission is to transform ordinary lives into extraordinary ones. At our gym, we welcome people of all
            backgrounds and fitness levels, supporting them every step of their journey.
          </p>
          <p className="text-gray-300">
            Unlike traditional gyms, we focus on holistic transformation—mind, body, and spirit. Our facility is built
            to challenge you, energize you, and help you unlock your full potential.
          </p>
          <p className="text-gray-300">
            Try your first session on us! Build strength, gain confidence, and become part of a community that lifts you
            up every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

