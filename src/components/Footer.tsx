"use client";

import styled from 'styled-components';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000000; // Adjust based on your website's color scheme
  color: #f5f5f5;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: left;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Section = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    border-bottom: 2px solid #FE7443; // Accent color for section headers
    padding-bottom: 10px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const QuickLinks = styled.div`
  a {
    display: block;
    color: #f5f5f5;
    text-decoration: none;
    margin: 10px 0;
    transition: color 0.3s ease;

    &:hover {
      color: #FE7443; // Change color on hover
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;
`;

const IconLink = styled.a`
  font-size: 2rem;
  transition: transform 0.3s ease, border 0.3s ease;
  color: ${(props) =>
    props['aria-label'] === 'Facebook' ? '#1877F2' :
    props['aria-label'] === 'YouTube' ? '#FF0000' :
    props['aria-label'] === 'LinkedIn' ? '#0077B5' :
    props['aria-label'] === 'Instagram' ? '#E1306C' : '#f5f5f5'};
  border: 2px solid transparent;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    border-color: #FE7443;
    transform: scale(1.3);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <h3>Contact Us</h3>
        <ContactInfo>
          <p>Contact Number: (123) 456-7890</p>
          <p>Email: <Link href="mailto:contact@firmos.ai">contact@firmos.ai</Link></p>
          <p>Website: <Link href="https://firmos.ai" legacyBehavior>firmos.ai</Link> | <Link href="https://firmos.ai/demo" legacyBehavior>firmos.ai/demo</Link></p>
        </ContactInfo>
      </Section>
      <Section>
        <h3>Quick Links</h3>
        <QuickLinks>
          <Link href="#about">About Us</Link>
          <Link href="#products">Services</Link>
          <Link href="#">Blog</Link>
          <Link href="mailto:contact@firmos.ai">Contact</Link>
        </QuickLinks>
      </Section>
      <Section>
        <h3>Follow Us</h3>
        <SocialLinks>
          <IconLink href="https://www.facebook.com/FirmOSApp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </IconLink>
          <IconLink href="https://www.linkedin.com/company/firmos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://www.instagram.com/firmos.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://www.youtube.com/@Firm-OS" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </IconLink>
        </SocialLinks>
      </Section>
    </FooterContainer>
  );
};

export default Footer;

/*
To use this component, simply import and add <Footer /> in your homepage or desired page.
*/