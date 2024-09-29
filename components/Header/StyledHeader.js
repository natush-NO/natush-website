import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledHeader = styled.header`
  min-height: 100px;
  padding: 40px 0 40px 0;
  font-size: 20px;
  margin-bottom: 30px;

  @media (min-width: 500px) {
    padding-top: 60px;
  }

  @media (min-width: 1000px) {
    margin-bottom: 50px;
  }
`;

export const StyledNavHeader = styled.nav`
  max-width: 800px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledNavItems = styled.ul`
  font-size: 14px;
  color: white;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
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
    font-size: 18px;
  }

  @media (min-width: 1000px) {
    max-width: 700px;
    font-size: 22px;
  }
`;

export const StyledNavItem = styled.li`
  min-width: 130px;
  padding: 10px 0;
  background-color: rgb(24, 101, 134);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  cursor: pointer;
  transition: all 0.8s;

  @media (hover: hover) {
    &:hover {
      color: blue;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 450px) {
    padding: 15px;
  }
`;

export const StyledNavButton = styled.button``;

export const StyledSocialItems = styled.ul`
  max-width: 250px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (min-width: 1000px) {
    max-width: 400px;
  }
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

  @media (min-width: 600px) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1000px) {
    width: 45px;
    height: 45px;
  }
`;

export const StyledSocialImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
