import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledHeader = styled.header`
  min-height: 100px;

  padding: 40px 0 50px 0;
  font-size: 20px;
`;

export const StyledNavHeader = styled.nav`
  max-width: 800px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledNavItems = styled.ul`
  font-size: 16px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (min-width: 600px) {
    max-width: 500px;
    font-size: 18px;
  }

  @media (min-width: 1000px) {
    max-width: 700px;
    font-size: 22px;
  }
`;

export const StyledNavItem = styled.li`
  transition: all 0.6s;

  &:hover {
    color: blue;
  }
`;

export const StyledNavLink = styled(Link)`
  cursor: pointer;
`;

export const StyledSocialItems = styled.ul`
  max-width: 400px;
  display: flex;
  gap: 10px;
  margin: 0 auto;
`;

export const StyledSocialItem = styled.li`
  margin: 0 auto;
`;

export const StyledSocialLink = styled(Link)`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  transition: all 0.5s;

  @media (hover: hover) {
    :hover {
      opacity: 0.4;
      transition: all 0.7s;
    }
  }

  @media (min-width: 1000px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledSocialImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
