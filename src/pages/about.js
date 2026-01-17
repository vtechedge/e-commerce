import React, { memo } from "react";
import Head from "next/head";
import {
  PageContainer,
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  Container,
  Section,
  SectionTitle,
  SectionSubtitle,
  ContentText,
  HighlightText,
  Grid,
  Card,
  CardTitle,
  CardDescription,
  ValuesGrid,
  ValueCard,
  ValueNumber,
  ValueTitle,
  ValueDescription,
  CTAButton,
  CTASection,
  IndustryList,
  IndustryItem,
  IndustryTitle,
  IndustryDescription,
} from "@/styles/AboutStyles";

// Memoized components for better performance
const CorePrincipleCard = memo(({ principle }) => (
  <Card>
    <CardTitle>{principle.title}</CardTitle>
    <CardDescription>{principle.description}</CardDescription>
  </Card>
));
CorePrincipleCard.displayName = 'CorePrincipleCard';

const WhyChooseUsCard = memo(({ reason }) => (
  <Card>
    <CardTitle>{reason.title}</CardTitle>
    <CardDescription>{reason.description}</CardDescription>
  </Card>
));
WhyChooseUsCard.displayName = 'WhyChooseUsCard';

const CoreValueCard = memo(({ value }) => (
  <ValueCard>
    <ValueNumber>{value.number}</ValueNumber>
    <ValueTitle>{value.title}</ValueTitle>
    <ValueDescription>{value.description}</ValueDescription>
  </ValueCard>
));
CoreValueCard.displayName = 'CoreValueCard';

const IndustryListItem = memo(({ industry }) => (
  <IndustryItem>
    <IndustryTitle>{industry.title}</IndustryTitle>
    <IndustryDescription>{industry.description}</IndustryDescription>
  </IndustryItem>
));
IndustryListItem.displayName = 'IndustryListItem';

const About = ({ corePrinciples, whyChooseUs, coreValues, industries }) => {
  return (
    <PageContainer>
      <Head>
        <title>About Us - Vtechsecure</title>
        <meta
          name="description"
          content="Learn about Vtechsecure - a full-spectrum managed IT services firm trusted across industries including healthcare, finance, government, and more."
        />
      </Head>

      <HeroSection>
        <HeroContainer>
          <HeroTitle>About Vtechsecure</HeroTitle>
          <HeroSubtitle>To make enterprise-grade technology accessible to every organization—without the burden of enterprise-level complexity.</HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <Section>
        <Container>
          <ContentText>
            Our journey began by supporting small clinics and pharmacies in enhancing and securing their IT infrastructure. What started as a focused initiative within the
            healthcare sector has since evolved into a full-spectrum managed IT services firm, trusted across industries including pharmaceuticals, finance, government,
            construction, and retail.
          </ContentText>
          <ContentText>
            While Vtechsecure officially separated from the VTech Group of Companies in 2021, our leadership and core team bring over 12 years of industry experience in delivering
            technology solutions with precision, reliability, and security. This foundation enables us to offer the deep expertise of an established provider with the agility of an
            independent firm.
          </ContentText>
        </Container>
      </Section>

      <Section bgColor="${props => props.theme.background.secondary}">
        <Container>
          <SectionTitle>Our Mission</SectionTitle>
          <HighlightText>
            To empower organizations through secure, scalable, and intelligent technology solutions that enhance operational efficiency, promote innovation, and support sustainable
            growth.
          </HighlightText>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Core Principles</SectionTitle>
          <ContentText style={{ textAlign: "center", marginBottom: "3rem" }}>
            Our continued growth and the trust of our clients are driven by the core principles upon which Vtechsecure was built:
          </ContentText>
          <Grid>
            {corePrinciples.map((principle, index) => (
              <CorePrincipleCard key={index} principle={principle} />
            ))}
          </Grid>
          <ContentText style={{ textAlign: "center", marginTop: "3rem", fontStyle: "italic" }}>
            At Vtechsecure, we do not merely deliver technology services—we forge enduring partnerships that drive digital transformation and business success.
          </ContentText>
        </Container>
      </Section>

      <Section bgColor="${props => props.theme.background.secondary}">
        <Container>
          <SectionTitle>Who We Serve</SectionTitle>
          <ContentText style={{ textAlign: "center", marginBottom: "3rem" }}>
            At Vtechsecure, we serve organizations that depend on reliable, secure, and industry-compliant technology to run their operations. Our clients range from small
            businesses to enterprise-level institutions across both the public and private sectors.
          </ContentText>
          <IndustryList>
            {industries.map((industry, index) => (
              <IndustryListItem key={index} industry={industry} />
            ))}
          </IndustryList>
          <ContentText style={{ textAlign: "center", marginTop: "3rem" }}>
            We understand the distinct needs of each sector and deliver tailored solutions that ensure operational continuity, data protection, and strategic growth.
          </ContentText>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Why Clients Choose Vtechsecure</SectionTitle>
          <ContentText style={{ textAlign: "center", marginBottom: "3rem" }}>
            At Vtechsecure, our clients choose us not only for our technical expertise but for the value we bring as a long-term strategic partner. We are committed to delivering
            secure, efficient, and forward-thinking IT solutions that align with our clients' goals—regardless of their industry or scale.
          </ContentText>
          <Grid>
            {whyChooseUs.map((reason, index) => (
              <WhyChooseUsCard key={index} reason={reason} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section bgColor="${props => props.theme.background.secondary}">
        <Container>
          <SectionTitle>Our Culture & Values</SectionTitle>
          <ContentText style={{ textAlign: "center", marginBottom: "3rem" }}>
            At Vtechsecure, our culture is grounded in professionalism, integrity, and a commitment to excellence. We believe that a strong internal foundation reflects directly in
            the quality of service we provide to our clients.
          </ContentText>
          <ValuesGrid>
            {coreValues.map((value, index) => (
              <CoreValueCard key={index} value={value} />
            ))}
          </ValuesGrid>
          <ContentText style={{ textAlign: "center", marginTop: "3rem" }}>
            Our people are our strength. We believe that nurturing talent, recognizing contributions, and supporting career growth lead to a motivated and high-performing team.
            This people-first approach directly translates into better service, deeper client relationships, and long-term success.
          </ContentText>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Looking Ahead</SectionTitle>
          <ContentText>
            As technology continues to evolve, so do the needs of the businesses we serve. At Vtechsecure, we are committed to staying ahead of the curve—adapting, innovating, and
            expanding our capabilities to meet tomorrow's challenges with confidence and clarity.
          </ContentText>
          <SectionSubtitle>Our future vision is built on three guiding pillars:</SectionSubtitle>
          <Grid>
            <Card>
              <CardTitle>Continuous Innovation</CardTitle>
              <CardDescription>
                We are investing in next-generation technologies—including AI integration, advanced threat detection, and cloud-native architectures—to ensure our clients remain
                secure, agile, and competitive.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Scalable Growth, Sustainable Impact</CardTitle>
              <CardDescription>
                As we expand our reach across new regions and industries, we remain focused on delivering scalable, responsible solutions that drive long-term value for our clients
                and communities.
              </CardDescription>
            </Card>
          </Grid>
          <Card style={{ marginTop: "2rem" }}>
            <CardTitle>Deeper Partnerships</CardTitle>
            <CardDescription>
              We're evolving from service providers to strategic technology partners—helping our clients navigate digital transformation, manage risk, and unlock new business
              opportunities through IT.
            </CardDescription>
          </Card>
          <HighlightText style={{ marginTop: "3rem" }}>
            Looking ahead, our mission remains clear: To deliver reliable, secure, and future-ready technology solutions that empower organizations to grow with confidence in an
            increasingly complex digital world.
          </HighlightText>
        </Container>
      </Section>

      <Section bgColor="${props => props.theme.background.secondary}">
        <Container>
          <SectionTitle>Let's Move Your IT Forward — Together</SectionTitle>
          <ContentText style={{ textAlign: "center", marginBottom: "3rem" }}>Ready to partner with a team that understands your industry and delivers on its promise?</ContentText>
          <CTASection>
            <CTAButton>Book a Free Discovery Call</CTAButton>
            <CTAButton>Contact Our Experts</CTAButton>
          </CTASection>
        </Container>
      </Section>
    </PageContainer>
  );
};

// Static Site Generation - pre-render at build time for instant loads
export async function getStaticProps() {
  // Move data to getStaticProps for static generation
  const corePrinciples = [
    {
      title: "Responsiveness",
      description: "We provide prompt and proactive support, ensuring uninterrupted operations and swift resolution of issues.",
    },
    {
      title: "Accountability",
      description: "We take full responsibility for the solutions we deliver and are committed to achieving measurable outcomes.",
    },
    {
      title: "Technical Excellence",
      description: "We maintain the highest standards of technical proficiency through continuous learning, certification, and innovation.",
    },
    {
      title: "Partnership Over Transactions",
      description: "We prioritize long-term strategic relationships, grounded in mutual trust and aligned objectives.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Industry-Focused Expertise",
      description:
        "With over 12 years of experience, we understand the specific compliance, security, and operational demands of industries such as healthcare, finance, government, and manufacturing.",
    },
    {
      title: "Security-First Approach",
      description:
        "In every service we provide, cybersecurity is foundational. From infrastructure to cloud deployments, we prioritize data protection, risk mitigation, and compliance.",
    },
    {
      title: "End-to-End IT Solutions",
      description: "We offer a comprehensive suite of managed services—from consulting and infrastructure design to ongoing support and digital development.",
    },
    {
      title: "Responsiveness & Accountability",
      description: "Our clients value our quick response times, transparent communication, and commitment to delivering measurable results.",
    },
    {
      title: "Scalable & Future-Ready Systems",
      description: "We design IT environments that not only meet current needs but also adapt seamlessly to future growth and technological shifts.",
    },
    {
      title: "Trusted Partnerships, Not Transactions",
      description: "At Vtechsecure, we invest in long-term relationships. We act as an extension of your team—proactive, reliable, and aligned with your mission.",
    },
  ];

  const coreValues = [
    {
      number: "1",
      title: "Integrity in Action",
      description: "We uphold the highest standards of honesty, ethics, and transparency in every decision and interaction.",
    },
    {
      number: "2",
      title: "Client-Centric Focus",
      description: "We are committed to understanding our clients' goals and delivering solutions that drive long-term value and success.",
    },
    {
      number: "3",
      title: "Technical Excellence",
      description: "We continuously invest in knowledge, training, and innovation to maintain industry-leading capabilities across all service areas.",
    },
    {
      number: "4",
      title: "Accountability & Ownership",
      description: "We take responsibility for our actions and outcomes—ensuring reliability, trust, and consistent performance.",
    },
    {
      number: "5",
      title: "Respect & Collaboration",
      description: "We promote a respectful, inclusive, and team-oriented culture that values diverse perspectives and open communication.",
    },
    {
      number: "6",
      title: "Purpose-Driven Innovation",
      description: "We embrace change and pursue innovation that delivers practical, measurable results for our clients and partners.",
    },
  ];

  const industries = [
    {
      title: "Healthcare Providers & Pharmacies",
      description: "Including clinics, hospitals, and pharmaceutical manufacturers requiring HIPAA-compliant IT systems, data security, and 24/7 support.",
    },
    {
      title: "Financial Institutions & Insurance Firms",
      description: "Businesses that demand secure infrastructure, data integrity, and compliance with financial regulations.",
    },
    {
      title: "Government & Public Sector Entities",
      description: "Agencies that rely on stable networks, cybersecurity, and surveillance technologies for public operations.",
    },
    {
      title: "Retail, E-Commerce & Hospitality",
      description: "Customer-centric businesses that need integrated IT systems, transaction security, and scalable cloud solutions.",
    },
    {
      title: "Construction & Manufacturing Companies",
      description: "Field operations and production environments requiring real-time connectivity, device management, and resilient IT setups.",
    },
    {
      title: "Esports, Media & Digital Enterprises",
      description: "High-performance and uptime-critical industries focused on digital delivery and collaboration tools.",
    },
    {
      title: "Small & Medium-Sized Businesses (SMBs)",
      description: "Organizations seeking enterprise-level IT capabilities without the overhead, through managed, cost-effective services.",
    },
  ];

  return {
    props: {
      corePrinciples,
      whyChooseUs,
      coreValues,
      industries,
    },
    // Revalidate every 24 hours (ISR - Incremental Static Regeneration)
    revalidate: 86400,
  };
}

export default memo(About);
