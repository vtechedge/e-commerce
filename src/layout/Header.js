import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Search,
  User,
  ShoppingCart,
  MessageCircle,
  Mail,
  Sun,
  Moon,
  ChevronDown,
  Phone,
  Globe,
  HelpCircle,
  Network,
  Server,
  Shield,
  Database,
  Cloud,
  Wrench,
  Monitor,
  Briefcase,
  FileCheck,
  PhoneCall,
  Smartphone,
  Code,
  Globe as GlobeIcon,
  Camera,
  BarChart2,
  GitBranch,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #666;
  }

  svg {
    transition: transform 0.2s ease-out;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f1f5f2;
  min-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1001;
`;

const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  position: relative;

  &:hover {
    background-color: rgba(30, 56, 136, 0.1);
    border-radius: 4px;
  }
`;

const SubDropdown = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #f1f5f2;
  min-width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1002;
`;

const SubDropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #4a5568;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(30, 56, 136, 0.1);
    border-radius: 4px;
    color: #1e3888;
  }
`;

const ServiceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: black;
  font-size: 1rem;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: rgba(30, 56, 136, 0.1);
    border-radius: 4px;
  }

  svg {
    color: #1e3888;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.5rem;
  width: 200px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding: 0 0.5rem;
  color: #333;

  &::placeholder {
    color: #666;
  }
`;

const Button = styled.button`
  background-color: #1e3888;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #152a66;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 1.2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #666;
  }
`;

const FloatingIcons = styled.div`
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FloatingIconButton = styled(IconButton)`
  color: #1e3888;
  font-size: 1.5rem;

  &:hover {
    color: #152a66;
  }
`;

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    {
      name: "IT Support Services",
      icon: <HelpCircle size={20} />,
      subServices: ["Help Desk Support", "Desktop Support", "User Assistance and Training", "IT Documentation and Knowledge Base Creation"],
    },
    {
      name: "Network Management",
      icon: <Network size={20} />,
      subServices: ["Computer Networking (LAN/WAN)", "Router and Switch Configuration", "Firewall Management", "VPN Setup and Management", "Network Security Monitoring"],
    },
    {
      name: "Server Management",
      icon: <Server size={20} />,
      subServices: ["Server Installation and Configuration", "Server Monitoring and Maintenance", "Virtualization Management", "Patch Management", "Backup and Recovery"],
    },
    {
      name: "Cybersecurity",
      icon: <Shield size={20} />,
      subServices: [
        "Threat Monitoring and Incident Response",
        "Vulnerability Management",
        "Anti-Malware and Antivirus Solutions",
        "Phishing and Ransomware Protection",
        "Security Audits and Compliance",
      ],
    },
    {
      name: "Backup and Disaster Recovery",
      icon: <Database size={20} />,
      subServices: ["Data Backup Solutions", "Disaster Recovery Planning", "Data Integrity Verification", "Backup Cloud Services"],
    },
    {
      name: "Cloud Services Management",
      icon: <Cloud size={20} />,
      subServices: ["Cloud Infrastructure Management", "Cloud Migration", "Cloud Security and Optimization", "Infrastructure as a Service (IaaS)"],
    },
    {
      name: "Software and Hardware Maintenance",
      icon: <Wrench size={20} />,
      subServices: ["Software Updates and Patching", "Hardware Repair and Replacement", "Asset Lifecycle Management"],
    },
    {
      name: "Remote Monitoring and Management",
      icon: <Monitor size={20} />,
      subServices: ["Proactive System Monitoring", "Automated Issue Resolution", "Performance Reporting"],
    },
    {
      name: "Consulting and Strategic IT Planning",
      icon: <Briefcase size={20} />,
      subServices: ["Virtual CIO (vCIO) Services", "IT Procurement Consulting", "Digital Transformation Services", "IT Budgeting and Roadmap Planning"],
    },
    {
      name: "Compliance and Regulatory Support",
      icon: <FileCheck size={20} />,
      subServices: ["GDPR, HIPAA, PCI DSS Audits", "Compliance Reporting", "Policy Development"],
    },
    {
      name: "Unified Communications",
      icon: <PhoneCall size={20} />,
      subServices: ["VoIP Phone Systems", "Video Conferencing Setup and Support", "Instant Messaging and Collaboration Tools"],
    },
    {
      name: "Mobile Device Management",
      icon: <Smartphone size={20} />,
      subServices: ["Device Enrollment and Configuration", "Remote Wipe and Security Enforcement", "Mobile Application Management"],
    },
    {
      name: "Software Development and Customization",
      icon: <Code size={20} />,
      subServices: ["Custom Application Development", "Integration Services"],
    },
    {
      name: "Website Management and Hosting",
      icon: <GlobeIcon size={20} />,
      subServices: ["Website Design and Development", "Hosting and Maintenance", "Security Monitoring"],
    },
    {
      name: "Surveillance and Security Systems",
      icon: <Camera size={20} />,
      subServices: ["CCTV Installation and Management", "IP Camera Configuration", "Remote Surveillance Monitoring", "Security System Integration"],
    },
    {
      name: "Data Analytics and Business Intelligence",
      icon: <BarChart2 size={20} />,
      subServices: ["Data Warehousing", "Reporting and Dashboards", "Predictive Analytics"],
    },
    {
      name: "DevOps Support",
      icon: <GitBranch size={20} />,
      subServices: ["CI/CD Pipeline Setup", "Automation and Orchestration", "Infrastructure as Code"],
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo href="/">
            <p>Logo</p>
          </Logo>
          <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/expertise">Our Expertise</NavLink>
            <NavLink href="/services" onClick={toggleServices} isOpen={isServicesOpen} ref={dropdownRef}>
              Services
              <ChevronDown size={16} />
              {isServicesOpen && (
                <Dropdown isOpen={true}>
                  <DropdownGrid>
                    {services.map((service, index) => (
                      <DropdownItem key={index} onMouseEnter={() => setHoveredService(service.name)} onMouseLeave={() => setHoveredService(null)}>
                        <ServiceTitle>
                          {service.icon}
                          {service.name}
                        </ServiceTitle>
                        <SubDropdown isOpen={hoveredService === service.name}>
                          {service.subServices.map((subService, subIndex) => (
                            <SubDropdownItem key={subIndex} href={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}/${subService.toLowerCase().replace(/\s+/g, "-")}`}>
                              {subService}
                            </SubDropdownItem>
                          ))}
                        </SubDropdown>
                      </DropdownItem>
                    ))}
                  </DropdownGrid>
                </Dropdown>
              )}
            </NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/client-stories">Client Stories</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/hardware">Hardware</NavLink>
            <NavLink href="/software">Software</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/policies">Policies</NavLink>
          </Nav>
          <RightSection>
            <SearchBar>
              <Search size={20} />
              <SearchInput placeholder="Search..." />
            </SearchBar>
            <Button>Sign In</Button>
            <IconButton>
              <Globe size={20} />
            </IconButton>
            <IconButton>
              <ShoppingCart size={20} />
            </IconButton>
            <IconButton onClick={() => setIsDarkTheme(!isDarkTheme)}>{isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}</IconButton>
          </RightSection>
        </HeaderContent>
      </HeaderContainer>

      <FloatingIcons>
        <FloatingIconButton>
          <MessageCircle size={24} />
        </FloatingIconButton>
        <FloatingIconButton>
          <FaWhatsapp size={24} />
        </FloatingIconButton>
        <FloatingIconButton>
          <Mail size={24} />
        </FloatingIconButton>
      </FloatingIcons>
    </>
  );
};

export default Header;
