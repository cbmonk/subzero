import { useState } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import FeedbackModal from '../feedback/FeedbackModal';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FeedbackButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: white;
  border: 1px solid #E5E7EB;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Layout = ({ children }) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <FeedbackButton onClick={() => setIsFeedbackOpen(true)}>
        Share feedback
      </FeedbackButton>
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </LayoutContainer>
  );
};

export default Layout; 