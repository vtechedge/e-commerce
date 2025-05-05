import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Geist } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeaderContainer = styled.header`
  background-color: rgb(186, 40, 40);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 4rem;
  /* position: sticky;
  top: 0; */
  /* z-index: 1000; */
  font-family: ${geist.style.fontFamily};
`;

const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    color: var(--primary-hover);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--primary-color);
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LoginButton = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: var(--primary-color);
  }
`;

const CartButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  top: 100%;
  left: 0;
`;

const DropdownItem = styled(Link)`
  color: #333;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: rgba(40, 95, 235, 0.05);
    color: var(--primary-color);
  }
`;

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">ShopName</Logo>
        <NavLinks>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/categories">Categories</NavLink>
          <NavLink href="/about">About</NavLink>
          <DropdownContainer>
            <NavLink
              href="/category"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Category <FaChevronDown size={12} />
            </NavLink>
            <DropdownContent $isOpen={isDropdownOpen}>
              <DropdownItem href="/category/electronics">
                Electronics
              </DropdownItem>
              <DropdownItem href="/category/clothing">Clothing</DropdownItem>
              <DropdownItem href="/category/books">Books</DropdownItem>
              <DropdownItem href="/category/home">Home & Garden</DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </NavLinks>
        <RightSection>
          <LoginButton href="/login">Login |</LoginButton>
          <CartButton>Cart (0)</CartButton>
        </RightSection>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
