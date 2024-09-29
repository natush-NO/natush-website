import { styled } from "styled-components";
import Image from "next/image";

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalImageContainer = styled.div`
  border-radius: 5px;
  position: relative;
  width: 360px;
  height: 300px;
  overflow: auto;

  @media (min-width: 520px) {
    width: 500px;
    height: 400px;
  }

  @media (min-width: 700px) {
    width: 650px;
    height: 500px;
  }

  @media (min-width: 850px) {
    width: 800px;
    height: 600px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 0 5px 5px 5px;
  z-index: 1001;
  transition: all 0.7s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
      transition: all 0.9s;
    }
  }
`;

export const StyledModalImage = styled(Image)`
  object-fit: content;
  width: 100%;
  height: 100%;
`;

export const StyledMain = styled.main`
  min-height: 700px;
  height: 100%;
  margin-top: 50px;
`;

export const StyledMainContainer = styled.div`
  max-width: 1350px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledCertificateContainer = styled.div``;

export const StyledImageContainer = styled.div`
  width: 350px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (min-width: 530px) {
    width: 500px;
    height: 350px;
  }

  @media (min-width: 700px) {
    width: 600px;
    height: 400px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: all 1s;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
    transition: all 0.9s;
  }
`;

export const StyledCertificateImage = styled(Image)`
  object-fit: content;
  width: 100%;
  height: 100%;
`;
