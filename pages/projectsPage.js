import { styled } from "styled-components";
import Header from "@/components/Header/Header";
import { StyledMain, StyledMainContainer } from "@/components/StyledIndex";
import ProjectItem from "@/components/ProjectItem/ProjectItem";

export const StyledProjectContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;

  @media (min-width: 1350px) {
    flex-direction: row;
  }
`;

export default function ProjectsPage({
  handleShowText,
  selectedItemId,
  projectItems = [],
}) {
  return (
    <>
      <Header
        isBackProject={true}
        projectsPage={true}
        handleShowText={handleShowText}
      />
      <StyledMain>
        <StyledMainContainer>
          <StyledProjectContainer>
            {projectItems.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                isOpen={selectedItemId === project.id}
              />
            ))}
          </StyledProjectContainer>
        </StyledMainContainer>
      </StyledMain>
    </>
  );
}
