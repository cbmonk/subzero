import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, AlertCircle, X, Check } from 'lucide-react';

const HomeContainer = styled.div`
  padding: 1rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const StepCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    if (props.completed) return '#22C55E';
    if (props.active) return '#2563EB';
    return '#E5E7EB';
  }};
  color: ${props => (props.completed || props.active) ? 'white' : '#666'};
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

const StepLabel = styled.span`
  color: ${props => {
    if (props.completed) return '#22C55E';
    if (props.active) return '#2563EB';
    return '#666';
  }};
  font-weight: 500;
  font-size: 0.875rem;
  white-space: nowrap;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StepConnector = styled.div`
  position: absolute;
  top: 50%;
  left: calc(2.5rem + 0.75rem);
  right: calc(2.5rem + 0.75rem);
  height: 2px;
  background: ${props => props.completed ? '#22C55E' : '#E5E7EB'};
  transform: translateY(-50%);
  z-index: 1;
  transition: all 0.3s ease;
`;

const ProvidersGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 0;
  }
`;

const ProviderCard = styled(motion.button)`
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 0.875rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.color || '#1D4ED8'};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const ErrorToast = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #FEF2F2;
  border: 1px solid #FCA5A5;
  color: #DC2626;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 6px rgba(220, 38, 38, 0.1);
  z-index: 50;
`;

const CloseButton = styled(motion.button)`
  color: #DC2626;
  padding: 0.25rem;
  border-radius: 0.25rem;
  
  &:hover {
    background: rgba(220, 38, 38, 0.1);
  }
`;

const providers = [
  { id: 'gmail', name: 'Gmail', color: '#EA4335' },
  { id: 'yahoo', name: 'Yahoo', color: '#6001D2' },
  { id: 'hotmail', name: 'Hotmail', color: '#0078D4' },
  { id: 'icloud', name: 'iCloud', color: '#999999' }
];

const Home = () => {
  const navigate = useNavigate();
  const [activeStep] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleProviderSelect = async (provider) => {
    setLoading(provider);
    
    if (provider === 'yahoo') {
      setTimeout(() => {
        setError('Failed to connect to Yahoo. Please try again later.');
        setLoading(null);
      }, 1500);
    } else {
      setTimeout(() => {
        setLoading(null);
        navigate('/scan');
      }, 1000);
    }
  };

  const steps = [
    { number: 1, label: 'Connect Email', completed: false, active: true },
    { number: 2, label: 'Analysis', completed: false, active: false },
    { number: 3, label: 'Manage', completed: false, active: false }
  ];

  return (
    <HomeContainer>
      <ProvidersGrid>
        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            color={provider.color}
            onClick={() => handleProviderSelect(provider.id)}
            disabled={loading !== null}
            whileTap={{ scale: 0.98 }}
          >
            <img src={`/${provider.id}.svg`} alt={`${provider.name} logo`} style={{ width: '50px', height: '50px' }} />
            {provider.name}
            {loading === provider.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Connecting...
              </motion.div>
            )}
          </ProviderCard>
        ))}
      </ProvidersGrid>

      <AnimatePresence>
        {error && (
          <ErrorToast
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <AlertCircle size={20} />
            <span>{error}</span>
            <CloseButton
              onClick={() => setError(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </CloseButton>
          </ErrorToast>
        )}
      </AnimatePresence>
    </HomeContainer>
  );
};

export default Home; 