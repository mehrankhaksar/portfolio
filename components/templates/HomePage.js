"use client";

import React from "react";

import { Tab } from "@headlessui/react";

import Skills from "../modules/skills/Skills";
import Projects from "../modules/projects/Projects";

function HomePage() {
  return (
    <section className="w-full">
      <div className="w-full">
        <Tab.Group>
          <div className="space-y-10">
            <Tab.List className="w-full grid grid-cols-2 gap-2.5 p-2.5 bg-gray-300 rounded sm:max-w-sm sm:mx-auto">
              <Tab
                className={({ selected }) =>
                  `text-lg font-semibold py-2 rounded outline-none ${
                    selected
                      ? "bg-white"
                      : "transition-colors hover:bg-gray-200"
                  }`
                }
              >
                Skills
              </Tab>
              <Tab
                className={({ selected }) =>
                  `text-lg font-semibold py-2 rounded outline-none ${
                    selected
                      ? "bg-white"
                      : "transition-colors hover:bg-gray-200"
                  }`
                }
              >
                Projects
              </Tab>
            </Tab.List>
            <Tab.Panels className="w-full sm:max-w-lg sm:mx-auto">
              <Tab.Panel>
                <Skills />
              </Tab.Panel>
              <Tab.Panel>
                <Projects />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}

export default HomePage;
