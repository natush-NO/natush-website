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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModalContent = styled.div`
  width: 95vw;
  height: 80vh;
  border-radius: 5px;
  overflow: auto;
`;

const StyledModalImageContainer = styled.div`
  position: relative;
  max-width: 900px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  text-align: start;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 5px 5px 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  z-index: 1001;
`;

const StyledModalImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const StyledMain = styled.main`
  margin-top: 50px;
  min-height: 1500px;
`;

const StyledMainContainer = styled.div`
  padding: 0 15px;
  width: 100vw;
  height: 100vh;
`;

const StyledCertificateContainer = styled.div`
  padding-bottom: 50px;
`;

const StyledImageContainer = styled.div`
  width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const StyledCertificateImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function Certificates({ backgroundKnowledge }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const backgroundImage = backgroundKnowledge
    ? "/background/img_3.webp"
    : "/background/img_2.webp";

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
        $backgroundKnowledge={backgroundKnowledge}
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
                alt="сертифікат"
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
                alt="сертифікат"
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
                alt="сертифікат"
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
          <StyledModalContent>
            <StyledModalImageContainer>
              <StyledCloseButton
                onClick={closeModal}
                aria-label="Закрити модальне вікно"
              >
                &times;
              </StyledCloseButton>
              <StyledModalImage
                src={selectedImage}
                alt="сертифікат в збільшеному вигляді"
                fill
                sizes="800px"
              />
            </StyledModalImageContainer>
          </StyledModalContent>
        </StyledModalOverlay>
      )}
    </>
  );
}
