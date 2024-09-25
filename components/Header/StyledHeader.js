import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledHeader = styled.header`
  min-height: 100px;

  padding: 25px 0;
  font-size: 20px;
`;

export const StyledNavNeader = styled.nav`
  max-width: 800px;
  margin: 0 auto;
`;

export const StyledNavItems = styled.ul`
  font-size: 18px;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
`;

export const StyledNavItem = styled.li``;

export const StyledNavLink = styled(Link)``;

export const StyledSocialItems = styled.ul`
  display: flex;
  gap: 10px 30px;
`;

export const StyledSocialItem = styled.li``;

export const StyledSocialLink = styled(Link)`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
`;

export const StyledSocialImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
