import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
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
  Headphones,
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
  Heart,
} from "lucide-react";
import ThemeToggle from "../components/common/ThemeToggle";
import ThemeLogo from "../components/common/Logo";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

const TopBar = styled.div`
  background: ${props => props.theme.gradients.subtle};
  color: ${props => props.theme.text.inverse};
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
    color: ${props => props.theme.background.card};
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
  color: ${props => props.theme.mode === "dark" ? "rgba(122, 159, 196, 0.95)" : "rgba(255, 255, 255, 0.95)"};
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
    background: ${props => props.theme.background.card};
    transition: width 0.2s ease;
  }
  
  &:hover {
    color: ${props => props.theme.background.card};
    
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
  background: ${props => props.theme.mode === 'dark'
    ? 'rgba(22, 27, 34, 0.95)'
    : '${props => props.theme.mode === "dark" ? "rgba(22, 27, 34, 0.95)" : "rgba(255, 255, 255, 0.98)"}'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.mode === 'dark'
    ? '0 2px 12px rgba(0, 0, 0, 0.3)'
    : '0 2px 12px rgba(0, 0, 0, 0.06)'};
  border-bottom: 1px solid ${props => props.theme.border.light};
  transition: all 0.3s ease;
`;

const MainHeader = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0.75rem 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  
  @media (max-width: 968px) {
    gap: 0.75rem;
    padding: 0.5rem 1rem 0;
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
  padding: 0;
  
  img {
    height: 50px;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease;
    background: transparent;
    
    @media (max-width: 768px) {
      height: 40px;
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
  background-color: ${props => props.theme.background.tertiary};
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-weight: 500;

  &:focus {
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background.card};
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.15);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${props => props.theme.text.muted};
    font-weight: 400;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.text.muted};
  pointer-events: none;
  z-index: 10;
  
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
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${props => props.theme.text.secondary};
  font-weight: 600;
  font-size: 0.688rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  min-width: 60px;

  &:hover {
    background-color: rgba(240, 244, 255, 0.6);
    color: ${props => props.theme.primary};
    transform: translateY(-1px);
  }
  
  svg {
    width: 22px;
    height: 22px;
  }
  
  span {
    display: block;
    text-transform: capitalize;
    letter-spacing: 0.2px;
    
    @media (max-width: 968px) {
      font-size: 0.625rem;
    }
  }
  
  &.contact-btn {
    background: ${props => props.theme.gradients.subtle};
    color: ${props => props.theme.background.card};
    padding: 0.65rem 1.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    border: none;
    box-shadow: 0 2px 8px rgba(30, 56, 136, 0.3);
    margin-left: 0.5rem;
    flex-direction: row;
    min-width: auto;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(30, 56, 136, 0.4);
      background: ${props => props.theme.gradients.subtle};
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
    &:not(.contact-btn) {
      padding: 0.4rem 0.6rem;
      min-width: 50px;
      
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  background: ${props => props.theme.gradients.subtle};
  color: ${props => props.theme.background.card};
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0 0.25rem;
  box-shadow: 0 2px 4px rgba(30, 56, 136, 0.3);
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
  max-width: 100%;
  margin: 0;
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
  padding: 0.75rem 1rem 1.25rem 1rem;
  color: ${props => props.theme.text.secondary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.813rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 8px;
  position: relative;
  ${props => props.theme.background.card}-space: nowrap;
  letter-spacing: -0.01em;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2.5px;
    background: ${props => props.theme.gradients.primaryHorizontal};
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${props => props.theme.primary};
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
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, ${props => props.theme.background.primary}, ${props => props.theme.background.secondary});
  min-width: 1250px;
  max-width: 1450px;
  box-shadow: 0 20px 40px rgba(30, 56, 136, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 0.75rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1001;
  border: 1px solid rgba(30, 56, 136, 0.1);
  margin-top: 0;
  padding-top: 0.75rem;
  animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Add backdrop to prevent hero section showing through */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.mode === 'dark' 
      ? 'rgba(0, 0, 0, 0.5)' 
      : 'rgba(0, 0, 0, 0.3)'};
    z-index: -1;
    backdrop-filter: blur(2px);
  }

  @keyframes dropdownSlideIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  row-gap: 0.5rem;
`;

const DropdownItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.theme.background.card};
  transition: all 0.2s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(240, 244, 255, 0.5);
    border-color: rgba(30, 56, 136, 0.15);
    box-shadow: 0 4px 12px rgba(30, 56, 136, 0.08);
    transform: translateY(-2px);
  }
`;

const ServiceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${props => props.theme.primary};
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid ${props => props.theme.primary};
  line-height: 1.1;
  
  svg {
    width: 12px;
    height: 12px;
    color: ${props => props.theme.primaryLight};
    flex-shrink: 0;
  }
`;

const SubDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const SubDropdownItem = styled.a`
  display: block;
  color: ${props => props.theme.text.secondary};
  text-decoration: none;
  font-size: 0.65rem;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.2rem 0.35rem;
  line-height: 1.2;
  border-radius: 4px;
  position: relative;
  padding-left: 0.75rem;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0.15rem;
    color: ${props => props.theme.primaryLight};
    font-weight: 700;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    color: ${props => props.theme.primary};
    background: rgba(30, 56, 136, 0.05);
    padding-left: 0.75rem;
    
    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  color: ${props => props.theme.primary};
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
color: var(--dark - gray);

@media(max - width: 768px) {
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
background - color: var(--${props => props.theme.background.card});
z - index: 1002;
padding: 2rem;
overflow - y: auto;
animation: slideIn 0.3s ease - out;

@keyframes slideIn {
    from {
    transform: translateX(100 %);
  }
    to {
    transform: translateX(0);
  }
}
`;

const MobileMenuHeader = styled.div`
display: flex;
justify - content: space - between;
align - items: center;
margin - bottom: 2rem;
`;

const MobileNavList = styled.ul`
list - style: none;
margin: 0;
padding: 0;
`;

const MobileNavItem = styled.li`
border - bottom: 1px solid var(--border - gray);
`;

const MobileNavLink = styled.a`
display: block;
padding: 1rem 0;
color: var(--dark - gray);
text - decoration: none;
font - weight: 500;
font - size: 1.125rem;
transition: color 0.2s ease;
  
  &:hover {
  color: var(--primary - blue);
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Hide top bar when scrolling down past 50px
          if (currentScrollY > 50 && currentScrollY > lastScrollY) {
            setIsTopBarHidden(true);
          } else if (currentScrollY < lastScrollY) {
            setIsTopBarHidden(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
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
      router.push(`/ search ? q = ${encodeURIComponent(searchQuery)} `);
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
    { name: "Services", href: "/services" }, // Has dropdown - main offering
    { name: "Software", href: "/software" }, // Product category
    { name: "Hardware", href: "/hardware" }, // Product category
    { name: "Shop", href: "/shop" }, // General store
    { name: "Portfolio", href: "/portfolio" }, // Showcase work
    { name: "About Us", href: "/about" }, // Company info
  ];

  return (
    <HeaderWrapper>
      <MainHeaderWrapper>
        <MainHeader>
          <Logo href="/">
            <ThemeLogo width={180} height={50} />
          </Logo>

          {/* Navigation Links - Now in main header row */}
          <NavList style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '0.75rem', flexShrink: 0 }}>
            {navigationItems.map((item) => (
              <NavItem key={item.name}>
                <NavLink
                  href={item.href}
                  onMouseEnter={item.name === "Services" ? () => setIsServicesOpen(true) : undefined}
                  onMouseLeave={item.name === "Services" ? () => setIsServicesOpen(false) : undefined}
                  isOpen={isServicesOpen && item.name === "Services"}
                  ref={item.name === "Services" ? dropdownRef : undefined}
                >
                  {item.name}
                  {item.name === "Services" && <ChevronDown size={16} />}
                </NavLink>
              </NavItem>
            ))}
          </NavList>

          <SearchContainer>
            <form onSubmit={handleSearch} style={{ width: '100%' }}>
              <SearchIcon>
                <Search size={18} />
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
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Simplified icon buttons - Myntra style */}
            <ActionButton onClick={() => router.push('/contact')}>
              <Headphones size={22} />
              <span>Help</span>
            </ActionButton>
            <ActionButton>
              <User size={22} />
              <span>Profile</span>
            </ActionButton>
            <ActionButton>
              <Heart size={22} />
              <span>Wishlist</span>
            </ActionButton>
            <ActionButton style={{ position: 'relative' }}>
              <ShoppingCart size={22} />
              <span>Bag</span>
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </ActionButton>
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </MobileMenuButton>
          </HeaderActions>
        </MainHeader>
      </MainHeaderWrapper>

      {/* Hide the separate navigation row */}
      <div style={{ display: 'none' }}>
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
      </div>

      {isServicesOpen && (
        <Dropdown
          isOpen={true}
          ref={dropdownRef}
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <DropdownGrid>
            {services.map((service, index) => (
              <DropdownItem key={index}>
                <ServiceTitle>
                  {service.icon}
                  {service.name}
                </ServiceTitle>
                <SubDropdown>
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
            <ThemeLogo width={180} height={50} />
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

export default memo(Header);
