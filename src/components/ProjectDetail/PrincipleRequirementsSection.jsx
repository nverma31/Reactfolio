import React from "react";

const principles = [
  {
    principle: "Principle 01",
    title: "Flexibility",
    description: "Offer customer complete flexibility of choosing any kind of vehicle that he wants.",
    requirement: {
      label: "Requirement 01",
      text: "No differentiation between SIXT vehicles and other partner vehicles."
    }
  },
  {
    principle: "Principle 02",
    title: "Consistent Experience",
    description: "Offer customer similar driving experience across all different kind of vehicles ",
    requirement: {
      label: "Requirement 02",
      text: "A singular journey for all vehicle types and all partners"
    }
  },
  {
    principle: "Principle 03",
    title: "Support Customer",
    description: "Support customer throughout their entire journey.",
    requirement: {
      label: "Requirement 03",
      text: "Provide support in the app at critical junctures but also have an easy way for them to reach out to a human."
    }
  },
  {
    principle: "Principle 04",
    title: "Transparency",
    description: "Inform customers of all the prices, fees, penalties, restrictions at all times.",
    requirement: {
      label: "Requirement 04",
      text: "Clear communication of prices, fees, penalties, business zones."
    }
  }
];

const PrincipleRequirementsSection = () => (
  <section className="mb-12 flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[80%] w-full">
      {principles.map((p, i) => (
        <div key={i} className="p-[2px] rounded-xl bg-gradient-to-r from-[#fedf89] via-[#ffc371] to-[#a84dc3] h-full">
          <div className="bg-gray-100 rounded-xl p-0 flex flex-col h-full">
            <div className="flex flex-col h-full gap-0">
              {/* Principle Section */}
              <div className="flex-1 flex flex-col gap-4 p-8 justify-start min-h-[180px]">
                <span className="inline-block w-fit bg-black text-white text-xs font-semibold px-3 py-1 rounded ">{p.principle}</span>
                <div className="text-xl font-semibold font-inter-tight leading-tight text-left">{p.title}</div>
                <div className="text-gray-700 text-base md:text-lg font-light text-left">{p.description}</div>
              </div>
              {/* Requirement Section */}
              <div className="flex-1 flex flex-col gap-4 p-8 justify-start min-h-[180px]">
                <span className="inline-block w-fit bg-black text-white text-xs font-semibold px-3 py-1 rounded ">{p.requirement.label}</span>
                <div className="text-gray-900 text-base md:text-lg font-regular text-left">{p.requirement.text}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PrincipleRequirementsSection; 