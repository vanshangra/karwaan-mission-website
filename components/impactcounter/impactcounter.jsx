import React, { useEffect, useRef } from "react";

const counterData = [
  { value: 7000, label: "Schools Transformed", color: "indigo" },
  { value: 1500, label: "Villages Transformed", color: "rose" },
  { value: 500, label: "Sanitation Projects", color: "lime" },
  { value: 100000, label: "Volunteers Engaged", color: "cyan" },
];

const ImpactCounters = () => {
  const counterRefs = useRef([]);
  const duration = 2000;

  useEffect(() => {
    const animateCounter = (element, targetValue) => {
      let startValue = 0;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * targetValue);
        element.textContent = currentValue.toLocaleString("en-IN");

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = counterRefs.current.indexOf(entry.target);
            if (index !== -1) {
              animateCounter(entry.target, counterData[index].value);
              obs.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((counter) => counter && observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white -mt-10 md:-mt-16 mx-4 rounded-xl shadow-lg relative z-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counterData.map((item, index) => (
            <div key={index} className={`p-6 bg-${item.color}-50 rounded-xl shadow-sm`}>
              <div
                className={`text-5xl font-extrabold text-${item.color}-600 mb-2`}
                ref={(el) => (counterRefs.current[index] = el)}
              >
                0
              </div>
              <p className="text-lg font-medium text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
