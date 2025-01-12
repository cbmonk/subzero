import styled from '@emotion/styled';
import { theme } from '../../theme';

const FooterContainer = styled.footer`
  background: white;
  border-top: 1px solid rgba(229, 231, 235, 0.5);
  padding: 1.5rem;
  text-align: center;
`;

const FooterText = styled.p`
  color: ${theme.colors.text};
  font-size: 0.875rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Email Subscription Manager. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer; 