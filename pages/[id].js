import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledMain, StyledMainContainer } from "@/components/StyledIndex";
import {
  StyledTitle,
  StyledDetailsContainer,
  StyledFirstLine,
  StyledDescription,
  StyledAppLink,
  StyledBackButton,
} from "@/components/StyledDetailsPage";

const StyledTextNoTFound = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
`;

export default function ProjectDetails({ projectItems }) {
  const router = useRouter();
  const { id } = router.query;
  const project = projectItems.find((project) => project.id === id);

  if (!project) {
    return (
      <StyledMain>
        <StyledMainContainer>
          <StyledTextNoTFound>Project not found</StyledTextNoTFound>
          <StyledBackButton onClick={() => router.push("/projectsPage")}>
            Back
          </StyledBackButton>
        </StyledMainContainer>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <StyledMainContainer>
        <StyledTitle>{project.title}</StyledTitle>
        <StyledDetailsContainer>
          <StyledFirstLine>
            {Array.isArray(project.description)
              ? project.description[0]
              : project.description}
          </StyledFirstLine>
          {Array.isArray(project.description) &&
            project.description
              .slice(1)
              .map((line, index) => (
                <StyledDescription key={index}>{line}</StyledDescription>
              ))}
          <StyledAppLink
            href="https://shopping-buddy-no.vercel.app/"
            target="_blank"
          >
            To the app &rarr;
          </StyledAppLink>
        </StyledDetailsContainer>
        <StyledBackButton onClick={() => router.push("/projectsPage")}>
          Back
        </StyledBackButton>
      </StyledMainContainer>
    </StyledMain>
  );
}
