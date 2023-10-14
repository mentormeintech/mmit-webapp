import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { MetaTags } from "./src/features/MetaTags";

import {
  AboutSection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  NewsletterSection,
  SponsorsSection,
  VisionMissionSection,
} from "./src/features/landingPage";

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
