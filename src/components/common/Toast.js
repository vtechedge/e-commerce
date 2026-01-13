import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

const slideIn = keyframes`
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
`;

const ToastContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border-left: 4px solid ${props => {
        switch (props.type) {
            case 'success': return 'var(--success-green)';
            case 'error': return 'var(--error-red)';
            case 'warning': return 'var(--warning-orange)';
            default: return 'var(--info-blue)';
        }
    }};
  animation: ${props => props.isClosing ? slideOut : slideIn} 0.3s ease-out;
  min-width: 320px;
  max-width: 420px;
  
  @media (max-width: 640px) {
    min-width: 280px;
    max-width: calc(100vw - 2rem);
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  color: ${props => {
        switch (props.type) {
            case 'success': return 'var(--success-green)';
            case 'error': return 'var(--error-red)';
            case 'warning': return 'var(--warning-orange)';
            default: return 'var(--info-blue)';
        }
    }};
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Message = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--dark-gray);
  line-height: 1.4;
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--medium-gray);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--dark-gray);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Toast = ({ message, type = 'info', onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300);
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle />;
            case 'error':
                return <XCircle />;
            case 'warning':
                return <AlertTriangle />;
            default:
                return <Info />;
        }
    };

    return (
        <ToastContainer type={type} isClosing={isClosing}>
            <IconWrapper type={type}>
                {getIcon()}
            </IconWrapper>
            <Content>
                <Message>{message}</Message>
            </Content>
            <CloseButton onClick={handleClose} aria-label="Close notification">
                <X />
            </CloseButton>
        </ToastContainer>
    );
};

export default Toast;
