import React from "react";

import { RiCheckboxCircleLine } from "react-icons/ri";

function Skill({ skill, level }) {
  return (
    <div className="skill">
      <RiCheckboxCircleLine />
      <div>
        <h5>{skill}</h5>
        <span>{level}</span>
      </div>
    </div>
  );
}

export default Skill;
