import React, { useState } from "react";

function YourComponent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCard = [
    {
      id: 1,
      title: "project-title1",
      text: "1998 - 2002",
      desc: "project-desc1",
      imd: "/assets/images/1.jpg",
    },
    {
      id: 2,
      title: "project-title2",
      text: "2002 - 2004",
      desc: "project-desc2",
      imd: "/assets/images/2.jpg",
    },
    {
      id: 3,
      title: "project-title3",
      text: "2004 - 2005",
      desc: "project-desc3",
      imd: "/assets/images/3.jpg",
    },
    {
      id: 4,
      title: "project-title4",
      text: "2005 - 2010",
      desc: "project-desc4",
      imd: "/assets/images/4.jpg",
    },
    {
      id: 5,
      title: "project-title5",
      text: "2010 - 2013",
      desc: "project-desc5",
      imd: "/assets/images/5.jpg",
    },
    {
      id: 6,
      title: "project-title6",
      text: "2013 - 2017",
      desc: "project-desc6",
      imd: "/assets/images/6.jpg",
    },
  ];

  const handleProjectClick = (projectId) => {
    const project = projectCard.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  return (
    <div>
      {projectCard.map((project) => (
        <>
          <button
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
          >
            {project.id}
          </button>
          <h1>{project.title}</h1>
          <p>{project.text}</p>
          <p>{project.desc}</p>
        </>
      ))}

      {selectedProject && (
        <div>
          <img src={selectedProject.imd} alt={selectedProject.title} />
        </div>
      )}
    </div>
  );
}

export default YourComponent;
