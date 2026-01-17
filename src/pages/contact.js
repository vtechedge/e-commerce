import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/common/ToastContext";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background.primary};
`;

const HeroSection = styled.section`
  background: ${props => props.theme.gradients.hero};
  color: ${props => props.theme.background.card};
  padding: 4rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormCard = styled.div`
  background: ${props => props.theme.background.card};
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormDescription = styled.p`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${props => props.theme.text.primary};
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.875rem;
  border: 2px solid ${props => props.theme.border.light};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(30, 56, 136, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.text.muted};
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem;
  border: 2px solid ${props => props.theme.border.light};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(30, 56, 136, 0.1);
  }

  &::placeholder {
    color: ${props => props.theme.text.muted};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-blue);
  color: ${props => props.theme.background.card};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: ${props => props.theme.border.medium};
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  background: ${props => props.theme.background.card};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text.primary};
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;

  svg {
    color: var(--primary-blue);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-weight: 600;
  color: ${props => props.theme.text.primary};
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`;

const InfoText = styled.div`
  color: ${props => props.theme.text.secondary};
  line-height: 1.6;
  
  a {
    color: var(--primary-blue);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MapContainer = styled.div`
  background: ${props => props.theme.background.card};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  
  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 8px;
  }
`;

function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
      setSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <PageContainer>
      <Head>
        <title>Contact Us - VtechSecure</title>
        <meta name="description" content="Get in touch with VtechSecure for all your IT solution needs" />
      </Head>

      <HeroSection>
        <Container>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroSubtitle>
            Have a question or need assistance? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <Grid>
            <FormCard>
              <FormTitle>Send us a Message</FormTitle>
              <FormDescription>
                Fill out the form below and our team will respond within 24 hours.
              </FormDescription>

              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </SubmitButton>
              </Form>
            </FormCard>

            <ContactInfo>
              <InfoCard>
                <InfoTitle>Contact Information</InfoTitle>

                <InfoItem>
                  <Phone size={24} />
                  <InfoContent>
                    <InfoLabel>Phone</InfoLabel>
                    <InfoText>
                      <a href="tel:+16478640847">+1 647-864-0847</a>
                    </InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <Mail size={24} />
                  <InfoContent>
                    <InfoLabel>Email</InfoLabel>
                    <InfoText>
                      <a href="mailto:support@vtechsecure.com">support@vtechsecure.com</a>
                    </InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <MapPin size={24} />
                  <InfoContent>
                    <InfoLabel>Address</InfoLabel>
                    <InfoText>
                      78 Braemar Dr Unit#1209<br />
                      Brampton, ON L6T 2M2<br />
                      Canada
                    </InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <Clock size={24} />
                  <InfoContent>
                    <InfoLabel>Business Hours</InfoLabel>
                    <InfoText>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </InfoText>
                  </InfoContent>
                </InfoItem>
              </InfoCard>

              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.6289347!2d-79.7513!3d43.7315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzUzLjQiTiA3OcKwNDUnMDQuNyJX!5e0!3m2!1sen!2sca!4v1234567890"
                  title="VtechSecure Office Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapContainer>
            </ContactInfo>
          </Grid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
}

export default Contact;
