import Header from "@/components/Header/Header";
import { styled } from "styled-components";
import GlobalStyle from "@/styles";

const StyledMain = styled.main``;

const StyledMainContainer = styled.div`
  padding: 0 15px;
  width: 100vw;
  height: 100vh;
  margin-top: 50px;
`;

const StyledTitle = styled.h1`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin-top: -30px;

  @media (min-width: 800px) {
    font-size: 46px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    margin-top: 30px;
  }
`;

const StyledText = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
`;

export default function HomePage({ pageMain }) {
  const backgroundImage = pageMain
    ? "/background/img_2.webp"
    : "/background/img_3.webp";
  return (
    <>
      <GlobalStyle $pageMain={pageMain} $backgroundImage={backgroundImage} />
      <Header isBack={false} />
      <StyledMain>
        <StyledMainContainer>
          <StyledTitle>Hello, I am Nataliia Osman!</StyledTitle>
          <StyledText>Welcome to my page</StyledText>
        </StyledMainContainer>
      </StyledMain>
    </>
  );
}
