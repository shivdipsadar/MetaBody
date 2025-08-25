import React from 'react';
import heroImage from '../assets/hero.jpg';
import downArrow from '../assets/down-arrow.png';

const Hero = () => {
  return (
    <section
      className="relative bg-black text-white h-[90vh] flex items-center px-10 p-20 pt-0 bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="bg-black bg-opacity-99 p-8 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          THE ONLY <br />
          <span className="text-yellow-400">IMPOSSIBLE</span> JOURNEY IS <br />
          THE ONE YOU <span className="text-yellow-400">NEVER BEGIN.</span>
        </h1>
        <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
          BEGIN YOUR JOURNEY
        </button>
      </div>

      {/* Down Arrow Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <img
          src={downArrow}
          alt="Scroll Down"
          className="w-6 h-6 md:w-8 md:h-8 animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;
