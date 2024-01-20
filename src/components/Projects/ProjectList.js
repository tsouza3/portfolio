import React, { useState } from "react";
import styled from "styled-components";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  flex-wrap: wrap;
  margin-right: 2.5em;
`;

const ProjectList = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <ProjectContainer>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => openModal(project)}
        />
      ))}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
          isOpen={isModalOpen}
        />
      )}
    </ProjectContainer>
  );
};

export default ProjectList;
