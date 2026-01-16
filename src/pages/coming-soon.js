import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Clock, ArrowLeft, Bell, Mail } from "lucide-react";
import { useRouter } from "next/router";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3888 0%, #06b6d4 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.95);
  padding: 4rem 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #1e3888 0%, #06b6d4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${props => props.primary ? `
    background: linear-gradient(135deg, #1e3888 0%, #06b6d4 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(30, 56, 136, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(30, 56, 136, 0.4);
    }
  ` : `
    background: white;
    color: #1e3888;
    border: 2px solid #1e3888;

    &:hover {
      background: #f8f9fb;
      transform: translateY(-2px);
    }
  `}
`;

const NotifySection = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const NotifyTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const NotifyForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.875rem 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #1e3888;
    box-shadow: 0 0 0 3px rgba(30, 56, 136, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #1e3888 0%, #06b6d4 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(30, 56, 136, 0.3);
  }
`;

const ComingSoon = () => {
    const router = useRouter();

    const handleNotify = (e) => {
        e.preventDefault();
        alert("Thank you! We'll notify you when this feature is available.");
    };

    return (
        <PageContainer>
            <Head>
                <title>Coming Soon - VTechEdge</title>
                <meta name="description" content="This feature is coming soon. Stay tuned for updates!" />
            </Head>

            <ContentWrapper>
                <IconWrapper>
                    <Clock size={60} />
                </IconWrapper>

                <Title>Coming Soon</Title>
                <Subtitle>We're working hard to bring you something amazing!</Subtitle>
                <Description>
                    This feature is currently under development. We're putting together the best experience for you.
                    Check back soon or get notified when we launch!
                </Description>

                <ButtonGroup>
                    <Button primary onClick={() => router.push('/')}>
                        <ArrowLeft size={20} />
                        Back to Home
                    </Button>
                    <Button onClick={() => router.push('/contact')}>
                        Contact Us
                    </Button>
                </ButtonGroup>

                <NotifySection>
                    <NotifyTitle>
                        <Bell size={20} />
                        Get Notified
                    </NotifyTitle>
                    <NotifyForm onSubmit={handleNotify}>
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            required
                        />
                        <SubmitButton type="submit">
                            <Mail size={18} />
                            Notify Me
                        </SubmitButton>
                    </NotifyForm>
                </NotifySection>
            </ContentWrapper>
        </PageContainer>
    );
};

export default ComingSoon;
