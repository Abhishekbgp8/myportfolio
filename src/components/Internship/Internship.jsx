import React from "react";
import { internships } from "../../constants";
import Section from "../Common/Section";

const Internship = () => {
  return (
    <Section id="internship" title="INTERNSHIP" subtitle="Professional internships that shaped my career and skills" paddingTop="pt-8" paddingBottom="pb-0" className="relative" scrollMarginTop="var(--navbar-height)">

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-8">
        {internships.map((exp) => (
          <div
            key={exp.id}
            className="w-full p-4 sm:p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-6">
              <div className="w-28 h-16 sm:w-24 sm:h-14 bg-white overflow-hidden rounded-md border border-gray-200/30 shadow-sm flex items-center justify-center p-1">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {exp.company}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{exp.date}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">{exp.desc}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Internship;
