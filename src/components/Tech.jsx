import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { frontendTechnologies, otherTechnologies, tools } from "../constants";

function Tech2() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I Learnt</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Skills.
        </h2>
      </motion.div>

      <div className="mt-20 flex w-full flex-wrap justify-center gap-7">
        <div className="w-full max-w-[330px] rounded-2xl border border-blue-400 bg-primary px-9 py-3 shadow-card md:max-w-[400px] md:py-5 lg:max-w-[500px]">
          <h3 className="mb-5 text-center text-2xl font-medium text-secondary">
            Frontend
          </h3>
          <ul className="mb-5 flex list-none flex-wrap justify-center gap-3">
            {frontendTechnologies.map((technology) => (
              <li
                key={technology.name}
                className="flex items-center justify-center gap-2 rounded-xl  border border-secondary px-4 py-2 text-sm font-normal text-secondary md:py-3 md:text-base"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="relative h-6 w-6"
                />
                {technology.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[330px] rounded-2xl border border-blue-400 bg-primary px-9 py-3 shadow-card md:max-w-[400px] md:py-5 lg:max-w-[500px]">
          <h3 className="mb-5 text-center text-2xl font-medium text-secondary">
            Other
          </h3>
          <ul className="mb-5 flex list-none flex-wrap justify-center gap-3">
            {otherTechnologies.map((technology) => (
              <li
                key={technology.name}
                className="flex items-center justify-center gap-2 rounded-xl  border border-secondary px-4 py-2 text-sm font-normal text-secondary md:py-3 md:text-base"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="relative h-6 w-6"
                />
                {technology.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[330px] rounded-2xl border border-blue-400 bg-primary px-9 py-3 shadow-card md:max-w-[400px] md:py-5 lg:max-w-[500px]">
          <h3 className="mb-5 text-center text-2xl font-medium text-secondary">
            Tools
          </h3>
          <ul className="mb-5 flex list-none flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-center gap-2 rounded-xl  border border-secondary px-4 py-2 text-sm font-normal text-secondary md:py-3 md:text-base"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="relative h-6 w-6 object-cover"
                />
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Tech2, "");
