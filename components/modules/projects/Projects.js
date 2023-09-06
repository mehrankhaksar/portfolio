import React from "react";

import { projectsData } from "./projectsData";

import Project from "./Project";

function Projects() {
  return (
    <ul className="w-full grid gap-2.5 sm:grid-cols-2">
      {projectsData.map((item, index) => (
        <li key={index}>
          <Project {...item} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
