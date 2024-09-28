import { useState, useEffect } from "react";
import GlobalStyle from "@/styles";
import Header from "@/components/Header/Header";
import { styled } from "styled-components";
import Image from "next/image";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModalImageContainer = styled.div`
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

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
`;

const StyledMainContainer = styled.div`
  max-width: 1350px;
  padding: 0 15px;
  margin: 0 auto;
`;

const StyledCertificateContainer = styled.div`
  padding-bottom: 50px;
`;

const StyledImageContainer = styled.div`
  width: 350px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  margin: 0 auto;

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
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: all 1s;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
    transition: all 0.9s;
  }
`;

const StyledCertificateImage = styled(Image)`
  object-fit: content;
  width: 100%;
  height: 100%;
`;

export default function Certificates({ backgroundCertificata }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const backgroundImage = backgroundCertificata
    ? "/background/blue_flowers.webp"
    : "/background/blue_background.webp";

  function openModal(imageSrc) {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <GlobalStyle
        $backgroundKnowledge={backgroundCertificata}
        $backgroundImage={backgroundImage}
      />
      <Header isBack={true} />
      <StyledMain>
        <StyledMainContainer>
          <StyledCertificateContainer>
            <StyledImageContainer
              onClick={() =>
                openModal("/certificate_image/certificate_bootcamp.webp")
              }
            >
              <StyledCertificateImage
                src="/certificate_image/certificate_bootcamp.webp"
                alt="Certificate"
                fill
                sizes="500px"
                priority
              />
            </StyledImageContainer>
            <StyledImageContainer
              onClick={() =>
                openModal("/certificate_image/certificate_html_css_js.webp")
              }
            >
              <StyledCertificateImage
                src="/certificate_image/certificate_html_css_js.webp"
                alt="Certificate"
                fill
                sizes="500px"
                priority
              />
            </StyledImageContainer>
            <StyledImageContainer
              onClick={() =>
                openModal("/certificate_image/certificate_udemy.webp")
              }
            >
              <StyledCertificateImage
                src="/certificate_image/certificate_udemy.webp"
                alt="Certificate"
                fill
                sizes="500px"
                priority
              />
            </StyledImageContainer>
          </StyledCertificateContainer>
        </StyledMainContainer>
      </StyledMain>

      {isModalOpen && (
        <StyledModalOverlay>
          <StyledModalImageContainer>
            <StyledCloseButton
              onClick={closeModal}
              aria-label="Close the modal window"
            >
              &times;
            </StyledCloseButton>
            <StyledModalImage
              src={selectedImage}
              alt="Certificate in enlarged form"
              fill
              sizes="800px"
            />
          </StyledModalImageContainer>
        </StyledModalOverlay>
      )}
    </>
  );
}
