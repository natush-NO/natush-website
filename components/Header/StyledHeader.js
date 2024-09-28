import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledHeader = styled.header`
  min-height: 100px;
  padding: 40px;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const StyledNavHeader = styled.nav`
  max-width: 800px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledNavItems = styled.ul`
  font-size: 16px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (min-width: 650px) {
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
  background-color: rgba(30, 43, 53, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    color: blue;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledNavButton = styled.button`
  padding: 15px;
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
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;


  @media (hover: hover) {
    &:hover {
      opacity: 0.6;
    transition: all 0.7s;
        box-shadow: none;
    }
`;

export const StyledSocialLink = styled(Link)`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;

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
