import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Geist } from "next/font/google";
import {
  FaChevronDown,
  FaHome,
  FaShoppingBag,
  FaList,
  FaInfoCircle,
  FaUser,
  FaShoppingCart,
  FaDesktop,
  FaLaptop,
  FaShieldAlt,
  FaUsb,
  FaTv,
  FaHeadphones,
  FaNetworkWired,
  FaServer,
  FaHdd,
  FaMicrochip,
  FaWifi,
  FaThLarge,
} from "react-icons/fa";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SidebarContainer = styled.aside`
  width: 320px;
  background-color: #fafcff;
  box-shadow: 0 2px 4px rgba(40, 95, 235, 0.1);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  font-family: ${geist.style.fontFamily};
  z-index: 1000;
  overflow-y: auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
  text-align: center;

  &:hover {
    color: var(--primary-hover);
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 0.3rem;
  padding: 0 0.8rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(40, 95, 235, 0.05);
    color: var(--primary-color);
  }
`;

const AllProductsLink = styled(NavLink)`
  background-color: rgba(40, 95, 235, 0.05);
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--primary-color);

  &:hover {
    background-color: rgba(40, 95, 235, 0.1);
  }
`;

const CategorySection = styled.div`
  margin-bottom: 0.3rem;
`;

const CategoryTitle = styled.div`
  font-size: 0.8rem;
  color: #333;
  padding: 0.6rem 0.8rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  font-weight: 500;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: rgba(40, 95, 235, 0.05);
    color: var(--primary-color);
    box-shadow: 0 3px 8px rgba(40, 95, 235, 0.1);
  }
`;

const SubCategoryContainer = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  margin-left: 0.5rem;
`;

const SubCategory = styled(Link)`
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 0.8rem;
  font-size: 0.85rem;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(40, 95, 235, 0.05);
    color: var(--primary-color);
  }
`;

// const UserSection = styled.div`
//   padding: 1rem;
//   margin-top: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 0.6rem;
//   background-color: white;
//   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
// `;

// const UserLink = styled(Link)`
//   color: #333;
//   text-decoration: none;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   padding: 0.6rem 0.8rem;
//   border-radius: 6px;
//   transition: all 0.2s;

//   &:hover {
//     color: var(--primary-color);
//     background-color: rgba(40, 95, 235, 0.05);
//   }
// `;

// const CartButton = styled.button`
//   background-color: var(--primary-color);
//   color: white;
//   border: none;
//   padding: 0.6rem 0.8rem;
//   border-radius: 6px;
//   cursor: pointer;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   box-shadow: 0 2px 6px rgba(40, 95, 235, 0.2);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--primary-hover);
//     box-shadow: 0 3px 8px rgba(40, 95, 235, 0.3);
//   }
// `;

const categories = [
  {
    title: "Display & Video Adapters",
    icon: FaDesktop,
    subcategories: [
      { name: "USB-C Display Adapters", path: "/category/usb-c-display-adapters" },
      { name: "DisplayPort & Mini DisplayPort Adapters", path: "/category/displayport-adapters" },
      { name: "Thunderbolt Display Adapters", path: "/category/thunderbolt-display-adapters" },
      { name: "USB-A Display Adapters", path: "/category/usb-a-display-adapters" },
      { name: "HDMI & DVI Display Adapters", path: "/category/hdmi-dvi-adapters" },
    ],
  },
  {
    title: "Universal Laptop Docking Stations",
    icon: FaLaptop,
    subcategories: [
      { name: "Thunderbolt Docking Stations", path: "/category/thunderbolt-docking-stations" },
      { name: "USB-C Docking Stations", path: "/category/usb-c-docking-stations" },
      { name: "USB-C Multiport Adapters", path: "/category/usb-c-multiport-adapters" },
      { name: "USB-A Docking Stations", path: "/category/usb-a-docking-stations" },
    ],
  },
  {
    title: "Privacy Screen Filters",
    icon: FaShieldAlt,
    subcategories: [
      { name: "Monitor Filters", path: "/category/monitor-filters" },
      { name: "Laptop Filters", path: "/category/laptop-filters" },
      { name: "Tablet and Phone Filters", path: "/category/tablet-phone-filters" },
    ],
  },
  {
    title: "USB Hubs",
    icon: FaUsb,
    subcategories: [
      { name: "Thunderbolt Hubs & Adapters", path: "/category/thunderbolt-hubs" },
      { name: "USB-C Hubs", path: "/category/usb-c-hubs" },
      { name: "USB-A Hubs", path: "/category/usb-a-hubs" },
      { name: "Industrial USB Hubs", path: "/category/industrial-usb-hubs" },
    ],
  },
  {
    title: "Display Mounts and Ergonomics",
    icon: FaTv,
    subcategories: [
      { name: "Monitor Mounts", path: "/category/monitor-mounts" },
      { name: "TV Mounts", path: "/category/tv-mounts" },
      { name: "Sit-Stand Workstations", path: "/category/sit-stand-workstations" },
      { name: "Tablet Mounts", path: "/category/tablet-mounts" },
      { name: "Laptop Backpacks", path: "/category/laptop-backpacks" },
    ],
  },
  {
    title: "Audio-Video Products",
    icon: FaHeadphones,
    subcategories: [
      { name: "Video Extenders", path: "/category/video-extenders" },
      { name: "Audio-Video Converters", path: "/category/audio-video-converters" },
      { name: "Video Splitters", path: "/category/video-splitters" },
      { name: "Collaboration and Boardroom Solutions", path: "/category/collaboration-solutions" },
      { name: "Video Switchers", path: "/category/video-switchers" },
    ],
  },
  {
    title: "Cables",
    icon: FaNetworkWired,
    subcategories: [
      { name: "Audio-Video Cables", path: "/category/audio-video-cables" },
      { name: "Network Cables & Adapters", path: "/category/network-cables" },
      { name: "USB Cables & Adapters", path: "/category/usb-cables" },
      { name: "Drive Cables", path: "/category/drive-cables" },
      { name: "Computer Power Cables", path: "/category/computer-power-cables" },
      { name: "Serial Cables, Parallel Cables & PS/2 Cables", path: "/category/serial-parallel-cables" },
      { name: "Cable Management", path: "/category/cable-management" },
      { name: "Structured Wiring", path: "/category/structured-wiring" },
      { name: "Bulk Wire & Connectors", path: "/category/bulk-wire-connectors" },
      { name: "FireWire Cables and Adapters", path: "/category/firewire-cables" },
      { name: "Thunderbolt 4 and Thunderbolt 3 Cables & Adapters", path: "/category/thunderbolt-cables" },
      { name: "Lightning Cables", path: "/category/lightning-cables" },
      { name: "30-pin Dock Connector Cables", path: "/category/30pin-dock-cables" },
      { name: "USB 3.0 Cables", path: "/category/usb-3-cables" },
      { name: "USB-C Cables", path: "/category/usb-c-cables" },
    ],
  },
  {
    title: "Server Management",
    icon: FaServer,
    subcategories: [
      { name: "Server Rack Accessories", path: "/category/server-rack-accessories" },
      { name: "KVM Consoles - Rackmount", path: "/category/kvm-consoles" },
      { name: "KVM Switches", path: "/category/kvm-switches" },
      { name: "KVM Extenders", path: "/category/kvm-extenders" },
      { name: "Server-Racks", path: "/category/server-racks" },
      { name: "KVM Cables", path: "/category/kvm-cables" },
    ],
  },
  {
    title: "Hard Drive Accessories",
    icon: FaHdd,
    subcategories: [
      { name: "Media Card Readers & Adapters", path: "/category/media-card-readers" },
      { name: "External Drive Enclosures", path: "/category/external-drive-enclosures" },
      { name: "Mobile Racks/Hard Drive Backplanes", path: "/category/mobile-racks" },
      { name: "HDD Docking Stations", path: "/category/hdd-docking-stations" },
      { name: "HDD Duplicators", path: "/category/hdd-duplicators" },
      { name: "Drive Adapters and Drive Converters", path: "/category/drive-adapters" },
      { name: "Drive Mounting Brackets & Accessories", path: "/category/drive-mounting-brackets" },
    ],
  },
  {
    title: "Add-on Cards & Peripherals",
    icon: FaMicrochip,
    subcategories: [
      { name: "Hard Drive Controller Cards", path: "/category/hard-drive-controller-cards" },
      { name: "USB 3.0 Cards", path: "/category/usb-3-cards" },
      { name: "USB 2.0 Cards, Extenders", path: "/category/usb-2-cards" },
      { name: "Sound Cards & Adapters", path: "/category/sound-cards" },
      { name: "Serial Cards & Adapters", path: "/category/serial-cards" },
      { name: "Parallel Cards & Adapters", path: "/category/parallel-cards" },
      { name: "FireWire Cards", path: "/category/firewire-cards" },
      { name: "Slot Conversion & Slot Extension", path: "/category/slot-conversion" },
    ],
  },
  {
    title: "Networking IO Products",
    icon: FaWifi,
    subcategories: [
      { name: "SFPs", path: "/category/sfps" },
      { name: "Media Converters & Extenders", path: "/category/media-converters" },
      { name: "USB and Thunderbolt Network Adapters", path: "/category/usb-thunderbolt-network-adapters" },
      { name: "Network Adapter Cards", path: "/category/network-adapter-cards" },
      { name: "Wireless Network Adapters", path: "/category/wireless-network-adapters" },
      { name: "Ethernet Switches", path: "/category/ethernet-switches" },
      { name: "Network Print Servers", path: "/category/network-print-servers" },
      { name: "USB & PS/2 Devices", path: "/category/usb-ps2-devices" },
      { name: "Bluetooth & Telecom Adapters", path: "/category/bluetooth-telecom-adapters" },
      { name: "Serial Over IP (Cat5/6) Extenders", path: "/category/serial-over-ip-extenders" },
    ],
  },
  {
    title: "Computer Parts",
    icon: FaDesktop,
    subcategories: [
      { name: "System Build and Computer Repair Parts", path: "/category/system-build-parts" },
      { name: "Power Adapters", path: "/category/power-adapters" },
      { name: "Computer Fans & Coolers", path: "/category/computer-fans-coolers" },
      { name: "Laptop Locks", path: "/category/laptop-locks" },
    ],
  },
];

function Sidebar() {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (categoryTitle) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  return (
    <SidebarContainer>
      <Logo href="/">TechStore</Logo>
      <NavLinks>
        <NavLink href="/">
          <FaHome /> Home
        </NavLink>
        <AllProductsLink href="/products">
          <FaThLarge /> All Products
        </AllProductsLink>
        {categories.map((category) => (
          <CategorySection key={category.title}>
            <CategoryTitle onClick={() => toggleCategory(category.title)}>
              {React.createElement(category.icon)}
              {category.title}
              <FaChevronDown
                style={{
                  marginLeft: "auto",
                  transform: openCategories[category.title] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </CategoryTitle>
            <SubCategoryContainer $isOpen={openCategories[category.title]}>
              {category.subcategories.map((subcategory) => (
                <SubCategory key={subcategory.path} href={subcategory.path}>
                  {subcategory.name}
                </SubCategory>
              ))}
            </SubCategoryContainer>
          </CategorySection>
        ))}
      </NavLinks>
    </SidebarContainer>
  );
}

export default Sidebar;
