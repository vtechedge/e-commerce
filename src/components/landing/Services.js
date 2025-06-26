import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.bgColor || "white"};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e3888;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: black;
`;

const CardDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`;

const services = [
  {
    title: "Managed IT Services",
    description: "Full-scope remote monitoring, RMM tools, and proactive support — ensuring uptime and security around the clock.",
    icon: "🖥",
  },
  {
    title: "Network & Infrastructure Management",
    description: "Robust LAN/WAN setups, server management, firewall and VPN solutions, and scalable infrastructure deployment (IaaS).",
    icon: "🌐",
  },
  {
    title: "Cybersecurity & Surveillance",
    description: "Real-time threat protection, antivirus and anti-ransomware tools, compliance audits, and integrated CCTV and access control.",
    icon: "🔐",
  },
  {
    title: "Cloud Services & Backup",
    description: "Cloud migration, infrastructure management (AWS, Azure, Google Cloud), backup solutions, and disaster recovery planning.",
    icon: "☁️",
  },
  {
    title: "IT Support & Maintenance",
    description: "On-demand help desk, hardware servicing, software patching, and complete IT asset lifecycle support.",
    icon: "🛠",
  },
  {
    title: "Consulting & Compliance",
    description: "Strategic IT planning, vCIO services, IT budgeting, HIPAA/GDPR/PCI DSS audit prep, and policy development.",
    icon: "📊",
  },
  {
    title: "Communications & MDM",
    description: "VoIP phone systems, collaboration tools, MDM for mobile workforce — secure, unified, and easy to manage.",
    icon: "📞",
  },
  {
    title: "Custom Development & Digital Services",
    description: "Web design, hosting, DevOps pipeline setup, CI/CD automation, and application development tailored to your goals.",
    icon: "💻",
  },
];

const Services = () => {
  return (
    <Section bgColor="#f9fafb">
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <Grid>
          {services.map((service, index) => (
            <Card key={index}>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
