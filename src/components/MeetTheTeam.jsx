import React from 'react';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpg';
import team8 from '../assets/team8.jpg';

const teamData = [
  { img: team1, name: 'Simone Walters', role: 'Coach' },
  { img: team2, name: 'Jamal Rivers', role: 'Trainer' },
  { img: team3, name: 'Aiden Brooks', role: 'Nutritionist' },
  { img: team4, name: 'Emily Stone', role: 'Yoga Instructor' },
  { img: team5, name: 'Chris Jennings', role: 'Strength Coach' },
  { img: team6, name: 'Marcus Lane', role: 'Crossfit Expert' },
  { img: team7, name: 'Sophia Ray', role: 'Personal Trainer' },
  { img: team8, name: 'Derrick Ford', role: 'Boxing Coach' },
];

const MeetTheTeam = () => {
  return (
    <section id="MeetTheTeam" className="relative bg-black text-white p-20 pt-16 pb-0 px-4 md:px-16 overflow-hidden">
      {/* Title */}
      <div className="relative text-center mb-12">
        <h1 className="text-[3rem] md:text-[6rem] font-extrabold text-[#1e1e1e] uppercase z-0 select-none">
          MEET THE TEAM
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold uppercase z-10">
          Meet the Team
        </h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 relative z-10">
        {teamData.map((member, index) => (
          <div key={index} className="relative group w-full h-[300px] overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-80 h-90 object-cover rounded-md"
            />
            {/* Hover Card */}
            <div className="absolute inset-0 bg-yellow-400 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
              <h3 className="font-bold text-lg md:text-xl tracking-widest uppercase mb-2">
                {member.name}
              </h3>
              <div className="border-t-2 border-black w-10 mb-2" />
              <p className="text-sm md:text-base">{member.role}</p>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-2 border-white rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Outlined 02 */}
      <div className="absolute top-10 right-10 z-0 pointer-events-none hidden md:block">
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
            02
          </text>
        </svg>
      </div>


    </section>
  );
};

export default MeetTheTeam;
