import React from "react";

const skills = [
  {
    id: 1,
    name: "Technical Skills",
    description1: "Operating Imaging Equipment",
    description2: "Image Quality Control ",
    description3: "Radiation Safety",
    description4: "Image Processing",
  },
  {
    id: 2,
    name: "Patient Care and Communication",
    description1: "Patient Positioning",
    description2: "Attention to Patient Needs",
    description3: "Medical History Gathering",
  },
  {
    id: 3,
    name: "Anatomical Knowledge",
    description1: "Understanding Human Anatomy",
    description2: "Radiographic Anatomy:",
  },
  {
    id: 4,
    name: "Radiology Techniques",
    description1: "Fluoroscopy",
    description2: "Contrast Studies",
    description2: "Advanced Imaging Techniques",
    
  },
  {
    id: 5,
    name: "Knowledge of Radiology Safety",
    description1: "Radiation Protection",
    description2: "Compliance with Regulations",
    description3: "Use of Protective Gear",
    
  },
  {
    id: 6,
    name: "Time Management and Organizational Skills",
    description1: "Efficient Workflow",
    description2: "Prioritizing Procedures",
    description3: "Managing Equipment",
    
  }
];

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-28" id="skills">
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">My Skills</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Expertise</h2>
      </div>

      <div className="grid lg:gri-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
        {skills.map((skill) => (
          <div
          key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer
                    hover:-translate-y-4 translition-all duration-300 skillcard"
          >

            <h3 className="text-3xl font-bold mb-4">{skill.name}</h3>
            <h2 className="text-xl">{skill.description1} </h2>
            <h2 className="text-xl">{skill.description2} </h2>
            <h2 className="text-xl">{skill.description3} </h2>
            <h2 className="text-xl">{skill.description4} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
