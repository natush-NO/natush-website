import { useRouter } from "next/router";
import {
  StyledHeader,
  StyledNavHeader,
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

  const handleNavigation = (path) => {
    if (path) {
      router.push(path).then(() => handleShowText());
    } else {
      handleShowText();
    }
  };

  return (
    <StyledHeader>
      <StyledMainContainer>
        <StyledNavHeader>
          <StyledNavItems>
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
                onClick={() => router.push(isBack ? "/" : "/certificatesPage")}
                type="button"
                aria-label={isBack ? "Back" : "Certificates"}
              >
                {isBack ? "Back" : "Certificates"}
              </StyledNavButton>
            </StyledNavItem>
          </StyledNavItems>

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
