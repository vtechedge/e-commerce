import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
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
  MapPin,
  Clock,
} from "lucide-react";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

const TopBar = styled.div`
  background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
  color: white;
  font-size: 0.813rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${(props) => (props.isHidden ? '0' : '100px')};
  opacity: ${(props) => (props.isHidden ? '0' : '1')};
  overflow: hidden;
`;

const TopBarContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 968px) {
    padding: 0.6rem 1rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.65rem 1rem;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 968px) {
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
`;

const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const TopBarItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  
  &:hover {
    color: white;
    transform: translateY(-1px);
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
  
  @media (max-width: 968px) {
    font-size: 0.75rem;
    
    svg {
      width: 13px;
      height: 13px;
    }
  }
`;

const TopBarLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  padding: 0.25rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.2s ease;
  }
  
  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Divider = styled.span`
  color: rgba(255, 255, 255, 0.4);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainHeaderWrapper = styled.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
`;

const MainHeader = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.35rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 968px) {
    gap: 1rem;
    padding: 0.3rem 1rem;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
  background: transparent;
  padding: 0.25rem 0;
  
  img {
    height: 90px;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease;
    background: transparent;
    
    @media (max-width: 768px) {
      height: 65px;
    }
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 520px;
  position: relative;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.65rem 1.125rem 0.65rem 2.75rem;
  border: 1.5px solid transparent;
  border-radius: 50px;
  font-size: 0.875rem;
  background-color: #f3f4f6;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-weight: 500;

  &:focus {
    border-color: #1e3888;
    background-color: white;
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.15);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  
  gap: 0.75rem; /* Increased gap between buttons */
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem; /* Adjusted for smaller screens */
  }
`;

const ActionButton = styled.button`
  background: white;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background-color: #f9fafb;
    color: #1e3888;
    border-color: #1e3888;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
  
  span {
    @media (max-width: 968px) {
      display: none;
    }
  }
  
  &.contact-btn {
    background: linear-gradient(135deg, #1e3888 0%, #2d4ba8 100%);
    color: white;
    padding: 0.65rem 1.5rem;
    font-weight: 600;
    border: none;
    box-shadow: 0 2px 8px rgba(30, 56, 136, 0.3);
    margin-right: 0.5rem;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(30, 56, 136, 0.4);
      background: linear-gradient(135deg, #2d4ba8 0%, #3557c2 100%);
    }
    
    &:active {
      transform: translateY(-1px);
    }
    
    @media (max-width: 968px) {
      padding: 0.6rem 1rem;
      font-size: 0.813rem;
    }
  }
  
  @media (max-width: 768px) {
    &:not(.contact-btn):not(:has(svg)) {
      display: none;
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
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95));
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 100;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  display: block;
  padding: 0.65rem 1rem;
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 8px;
  position: relative;
  white-space: nowrap;
  letter-spacing: -0.01em;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2.5px;
    background: linear-gradient(90deg, #1e3888, #2d4ba8);
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: #1e3888;
    background-color: rgba(240, 244, 255, 0.8);
    transform: translateY(-1px);
    
    &::after {
      width: 65%;
    }
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
    width: 16px;
    height: 16px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 800px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1001;
  border: 1px solid #e5e7eb;
  margin-top: 0.5rem;
  animation: dropdownSlideIn 0.2s ease-out;

  @keyframes dropdownSlideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.75rem 1rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
    color: #1e3888;
    transform: translateX(4px);
  }
`;

const SubDropdown = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  background-color: white;
  min-width: 250px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 0.75rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1002;
  border: 1px solid #e5e7eb;
  margin-left: 0.5rem;
`;

const SubDropdownItem = styled.a`
  display: block;
  padding: 0.625rem 1rem;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  border-radius: 6px;

  &:hover {
    background-color: #f0f4ff;
    color: #1e3888;
    padding-left: 1.25rem;
  }
`;

const ServiceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #111827;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
    color: #1e3888;
    transform: translateX(4px);
  }

  svg {
    margin-left: auto;
    transition: transform 0.2s ease;
    transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0)")};
  }
`;

const ServiceIcon = styled.div`
  color: #1e3888;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--white);
  z-index: 1002;
  padding: 2rem;
  overflow-y: auto;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
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
  font-size: 1.125rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-blue);
  }
`;

const Header = () => {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide top bar when scrolling down past 50px
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsTopBarHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsTopBarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
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
    { name: "Contact", href: "/contact" },
    { name: "Policies", href: "/policies" },
  ];

  return (
    <HeaderWrapper>
      <MainHeaderWrapper>
        <MainHeader>
          <Logo href="/">
            <img src="/logo.png" alt="VtechSecure Logo" />
          </Logo>

          <SearchContainer>
            <form onSubmit={handleSearch} style={{ width: '100%' }}>
              <SearchIcon>
                <Search size={20} />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search products, services, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </SearchContainer>

          <HeaderActions>
            <ActionButton className="contact-btn" onClick={() => window.location.href = '/contact'}>
              <PhoneCall size={18} />
              <span>Contact Us</span>
            </ActionButton>
            <ActionButton>
              <User size={18} />
              <span>Sign In</span>
            </ActionButton>
            <ActionButton>
              <ShoppingCart size={18} />
              <span>Cart</span>
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </ActionButton>
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </MobileMenuButton>
          </HeaderActions>
        </MainHeader>
      </MainHeaderWrapper>

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
    </HeaderWrapper>
  );
};

export default Header;
