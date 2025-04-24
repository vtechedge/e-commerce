import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Geist } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
})

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 4rem 2rem;
  font-family: ${geist.style.fontFamily};
`

const FooterContent = styled.div`
  /* max-width: 1200px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const FooterLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink href="/about">Our Story</FooterLink>
          <FooterLink href="/careers">Careers</FooterLink>
          <FooterLink href="/press">Press</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Customer Service</FooterTitle>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="/shipping">Shipping Policy</FooterLink>
          <FooterLink href="/returns">Returns & Exchanges</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Shop</FooterTitle>
          <FooterLink href="/products">All Products</FooterLink>
          <FooterLink href="/new-arrivals">New Arrivals</FooterLink>
          <FooterLink href="/sale">Sale</FooterLink>
          <FooterLink href="/gift-cards">Gift Cards</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} Your Shop Name. All rights reserved.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer