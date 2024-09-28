import Header from "@/components/Header/Header";
import { styled } from "styled-components";
import GlobalStyle from "@/styles";

const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
`;

const StyledMainContainer = styled.div`
  max-width: 1350px;
  padding: 0 15px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  font-size: 38px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 46px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
  }
`;

const StyledText = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
`;

export default function HomePage({ pageMain }) {
  const backgroundImage = pageMain
    ? "/background/blue_background.webp"
    : "/background/blue_flowers.webp";

  return (
    <>
      <GlobalStyle $pageMain={pageMain} $backgroundImage={backgroundImage} />
      <Header isBack={false} />
      <StyledMain>
        <StyledMainContainer>
          <StyledTitle>
            Hello, <br /> I am Nataliia Osman!
          </StyledTitle>
          <StyledText>Welcome to my page!!!</StyledText>
        </StyledMainContainer>
      </StyledMain>
    </>
  );
}
