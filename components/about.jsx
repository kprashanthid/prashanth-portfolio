
/* eslint-disable */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tabbutton";
import code from "../app/assets/code.png"
import Skills from "./skills";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const technologies = [
  "Node Js",
  "React Native",
  "React",
  "Tailwind Css",
  "Express",
  "Mongodb",
  "Mui",
  "Java",
  "Springboot"
];
const SkillView = ({ technologies }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTechnologies = showAll ? technologies : technologies.slice(0, 3);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-5 flex-wrap"
      >
        {visibleTechnologies.map((title, key) => (
          <Skills className="w-full md:w-1/4" key={key} title={title} />
        ))}
      </motion.div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-5 text-black bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        {showAll ? "Show Less" : "See More"}
      </button>
    </div>
  );
};



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
<SkillView technologies={technologies}/>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row gap-5 flex-wrap"
    >
      <div className="bg-gradient-to-r from-black to-gray-500 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div>
        <p className="font-bold text-lg">Bachelor of Computer Application (BCA)</p>
        <p>RPA First Grade College, Rajajinagar, Bangalore</p>
        <p>July 2019 – September 2022</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li className="text-sm">Completed a 3-year BCA program under the affiliation of Bangalore University.</li>
          <li className="text-sm">Achieved a CGPA of 6.68.</li>
        </ul>
      </div>
    </div>
    </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
const aboutData = "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications."
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={code} className="bg-white" width={500} height={500} alt={"dkfndjfkdkf"} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          <TypeAnimation
              sequence={[
                aboutData,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
         
          </p>
          <div className="flex flex-row justify-start mt-8 gap-5 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;