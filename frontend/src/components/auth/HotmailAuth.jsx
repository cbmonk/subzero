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
  background: #0078D4;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: ${theme.transitions.default};
  box-shadow: 0 2px 4px rgba(0, 120, 212, 0.1);

  &:hover {
    background: #006cbd;
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

const HotmailAuth = ({ onSuccess, onError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess({ provider: 'hotmail', email: 'user@outlook.com' });
    } catch (error) {
      onError('Outlook authentication failed');
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
            Connect Outlook
          </>
        )}
      </AuthButton>
    </AuthContainer>
  );
};

export default HotmailAuth; 