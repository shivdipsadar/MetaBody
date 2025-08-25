import React from "react";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Flexi",
    price: "₹99.99",
    bgColor: "bg-gray-300",
    textColor: "text-black",
    icon: "⏳",
    features: [
      "12 Classes Per Month",
      "3 Classes Per Week",
      "No joining fees",
    ],
  },
  {
    name: "All Access",
    price: "₹199.99",
    bgColor: "bg-white",
    textColor: "text-black",
    icon: "∞",
    highlight: true,
    features: [
      "Unlimited Classes Per Month",
      "3 Classes Per Day",
      "No joining fees",
    ],
  },
  {
    name: "Off-Peak",
    price: "₹149.99",
    bgColor: "bg-gray-300",
    textColor: "text-black",
    icon: "🌙",
    features: [
      "20 Classes Per Month",
      "5 Classes Per Week",
      "No joining fees",
    ],
  },
];

const MembershipPlans = () => {
  return (
    <section id="Memberships" className="relative bg-black text-white py-20 px-4 md:px-16 overflow-hidden">
      {/* Section number "04" */}
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
            04
          </text>
        </svg>
      </div>

      {/* Heading */}
      <div className="relative text-center mb-16 z-10">
        <h1 className="text-[3rem] md:text-[6rem] font-extrabold text-[#1e1e1e] uppercase select-none">
          MEMBERSHIPS
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl font-bold uppercase">
          Memberships
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`
              ${plan.bgColor} ${plan.textColor}
              rounded-none p-8 flex flex-col justify-between items-center
              shadow-xl transform transition duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:z-30
              ${plan.highlight ? "scale-105 z-20" : ""}
            `}
          >
            <h3 className="text-xl font-bold uppercase mb-6">{plan.name}</h3>

            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center text-black mb-6">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white text-2xl">{plan.icon}</span>
              </div>
            </div>

            {/* Price */}
            <p className="text-xl font-bold mb-4">
              {plan.price} <span className="font-normal">/ month</span>
            </p>

            {/* Features */}
            <ul className="space-y-3 text-sm text-center mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-black" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 text-sm uppercase hover:bg-yellow-300 transition">
              Join Today
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipPlans;
