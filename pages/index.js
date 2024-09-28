import Header from "@/components/Header/Header";
import GlobalStyle from "@/styles";
import {
  StyledMain,
  StyledMainContainer,
  StyledTitle,
  StyledText,
  StyledTextContainer,
  StyledCloseButton,
  StyledTextAboutMe,
  StyledSpan,
} from "@/components/StyledIndex";

export default function HomePage({
  showAboutMe,
  setShowAboutMe,
  handleShowText,
  pageMain,
}) {
  const backgroundImage = pageMain
    ? "/background/blue_background.webp"
    : "/background/blue_flowers.webp";

  function closeModal() {
    setShowAboutMe(false);

    setTimeout(() => {
      const backTop = document.getElementById("backTop");
      if (backTop) {
        const backTopPosition =
          backTop.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: backTopPosition - 20,
          behavior: "smooth",
        });
      }
    }, 0);
  }

  return (
    <>
      <GlobalStyle $pageMain={pageMain} $backgroundImage={backgroundImage} />
      <Header isBack={false} handleShowText={handleShowText} />
      <StyledMain>
        <StyledMainContainer>
          <StyledTitle>
            Hello, <br /> I am Nataliia Osman!
          </StyledTitle>
          <StyledText>Welcome to my page!!!</StyledText>
          {showAboutMe && (
            <StyledTextContainer>
              <StyledCloseButton
                onClick={closeModal}
                aria-label="Close the modal window"
              >
                &times;
              </StyledCloseButton>
              <StyledTextAboutMe id={"aboutMe"}>
                My name is <StyledSpan>Nataliia Osman,</StyledSpan> a web
                developer from Ukraine, currently residing in Germany. As a
                passionate learner, I focus on mastering web development with a
                specialization in creating modern, interactive websites and web
                applications using technologies such as{" "}
                <StyledSpan>
                  HTML, CSS, SASS, JavaScript, React, and Next.js.
                </StyledSpan>{" "}
                Combining aesthetics with functionality, I strive to offer the
                best user experience. Constantly honing my skills, I stay
                updated with the latest trends in web development and apply new
                knowledge to every project. I look forward to collaborating on
                exciting new ventures!
              </StyledTextAboutMe>
            </StyledTextContainer>
          )}
        </StyledMainContainer>
      </StyledMain>
    </>
  );
}
