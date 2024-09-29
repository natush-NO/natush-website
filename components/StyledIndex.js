import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
`;

export const StyledMainContainer = styled.div`
  max-width: 1350px;
  padding: 0 15px;
  font-weight: 600;
  margin: 0 auto;
`;

export const StyledTitle = styled.h1`
  font-size: 66px;
  line-height: 1.2;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 76px;
  }

  @media (min-width: 1000px) {
    font-size: 84px;
  }
`;

export const StyledTitleTwo = styled.h2`
  font-size: 44px;
  text-align: center;
  margin-top: 30px;
  letter-spacing: 2px;

  @media (min-width: 800px) {
    font-size: 52px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
  }
`;

export const StyledTextContainer = styled.div``;

export const StyledTextArticle = styled.article`
  position: relative;
  background-color: rgb(19, 81, 108);
  padding: 30px;
  border-radius: 5px;
  font-size: 22px;
  margin: 60px 0 50px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: 800px) {
    font-size: 28px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 44px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 7px 3px 0 3px;
  transition: all 0.7s;
  overflow: hidden;

  @media (hover: hover) {
    &:hover {
      opacity: 0.3;
      transition: all 0.9s;
    }
  }
`;

export const StyledTextAboutMe = styled.p`
  line-height: 1.4;
  text-align: center;
  letter-spacing: 1px;
`;

export const StyledSpan = styled.span`
  font-weight: 600;
`;
