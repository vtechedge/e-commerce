import React, { memo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Network,
  Server,
  Shield,
  Database,
  Cloud,
  Wrench,
  Monitor,
  PhoneCall,
  Smartphone,
  Code,
  Globe,
  Camera,
  BarChart2,
  GitBranch,
  HeadphonesIcon,
  Lock,
  HardDrive,
  ArrowRight,
} from "lucide-react";
import {
  PageContainer,
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  Container,
  Section,
  SectionTitle,
  SectionSubtitle,
  ServiceGrid,
  ServiceCard,
  ServiceIconWrapper,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
  LearnMoreButton,
  CTASection,
  CTATitle,
  CTADescription,
  CTAButton,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel,
} from "@/styles/ServicesStyles";

// Icon mapping
const iconMap = {
  HeadphonesIcon: HeadphonesIcon,
  Network: Network,
  Server: Server,
  Shield: Shield,
  HardDrive: HardDrive,
  Cloud: Cloud,
  Wrench: Wrench,
  Monitor: Monitor,
  Database: Database,
  Lock: Lock,
  PhoneCall: PhoneCall,
  Smartphone: Smartphone,
  Code: Code,
  Globe: Globe,
  Camera: Camera,
  BarChart2: BarChart2,
  GitBranch: GitBranch,
};

// Memoized Service Card Component
const ServiceCardComponent = memo(({ service, router }) => {
  const IconComponent = iconMap[service.iconName];

  const handleLearnMore = () => {
    router.push('/coming-soon');
  };

  return (
    <ServiceCard>
      <ServiceIconWrapper>
        {IconComponent && <IconComponent size={30} />}
      </ServiceIconWrapper>
      <ServiceTitle>{service.title}</ServiceTitle>
      <ServiceDescription>{service.description}</ServiceDescription>
      {service.features && (
        <ServiceFeatures>
          {service.features.map((feature, idx) => (
            <ServiceFeature key={idx}>{feature}</ServiceFeature>
          ))}
        </ServiceFeatures>
      )}
      <LearnMoreButton onClick={handleLearnMore}>
        Learn More
        <ArrowRight size={16} />
      </LearnMoreButton>
    </ServiceCard>
  );
});
ServiceCardComponent.displayName = "ServiceCardComponent";

const Services = ({ services, stats }) => {
  const router = useRouter();

  return (
    <PageContainer>
      <Head>
        <title>Our Services - Vtechsecure</title>
        <meta
          name="description"
          content="Comprehensive IT solutions including network management, cybersecurity, cloud services, and more. Professional IT support for your business."
        />
      </Head>

      <HeroSection>
        <HeroContainer>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>What We Offer</SectionTitle>
          <SectionSubtitle>
            From infrastructure management to cybersecurity, we provide end-to-end IT services that keep your business running smoothly and securely.
          </SectionSubtitle>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCardComponent key={index} service={service} router={router} />
            ))}
          </ServiceGrid>
        </Container>
      </Section>

      <Section bgColor="#f8f9fa">
        <Container>
          <SectionTitle>Why Choose Our Services</SectionTitle>
          <SectionSubtitle>
            Trusted by businesses across industries for reliable, secure, and scalable IT solutions
          </SectionSubtitle>
          <StatsSection>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <CTATitle>Ready to Get Started?</CTATitle>
            <CTADescription>
              Contact us today to discuss how our services can help your business grow and succeed in the digital age.
            </CTADescription>
            <CTAButton onClick={() => router.push("/contact")}>
              Get in Touch
            </CTAButton>
          </CTASection>
        </Container>
      </Section>
    </PageContainer>
  );
};

// Static Site Generation
export async function getStaticProps() {
  const services = [
    {
      iconName: "HeadphonesIcon",
      title: "IT Support Services",
      description: "24/7 helpdesk support and technical assistance for your team",
      features: ["Remote & On-site Support", "24/7 Availability", "Rapid Response"],
    },
    {
      iconName: "Network",
      title: "Network Management",
      description: "Complete network design, implementation, and monitoring",
      features: ["LAN/WAN Setup", "Network Optimization", "Performance Monitoring"],
    },
    {
      iconName: "Server",
      title: "Server Management",
      description: "Professional server configuration, maintenance, and monitoring",
      features: ["Server Setup", "Regular Maintenance", "Performance Tuning"],
    },
    {
      iconName: "Shield",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      features: ["Threat Monitoring", "Security Audits", "Compliance Support"],
    },
    {
      iconName: "HardDrive",
      title: "Backup & Disaster Recovery",
      description: "Reliable backup solutions and business continuity planning",
      features: ["Automated Backups", "Disaster Recovery Plans", "Data Restoration"],
    },
    {
      iconName: "Cloud",
      title: "Cloud Services",
      description: "Cloud migration, management, and optimization services",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization"],
    },
    {
      iconName: "Wrench",
      title: "Hardware & Software Maintenance",
      description: "Regular maintenance and updates for all your IT assets",
      features: ["Patch Management", "Hardware Repairs", "Software Updates"],
    },
    {
      iconName: "Monitor",
      title: "Remote Monitoring (RMM)",
      description: "Proactive monitoring and management of your IT infrastructure",
      features: ["Real-time Monitoring", "Automated Alerts", "Preventive Maintenance"],
    },
    {
      iconName: "Database",
      title: "IT Consulting",
      description: "Strategic IT planning and technology roadmap development",
      features: ["Technology Assessment", "Strategic Planning", "Implementation Support"],
    },
    {
      iconName: "Lock",
      title: "Compliance & Regulatory",
      description: "Ensure your business meets industry compliance standards",
      features: ["HIPAA Compliance", "Audit Support", "Policy Development"],
    },
    {
      iconName: "PhoneCall",
      title: "Unified Communications",
      description: "VoIP, video conferencing, and collaboration tools",
      features: ["VoIP Phone Systems", "Video Conferencing", "Team Collaboration"],
    },
    {
      iconName: "Smartphone",
      title: "Mobile Device Management",
      description: "Secure and manage mobile devices across your organization",
      features: ["Device Enrollment", "Security Enforcement", "App Management"],
    },
    {
      iconName: "Code",
      title: "Software Development",
      description: "Custom application development and integration services",
      features: ["Custom Applications", "API Integration", "Legacy Modernization"],
    },
    {
      iconName: "Globe",
      title: "Website Management",
      description: "Professional website development, hosting, and maintenance",
      features: ["Website Design", "Hosting Services", "Security Monitoring"],
    },
    {
      iconName: "Camera",
      title: "Surveillance Systems",
      description: "CCTV installation and remote monitoring solutions",
      features: ["CCTV Installation", "IP Camera Setup", "Remote Monitoring"],
    },
    {
      iconName: "BarChart2",
      title: "Data Analytics",
      description: "Business intelligence and data-driven insights",
      features: ["Data Warehousing", "Custom Dashboards", "Predictive Analytics"],
    },
    {
      iconName: "GitBranch",
      title: "DevOps Support",
      description: "CI/CD pipeline setup and automation services",
      features: ["CI/CD Pipelines", "Automation", "Infrastructure as Code"],
    },
  ];

  const stats = [
    { number: "12+", label: "Years of Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ];

  return {
    props: {
      services,
      stats,
    },
    revalidate: 86400,
  };
}

export default memo(Services);
