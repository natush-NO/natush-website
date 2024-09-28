import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GlobalStyle from "@/styles";
import Header from "@/components/Header/Header";
import {
  StyledModalOverlay,
  StyledModalImageContainer,
  StyledCloseButton,
  StyledModalImage,
  StyledMain,
  StyledMainContainer,
  StyledCertificateContainer,
  StyledImageContainer,
  StyledCertificateImage,
} from "./StyledpageCertificate";

export default function Certificates({
  backgroundCertificata,
  handleShowText,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

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
    router.push("/pageCertificates/pageCertificates");
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
      <Header
        isBack={true}
        pageCertificate={true}
        handleShowText={handleShowText}
      />
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
