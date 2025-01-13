import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { X, Star } from 'lucide-react';

const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  z-index: 9999;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  border-radius: 0.5rem;
  
  &:hover {
    background: #f3f4f6;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1F2937;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StarButton = styled(motion.button)`
  color: ${props => props.filled ? '#FCD34D' : '#E5E7EB'};
  padding: 0.25rem;
  
  &:hover {
    color: #FBBF24;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  resize: none;
  font-family: inherit;
  font-size: 0.875rem;
  color: #1F2937;

  &:focus {
    outline: none;
    border-color: #2563EB;
    ring: 2px solid rgba(37, 99, 235, 0.2);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #2563EB;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background: #1D4ED8;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!rating) return;
    
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Modal
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <X size={18} />
            </CloseButton>
            <Title>Share your feedback</Title>
            
            <StarContainer>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarButton
                  key={star}
                  filled={star <= rating}
                  onClick={() => setRating(star)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Star 
                    size={28} 
                    fill={star <= rating ? 'currentColor' : 'none'} 
                  />
                </StarButton>
              ))}
            </StarContainer>

            <TextArea
              placeholder="Tell us what you think about SubZero..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <SubmitButton
              onClick={handleSubmit}
              disabled={!rating || isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </SubmitButton>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal; 