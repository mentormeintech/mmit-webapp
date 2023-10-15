import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
import { MetaTags } from "./../features/MetaTags";

import {
  AboutSection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  NewsletterSection,
  SponsorsSection,
  VisionMissionSection,
} from "./../features/landingPage";

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
