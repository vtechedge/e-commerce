import React, { useState } from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send } from "lucide-react";
import { useToast } from "../components/common/ToastContext";
import EmailSubscriptionModal from "../components/common/EmailSubscriptionModal";

const FooterContainer = styled.footer`
  background: ${props => props.theme.gradients.hero};
  color: ${props => props.theme.background.card};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(45, 75, 168, 0.5), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 2rem 1.5rem;
  
  @media (max-width: 968px) {
    padding: 2rem 1.5rem 1.25rem;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  gap: 2.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.mode === "light" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"};
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const FooterSection = styled.div``;

const CompanySection = styled(FooterSection)`
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }
`;

const CompanyLogo = styled.div`
  margin-bottom: 1rem;
  
  img {
    height: 60px;
    width: auto;
    display: block;
    object-fit: contain;
  }
`;

const CompanyDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  position: relative;
  padding-bottom: 0.65rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35px;
    height: 2px;
    background: ${props => props.theme.gradients.primaryHorizontal};
  }
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.6rem;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  padding-left: 0;
  
  &:hover {
    color: ${props => props.theme.background.card};
    padding-left: 8px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.85rem;
  font-size: 0.9rem;
  line-height: 1.5;
  
  svg {
    flex-shrink: 0;
    margin-top: 0.125rem;
    color: ${props => props.theme.primaryLight};
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${props => props.theme.background.card};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.65rem;
  margin-top: 1.25rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${props => props.theme.mode === "light" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"};
  
  &:hover {
    background: ${props => props.theme.gradients.subtle};
    transform: translateY(-2px);
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(45, 75, 168, 0.3);
  }
`;

const NewsletterSection = styled.div`
  background: linear-gradient(135deg, rgba(30, 56, 136, 0.15) 0%, rgba(45, 75, 168, 0.15) 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(45, 75, 168, 0.2);
  
  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    padding: 1.75rem;
  }
`;

const NewsletterTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const NewsletterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.625rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: ${props => props.theme.background.card};
  outline: none;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    border-color: ${props => props.theme.primaryLight};
    background: rgba(255, 255, 255, 0.12);
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.gradients.subtle};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(30, 56, 136, 0.25);
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.35);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding-top: 1.25rem;
    font-size: 0.813rem;
  }
`;

const Copyright = styled.div`
  @media (max-width: 480px) {
    font-size: 0.813rem;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1rem;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem 0.75rem;
    font-size: 0.813rem;
  }
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  font-size: 0.875rem;
  
  @media (max-width: 480px) {
    font-size: 0.813rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${props => props.theme.background.card};
    transition: width 0.2s ease;
  }
  
  &:hover {
    color: ${props => props.theme.background.card};
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.813rem;
  }
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 52px;
  height: 52px;
  background: ${props => props.theme.gradients.subtle};
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 14px rgba(30, 56, 136, 0.4);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(30, 56, 136, 0.5);
  }
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 48px;
    height: 48px;
  }
`;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { success } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      return;
    }

    setSubmittedEmail(email);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEmail("");
    setSubmittedEmail("");
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Hardware", href: "/hardware" },
        { name: "Software", href: "/software" },
        { name: "Networking", href: "/products/networking" },
        { name: "Security", href: "/products/security" },
        { name: "Cloud Solutions", href: "/products/cloud" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "IT Consulting", href: "/services" },
        { name: "Implementation", href: "/services/implementation" },
        { name: "Support", href: "/services/support" },
        { name: "Training", href: "/services/training" },
        { name: "Managed Services", href: "/services/managed" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Client Stories", href: "/client-stories" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <CompanySection>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactInfo>
              <Phone size={18} />
              <a href="tel:+16478640847">+1 647-864-0847</a>
            </ContactInfo>
            <ContactInfo>
              <Mail size={18} />
              <a href="mailto:support@vtechsecure.com">support@vtechsecure.com</a>
            </ContactInfo>
            <ContactInfo>
              <MapPin size={18} />
              <span>
                78 Braemar Dr Unit#1209<br />
                Brampton, ON L6T 2M2, Canada
              </span>
            </ContactInfo>
            <SocialLinks>
              <SocialLink href="https://www.facebook.com/vtechsecure" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="https://twitter.com/vtechsecure" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/vtechsecure" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/vtechsecure" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
            </SocialLinks>
          </CompanySection>

          {footerSections.map((section) => (
            <FooterSection key={section.title}>
              <FooterTitle>{section.title}</FooterTitle>
              {section.links.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </FooterSection>
          ))}

          <NewsletterSection>
            <NewsletterTitle>Stay Updated</NewsletterTitle>
            <NewsletterDescription>
              Get the latest tech insights and company updates delivered to your inbox.
            </NewsletterDescription>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <NewsletterButton type="submit" disabled={isSubmitting}>
                <Send size={18} />
                <span>Subscribe</span>
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>© 2026 VtechSecure. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink href="/privacy">Privacy Policy</LegalLink>
            <LegalLink href="/terms">Terms of Service</LegalLink>
            <LegalLink href="/cookies">Cookie Policy</LegalLink>
            <LegalLink href="/accessibility">Accessibility</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>

      <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={22} />
      </ScrollToTop>

      <EmailSubscriptionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        email={submittedEmail}
      />
    </FooterContainer>
  );
};

export default Footer;
