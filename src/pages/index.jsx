import Header from "@/components/Header";
import { MetaTags } from "@/features/MetaTags";

import Footer from "@/components/Footer";
import {
  AboutSection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  NewsletterSection,
  SponsorsSection,
  VisionMissionSection,
} from "@/features/landingPage";

const Page = () => {
  return (
    <>
      <MetaTags title="Home &mdash; MentorMeInTech" desc="MMIT Landing page" />

      <Header />

      <HeroSection />

      <AboutSection />

      <VisionMissionSection />

      <FeaturesSection />

      <SponsorsSection />

      <FAQSection />

      <NewsletterSection />

      <Footer />
    </>
  );
};

export default Page;
