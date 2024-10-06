import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  StyledHeader,
  StyledNavHeader,
  StyledButtonMenu,
  StyledNavItems,
  StyledNavItem,
  StyledNavButton,
  StyledSocialItems,
  StyledSocialItem,
  StyledSocialLink,
  StyledSocialImage,
} from "./StyledHeader";
import { StyledMainContainer } from "../StyledIndex";

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1pWFnzSbYqtE1Weo/?mibextid=LQQJ4d",
    alt: "Facebook",
    src: "/logos/facebook_logo.webp",
  },
  {
    href: "https://www.instagram.com/natali_othman?igsh=M2l2NmxpZzRwNDFk&utm_source=qr",
    alt: "Instagram",
    src: "/logos/instagram_logo.webp",
  },
  {
    href: "https://www.linkedin.com/in/nataliia-osman-1a48152b9/",
    alt: "LinkedIn",
    src: "/logos/linkedin-logo.webp",
  },
];

export default function Header({
  isBack,
  handleShowText,
  pageCertificate,
  projectsPage,
  isBackProject,
}) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNavigation = (path) => {
    if (path) {
      router.push(path).then(() => handleShowText());
    } else {
      handleShowText();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledMainContainer>
        <StyledNavHeader>
          {isMobile && (
            <StyledButtonMenu onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? "Close" : "Menu"}
            </StyledButtonMenu>
          )}

          {isMobile && isMenuOpen && (
            <StyledNavItems id="burger">
              <StyledNavItem>
                <StyledNavButton
                  onClick={() =>
                    handleNavigation(
                      pageCertificate || projectsPage ? "/" : undefined
                    )
                  }
                  type="button"
                  aria-label="About me"
                >
                  About me
                </StyledNavButton>
              </StyledNavItem>

              <StyledNavItem>
                <StyledNavButton
                  onClick={() =>
                    router.push(isBackProject ? "/" : "/projectsPage")
                  }
                  type="button"
                  aria-label={isBackProject ? "Back" : "My projects"}
                >
                  {isBackProject ? "Back" : "My projects"}
                </StyledNavButton>
              </StyledNavItem>

              <StyledNavItem>
                <StyledNavButton
                  onClick={() =>
                    router.push(isBack ? "/" : "/certificatesPage")
                  }
                  type="button"
                  aria-label={isBack ? "Back" : "Certificates"}
                >
                  {isBack ? "Back" : "Certificates"}
                </StyledNavButton>
              </StyledNavItem>
            </StyledNavItems>
          )}

          {!isMobile && (
            <StyledNavItems id="burger">
              <StyledNavItem>
                <StyledNavButton
                  onClick={() =>
                    handleNavigation(
                      pageCertificate || projectsPage ? "/" : undefined
                    )
                  }
                  type="button"
                  aria-label="About me"
                >
                  About me
                </StyledNavButton>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavButton
                  onClick={() =>
                    router.push(isBackProject ? "/" : "/projectsPage")
                  }
                  type="button"
                  aria-label={isBackProject ? "Back" : "My projects"}
                >
                  {isBackProject ? "Back" : "My projects"}
                </StyledNavButton>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavButton
                  onClick={() =>
                    router.push(isBack ? "/" : "/certificatesPage")
                  }
                  type="button"
                  aria-label={isBack ? "Back" : "Certificates"}
                >
                  {isBack ? "Back" : "Certificates"}
                </StyledNavButton>
              </StyledNavItem>
            </StyledNavItems>
          )}

          <StyledSocialItems>
            {socialLinks.map(({ href, alt, src }) => (
              <StyledSocialItem key={alt}>
                <StyledSocialLink href={href} target="_blank" aria-label={alt}>
                  <StyledSocialImage src={src} alt={alt} fill sizes="50px" />
                </StyledSocialLink>
              </StyledSocialItem>
            ))}
          </StyledSocialItems>
        </StyledNavHeader>
      </StyledMainContainer>
    </StyledHeader>
  );
}
