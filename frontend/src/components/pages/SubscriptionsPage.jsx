import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Home as HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubscriptionList from '../subscription/SubscriptionList';

const PageContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 0;
  background: linear-gradient(to bottom, rgba(249, 250, 251, 1) 0%, rgba(249, 250, 251, 1) 80%, rgba(249, 250, 251, 0) 100%);
  margin: -1rem 0 1.5rem;

  @media (min-width: 768px) {
    padding: 1.5rem 0;
    margin: -2rem 0 1.5rem;
  }
`;

const HomeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  background: white;
  border: 1px solid #E5E7EB;
  color: #1D4ED8;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ContentContainer = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SubscriptionsPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <StickyHeader>
        <HomeButton
          onClick={() => navigate('/')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HomeIcon size={18} />
          Back to Home
        </HomeButton>
      </StickyHeader>

      <ContentContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SubscriptionList />
      </ContentContainer>
    </PageContainer>
  );
};

export default SubscriptionsPage; 