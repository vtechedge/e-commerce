import React, { useState } from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: var(--light-gray);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-gray);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--medium-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const ContactCard = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: var(--medium-gray);
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-blue);
  }
`;

const ContactForm = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--dark-gray);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--border-gray);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  outline: none;

  &:focus {
    border-color: var(--primary-blue);
  }

  &::placeholder {
    color: var(--medium-gray);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--border-gray);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: var(--primary-blue);
  }

  &::placeholder {
    color: var(--medium-gray);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  color: var(--white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: var(--success-green);
  color: var(--white);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

const Touch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <ContactSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>Ready to transform your business with technology? Let's discuss your needs and find the perfect solution.</SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo>
            <ContactCard>
              <ContactIcon>
                <Phone size={24} />
              </ContactIcon>
              <ContactTitle>Call Us</ContactTitle>
              <ContactText>Speak with our technology experts</ContactText>
              <ContactLink href="tel:1-800-123-4567">1-800-123-4567</ContactLink>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <Mail size={24} />
              </ContactIcon>
              <ContactTitle>Email Us</ContactTitle>
              <ContactText>Send us a message anytime</ContactText>
              <ContactLink href="mailto:info@techsolutions.com">info@techsolutions.com</ContactLink>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <MapPin size={24} />
              </ContactIcon>
              <ContactTitle>Visit Us</ContactTitle>
              <ContactText>
                123 Business Ave, Suite 100
                <br />
                City, State 12345
              </ContactText>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <Clock size={24} />
              </ContactIcon>
              <ContactTitle>Business Hours</ContactTitle>
              <ContactText>
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
              </ContactText>
            </ContactCard>
          </ContactInfo>

          <ContactForm>
            <FormTitle>
              <MessageCircle size={24} />
              Send us a Message
            </FormTitle>

            {isSubmitted && <SuccessMessage>Thank you! Your message has been sent successfully. We'll get back to you soon.</SuccessMessage>}

            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="company">Company Name</Label>
                <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your technology needs..." required />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </SubmitButton>
            </Form>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Touch;
