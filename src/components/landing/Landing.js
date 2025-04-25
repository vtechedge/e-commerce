import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Breadcrumb from "@/components/common/Breadcrumb";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* font-family: "Arial", sans-serif; */
  padding: 1rem 0rem;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 1.5rem 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const SortDropdown = styled.select`
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const ProductGrid = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  height: 420px;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: transform 0.2s;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
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
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const BannerSlider = styled.div`
  position: relative;
  overflow: hidden;
  margin: 1.5rem 2rem 0 2rem;
`;

const BannerTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const BannerSlide = styled.div`
  min-width: 100%;
  background-color: #ffecec;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
`;

const BannerTitle = styled.h2`
  font-size: 1.5rem;
  color: #d80000;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const BuyNowButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.active ? "#ff4d4d" : "#ddd")};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const products = [
  {
    name: "USB-C Display Adapter",
    heading: "High-Speed Display Connection",
    price: "$30",
    image: "/products/1.jpg",
    rating: 4.5,
  },
  {
    name: "Thunderbolt Dock",
    heading: "Professional Docking Station",
    price: "$59",
    image: "/products/2.jpg",
    rating: 2.8,
  },
  {
    name: "HDMI Splitter",
    heading: "Multi-Display Solution",
    price: "$40",
    image: "/products/3.jpg",
    rating: 4.2,
  },
  {
    name: "Eden Comfort Seat",
    heading: "Ergonomic Office Chair",
    price: "$60",
    image: "/products/4.jpg",
    rating: 4.7,
  },
  {
    name: "Crestwood Chair",
    heading: "Modern Dining Chair",
    price: "$59",
    image: "/products/5.jpg",
    rating: 4.4,
  },
  {
    name: "Dining Chair With Arms",
    heading: "Classic Dining Room Chair",
    price: "$45",
    image: "/products/1.jpg",
    rating: 4.3,
  },
];

const bannerSlides = [
  {
    title: "Grab upto 50% Off On Selected headphone",
    buttonText: "Buy Now",
  },
  {
    title: "Special Offer: Free Shipping on Orders Over $100",
    buttonText: "Shop Now",
  },
  {
    title: "New Arrivals: Check Out Our Latest Products",
    buttonText: "Explore",
  },
];

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const breadcrumbItems = [{ label: "Home", href: "/" }];

  return (
    <Container>
      <Main>
        <Breadcrumb items={breadcrumbItems} />
        <BannerSlider>
          <BannerTrack style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {bannerSlides.map((slide, index) => (
              <BannerSlide key={index}>
                <BannerTitle>{slide.title}</BannerTitle>
                <BuyNowButton>{slide.buttonText}</BuyNowButton>
              </BannerSlide>
            ))}
          </BannerTrack>
          <SliderDots>
            {bannerSlides.map((_, index) => (
              <Dot key={index} active={currentSlide === index} onClick={() => goToSlide(index)} />
            ))}
          </SliderDots>
        </BannerSlider>

        <Header>
          <Title>Our Product</Title>
          <SortDropdown>
            <option>Adjust By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </SortDropdown>
        </Header>

        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductHeading>{product.heading}</ProductHeading>
              <RatingContainer>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} style={{ opacity: i < Math.floor(product.rating) ? 1 : 0.3 }} />
                ))}
                <span style={{ fontSize: "0.8rem", color: "#666" }}>({product.rating})</span>
              </RatingContainer>
              <ProductPrice>{product.price}</ProductPrice>
              <AddToCartButton>
                <FaShoppingCart /> Add to Cart
              </AddToCartButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </Main>
    </Container>
  );
}

export default Landing;
