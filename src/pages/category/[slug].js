import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Breadcrumb from "@/components/common/Breadcrumb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ProductCard from "@/components/products/ProductCard";

const CategoryContainer = styled.div`
  padding: 1rem 2rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

const CategoryTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  color: #333;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
`;

// This would normally come from your API or database
const mockProducts = {
  // Display & Video Adapters
  "usb-c-display-adapters": [
    {
      id: 1,
      name: "USB-C to HDMI Adapter",
      heading: "4K Display Support",
      price: "$29.99",
      image: "/products/5.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "USB-C to DisplayPort Adapter",
      heading: "High-Resolution Display",
      price: "$34.99",
      image: "/products/5.jpg",
      rating: 4.6,
    },
    {
      id: 3,
      name: "USB-C to VGA Adapter",
      heading: "Legacy Display Support",
      price: "$24.99",
      image: "/products/5.jpg",
      rating: 4.3,
    },
  ],
  "displayport-adapters": [
    {
      id: 4,
      name: "DisplayPort to HDMI Adapter",
      heading: "4K Video Support",
      price: "$19.99",
      image: "/products/displayport-hdmi.jpg",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Mini DisplayPort to DVI Adapter",
      heading: "Dual-Link Support",
      price: "$22.99",
      image: "/products/mini-displayport-dvi.jpg",
      rating: 4.5,
    },
  ],
  "thunderbolt-display-adapters": [
    {
      id: 30,
      name: "DisplayPort to HDMI Adapter",
      heading: "4K Video Support",
      price: "$19.99",
      image: "/products/displayport-hdmi.jpg",
      rating: 4.7,
    },
  ],

  // Universal Laptop Docking Stations
  "thunderbolt-docking-stations": [
    {
      id: 6,
      name: "Thunderbolt 3 Pro Dock",
      heading: "10 Ports, 85W Charging",
      price: "$299.99",
      image: "/products/thunderbolt-dock.jpg",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Thunderbolt 4 Dock",
      heading: "8K Display Support",
      price: "$349.99",
      image: "/products/thunderbolt-4-dock.jpg",
      rating: 4.8,
    },
  ],
  "usb-c-docking-stations": [
    {
      id: 8,
      name: "USB-C Universal Dock",
      heading: "12 Ports, 60W Charging",
      price: "$199.99",
      image: "/products/usb-c-dock.jpg",
      rating: 4.7,
    },
    {
      id: 9,
      name: "USB-C Mini Dock",
      heading: "Compact Design",
      price: "$79.99",
      image: "/products/usb-c-mini-dock.jpg",
      rating: 4.5,
    },
  ],

  // Privacy Screen Filters
  "monitor-filters": [
    {
      id: 10,
      name: "24-inch Monitor Privacy Filter",
      heading: "Anti-Glare, 45° Viewing Angle",
      price: "$49.99",
      image: "/products/monitor-filter.jpg",
      rating: 4.6,
    },
    {
      id: 11,
      name: "27-inch Monitor Privacy Filter",
      heading: "Anti-Glare, 30° Viewing Angle",
      price: "$59.99",
      image: "/products/monitor-filter-27.jpg",
      rating: 4.7,
    },
  ],

  // USB Hubs
  "usb-c-hubs": [
    {
      id: 12,
      name: "7-in-1 USB-C Hub",
      heading: "HDMI, USB 3.0, SD Card Reader",
      price: "$39.99",
      image: "/products/usb-c-hub.jpg",
      rating: 4.5,
    },
    {
      id: 13,
      name: "9-in-1 USB-C Hub",
      heading: "4K HDMI, Ethernet, USB 3.0",
      price: "$49.99",
      image: "/products/usb-c-hub-9.jpg",
      rating: 4.6,
    },
  ],

  // Display Mounts and Ergonomics
  "monitor-mounts": [
    {
      id: 14,
      name: "Single Monitor Arm",
      heading: "Gas Spring, VESA Compatible",
      price: "$79.99",
      image: "/products/monitor-arm.jpg",
      rating: 4.8,
    },
    {
      id: 15,
      name: "Dual Monitor Arm",
      heading: "Adjustable, Cable Management",
      price: "$129.99",
      image: "/products/dual-monitor-arm.jpg",
      rating: 4.7,
    },
  ],

  // Audio-Video Products
  "video-splitters": [
    {
      id: 16,
      name: "4K HDMI Splitter",
      heading: "1x4 Distribution",
      price: "$89.99",
      image: "/products/hdmi-splitter.jpg",
      rating: 4.6,
    },
    {
      id: 17,
      name: "DisplayPort Splitter",
      heading: "1x2 Distribution",
      price: "$69.99",
      image: "/products/displayport-splitter.jpg",
      rating: 4.5,
    },
  ],

  // Cables
  "usb-c-cables": [
    {
      id: 18,
      name: "USB-C to USB-C Cable",
      heading: "Thunderbolt 3 Compatible",
      price: "$19.99",
      image: "/products/usb-c-cable.jpg",
      rating: 4.7,
    },
    {
      id: 19,
      name: "USB-C to USB-A Cable",
      heading: "Fast Charging Support",
      price: "$14.99",
      image: "/products/usb-c-to-a.jpg",
      rating: 4.6,
    },
  ],

  // Server Management
  "kvm-switches": [
    {
      id: 20,
      name: "4-Port KVM Switch",
      heading: "USB 3.0, 4K Support",
      price: "$149.99",
      image: "/products/kvm-switch.jpg",
      rating: 4.8,
    },
    {
      id: 21,
      name: "8-Port KVM Switch",
      heading: "Rackmount, USB 3.0",
      price: "$299.99",
      image: "/products/kvm-switch-8.jpg",
      rating: 4.9,
    },
  ],

  // Hard Drive Accessories
  "hdd-docking-stations": [
    {
      id: 22,
      name: "Dual Bay HDD Docking Station",
      heading: "USB 3.0, SATA III",
      price: "$59.99",
      image: "/products/hdd-dock.jpg",
      rating: 4.7,
    },
    {
      id: 23,
      name: "Single Bay HDD Docking Station",
      heading: "USB 3.0, 2.5/3.5 inch",
      price: "$39.99",
      image: "/products/hdd-dock-single.jpg",
      rating: 4.6,
    },
  ],

  // Add-on Cards & Peripherals
  "usb-3-cards": [
    {
      id: 24,
      name: "4-Port USB 3.0 PCIe Card",
      heading: "Internal Card, 5Gbps",
      price: "$29.99",
      image: "/products/usb-3-card.jpg",
      rating: 4.5,
    },
    {
      id: 25,
      name: "7-Port USB 3.0 PCIe Card",
      heading: "Internal Card, 5Gbps",
      price: "$49.99",
      image: "/products/usb-3-card-7.jpg",
      rating: 4.6,
    },
  ],

  // Networking IO Products
  "ethernet-switches": [
    {
      id: 26,
      name: "5-Port Gigabit Ethernet Switch",
      heading: "Unmanaged, Plug & Play",
      price: "$24.99",
      image: "/products/ethernet-switch.jpg",
      rating: 4.7,
    },
    {
      id: 27,
      name: "8-Port Gigabit Ethernet Switch",
      heading: "Unmanaged, Plug & Play",
      price: "$39.99",
      image: "/products/ethernet-switch-8.jpg",
      rating: 4.8,
    },
  ],

  // Computer Parts
  "computer-fans-coolers": [
    {
      id: 28,
      name: "120mm Case Fan",
      heading: "PWM, 4-Pin Connector",
      price: "$14.99",
      image: "/products/case-fan.jpg",
      rating: 4.6,
    },
    {
      id: 29,
      name: "CPU Air Cooler",
      heading: "Dual Tower, 120mm Fan",
      price: "$49.99",
      image: "/products/cpu-cooler.jpg",
      rating: 4.7,
    },
  ],
};

const categoryTitles = {
  // Display & Video Adapters
  "usb-c-display-adapters": "USB-C Display Adapters",
  "displayport-adapters": "DisplayPort & Mini DisplayPort Adapters",
  "thunderbolt-display-adapters": "Thunderbolt Display Adapters",
  "usb-a-display-adapters": "USB-A Display Adapters",
  "hdmi-dvi-adapters": "HDMI & DVI Display Adapters",

  // Universal Laptop Docking Stations
  "thunderbolt-docking-stations": "Thunderbolt Docking Stations",
  "usb-c-docking-stations": "USB-C Docking Stations",
  "usb-c-multiport-adapters": "USB-C Multiport Adapters",
  "usb-a-docking-stations": "USB-A Docking Stations",

  // Privacy Screen Filters
  "monitor-filters": "Monitor Filters",
  "laptop-filters": "Laptop Filters",
  "tablet-phone-filters": "Tablet and Phone Filters",

  // USB Hubs
  "thunderbolt-hubs": "Thunderbolt Hubs & Adapters",
  "usb-c-hubs": "USB-C Hubs",
  "usb-a-hubs": "USB-A Hubs",
  "industrial-usb-hubs": "Industrial USB Hubs",

  // Display Mounts and Ergonomics
  "monitor-mounts": "Monitor Mounts",
  "tv-mounts": "TV Mounts",
  "sit-stand-workstations": "Sit-Stand Workstations",
  "tablet-mounts": "Tablet Mounts",
  "laptop-backpacks": "Laptop Backpacks",

  // Audio-Video Products
  "video-extenders": "Video Extenders",
  "audio-video-converters": "Audio-Video Converters",
  "video-splitters": "Video Splitters",
  "collaboration-solutions": "Collaboration and Boardroom Solutions",
  "video-switchers": "Video Switchers",

  // Cables
  "audio-video-cables": "Audio-Video Cables",
  "network-cables": "Network Cables & Adapters",
  "usb-cables": "USB Cables & Adapters",
  "drive-cables": "Drive Cables",
  "computer-power-cables": "Computer Power Cables",
  "serial-parallel-cables": "Serial Cables, Parallel Cables & PS/2 Cables",
  "cable-management": "Cable Management",
  "structured-wiring": "Structured Wiring",
  "bulk-wire-connectors": "Bulk Wire & Connectors",
  "firewire-cables": "FireWire Cables and Adapters",
  "thunderbolt-cables": "Thunderbolt 4 and Thunderbolt 3 Cables & Adapters",
  "lightning-cables": "Lightning Cables",
  "30pin-dock-cables": "30-pin Dock Connector Cables",
  "usb-3-cables": "USB 3.0 Cables",
  "usb-c-cables": "USB-C Cables",

  // Server Management
  "server-rack-accessories": "Server Rack Accessories",
  "kvm-consoles": "KVM Consoles - Rackmount",
  "kvm-switches": "KVM Switches",
  "kvm-extenders": "KVM Extenders",
  "server-racks": "Server-Racks",
  "kvm-cables": "KVM Cables",

  // Hard Drive Accessories
  "media-card-readers": "Media Card Readers & Adapters",
  "external-drive-enclosures": "External Drive Enclosures",
  "mobile-racks": "Mobile Racks/Hard Drive Backplanes",
  "hdd-docking-stations": "HDD Docking Stations",
  "hdd-duplicators": "HDD Duplicators",
  "drive-adapters": "Drive Adapters and Drive Converters",
  "drive-mounting-brackets": "Drive Mounting Brackets & Accessories",

  // Add-on Cards & Peripherals
  "hard-drive-controller-cards": "Hard Drive Controller Cards",
  "usb-3-cards": "USB 3.0 Cards",
  "usb-2-cards": "USB 2.0 Cards, Extenders",
  "sound-cards": "Sound Cards & Adapters",
  "serial-cards": "Serial Cards & Adapters",
  "parallel-cards": "Parallel Cards & Adapters",
  "firewire-cards": "FireWire Cards",
  "slot-conversion": "Slot Conversion & Slot Extension",

  // Networking IO Products
  sfps: "SFPs",
  "media-converters": "Media Converters & Extenders",
  "usb-thunderbolt-network-adapters": "USB and Thunderbolt Network Adapters",
  "network-adapter-cards": "Network Adapter Cards",
  "wireless-network-adapters": "Wireless Network Adapters",
  "ethernet-switches": "Ethernet Switches",
  "network-print-servers": "Network Print Servers",
  "usb-ps2-devices": "USB & PS/2 Devices",
  "bluetooth-telecom-adapters": "Bluetooth & Telecom Adapters",
  "serial-over-ip-extenders": "Serial Over IP (Cat5/6) Extenders",

  // Computer Parts
  "system-build-parts": "System Build and Computer Repair Parts",
  "power-adapters": "Power Adapters",
  "computer-fans-coolers": "Computer Fans & Coolers",
  "laptop-locks": "Laptop Locks",
};

function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (slug) {
      // Simulate API call
      setLoading(true);
      setTimeout(() => {
        const categoryProducts = mockProducts[slug] || [];
        setProducts(categoryProducts);
        setLoading(false);
      }, 1000);
    }
  }, [slug]);

  const categoryTitle = Object.entries(categoryTitles).find(([_, value]) => value === slug)?.[0] || "Category";

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: categoryTitle }];

  if (loading) {
    return (
      <CategoryContainer>
        <Breadcrumb items={breadcrumbItems} />
        <LoadingSpinner text="Loading products..." />
      </CategoryContainer>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CategoryContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      {products.length > 0 ? (
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      ) : (
        <NoProducts>No products found in this category.</NoProducts>
      )}
    </CategoryContainer>
  );
}

export default CategoryPage;
