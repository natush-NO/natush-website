import Header from "@/components/Header/Header";
import { styled } from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  overflow: clip;
`;

const StyledMain = styled.main``;

const StyledMainContainer = styled.div`
  padding: 15px 0;
`;

const StyledTitle = styled.h1`
  font-size: 38px;
  text-align: center;
`;

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <Header />
        <StyledMain>
          <StyledMainContainer>
            <StyledTitle>Hello, I am Nataliia Osman!</StyledTitle>
          </StyledMainContainer>
        </StyledMain>
      </Wrapper>
    </>
  );
}
