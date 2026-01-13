import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
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
  Globe,
  Camera,
  BarChart2,
  GitBranch,
} from "lucide-react";

const HeaderContainer = styled.header`
  background-color: var(--white);
  border-bottom: 1px solid var(--border-gray);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopBar = styled.div`
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBarLeft = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const TopBarRight = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const TopBarLink = styled.a`
  color: var(--white);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    gap: 0.25rem;
  }
`;

const MainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  img {
    height: 100px;
    width: auto;
    object-fit: contain;
    
    @media (max-width: 768px) {
      height: 75px;
    }
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid var(--border-gray);
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--primary-blue);
  }

  &::placeholder {
    color: var(--medium-gray);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--medium-gray);
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dark-gray);
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--light-gray);
  }
  
  &.contact-btn {
    background-color: var(--primary-blue);
    color: var(--white);
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    
    &:hover {
      background-color: var(--secondary-blue);
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
  }
`;

const CartBadge = styled.span`
  background-color: var(--primary-blue);
  color: var(--white);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 0.25rem;
`;

const Navigation = styled.nav`
  background-color: var(--light-gray);
  border-bottom: 1px solid var(--border-gray);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  display: block;
  padding: 1rem 1.5rem;
  color: var(--dark-gray);
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--white);
    color: var(--primary-blue);
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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--dark-gray);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--white);
  z-index: 1002;
  padding: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileNavItem = styled.li`
  border-bottom: 1px solid var(--border-gray);
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 1rem 0;
  color: var(--dark-gray);
  text-decoration: none;
  font-weight: 500;
`;

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
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
      icon: <Globe size={20} />,
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

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Client Stories", href: "/client-stories" },
    { name: "Blog", href: "/blog" },
    { name: "Hardware", href: "/hardware" },
    { name: "Software", href: "/software" },
    { name: "Shop", href: "/shop" },
    { name: "Policies", href: "/policies" },
  ];

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <TopBarLeft>
            <TopBarLink href="tel:+16478640847">
              <Phone size={16} />
              +1 647-864-0847
            </TopBarLink>
            <TopBarLink href="mailto:support@vtechsecure.com">
              <Mail size={16} />
              support@vtechsecure.com
            </TopBarLink>
          </TopBarLeft>
          <TopBarRight>
            <TopBarLink href="/account">My Account</TopBarLink>
            <TopBarLink href="/help">Help</TopBarLink>
          </TopBarRight>
        </TopBarContent>
      </TopBar>

      <MainHeader>
        <Logo href="/">
          <img src="/logo.png" alt="VtechSecure Logo" />
        </Logo>

        <SearchContainer>
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
          <SearchInput type="text" placeholder="Search products, services, and solutions..." />
        </SearchContainer>

        <HeaderActions>
          <ActionButton className="contact-btn" onClick={() => window.location.href = '/contact'}>
            <PhoneCall size={20} />
            <span>Contact Us</span>
          </ActionButton>
          <ActionButton>
            <User size={20} />
            <span>Sign In</span>
          </ActionButton>
          <ActionButton>
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
          </ActionButton>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </MobileMenuButton>
        </HeaderActions>
      </MainHeader>

      <Navigation>
        <NavContainer>
          <NavList>
            {navigationItems.map((item) => (
              <NavItem key={item.name}>
                <NavLink
                  href={item.href}
                  onClick={item.name === "Services" ? toggleServices : undefined}
                  isOpen={isServicesOpen && item.name === "Services"}
                  ref={item.name === "Services" ? dropdownRef : undefined}
                >
                  {item.name}
                  {item.name === "Services" && <ChevronDown size={16} />}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      </Navigation>

      {isServicesOpen && (
        <Dropdown isOpen={true} ref={dropdownRef}>
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

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <Logo href="/">
            <img src="/logo.png" alt="VtechSecure Logo" />
          </Logo>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </MobileMenuButton>
        </MobileMenuHeader>
        <MobileNavList>
          {navigationItems.map((item) => (
            <MobileNavItem key={item.name}>
              <MobileNavLink href={item.href}>{item.name}</MobileNavLink>
            </MobileNavItem>
          ))}
        </MobileNavList>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
