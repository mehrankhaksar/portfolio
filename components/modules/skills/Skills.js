import React from "react";

import { skillsData } from "./skillsData";

import Skill from "./Skill";

function Skills() {
  return (
    <div className="space-y-5">
      <h4 className="text-2xl font-bold">Front-End Developer</h4>
      <ul className="w-full grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {skillsData.map((item, index) => (
          <li key={index}>
            <Skill {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
