import styled from "styled-components";
import Link from "next/link";

export const StyledTitle = styled.h1`
  font-size: 86px;
  margin: 50px 0 70px 0;
`;

export const StyledDetailsContainer = styled.div`
  width: 80%;
  padding: 30px;
  background-color: rgb(19, 81, 108);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const StyledFirstLine = styled.p`
  text-align: center;
  font-size: 32px;
`;

export const StyledDescription = styled.p`
  font-size: 26px;
  font-weight: 400;
`;

export const StyledAppLink = styled(Link)`
  font-size: 24px;
  padding: 10px 15px;
  cursor: pointer;
  min-width: 130px;
  text-align: center;
  background-color: rgb(24, 101, 134);
  border-radius: 10px;
  transition: all 0.8s ease;
  margin-top: 30px;

  @media (hover: hover) {
    &:hover {
      color: blue;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const StyledBackButton = styled.button`
  min-width: 150px;
  font-size: 32px;
  margin-bottom: 50px;
`;
