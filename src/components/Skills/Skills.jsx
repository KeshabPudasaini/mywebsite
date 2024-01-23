import React from "react";

const skills = [
  {
    id: 1,
    name: "Hardware and Software",
    description1: "Windows",
    description2: "Linux ",
    description3: "MacOS",
  },
  {
    id: 2,
    name: "Networking Devices",
    description1: "Switches",
    description2: "Router",
    description3: "Networking devices",
    description4: "CCTV",
  },
  {
    id: 3,
    name: "Office 360",
    description1: "Admin Side",
    description2: "MS Office 365",
    description3: "Outlook",
    description4: " Active Directory",
  },
  {
    id: 4,
    name: "Database",
    description1: "SQL Server",
    description2: "Windows Server",
    
  },
  {
    id: 5,
    name: "Networking",
    description1: "LAN",
    description2: "WAN",
    description3: "MAN",
    
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
