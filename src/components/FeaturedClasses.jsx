import React from "react";

// Import images from local assets
import class1 from "../assets/class1.jpg";
import class2 from "../assets/class2.jpg";
import class3 from "../assets/class3.jpg";
import class4 from "../assets/class4.jpg";

const classes = [
  { title: "Crossfit - Beginners Class", image: class1 },
  { title: "Crossfit - Gymnastics", image: class2 },
  { title: "Crossfit - Olympic Lifting", image: class3 },
  { title: "Crossfit - Female Only", image: class4 },
];

const FeaturedClasses = () => {
  return (
    <section id="Classes" className="relative bg-black text-white p-20 pt-16 pb-0 px-4 md:px-16 overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-10 left-10 z-0 pointer-events-none hidden md:block">
        <svg viewBox="0 0 300 100" className="w-[160px]">
          <text
            x="0"
            y="80"
            fontFamily="Arial Black"
            fontSize="90"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            03
          </text>
        </svg>
      </div>

      {/* Title */}
      <div className="relative text-center mb-12">
        <h1 className="text-[3rem] md:text-[6rem] font-extrabold text-[#1e1e1e] uppercase z-0 select-none">
          Featured Classes
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold uppercase z-10">
          Featured Classes
        </h2>
      </div>

      {/* Centered Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full relative z-10">
          {classes.map((cls, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-lg w-full h-[600px]"
            >
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">
                  {cls.title}
                </h3>
                <button className="bg-yellow-400 text-black font-bold px-6 py-2 text-sm uppercase hover:bg-yellow-300 transition-colors w-max">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;
