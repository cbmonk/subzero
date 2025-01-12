import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ScanContainer = styled.div`
  padding: 1rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ProgressCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 1.5rem auto;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    margin: 2rem auto;
  }
`;

const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  font-weight: bold;
  color: #1D4ED8;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ScanningText = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1F2937;
`;

const SubText = styled.div`
  color: #666;
  font-size: 0.875rem;
`;

const CancelButton = styled(motion.button)`
  background: #1D4ED8;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem auto 0;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ScanPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/subscriptions');
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <ScanContainer>
      <ProgressCircle>
        <svg width="100%" height="100%" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="12"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="12"
            strokeDasharray={`${2 * Math.PI * 54}`}
            strokeDashoffset={`${2 * Math.PI * 54 * (1 - progress / 100)}`}
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dashoffset 0.1s' }}
          />
        </svg>
        <ProgressText>{progress}%</ProgressText>
      </ProgressCircle>

      <ScanningText>Scanning your emails...</ScanningText>
      <SubText>This may take a few minutes</SubText>
      <CancelButton
        onClick={() => navigate('/')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowLeft size={18} />
        Cancel Scan
      </CancelButton>
    </ScanContainer>
  );
};

export default ScanPage; 