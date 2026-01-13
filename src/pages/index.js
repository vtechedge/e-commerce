import React from "react";
import Head from "next/head";
import styled from "styled-components";
import HeroSlider from "../components/landing/HeroSlider";
import Services from "../components/landing/Services";
import Features from "../components/landing/Features";
import AboutSection from "../components/landing/AboutSection";
import CardSection from "../components/landing/CardSection";
import MarqueeSection from "../components/landing/MarqueeSection";
import ContactCTA from "@/components/landing/ContactCTA";

const Home = () => {
  return (
    <>
      <Head>
        <title>IT Solutions Provider</title>
        <meta name="description" content="Your trusted IT solutions partner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSlider />
      <AboutSection />
      <Services />
      <MarqueeSection />
      {/* <CardSection /> */}
      <Features />
      <ContactCTA />
    </>
  );
};

export default Home;
