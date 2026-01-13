import React from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const FooterContainer = styled.footer`
  background-color: var(--dark-gray);
  color: var(--white);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 2rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--white);
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--white);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-blue);
    transform: translateY(-2px);
  }
`;

const NewsletterSection = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const NewsletterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const NewsletterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  max-width: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: var(--primary-blue);
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-blue);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div``;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--white);
  }
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: var(--secondary-blue);
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Hardware", href: "/products/hardware" },
        { name: "Software", href: "/products/software" },
        { name: "Networking", href: "/products/networking" },
        { name: "Security", href: "/products/security" },
        { name: "Cloud Solutions", href: "/products/cloud" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "IT Consulting", href: "/services/consulting" },
        { name: "Implementation", href: "/services/implementation" },
        { name: "Support & Maintenance", href: "/services/support" },
        { name: "Training", href: "/services/training" },
        { name: "Managed Services", href: "/services/managed" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "/solutions/enterprise" },
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Education", href: "/solutions/education" },
        { name: "Finance", href: "/solutions/finance" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "News & Events", href: "/news" },
        { name: "Contact", href: "/contact" },
        { name: "Support", href: "/support" },
      ],
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
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

          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactInfo>
              <Phone size={16} />
              <a href="tel:+16478640847" style={{ color: 'inherit', textDecoration: 'none' }}>
                <span>+1 647-864-0847</span>
              </a>
            </ContactInfo>
            <ContactInfo>
              <Mail size={16} />
              <a href="mailto:support@vtechsecure.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                <span>support@vtechsecure.com</span>
              </a>
            </ContactInfo>
            <ContactInfo>
              <MapPin size={16} />
              <span>
                78 Braemar Dr Unit#1209
                <br />
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
          </FooterSection>
        </FooterTop>

        <NewsletterSection>
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterDescription>Subscribe to our newsletter for the latest technology insights and company updates.</NewsletterDescription>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Enter your email address" required />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

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
        <ArrowUp size={20} />
      </ScrollToTop>
    </FooterContainer>
  );
};

export default Footer;
