import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ProductCard from "@/components/products/ProductCard";
import { mockProducts } from "@/static/mockData";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

// This would normally come from your API or database
// Using the same mock data from the category page

function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [filterBy, setFilterBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const categoryRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterSelect = (value) => {
    setFilterBy(value);
    setIsDropdownOpen(false);
  };

  const handleCategorySelect = (value) => {
    setCategoryFilter(value);
    setIsCategoryOpen(false);
  };

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

  // Apply filters when products, categoryFilter, or filterBy changes
  useEffect(() => {
    if (products.length === 0) return;

    let filtered = [...products];

    // Apply search filter
    if (activeSearchQuery) {
      const query = activeSearchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.heading.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Apply sorting/filtering
    if (filterBy !== "default") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));

        switch (filterBy) {
          case "price-low-high":
            return priceA - priceB;
          case "price-high-low":
            return priceB - priceA;
          case "rating":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(filtered);
  }, [products, categoryFilter, filterBy, activeSearchQuery]);

  return (
    <ProductsContainer>
      <FilterSection>
        <FilterSecOne>
          <SearchGroup>
            <SearchInput
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setActiveSearchQuery(searchQuery);
                }
              }}
            />
            <SearchButton onClick={() => setActiveSearchQuery(searchQuery)}>
              Search
            </SearchButton>
          </SearchGroup>

          <FilterGroup>
            <CustomDropdown ref={dropdownRef}>
              <DropdownButton
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <HiOutlineAdjustmentsVertical />
                <span>
                  {filterBy === "default"
                    ? "Filters"
                    : filterBy === "price-low-high"
                    ? "Price: Low to High"
                    : filterBy === "price-high-low"
                    ? "Price: High to Low"
                    : "Rating"}
                </span>
              </DropdownButton>
              <DropdownContent isOpen={isDropdownOpen}>
                <DropdownItem onClick={() => handleFilterSelect("default")}>
                  Default
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("price-low-high")}
                >
                  Price: Low to High
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("price-high-low")}
                >
                  Price: High to Low
                </DropdownItem>
                <DropdownItem onClick={() => handleFilterSelect("rating")}>
                  Rating
                </DropdownItem>
              </DropdownContent>
            </CustomDropdown>
          </FilterGroup>
        </FilterSecOne>
        <FilterGroup>
          <FilterLabel>Category:</FilterLabel>
          <CustomDropdown ref={categoryRef}>
            <DropdownButton onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <span>
                {categoryFilter === "all" ? "All Categories" : categoryFilter}
              </span>
            </DropdownButton>
            <DropdownContent isOpen={isCategoryOpen}>
              {categories.map((category, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category === "all" ? "All Categories" : category}
                </DropdownItem>
              ))}
            </DropdownContent>
          </CustomDropdown>
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

const ProductsContainer = styled.div`
  padding: 1rem 2rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
`;

const FilterSecOne = styled.div`
  display: flex;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: start;
  padding: 0px 15px;
  border-radius: 10px;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
  margin-right: 8px;
`;

const FilterSelect = styled.select`
  padding: 12px;
  border: none;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${props => props.theme.text.secondary};
  font-size: 1.1rem;
`;

const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  width: 400px;
`;

const SearchInput = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.theme.border.light};
  border-radius: 10px;
  flex: 1;
  max-width: 400px;
`;

const SearchButton = styled.button`
  padding: 12px 1rem;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background.card};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }
`;

const CustomDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background: ${props => props.theme.background.card};
  border: 1px solid ${props => props.theme.border.light};
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.text.primary};

  &:hover {
    background: ${props => props.theme.background.tertiary};
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background: ${props => props.theme.background.card};
  border: 1px solid ${props => props.theme.border.light};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 5px;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.text.primary};

  &:hover {
    background: ${props => props.theme.background.tertiary};
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
