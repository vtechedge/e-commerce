import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronRight, FaShoppingCart, FaDotCircle } from "react-icons/fa";

function Breadcrumb() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  const generateBreadcrumbs = () => {
    const breadcrumbs = [{ label: "Home", href: "/" }];
    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      // Convert segment to readable format (e.g., "my-page" to "My Page")
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({
        label,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <FaDotCircle size={24} color="var(--primary-color)" />
        {breadcrumbItems.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index < breadcrumbItems.length - 1 ? (
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

const BreadcrumbContainer = styled.nav`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.background.secondary};
  border-bottom: 1px solid ${props => props.theme.border.light};
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

const BreadcrumbList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-family: "Inter", sans-serif;
`;

const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Inter", sans-serif;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: ${props => props.theme.text.tertiary};
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;

  &:hover {
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

const BreadcrumbText = styled.span`
  color: ${props => props.theme.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

const Separator = styled(FaChevronRight)`
  color: ${props => props.theme.text.tertiary};
  font-size: 1rem;
  margin: 0 0.5rem;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Inter", sans-serif;
`;

const UserLink = styled(Link)`
  color: ${props => props.theme.text.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;

  &:hover {
    color: ${props => props.theme.text.secondary};
  }
`;

const CartButton = styled.button`
  background-color: var(--primary-color);
  color: ${props => props.theme.background.card};
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
