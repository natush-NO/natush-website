import {
  StyledHeader,
  StyledNavNeader,
  StyledNavItems,
  StyledNavItem,
  StyledNavLink,
  StyledSocialItems,
  StyledSocialItem,
  StyledSocialLink,
  StyledSocialImage,
} from "./StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavNeader>
        <StyledNavItems>
          <StyledNavItem>
            <StyledNavLink href="#">About me</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">Knowledge</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledSocialItems>
              <StyledSocialItem>
                <StyledSocialLink href="#" target="_blank">
                  <StyledSocialImage
                    src="/images/facebook_logo.webp"
                    alt="Facebook"
                    fill
                    sizes="30px"
                  />
                </StyledSocialLink>
              </StyledSocialItem>
              <StyledSocialItem>
                <StyledSocialLink href="instagram_icon.webp" target="_blank">
                  <StyledSocialImage
                    src="/images/instagram_logo.webp"
                    alt="Instagram"
                    fill
                    sizes="30px"
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
                    sizes="30px"
                  />
                </StyledSocialLink>
              </StyledSocialItem>
            </StyledSocialItems>
          </StyledNavItem>
        </StyledNavItems>
      </StyledNavNeader>
    </StyledHeader>
  );
}
