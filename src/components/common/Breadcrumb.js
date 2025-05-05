import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronRight, FaShoppingCart } from "react-icons/fa";

const BreadcrumbContainer = styled.nav`
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

const BreadcrumbList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Inter", sans-serif;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #6c757d;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;

  &:hover {
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

const BreadcrumbText = styled.span`
  color: #212529;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

const Separator = styled(FaChevronRight)`
  color: #6c757d;
  font-size: 0.7rem;
  margin: 0 0.5rem;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Inter", sans-serif;
`;

const UserLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;

  &:hover {
    color: #666;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

function Breadcrumb({ items }) {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index < items.length - 1 ? (
              <>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                <Separator />
              </>
            ) : (
              <BreadcrumbText>{item.label}</BreadcrumbText>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
      <UserActions>
        <UserLink href="/login">Login</UserLink>
        <UserLink href="/register">Register</UserLink>
        <CartButton>
          <FaShoppingCart /> Cart (0)
        </CartButton>
      </UserActions>
    </BreadcrumbContainer>
  );
}

export default Breadcrumb;
