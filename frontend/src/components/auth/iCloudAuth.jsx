import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AuthContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ICloudAuth = ({ onSuccess, onError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    setIsLoading(true);
    try {
      // Mock successful authentication
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess({ provider: 'icloud', email: 'user@icloud.com' });
    } catch (error) {
      onError('iCloud authentication failed');
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
        {isLoading ? 'Authenticating...' : 'Connect iCloud'}
      </motion.button>
    </AuthContainer>
  );
};

export default ICloudAuth; 