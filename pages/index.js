import Header from "@/components/Header/Header";
import {
  StyledMain,
  StyledMainContainer,
  StyledTitleHello,
  StyledTitleWelcome,
  StyledTextArticle,
  StyledCloseButton,
  StyledTextAboutMe,
  StyledSpan,
} from "@/components/StyledIndex";

export default function HomePage({
  showAboutMe,
  setShowAboutMe,
  handleShowText,
}) {
  function closeModal() {
    setShowAboutMe(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }

  return (
    <>
      <Header isBack={false} handleShowText={handleShowText} />
      <StyledMain>
        <StyledMainContainer>
          <StyledTitleHello>Hello</StyledTitleHello>
          <StyledTitleWelcome>Welcome to my page!!!</StyledTitleWelcome>

          {showAboutMe && (
            <StyledTextArticle>
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
            </StyledTextArticle>
          )}
        </StyledMainContainer>
      </StyledMain>
    </>
  );
}
