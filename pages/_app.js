import GlobalStyle from "@/styles";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    if (showAboutMe) {
      const aboutMeElement = document.getElementById("aboutMe");
      if (aboutMeElement) {
        aboutMeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showAboutMe]);

  function handleShowText() {
    setShowAboutMe(true);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        showAboutMe={showAboutMe}
        setShowAboutMe={setShowAboutMe}
        handleShowText={handleShowText}
      />
    </>
  );
}
