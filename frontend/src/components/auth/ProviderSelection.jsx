import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { theme } from '../../theme';

const ProvidersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const ProviderCard = styled(motion.button)`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  overflow: hidden;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => `linear-gradient(to bottom right, transparent, ${props.accentColor}10)`};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  background: ${theme.colors.secondary};
  padding: 0.75rem;
  border-radius: 50%;
  margin: 0 auto 1rem;
  transition: background 0.3s;

  ${ProviderCard}:hover & {
    background: white;
  }
`;

const ProviderName = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${theme.colors.text};
`;

const AccentBar = styled.div`
  width: 100%;
  height: 0.25rem;
  background: ${props => props.color};
  border-radius: 1rem;
  margin-top: 1rem;
  transform: scaleX(0);
  transition: transform 0.3s;
  transform-origin: left;

  ${ProviderCard}:hover & {
    transform: scaleX(1);
  }
`;

const providers = [
  { 
    id: 'gmail', 
    name: 'Gmail',
    color: '#DB4437',
    accentColor: '#DB4437'
  },
  { 
    id: 'yahoo', 
    name: 'Yahoo',
    color: '#5F01D1',
    accentColor: '#5F01D1'
  },
  { 
    id: 'hotmail', 
    name: 'Outlook',
    color: '#0078D4',
    accentColor: '#0078D4'
  },
  { 
    id: 'icloud', 
    name: 'iCloud',
    color: '#999999',
    accentColor: '#999999'
  }
];

const ProviderSelection = ({ onSelect, activeProvider }) => {
  return (
    <ProvidersGrid>
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          onClick={() => onSelect(provider.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          accentColor={provider.color}
          className={activeProvider === provider.id ? 'ring-2 ring-blue-500' : ''}
        >
          <IconWrapper>
            <Mail size={32} color={provider.color} />
          </IconWrapper>
          <ProviderName>{provider.name}</ProviderName>
          <AccentBar color={provider.color} />
        </ProviderCard>
      ))}
    </ProvidersGrid>
  );
};

export default ProviderSelection;