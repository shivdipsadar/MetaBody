import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 45, label: "Different Modules" },
  { value: 60, label: "Minutes Per Class" },
  { value: 20, label: "Classes Per Week" },
  { value: 1, label: "United Goal" },
];

const StatsStrip = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5,     // 30% of the component is visible
  });

  return (
    <section ref={ref} className="bg-yellow-400 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-6xl font-extrabold text-black mb-2">
              {inView ? <CountUp end={stat.value} duration={2} /> : "0"}
            </h2>
            <p className="uppercase font-bold tracking-wide text-black leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
