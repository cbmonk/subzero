import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { LayoutGrid, List as ListIcon, Trash2 } from 'lucide-react';
import { mockSubscriptions, categories } from '../../services/mockData';
import { theme } from '../../theme';

const ListContainer = styled.div`
  padding: 1rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 0.5rem;
  background: ${theme.colors.secondary};
  padding: 0.25rem;
  border-radius: 0.5rem;
`;

const ToggleButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  color: ${props => props.active ? 'white' : theme.colors.text};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
`;

const CategoryFilter = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #E5E7EB;
  background: white;
  font-size: 0.875rem;
  color: ${theme.colors.text};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: ${props => props.viewType === 'grid' ? 'column' : 'row'};
  align-items: ${props => props.viewType === 'grid' ? 'flex-start' : 'center'};
  justify-content: ${props => props.viewType === 'grid' ? 'flex-start' : 'space-between'};
  gap: 1rem;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 0.25rem;
`;

const CardEmail = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
`;

const CardDate = styled.p`
  font-size: 0.75rem;
  color: #9CA3AF;
`;

const UnsubscribeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #EF4444;
  font-size: 0.875rem;
  font-weight: 500;
  background: #FEF2F2;

  &:hover {
    background: #FEE2E2;
  }
`;

const SubscriptionList = () => {
  const [viewType, setViewType] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSubscriptions = selectedCategory === 'All'
    ? mockSubscriptions
    : mockSubscriptions.filter(sub => sub.category === selectedCategory);

  return (
    <ListContainer>
      <Controls>
        <ViewToggle>
          <ToggleButton
            active={viewType === 'grid'}
            onClick={() => setViewType('grid')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LayoutGrid size={18} />
            Grid
          </ToggleButton>
          <ToggleButton
            active={viewType === 'list'}
            onClick={() => setViewType('list')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ListIcon size={18} />
            List
          </ToggleButton>
        </ViewToggle>

        <CategoryFilter
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategoryFilter>
      </Controls>

      {viewType === 'grid' ? (
        <Grid>
          {filteredSubscriptions.map(sub => (
            <SubscriptionCard key={sub.id} subscription={sub} viewType={viewType} />
          ))}
        </Grid>
      ) : (
        <List>
          {filteredSubscriptions.map(sub => (
            <SubscriptionCard key={sub.id} subscription={sub} viewType={viewType} />
          ))}
        </List>
      )}
    </ListContainer>
  );
};

const SubscriptionCard = ({ subscription, viewType }) => {
  return (
    <Card
      viewType={viewType}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent>
        <CardTitle>{subscription.name}</CardTitle>
        <CardEmail>{subscription.email}</CardEmail>
        <CardDate>Last email: {subscription.lastEmail}</CardDate>
      </CardContent>
      <UnsubscribeButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Trash2 size={16} />
        Unsubscribe
      </UnsubscribeButton>
    </Card>
  );
};

export default SubscriptionList;