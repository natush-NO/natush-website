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
} from "./StyledHeader";
import { StyledMainContainer } from "../StyledIndex";
<FaInstagram size={30} color="#E4405F" />;
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

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
  const [iconSize, setIconSize] = useState(50);

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
      setIconSize(window.innerWidth < 768 ? 30 : 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socialImageSvg = [
    { icon: <FaInstagram size={iconSize} />, alt: "Instagram" },
    { icon: <FaFacebook size={iconSize} />, alt: "Facebook" },
    { icon: <FaLinkedin size={iconSize} />, alt: "LinkedIn" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/natush_no", alt: "Instagram" },
    {
      href: "https://www.facebook.com/share/1pWFnzSbYqtE1Weo",
      alt: "Facebook",
    },
    { href: "https://www.linkedin.com/in/nataliia-osman", alt: "LinkedIn" },
  ];

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
            {socialLinks.map(({ href, alt }) => {
              const matchingIcon = socialImageSvg.find(
                (item) => item.alt === alt
              );
              return (
                <StyledSocialItem key={alt}>
                  <StyledSocialLink
                    href={href}
                    target="_blank"
                    aria-label={alt}
                  >
                    {matchingIcon ? matchingIcon.icon : null}
                  </StyledSocialLink>
                </StyledSocialItem>
              );
            })}
          </StyledSocialItems>
        </StyledNavHeader>
      </StyledMainContainer>
    </StyledHeader>
  );
}
