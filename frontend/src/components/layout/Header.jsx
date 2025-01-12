import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 1.5rem 1rem;
  z-index: 50;
  border-bottom: 1px solid #E5E7EB;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2563EB;

  @media (min-width: 768px) {
    font-size: 2.5rem;
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
    font-size: 1rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
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

const Header = () => {
  const location = useLocation();
  
  const getSteps = () => {
    switch (location.pathname) {
      case '/':
        return [
          { number: 1, label: 'Connect', completed: false, active: true },
          { number: 2, label: 'Analysis', completed: false, active: false },
          { number: 3, label: 'Manage', completed: false, active: false }
        ];
      case '/scan':
        return [
          { number: 1, label: 'Connect', completed: true, active: false },
          { number: 2, label: 'Analysis', completed: false, active: true },
          { number: 3, label: 'Manage', completed: false, active: false }
        ];
      case '/subscriptions':
        return [
          { number: 1, label: 'Connect', completed: true, active: false },
          { number: 2, label: 'Analysis', completed: true, active: false },
          { number: 3, label: 'Manage', completed: true, active: true }
        ];
      default:
        return [];
    }
  };

  const steps = getSteps();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>SubZero</Title>
        <Subtitle>
          Take back control of your inbox with AI-powered subscription management
        </Subtitle>

        <StepsContainer>
          {steps.map((step, index) => (
            <StepWrapper key={step.number}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <StepCircle completed={step.completed} active={step.active}>
                  {step.completed ? (
                    <Check size={16} strokeWidth={3} />
                  ) : (
                    step.number
                  )}
                </StepCircle>
                <StepLabel completed={step.completed} active={step.active}>
                  {step.label}
                </StepLabel>
              </div>
              {index < steps.length - 1 && (
                <StepConnector completed={step.completed} />
              )}
            </StepWrapper>
          ))}
        </StepsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 