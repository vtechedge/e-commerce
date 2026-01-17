import React from 'react';
import styled from 'styled-components';
import { X, Mail, Globe } from 'lucide-react';

const EmailSubscriptionModal = ({ isOpen, onClose, email }) => {
  if (!isOpen) return null;

  const handleEmailOption = (option) => {
    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`I would like to subscribe to your newsletter with the email: ${email}`);
    const mailtoLink = `mailto:info@vtechsecure.com?subject=${subject}&body=${body}`;

    switch (option) {
      case 'gmail':
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@vtechsecure.com&su=${subject}&body=${body}`, '_blank');
        break;
      case 'outlook':
        window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=info@vtechsecure.com&subject=${subject}&body=${body}`, '_blank');
        break;
      case 'default':
        window.location.href = mailtoLink;
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Choose Email Service</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <EmailInfo>
            <Mail size={20} />
            <EmailText>{email}</EmailText>
          </EmailInfo>
          <Description>Select how you'd like to send your subscription request:</Description>

          <OptionsList>
            <OptionButton onClick={() => handleEmailOption('gmail')}>
              <OptionIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.366l8.073-5.873C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                </svg>
              </OptionIcon>
              <OptionContent>
                <OptionTitle>Gmail</OptionTitle>
                <OptionSubtitle>Open in browser</OptionSubtitle>
              </OptionContent>
            </OptionButton>

            <OptionButton onClick={() => handleEmailOption('outlook')}>
              <OptionIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.88 12.04q0 .45.21.77.2.32.53.51.32.19.75.19.43 0 .76-.19.32-.19.53-.51.2-.32.2-.77t-.2-.77q-.2-.32-.53-.51-.32-.19-.76-.19t-.75.19q-.32.19-.53.51-.21.32-.21.77zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5q.28 0 .48.18.2.18.3.45l.38 1.26h13.09q.41 0 .7.3.3.29.3.7v3.09q.44.02.76.34.33.32.33.78zm-3 .62V9.31H8.28l-.34-1.27H1.59v8.55h5.88v-.01h.01c.45-.01.76-.33.76-.78v-.77h6.26q.39 0 .67-.27.27-.27.27-.66V11zm-.3 5.94q.23-.23.23-.53 0-.31-.23-.53-.23-.23-.54-.23-.3 0-.53.23l-.42.42v-2.99q0-.15-.1-.25-.11-.1-.26-.1h-.6q-.15 0-.26.1-.1.1-.1.25v2.99l-.42-.42q-.23-.23-.53-.23-.31 0-.54.23-.23.22-.23.53 0 .3.23.53l1.5 1.49q.23.23.53.23.31 0 .54-.23z" fill="#0078D4"/>
                </svg>
              </OptionIcon>
              <OptionContent>
                <OptionTitle>Outlook</OptionTitle>
                <OptionSubtitle>Open in browser</OptionSubtitle>
              </OptionContent>
            </OptionButton>

            <OptionButton onClick={() => handleEmailOption('default')}>
              <OptionIcon>
                <Mail size={28} color="#1e3888" />
              </OptionIcon>
              <OptionContent>
                <OptionTitle>Default Email App</OptionTitle>
                <OptionSubtitle>Use system default</OptionSubtitle>
              </OptionContent>
            </OptionButton>
          </OptionsList>
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: ${props => props.theme.background.card};
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  border: 1px solid ${props => props.theme.border.light};

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid ${props => props.theme.border.light};
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.text.primary};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.text.secondary};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.background.secondary};
    color: ${props => props.theme.text.primary};
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const EmailInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${props => props.theme.background.secondary};
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.border.light};

  svg {
    color: ${props => props.theme.primary};
    flex-shrink: 0;
  }
`;

const EmailText = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.text.primary};
  font-weight: 600;
  word-break: break-all;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.text.secondary};
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.background.secondary};
  border: 2px solid ${props => props.theme.border.light};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.theme.background.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const OptionIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background.card};
  border-radius: 10px;
  flex-shrink: 0;
  border: 1px solid ${props => props.theme.border.light};

  svg {
    width: 28px;
    height: 28px;
  }
`;

const OptionContent = styled.div`
  text-align: left;
  flex: 1;
`;

const OptionTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.25rem;
`;

const OptionSubtitle = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.text.secondary};
`;

const ModalFooter = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${props => props.theme.border.light};
`;

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid ${props => props.theme.border.light};
  border-radius: 8px;
  color: ${props => props.theme.text.primary};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.background.secondary};
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

export default EmailSubscriptionModal;
