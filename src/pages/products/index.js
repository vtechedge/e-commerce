import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ProductCard from "@/components/products/ProductCard";

const ProductsContainer = styled.div`
  padding: 1rem 2rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  color: #333;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: rgba(40, 95, 235, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(40, 95, 235, 0.1);
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: #555;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
`;

// This would normally come from your API or database
// Using the same mock data from the category page
const mockProducts = {
  // Display & Video Adapters
  "usb-c-display-adapters": [
    {
      id: 1,
      name: "USB-C to HDMI Adapter",
      heading: "4K Display Support",
      price: "$29.99",
      image: "/products/usb-c-hdmi.jpg",
      rating: 4.8,
      category: "Display & Video Adapters",
      subcategory: "USB-C Display Adapters",
    },
    {
      id: 2,
      name: "USB-C to DisplayPort Adapter",
      heading: "High-Resolution Display",
      price: "$34.99",
      image: "/products/usb-c-displayport.jpg",
      rating: 4.6,
      category: "Display & Video Adapters",
      subcategory: "USB-C Display Adapters",
    },
    {
      id: 3,
      name: "USB-C to VGA Adapter",
      heading: "Legacy Display Support",
      price: "$24.99",
      image: "/products/usb-c-vga.jpg",
      rating: 4.3,
      category: "Display & Video Adapters",
      subcategory: "USB-C Display Adapters",
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
      category: "Display & Video Adapters",
      subcategory: "DisplayPort & Mini DisplayPort Adapters",
    },
    {
      id: 5,
      name: "Mini DisplayPort to DVI Adapter",
      heading: "Dual-Link Support",
      price: "$22.99",
      image: "/products/mini-displayport-dvi.jpg",
      rating: 4.5,
      category: "Display & Video Adapters",
      subcategory: "DisplayPort & Mini DisplayPort Adapters",
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
      category: "Display & Video Adapters",
      subcategory: "Thunderbolt Display Adapters",
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
      category: "Universal Laptop Docking Stations",
      subcategory: "Thunderbolt Docking Stations",
    },
    {
      id: 7,
      name: "Thunderbolt 4 Dock",
      heading: "8K Display Support",
      price: "$349.99",
      image: "/products/thunderbolt-4-dock.jpg",
      rating: 4.8,
      category: "Universal Laptop Docking Stations",
      subcategory: "Thunderbolt Docking Stations",
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
      category: "Universal Laptop Docking Stations",
      subcategory: "USB-C Docking Stations",
    },
    {
      id: 9,
      name: "USB-C Mini Dock",
      heading: "Compact Design",
      price: "$79.99",
      image: "/products/usb-c-mini-dock.jpg",
      rating: 4.5,
      category: "Universal Laptop Docking Stations",
      subcategory: "USB-C Docking Stations",
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
      category: "Privacy Screen Filters",
      subcategory: "Monitor Filters",
    },
    {
      id: 11,
      name: "27-inch Monitor Privacy Filter",
      heading: "Anti-Glare, 30° Viewing Angle",
      price: "$59.99",
      image: "/products/monitor-filter-27.jpg",
      rating: 4.7,
      category: "Privacy Screen Filters",
      subcategory: "Monitor Filters",
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
      category: "USB Hubs",
      subcategory: "USB-C Hubs",
    },
    {
      id: 13,
      name: "9-in-1 USB-C Hub",
      heading: "4K HDMI, Ethernet, USB 3.0",
      price: "$49.99",
      image: "/products/usb-c-hub-9.jpg",
      rating: 4.6,
      category: "USB Hubs",
      subcategory: "USB-C Hubs",
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
      category: "Display Mounts and Ergonomics",
      subcategory: "Monitor Mounts",
    },
    {
      id: 15,
      name: "Dual Monitor Arm",
      heading: "Adjustable, Cable Management",
      price: "$129.99",
      image: "/products/dual-monitor-arm.jpg",
      rating: 4.7,
      category: "Display Mounts and Ergonomics",
      subcategory: "Monitor Mounts",
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
      category: "Audio-Video Products",
      subcategory: "Video Splitters",
    },
    {
      id: 17,
      name: "DisplayPort Splitter",
      heading: "1x2 Distribution",
      price: "$69.99",
      image: "/products/displayport-splitter.jpg",
      rating: 4.5,
      category: "Audio-Video Products",
      subcategory: "Video Splitters",
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
      category: "Cables",
      subcategory: "USB-C Cables",
    },
    {
      id: 19,
      name: "USB-C to USB-A Cable",
      heading: "Fast Charging Support",
      price: "$14.99",
      image: "/products/usb-c-to-a.jpg",
      rating: 4.6,
      category: "Cables",
      subcategory: "USB-C Cables",
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
      category: "Server Management",
      subcategory: "KVM Switches",
    },
    {
      id: 21,
      name: "8-Port KVM Switch",
      heading: "Rackmount, USB 3.0",
      price: "$299.99",
      image: "/products/kvm-switch-8.jpg",
      rating: 4.9,
      category: "Server Management",
      subcategory: "KVM Switches",
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
      category: "Hard Drive Accessories",
      subcategory: "HDD Docking Stations",
    },
    {
      id: 23,
      name: "Single Bay HDD Docking Station",
      heading: "USB 3.0, 2.5/3.5 inch",
      price: "$39.99",
      image: "/products/hdd-dock-single.jpg",
      rating: 4.6,
      category: "Hard Drive Accessories",
      subcategory: "HDD Docking Stations",
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
      category: "Add-on Cards & Peripherals",
      subcategory: "USB 3.0 Cards",
    },
    {
      id: 25,
      name: "7-Port USB 3.0 PCIe Card",
      heading: "Internal Card, 5Gbps",
      price: "$49.99",
      image: "/products/usb-3-card-7.jpg",
      rating: 4.6,
      category: "Add-on Cards & Peripherals",
      subcategory: "USB 3.0 Cards",
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
      category: "Networking IO Products",
      subcategory: "Ethernet Switches",
    },
    {
      id: 27,
      name: "8-Port Gigabit Ethernet Switch",
      heading: "Unmanaged, Plug & Play",
      price: "$39.99",
      image: "/products/ethernet-switch-8.jpg",
      rating: 4.8,
      category: "Networking IO Products",
      subcategory: "Ethernet Switches",
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
      category: "Computer Parts",
      subcategory: "Computer Fans & Coolers",
    },
    {
      id: 29,
      name: "CPU Air Cooler",
      heading: "Dual Tower, 120mm Fan",
      price: "$49.99",
      image: "/products/cpu-cooler.jpg",
      rating: 4.7,
      category: "Computer Parts",
      subcategory: "Computer Fans & Coolers",
    },
  ],
};

function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Get all unique categories
  const categories = [
    "all",
    ...new Set(
      Object.values(mockProducts)
        .flat()
        .map((product) => product.category)
    ),
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

        // Flatten all products from all categories
        const allProducts = Object.values(mockProducts).flat();
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters when products, categoryFilter, or priceFilter changes
  useEffect(() => {
    if (products.length === 0) return;

    let filtered = [...products];

    // Apply category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Apply price filter
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.price.replace("$", ""));
        if (max) {
          return price >= min && price <= max;
        } else {
          return price >= min;
        }
      });
    }

    // Apply sorting
    if (sortBy !== "default") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));

        if (sortBy === "price-low-high") {
          return priceA - priceB;
        } else if (sortBy === "price-high-low") {
          return priceB - priceA;
        } else if (sortBy === "rating") {
          return b.rating - a.rating;
        }
        return 0;
      });
    }

    setFilteredProducts(filtered);
  }, [products, categoryFilter, priceFilter, sortBy]);

  return (
    <ProductsContainer>
      <PageTitle>All Products</PageTitle>

      <FilterSection>
        <FilterGroup>
          <FilterLabel>Category:</FilterLabel>
          <FilterSelect
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Price Range:</FilterLabel>
          <FilterSelect
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-25">Under $25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200">$200 & Above</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Sort By:</FilterLabel>
          <FilterSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </FilterSelect>
        </FilterGroup>
      </FilterSection>

      {loading ? (
        <LoadingSpinner text="Loading products..." />
      ) : error ? (
        <NoProducts>{error}</NoProducts>
      ) : filteredProducts.length === 0 ? (
        <NoProducts>No products found matching your criteria.</NoProducts>
      ) : (
        <ProductsGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      )}
    </ProductsContainer>
  );
}

export default ProductsPage;
