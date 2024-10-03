import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const sharedContainerStyles = css`
  margin: 0 auto;
`;

const sharedFlexStyles = css`
  display: flex;
`;

export const StyledHeader = styled.header`
  min-height: 100px;
  padding: 40px 0;
  margin-bottom: 30px;

  @media (min-width: 1000px) {
    margin-bottom: 50px;
  }
`;

export const StyledNavHeader = styled.nav`
  max-width: 800px;
  ${sharedContainerStyles};
`;

export const StyledNavItems = styled.ul`
  font-size: 14px;
  max-width: 350px;
  ${sharedFlexStyles};
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  ${sharedContainerStyles};
  margin-bottom: 50px;

  @media (min-width: 500px) {
    max-width: 450px;
    font-size: 18px;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  }

  @media (min-width: 650px) {
    max-width: 500px;
  }

  @media (min-width: 1000px) {
    max-width: 700px;
    font-size: 22px;
  }
`;

export const StyledNavItem = styled.li``;

export const StyledNavButton = styled.button`
  min-width: 130px;
`;

export const StyledSocialItems = styled.ul`
  max-width: 250px;
  ${sharedFlexStyles};
  gap: 10px;
  flex-wrap: wrap;
  ${sharedContainerStyles};

  @media (min-width: 1000px) {
    max-width: 400px;
  }
`;

export const StyledSocialItem = styled.li`
  ${sharedContainerStyles};
`;

export const StyledSocialLink = styled(Link)`
  width: 30px;
  height: 30px;
  overflow: hidden;
  position: relative;
  transition: opacity 0.7s ease;

  @media (min-width: 600px) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1000px) {
    width: 45px;
    height: 45px;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.6;
      box-shadow: none;
    }
  }
`;

export const StyledSocialImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
