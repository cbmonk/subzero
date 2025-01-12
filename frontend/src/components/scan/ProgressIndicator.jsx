import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const ProgressContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
  space-y: 2rem;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  height: 0.5rem;
  background: ${theme.colors.secondary};
  border-radius: 1rem;
  overflow: hidden;
  margin: 2rem 0;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent});
  border-radius: 1rem;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  position: absolute;
  right: -1rem;
  top: -1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.text};
`;

const StatusText = styled(motion.p)`
  color: ${theme.colors.text};
  font-size: 1rem;
  margin-top: 1.5rem;
`;

const CancelButton = styled(motion.button)`
  color: ${theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${theme.colors.secondary};
  margin-top: 2rem;
  transition: ${theme.transitions.default};

  &:hover {
    background: #E5E7EB;
  }
`;

const ProgressIndicator = ({ progress, onCancel }) => {
  return (
    <ProgressContainer>
      <div className="relative pt-1">
        <ProgressBarContainer>
          <ProgressBar
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
          <ProgressText>{progress}%</ProgressText>
        </ProgressBarContainer>
      </div>

      <StatusText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Analyzing your email patterns...
      </StatusText>

      <CancelButton
        onClick={onCancel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Cancel Scan
      </CancelButton>
    </ProgressContainer>
  );
};

export default ProgressIndicator;