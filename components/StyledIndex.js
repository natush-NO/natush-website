import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const StyledMainContainer = styled.div`
  max-width: 1350px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledTitle = styled.h1`
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

export const StyledText = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
`;

export const StyledTextContainer = styled.div`
  position: relative;
  background-color: rgba(30, 43, 53, 0.9);
  padding: 30px;
  border-radius: 5px;
  font-size: 26px;
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1;

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
  padding: 0 2px 4px 2px;
  transition: all 0.7s;
  transition: all 0.7s;
  z-index: 2;

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
`;

export const StyledSpan = styled.span`
  font-weight: 600;
`;
