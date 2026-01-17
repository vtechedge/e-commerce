import React from "react";
import styled from "styled-components";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Card = styled.div`
  width: 100%;
  max-width: 100%;
  height: 420px;
  border: 1px solid ${props => props.theme.border.light};
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  overflow: hidden;

  /* &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  } */
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const ProductName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.text.primary};
  margin: 0.3rem 0;
  text-align: left;
  width: 100%;
`;

const ProductHeading = styled.h3`
  font-size: 0.8rem;
  color: ${props => props.theme.text.secondary};
  margin: 0.2rem 0;
  text-align: left;
  width: 100%;
`;

const ProductPrice = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${props => props.theme.text.primary};
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0.5rem 0;
`;

const StarIcon = styled(FaStar)`
  color: #ffd700; /* Gold for star ratings - intentional */
  font-size: 0.9rem;
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

const ProductDataComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

function ProductCard({ product }) {
  const { id, name, heading, price, image, rating } = product;

  return (
    <Card>
      <ProductLink href={`/product/${id}`}>
        <ProductImageWrapper>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </ProductImageWrapper>
        <ProductDataComponent>
          <ProductName>{name}</ProductName>
          <ProductHeading>{heading}</ProductHeading>
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                style={{ opacity: i < Math.floor(rating) ? 1 : 0.3 }}
              />
            ))}
            <span style={{ fontSize: "0.8rem", color: "${props => props.theme.text.secondary}" }}>
              ({rating})
            </span>
          </RatingContainer>
          <ProductPrice>{price}</ProductPrice>
          <AddToCartButton>
            <FaShoppingCart /> Add to Cart
          </AddToCartButton>
        </ProductDataComponent>
      </ProductLink>
    </Card>
  );
}

export default ProductCard;
