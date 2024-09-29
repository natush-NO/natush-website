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

export default function Header({ isBack, handleShowText, pageCertificate }) {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledNavHeader>
        <StyledNavItems>
          <StyledNavItem>
            <StyledNavButton
              onClick={() => {
                if (pageCertificate) {
                  router.push("/").then(() => handleShowText());
                } else {
                  handleShowText();
                }
              }}
              type="button"
            >
              About me
            </StyledNavButton>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavButton href="#">My projects</StyledNavButton>
          </StyledNavItem>
          <StyledNavItem>
            {isBack ? (
              <StyledNavButton onClick={() => router.push("/")}>
                Back
              </StyledNavButton>
            ) : (
              <StyledNavButton onClick={() => router.push("/certificates")}>
                Certificates
              </StyledNavButton>
            )}
          </StyledNavItem>
        </StyledNavItems>

        <StyledSocialItems>
          <StyledSocialItem>
            <StyledSocialLink
              href="https://www.facebook.com/share/1pWFnzSbYqtE1Weo/?mibextid=LQQJ4d"
              target="_blank"
            >
              <StyledSocialImage
                src="/logos/facebook_logo.webp"
                alt="Facebook"
                fill
                sizes="50px"
              />
            </StyledSocialLink>
          </StyledSocialItem>
          <StyledSocialItem>
            <StyledSocialLink
              href="https://www.instagram.com/natali_othman?igsh=M2l2NmxpZzRwNDFk&utm_source=qr"
              target="_blank"
            >
              <StyledSocialImage
                src="/logos/instagram_logo.webp"
                alt="Instagram"
                fill
                sizes="50px"
              />
            </StyledSocialLink>
          </StyledSocialItem>
          <StyledSocialItem>
            <StyledSocialLink
              href="https://www.linkedin.com/in/nataliia-osman-1a48152b9/"
              target="_blank"
            >
              <StyledSocialImage
                src="/logos/linkedin-logo.webp"
                alt="LinkedIn"
                fill
                sizes="50px"
              />
            </StyledSocialLink>
          </StyledSocialItem>
        </StyledSocialItems>
      </StyledNavHeader>
    </StyledHeader>
  );
}
