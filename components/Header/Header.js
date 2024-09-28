import {
  StyledHeader,
  StyledNavHeader,
  StyledNavItems,
  StyledNavItem,
  StyledNavLink,
  StyledSocialItems,
  StyledSocialItem,
  StyledSocialLink,
  StyledSocialImage,
} from "./StyledHeader";

export default function Header({ isBack }) {
  return (
    <StyledHeader>
      <StyledNavHeader>
        <StyledNavItems>
          <StyledNavItem>
            <StyledNavLink href="#">About me</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">My projects</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            {isBack ? (
              <StyledNavLink href="/">Back</StyledNavLink>
            ) : (
              <StyledNavLink href="/pageCertificates/pageCertificates">
                Certificates
              </StyledNavLink>
            )}
          </StyledNavItem>
        </StyledNavItems>

        <StyledSocialItems>
          <StyledSocialItem>
            <StyledSocialLink href="https://www.facebook.com/share/1pWFnzSbYqtE1Weo/?mibextid=LQQJ4d">
              <StyledSocialImage
                src="/images/facebook_logo.webp"
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
                src="/images/instagram_logo.webp"
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
                src="/images/linkedin-logo.webp"
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
