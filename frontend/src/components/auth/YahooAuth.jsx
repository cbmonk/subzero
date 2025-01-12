import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Mail, Loader } from 'lucide-react';
import { theme } from '../../theme';

const AuthContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const AuthButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #5F01D1;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: ${theme.transitions.default};
  box-shadow: 0 2px 4px rgba(95, 1, 209, 0.1);

  &:hover {
    background: #4a01a3;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const YahooAuth = ({ onSuccess, onError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      // Mock failed authentication for testing error states
      await new Promise((resolve, reject) => 
        setTimeout(() => reject(new Error('Authentication failed')), 1500)
      );
      onSuccess({ provider: 'yahoo', email: 'user@yahoo.com' });
    } catch (error) {
      onError('Yahoo authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleAuth}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingSpinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader size={20} />
          </LoadingSpinner>
        ) : (
          <>
            <Mail size={20} />
            Connect Yahoo
          </>
        )}
      </AuthButton>
    </AuthContainer>
  );
};

export default YahooAuth; 