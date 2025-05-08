import React from "react";
import styled from "styled-components";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Card = styled.div`
  width: 100%;
  max-width: 100%;
  height: 420px;
  border: 1px solid rgb(217, 207, 207);
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  overflow: hidden;

  /* &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  } */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0.3rem 0;
  text-align: left;
  width: 100%;
`;

const ProductHeading = styled.h3`
  font-size: 0.8rem;
  color: #666;
  margin: 0.2rem 0;
  text-align: left;
  width: 100%;
`;

const ProductPrice = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c2c2c;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0.5rem 0;
`;

const StarIcon = styled(FaStar)`
  color: #ffd700;
  font-size: 0.9rem;
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
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
        <ProductImage src={image} alt={name} />
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
            <span style={{ fontSize: "0.8rem", color: "#666" }}>
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
