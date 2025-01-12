import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const AuthContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ErrorBanner = styled(motion.div)`
  background: ${theme.colors.error}20;
  color: ${theme.colors.error};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const GmailAuth = ({ onSuccess, onError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      // Mock successful authentication
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess({ provider: 'gmail', email: 'user@gmail.com' });
    } catch (error) {
      onError('Gmail authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAuth}
        disabled={isLoading}
      >
        {isLoading ? 'Authenticating...' : 'Connect Gmail'}
      </motion.button>
    </AuthContainer>
  );
};

export default GmailAuth; 