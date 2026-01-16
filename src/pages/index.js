import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSlider from "../components/landing/HeroSlider";
import AboutSection from "../components/landing/AboutSection";

// Lazy load below-the-fold components
const Services = dynamic(() => import("../components/landing/Services"));
const Features = dynamic(() => import("../components/landing/Features"));
const MarqueeSection = dynamic(() => import("../components/landing/MarqueeSection"));
const ContactCTA = dynamic(() => import("@/components/landing/ContactCTA"));

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
